import React from "react";
import { Blog } from '../../firebase/interface'; // Import Blog interface (adjust path as needed)

interface BlogCardProps {
    blog: Blog; 
    isAdmin?: boolean; 
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, isAdmin = false }) => {
    return (
        <div className="col-md-4">
            <div className="card mb-4 box-shadow">
                <img
                    className="card-img-top"
                    src={blog.image || "https://via.placeholder.com/200"}
                    alt="Blog Thumbnail"
                />
                <small className="text-muted">By {blog.author || "Anonymous"}</small>
                <div className="card-body">
                    <p className="card-text">
                        {blog.content}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                            >
                                View
                            </button>
                            {isAdmin && (
                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-secondary"
                                >
                                    Edit
                                </button>
                            )}
                        </div>
                        <small className="text-muted">{blog.category}</small>
                        <small className="text-muted">9 mins</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
