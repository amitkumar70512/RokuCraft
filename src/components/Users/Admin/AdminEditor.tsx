import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles for react-quill
import { addBlog } from '../../../firebase/blogs'; // Replace with actual path to your blogService
import { Blog } from '../../../firebase/interface'; // Replace with actual path to your Blog interface
import UploadImage from '../../../components/Common/UploadImage/UploadImage';

interface AdminEditorProps {
    onAddSuccess: () => void;
}

const AdminEditor: React.FC<AdminEditorProps> = ({ onAddSuccess }) => {

    const initialBlogData: Partial<Blog> = {
        title: '',
        author: '',
        image: '',
        content: '',
        summary: '',
        category: [],
        isPremium: false,
        date_of_publication: new Date().toISOString(), // Date of publication
    };

    const [blogData, setBlogData] = useState<Partial<Blog>>(initialBlogData);
    const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
    const [categoryInput, setCategoryInput] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setBlogData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleContentChange = (content: string) => {
        setBlogData(prevData => ({
            ...prevData,
            content: content,
        }));
    };

    const handleCategoryInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategoryInput(e.target.value);
    };

    const handleAddCategory = () => {
        if (categoryInput.trim() !== '') {
            setBlogData(prevData => {
                // Type assertion to ensure prevData.category is treated as string[]
                const updatedCategories = (prevData.category || []) as string[];

                return {
                    ...prevData,
                    category: [...updatedCategories, categoryInput.trim()],
                };
            });
            setCategoryInput('');
        }
    };


    const handleRemoveCategory = (index: number) => {
        setBlogData(prevData => {
            // Type assertion to ensure prevData.category is treated as string[]
            const updatedCategories = (prevData.category || []) as string[];

            return {
                ...prevData,
                category: updatedCategories.filter((_, i) => i !== index),
            };
        });
    };


    const handleAddBlog = async () => {
        try {
            const errors: Record<string, string> = {};
            if (!blogData.title) {
                errors['title'] = 'Title is required';
            }
            if (!blogData.author) {
                errors['author'] = 'Author is required';
            }
            if (!blogData.content) {
                errors['content'] = 'Content is required';
            }
            if (Object.keys(errors).length > 0) {
                setValidationErrors(errors);
                return;
            }

            const blogToAdd: Blog = {
                ...blogData as Blog,
            };

            const newBlogId = await addBlog(blogToAdd);
            console.log('Blog added successfully with ID:', newBlogId);
            // Clear form fields or reset state
            setBlogData(initialBlogData);
            setValidationErrors({});
            // Call parent component callback to handle success (e.g., close modal)
            onAddSuccess();
        } catch (error) {
            console.error('Error adding blog:', error);
            // Handle error (e.g., show error message)
        }
    };

    return (
        <div className="admin-editor">
            <h2>Add New Blog</h2>
            <div className="form-group">
                <label>Title:</label>
                <input type="text" name="title" value={blogData.title} onChange={handleInputChange} className="form-control" />
                {validationErrors['title'] && <div className="text-danger">{validationErrors['title']}</div>}
            </div>
            <div className="form-group">
                <label>Author:</label>
                <input type="text" name="author" value={blogData.author} onChange={handleInputChange} className="form-control" />
                {validationErrors['author'] && <div className="text-danger">{validationErrors['author']}</div>}
            </div>
            <div className="form-group">
                <label>Image URL:</label>
                <input type="text" name="image" value={blogData.image} onChange={handleInputChange} className="form-control" />
            </div>
            <div className="form-group">
                <label>Content:</label>
                <ReactQuill
                    theme="snow"
                    value={blogData.content}
                    onChange={handleContentChange}
                    modules={{
                        toolbar: [
                            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                            [{ 'size': [] }],
                            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                            ['link', 'image'],
                            ['clean'],
                        ],
                    }}
                />
                {validationErrors['content'] && <div className="text-danger">{validationErrors['content']}</div>}
            </div>
            <div className="form-group">
                <label>Summary:</label>
                <textarea
                    name="summary"
                    value={blogData.summary}
                    onChange={handleInputChange}
                    rows={4}
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label>Categories:</label>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        name="categoryInput"
                        value={categoryInput}
                        onChange={handleCategoryInputChange}
                        className="form-control"
                        placeholder="Enter category"
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={handleAddCategory}>Add</button>
                    </div>
                </div>
                <div>
                    {blogData.category && blogData.category.map((category, index) => (
                        <span key={index} className="badge text-bg-secondary mb-2  position-relative" style={{ marginRight: "15px", fontSize: "15px" }}>
                            {category}
                            <button
                                type="button"
                                className='position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle'
                                style={{ fontSize: '0.75rem' }} // Adjust font size if needed
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = '0 0 0.5rem rgba(0, 0, 0, 0.2)'; // Apply box shadow on hover
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = 'none'; // Remove box shadow on mouse leave
                                }}
                                aria-label="Close"
                                onClick={() => handleRemoveCategory(index)}
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </span>
                    ))}
                </div>
            </div>

            <div className="form-group">
                <label className="d-block">Premium:</label>
                <div className="form-check form-switch">
                    <input
                        type="checkbox"
                        id="premiumCheckbox"
                        name="isPremium"
                        checked={blogData.isPremium}
                        onChange={handleInputChange}
                        className="form-check-input"
                    />
                    <label htmlFor="premiumCheckbox" className="form-check-label ms-2">
                        Premium Content
                    </label>
                </div>
            </div>

            <button onClick={handleAddBlog} className="btn btn-primary">Add Blog</button>
            <UploadImage />
        </div>
    );
};

export default AdminEditor;
