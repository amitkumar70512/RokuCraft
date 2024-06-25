import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Blog } from '../../firebase/interface';
import ConfirmationDialog from '../Dialog/ConfirmationDialog'; // Adjust the path as needed

interface BlogCardProps {
    blog: Blog;
    isAdmin?: boolean;
    onDelete?: (blogId: string) => void; // Callback function for delete action
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, isAdmin = false, onDelete }) => {
    const navigate = useNavigate();

    const [showConfirmation, setShowConfirmation] = useState(false);

    const calculateReadingTime = (content: string): number => {
        // Assuming average reading speed of 200 words per minute
        const wordsPerMinute = 200;
        const words = content.split(/\s+/).length;
        const minutes = words / wordsPerMinute;
        return Math.ceil(minutes); // Round up to nearest whole number
    };

    const handleClick = () => {
        navigate(`/blog/show/${blog.blogId}`);
        console.log(`Viewing blog ${blog.blogId}`);
    };

    const handleDeleteClick = () => {
        setShowConfirmation(true);
    };

    const handleCancelDelete = () => {
        setShowConfirmation(false);
    };



    return (
        <div className="col-md-4 mb-4">
            <div className="card mb-4 box-shadow" style={{ height: '100%' }}>
                <a href="#" onClick={handleClick} style={{ display: 'block', height: '70%' }}>
                    <img
                        className="card-img-top"
                        src={blog.image || 'https://via.placeholder.com/200'}
                        alt="Blog Thumbnail"
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                </a>
                <div className="card-body d-flex flex-column">
                    <div>
                        <h5 className="card-title mt-2">{blog.title}</h5>
                        <p className="card-text opacity-60 mb-3">{blog.summary}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                        <div>
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary me-2"
                                onClick={handleClick}
                            >
                                View
                            </button>
                            {isAdmin && (
                                <>
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-outline-secondary me-2"
                                        onClick={() => console.log(`Editing blog ${blog.blogId}`)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-outline-secondary"
                                        onClick={handleDeleteClick}
                                    >
                                        Delete
                                    </button>
                                    <ConfirmationDialog
                                        id={blog.blogId}
                                        show={showConfirmation}
                                        title="Confirmation"
                                        message={`Enter 'secret' to confirm delete:`}
                                        onCancel={handleCancelDelete}
                                    />
                                </>
                            )}
                        </div>
                        <div className="text-muted">
                            <p className="mb-1">by {blog.author}</p>
                            <p>{calculateReadingTime(blog.content)} mins read</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;