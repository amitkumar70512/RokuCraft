import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Blog } from '../../firebase/interface';
import { getBlogById } from '../../firebase/blogs'; // Adjust import path as needed

const IndividualBlog: React.FC = () => {
    const { blogId } = useParams<{ blogId: string }>();
    const [blogData, setBlogData] = useState<Blog | null>(null); // State to hold blog data
    const [loading, setLoading] = useState<boolean>(true); // State to manage loading state
    const [publicationDate,setPublicationDate] = useState<String>('');

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                if (blogId !== undefined) {
                    const blog = await getBlogById(blogId);
                    if (blog?.date_of_publication) {
                        const dateObj = new Date(blog.date_of_publication);
                        if (!isNaN(dateObj.getTime())) {
                            setPublicationDate( dateObj.toLocaleDateString());
                        }
                    }
                    if(blogId)
                        localStorage.setItem('blogId', blogId);
                    setBlogData(blog);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching blog:', error);
                setLoading(false);
            }
        };

        fetchBlog(); // Call fetchBlog when component mounts or blogId changes

    }, [blogId]);

    const calculateReadingTime = (content: string): number => {
        // Assuming average reading speed of 200 words per minute
        const wordsPerMinute = 200;
        const words = content.split(/\s+/).length;
        const minutes = words / wordsPerMinute;
        return Math.ceil(minutes); // Round up to nearest whole number
    };

    
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
                                    Written by <a href="#">{blogData.author}</a> | {calculateReadingTime(blogData.content)} min read
                                </p>
                                <p className="blog-post-meta">
                                    Published on: {publicationDate}
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