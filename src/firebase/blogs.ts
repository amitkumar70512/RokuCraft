import { db } from "./firebase";
import {
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
  DocumentData,
} from "firebase/firestore";
import { Blog } from "./interface";
import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  limit,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid"; // Import uuidv4 to generate random IDs

// Function to get all blogs
export async function getAllBlogs(): Promise<Blog[]> {
  try {
    const blogsCol = collection(db, "blogs");
    const snapshot = await getDocs(blogsCol);

    if (snapshot.empty) {
      return [];
    }

    const blogs: Blog[] = [];
    snapshot.forEach((doc) => {
      blogs.push({
        ...doc.data(),
      } as Blog);
    });

    return blogs;
  } catch (error) {
    console.error("Error fetching all blogs:", error);
    throw error;
  }
}

// Function to get filtered blogs
export async function getFilteredBlogs(
  filters: Partial<Blog>,
  limitValue?: number
): Promise<Blog[]> {
  try {
    let blogsRef = collection(db, "blogs");

    // can we replace any return type??
    if (filters.blogId) {
      blogsRef = query(blogsRef, where("blogId", "==", filters.blogId)) as any;
    }

    if (filters.author) {
      blogsRef = query(blogsRef, where("author", "==", filters.author)) as any;
    }

    if (filters.isPremium !== undefined) {
      blogsRef = query(
        blogsRef,
        where("isPremium", "==", filters.isPremium)
      ) as any;
    }

    if (filters.category !== undefined) {
      blogsRef = query(
        blogsRef,
        where("category", "array-contains-any", filters.category)
      ) as any;
    }
    if (limitValue !== undefined) {
      blogsRef = query(blogsRef, limit(limitValue)) as any;
    }

    const snapshot = await getDocs(blogsRef);

    if (snapshot.empty) {
      return [];
    }

    let blogs: Blog[] = [];
    snapshot.forEach((doc) => {
      blogs.push({
        ...doc.data(),
      } as Blog);
    });

    if (filters.title) {
      const nameLower = filters.title.toLowerCase();
      blogs = blogs.filter((blog) => {
        const blogTitleLower = blog.title.toLowerCase();
        return blogTitleLower.includes(nameLower);
      });
    }

    // This will match blogs where at least one category in filters.category array matches
    if (filters.category && filters.category.length > 0) {
      blogs = blogs.filter((blog) => {
        const blogCategories = blog.category.map((category) =>
          category.toLowerCase()
        );
        return filters.category?.every((filterCategory) =>
          blogCategories.includes(filterCategory.toLowerCase())
        );
      });
    }

    console.log("firebase:: getFiltered " + blogs);
    return blogs;
  } catch (error) {
    console.error("Error fetching filtered blogs:", error);
    throw error;
  }
}

export async function getBlogById(blogId: string): Promise<Blog | null> {
  try {
    const blogsRef = collection(db, "blogs");
    const q = query(blogsRef, where("blogId", "==", blogId));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("No matching documents.");
      return null;
    }

    const doc = querySnapshot.docs[0];
    const blogData = doc.data();

    // Assuming Blog interface has properties matching the Firestore document fields
    const blog: Blog = {
      blogId: blogData.blogId,
      title: blogData.title,
      author: blogData.author,
      image: blogData.image,
      content: blogData.content,
      summary: blogData.summary,
      category: blogData.category,
      date_of_modification: blogData.date_of_modification,
      date_of_publication: blogData.date_of_publication,
      isPremium: blogData.isPremium,
      coins: blogData.coins,
    };

    return blog;
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw error;
  }
}

// Function to add a new blog with default values
export async function addBlog(blogData: Partial<Blog>): Promise<string> {
  try {
    // Omit 'coins', 'doe', 'dop' from Blog interface
    type DefaultBlogData = Omit<
      Blog,
      "coins" | "date_of_publication" | "date_of_modification"
    >;
    // Default values
    const defaultBlogData: DefaultBlogData = {
      blogId: uuidv4(),
      title: "UNKNOWN",
      author: "Anonymous",
      image: "",
      content: "",
      summary: "A short Description about blog",
      category: [],
      isPremium: false,
    };

    // Merge input data with default values
    const mergedBlogData: Blog = {
      ...defaultBlogData,
      ...blogData,
      date_of_modification:
        blogData.date_of_modification || new Date().toISOString(), // Use current date in ISO string format if not provided
      date_of_publication:
        blogData.date_of_publication || new Date().toISOString(), // Use current date in ISO string format if not provided
      coins: blogData.coins || 0, // Default to 0 if not provided
    };

    // Add blog to Firestore
    const blogsCollection = collection(db, "blogs");

    const newBlogRef = await addDoc(blogsCollection, {
      ...mergedBlogData,
    });

    console.log("New blog added with ID:", newBlogRef.id);
    return newBlogRef.id;
  } catch (error) {
    console.error("Error adding blog:", error);
    throw error;
  }
}

interface responseType {
  isSuccess: boolean;
  blogId?: string; // Optional since blogId might not be used in all cases
  errorMessage?: string;
}

// Function to delete a blog by its internal ID field and return success status
export async function deleteBlogById(blogId: string): Promise<responseType> {
  const response: responseType = {
    isSuccess: false,
    blogId: blogId,
  };
  try {
    // Query the 'blogs' collection to find the document where 'id' field matches 'blogId'
    const blogsRef = collection(db, "blogs");
    const q = query(blogsRef, where("id", "==", blogId));
    const querySnapshot = await getDocs(q);

    // Check if there is a matching document
    if (querySnapshot.empty) {
      console.log(`Blog with ID ${blogId} does not exist.`);
      response.isSuccess = false; // false if no matching document found
      return response;
    }

    // Assuming there's only one matching document, delete it
    const docToDelete = querySnapshot.docs[0];
    await deleteDoc(docToDelete.ref);
    console.log(`Blog with ID ${blogId} deleted successfully.`);
    response.isSuccess = true;
    return response;
  } catch (error) {
    console.error("Error deleting blog:", error);
    response.isSuccess = false;
    return response;
  }
}

// Function to edit an existing blog by ID and return success status
export async function editBlogById(
  id: string,
  updatedData: Partial<Blog>
): Promise<responseType> {
  const response: responseType = {
    isSuccess: false,
  };

  try {
    const blogRef = doc(db, "blogs", id);
    const blogDoc = await getDoc(blogRef);

    if (!blogDoc.exists()) {
      response.errorMessage = `Blog with ID ${id} does not exist.`;
      return response;
    }

    const currentData = blogDoc.data() as Blog;
    const newData: DocumentData = {
      ...currentData,
      ...updatedData,
    };

    await updateDoc(blogRef, newData);
    console.log(`Blog with ID ${id} updated successfully.`);
    response.isSuccess = true;
    return response;
  } catch (error) {
    console.error("Error updating blog:", error);
    response.errorMessage = `Error updating blog: ${error}`;
    return response;
  }
}
