import { getAllBlogs, getFilteredBlogs, addBlog } from './firebase/blogs'; // Adjust the path as per your project structure

async function main() {
    try {
        // Example usage of Firestore functions
        const allBlogs = await getAllBlogs();
        console.log('All Blogs:', allBlogs);

        // const filters = {
        //     author: 'amit',
        //     isPremium: true
        // };
        const filters = {
            premium: false
        };
        const filteredBlogs = await getFilteredBlogs(filters);
        console.log('Filtered Blogs:', filteredBlogs);



        // Example data to add a new blog
        const newBlogData = {
            author: 'Shivanand P',
            date: new Date(), // Assuming current date/time
            image: 'https://unsplash.com/photos/a-desktop-computer-monitor-sitting-on-top-of-a-wooden-desk-xsBoFvvsnKQ',
            content: 'Lorem ipsum dolor sit amet...',
            isPremium: false,
            keywords: ['bi', 'smart']
        };

        const newBlogId = await addBlog(newBlogData);
        console.log('New Blog ID:', newBlogId);

    } catch (error) {
        console.error('Error:', error);
    }
}

// Run the main function
main();
