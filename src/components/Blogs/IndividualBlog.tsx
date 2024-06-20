import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Blog } from '../../firebase/interface';
import { getBlogById } from '../../firebase/blogs'; // Adjust import path as needed

const IndividualBlog: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    // const { id } = useParams<RouteParams>();
    const [blogData, setBlogData] = useState<Blog | null>(null); // State to hold blog data
    const [loading, setLoading] = useState<boolean>(true); // State to manage loading state

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                if (id !== undefined) {
                    const blog = await getBlogById(id);

                    setBlogData(blog);
                    console.log('individual blog: ' + blog);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching blog:', error);
                setLoading(false);
            }
        };

        fetchBlog(); // Call fetchBlog when component mounts or id changes

    }, []);

    return (
        <div className="container-fluid pt-5">
            <main role="main" className="container">
                <div className="row">
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                        {
                            !loading && blogData &&
                            <div className="col-md-8 blog-main">
                                <div className="blog-post">
                                    <h2 className="blog-post-title">{blogData.title}</h2>
                                    <ReactMarkdown>{blogData.content}</ReactMarkdown>
                                </div>
                                <p className="blog-post-meta">
                                    Written by <a href="#">{blogData.author}</a>
                                </p>
                            </div>
                        }
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
                    </main>
                    <Sidebar />
                </div>
            </main>
        </div>
    );
};

export default IndividualBlog;
