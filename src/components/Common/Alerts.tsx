import React from 'react';

interface AlertsProps {
    isError: boolean;
    title?: string;
    message?: string;
}

function Alerts({ isError, title, message }: AlertsProps) {
    // Determine the alert color based on isError prop
    const alertClass = isError ? 'alert alert-warning alert-dismissible fade show' : 'alert alert-success alert-dismissible fade show';

    return (
        <div className={alertClass} role="alert">
            <strong>{title}</strong> {message}.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}

export default Alerts;