import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles for react-quill
import { addBlog } from '../../../firebase/blogs'; // Replace with actual path to your blogService
import { Blog } from '../../../firebase/interface'; // Replace with actual path to your Blog interface

interface AdminEditorProps {
    onAddSuccess: () => void;
}

const AdminEditor: React.FC<AdminEditorProps> = ({ onAddSuccess }) => {
    
    const [blogData, setBlogData] = useState<Partial<Blog>>({
        title: 'UNKNOWN',
        author: 'Anonyms',
        image: '',
        content: '',
        summary: 'A short Description about blog',
        category: [],
        isPremium: false,
        date_of_publication: new Date().toISOString(), // Date of publication
    });

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

    const handleAddBlog = async () => {
        try {
            const blogToAdd: Blog = {
                ...blogData as Blog,
            };

            const newBlogId = await addBlog(blogToAdd);
            console.log('Blog added successfully with ID:', newBlogId);
            // Clear form fields or reset state
            setBlogData({
                title: '',
                image: '',
                author: '',
                content: '',
                summary: '',
                category: [],
                isPremium: false,
                date_of_publication: new Date().toISOString(), // Reset dop to current date as Date object
            });
            // Call parent component callback to handle success (e.g., close modal)
            onAddSuccess();
        } catch (error) {
            console.error('Error adding blog:', error);
            // Handle error (e.g., show error message)
        }
    };


    return (
        <div>
            <h2>Add New Blog</h2>
            <label>
                Title:
                <input type="text" name="title" value={blogData.title} onChange={handleInputChange} />
            </label>
            <label>
                Author:
                <input type="text" name="author" value={blogData.author} onChange={handleInputChange} />
            </label>
            <label>
                Image URL:
                <input type="text" name="image" value={blogData.image} onChange={handleInputChange} />
            </label>
            <label>
                Content:
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
            </label>
            <label>
                Summary:
                <textarea
                    name="summary"
                    value={blogData.summary}
                    onChange={handleInputChange}
                    rows={4}
                />
            </label>
            <label>
                Categories:
                <input
                    type="text"
                    name="category"
                    value={blogData.category?.join(' | ')}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Premium:
                <input
                    type="checkbox"
                    name="premium"
                    checked={blogData.isPremium}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Date of Publication:
                <input
                    type="text"
                    name="dop"
                    value={blogData.date_of_publication} // Format dop as needed for display
                    readOnly // Ensure date is not editable by user
                />
            </label>
            <button onClick={handleAddBlog}>Add Blog</button>
        </div>
    );
};

export default AdminEditor;
