import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import { Blog } from '../../firebase/interface';
import { getAllBlogs } from '../../firebase/blogs';

export default function Blogs() {
    const [blogData, setBlogData] = useState<Blog[]>([]); // State to hold blog data
    const [loading, setLoading] = useState<boolean>(true); // State to manage loading state

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const data = await getAllBlogs();
                setBlogData(data); // Update state with fetched data
                setLoading(false);
            } catch (error) {
                console.error('Error fetching blogs:', error);
                setLoading(false);
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
                        {!loading && blogData && blogData.map((blog) => (
                            <BlogCard blog={blog} key={blog.blogId} />
                        ))}
                        {
                            loading && !blogData &&
                            <div className="spinner-border text-secondary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        }
                        {
                            !blogData && !loading &&
                            <div className="alert alert-danger" role="alert">
                                Blog Content Not Found
                            </div>
                        }
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
