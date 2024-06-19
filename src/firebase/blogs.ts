
import { db } from './firebase';
import { Blog } from './interface';
import { collection, getDocs, query, where, addDoc, Timestamp } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 to generate random IDs

// Function to get all blogs
export async function getAllBlogs(): Promise<Blog[]> {
  try {
    const blogsCol = collection(db, 'blogs');
    const snapshot = await getDocs(blogsCol);

    if (snapshot.empty) {
      return [];
    }

    const blogs: Blog[] = [];
    snapshot.forEach(doc => {
      blogs.push({
        ...doc.data(),
      } as Blog);
    });

    return blogs;
  } catch (error) {
    console.error('Error fetching all blogs:', error);
    throw error;
  }
}

// Function to get filtered blogs
export async function getFilteredBlogs(filters: Partial<Blog>): Promise<Blog[]> {
  try {
    let blogsRef = collection(db, 'blogs');

    // Apply filters if provided
    if (filters.id) {
      blogsRef = query(blogsRef, where('id', '==', filters.id)) as any;
    }

    // if (filters.title) {
    //     blogsRef = query(blogsRef, where('title', '==', filters.title)) as any;
    // }

    if (filters.author) {
      blogsRef = query(blogsRef, where('author', '==', filters.author)) as any;
    }
    if (filters.premium !== undefined) {
      blogsRef = query(blogsRef, where('premium', '==', filters.premium)) as any;
    }

    if (filters.category !== undefined) {
      blogsRef = query(blogsRef, where('category', 'array-contains-any', filters.category)) as any;
    }
    // Add more filters as needed

    const snapshot = await getDocs(blogsRef);

    if (snapshot.empty) {
      return [];
    }

    let blogs: Blog[] = [];
    snapshot.forEach(doc => {
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

    // console.log("firebase:: "+blogs);
    return blogs;
  } catch (error) {
    console.error('Error fetching filtered blogs:', error);
    throw error;
  }
}

// Function to add a new blog with default values
export async function addBlog(blogData: Partial<Blog>): Promise<string> {
  try {
    // Omit 'coins', 'doe', 'dop' from Blog interface
type DefaultBlogData = Omit<Blog, 'coins' | 'doe' | 'dop'>;
// Default values
const defaultBlogData: DefaultBlogData = {
  id: uuidv4(),
  title: 'UNKNOWN',
  author: 'Anonymous',
  image: '',
  content: '',
  summary: '',
  category: [],
  premium: false,
};

// Merge input data with default values
const mergedBlogData: Blog = {
  ...defaultBlogData,
  ...blogData,
  doe: blogData.doe || new Date(), // Use current date if not provided
  dop: blogData.dop || new Date(), // Use current date if not provided
  coins: blogData.coins || 0, // Default to 0 if not provided
};

// Add blog to Firestore
const blogsCollection = collection(db, 'blogs');
const timestamp = Timestamp.now(); // Current timestamp

const newBlogRef = await addDoc(blogsCollection, {
  ...mergedBlogData,
  doe: timestamp, // Firestore timestamp for date of entry
  dop: timestamp, // Firestore timestamp for date of publication
});

console.log('New blog added with ID:', newBlogRef.id);
return newBlogRef.id;
  } catch (error) {
    console.error('Error adding blog:', error);
    throw error;
  }
}
