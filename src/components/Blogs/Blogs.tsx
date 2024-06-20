import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import { Blog } from '../../firebase/interface';
import { getAllBlogs } from '../../firebase/blogs';

export default function Blogs() {
    const [blogData, setBlogData] = useState<Blog[]>([]); // State to hold blog data

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const data = await getAllBlogs();
                setBlogData(data); // Update state with fetched data
                console.log(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
                // Handle error (e.g., show error message)
            }
        };

        fetchBlogs(); // Call fetchBlogs when component mounts
    }, []); //  effect runs once on mount

    return (
        <>
            {/* Render blogs */}
            <div className="album py-5 bg-light">
                <div className="container">
                    {/* Render BlogCard components dynamically */}
                    <div className="row">
                        {blogData.map((blog) => (
                            <BlogCard blog={blog} key={blog.id} />
                        ))}
                    </div>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <a className="page-link">Previous</a>
                            </li>
                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}
