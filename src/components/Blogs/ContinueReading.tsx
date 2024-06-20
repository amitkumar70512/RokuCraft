import { getFilteredBlogs } from '../../firebase/blogs';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Blog } from '../../firebase/interface';

export default function ContinueReading() {
    const [Blog, setBlogs] = useState<Blog | undefined>();

    useEffect(() => {
        const fetchFilteredBlog = async () => {
            try {
                const blogId = await localStorage.getItem('blogId') || null;
                if (blogId != null) {
                    const Blog = await getFilteredBlogs({
                        id: blogId,
                    });
                    setBlogs(Blog.at(0));
                }

            } catch (error) {
                console.error('Error fetching Blog:', error);
            }
        };
        fetchFilteredBlog();
    }, []);


    return (
        <>
            {Blog && (
                <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                    <div className="col-md-6 px-0">
                        <h1 className="display-4 font-italic">{Blog.title}</h1>
                        <p className="lead my-3">{Blog.summary}</p>
                        <ReactMarkdown>{Blog.content}</ReactMarkdown>
                        <p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a></p>
                    </div>
                </div>)}
        </>
    );
}
