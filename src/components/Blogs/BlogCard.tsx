import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Blog } from '../../firebase/interface';

interface BlogCardProps {
    blog: Blog;
    isAdmin?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, isAdmin = false }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/blog/show/${blog.id}`);
    };

    return (
        <div className="col-md-4">
            <div className="card mb-4 box-shadow">
                <img
                    className="card-img-top"
                    src={blog.image || 'https://via.placeholder.com/200'}
                    alt="Blog Thumbnail"
                />
                <div className="card-body">
                    <p className="card-text">
                        {blog.summary}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                                onClick={handleClick}
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
                    <p className="blog-post-meta">
                        {typeof(blog.dop)} by <a href="#">{blog.author}</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;