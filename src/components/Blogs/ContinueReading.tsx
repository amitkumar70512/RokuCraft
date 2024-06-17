import { getFilteredBlogs } from '../../firebase/blogs';
import React, { useEffect } from 'react'

export default function ContinueReading() {

    useEffect(() => {
        const fetchFilteredBlog = async () => {
            try {
                const blogId = await localStorage.getItem("blogId")||"";
                console.log("shiv     "+blogId);
                const data = await getFilteredBlogs({
                    // id: blogId,
                    author: "amit",
                });
                
				console.log("shiv     "+ data[0]);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        }

        fetchFilteredBlog();
    }, []);


    return (
        <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
            <div className="col-md-6 px-0">
                <h1 className="display-4 font-italic">Title of a longer featured blog post</h1>
                <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
                <p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a></p>
            </div>
        </div>
    )
}
