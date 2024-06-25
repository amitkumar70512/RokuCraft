import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { deleteBlogById } from '../../../firebase/blogs';

interface ConfirmationDialogProps {
    id: string;
    show: boolean;
    title: string;
    message: string;
    onCancel: () => void;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ id, show, title, message, onCancel }) => {
    const [confirmationText, setConfirmationText] = useState('');
    const [retryCount, setRetryCount] = useState(3); // Maximum retry attempts
    const maxRetries = 3;

    const handleConfirmDelete = () => {
        if (confirmationText === 'secret') { // Replace 'secret' with your actual validation text
            deleteBlogById(id)
                .then((response) => {
                    if (response.isSuccess) {
                        setConfirmationText('');
                        setRetryCount(maxRetries); // Reset retry count on successful deletion
                        onCancel(); // Close the dialog
                    } else {
                        alert('Failed to delete blog. Please try again later.'); // Handle deletion failure
                    }
                })
                .catch((error) => {
                    console.error('Error deleting blog:', error);
                    alert('An error occurred while deleting the blog.'); // Handle deletion error
                });
        } else {
            if (retryCount > 1) {
                setRetryCount(retryCount - 1);
                alert(`Please enter the correct confirmation text. ${retryCount - 1} attempts left.`);
            } else {
                setRetryCount(maxRetries); // Reset retry count on reaching maximum retries
                alert('Maximum retry attempts reached. Closing dialog.'); // Inform user of maximum retries
                onCancel(); // Close the dialog
            }
        }
    };

    return (
        <Modal show={show} onHide={onCancel} centered>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{message}</p>
                <Form.Control
                    type="text"
                    placeholder="Enter secret code"
                    value={confirmationText}
                    onChange={(e) => setConfirmationText(e.target.value)}
                />
                {retryCount > 0 && (
                    <p className="attempts-left" style={{ color: '#dc3545', marginTop: '10px', fontSize: '14px' }}>
                        Attempts left: {retryCount}
                    </p>
                )}

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onCancel}>
                    Close
                </Button>
                <Button variant="danger" onClick={handleConfirmDelete}>
                    Confirm Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmationDialog;