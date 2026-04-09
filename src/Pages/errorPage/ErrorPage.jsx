import React from 'react';
import { useNavigate } from 'react-router';

const ErrorPage = ({ errorCode = "404", message = "Page Not Found", onRetry }) => {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.header}>{errorCode}</h1>
                <h2 style={styles.subHeader}>Oops! Something went wrong.</h2>
                <p style={styles.text}>
                    {message || "The page you are looking for might have been removed or is temporarily unavailable."}
                </p>
                
                <div style={styles.buttonGroup}>
                    <button 
                        onClick={() => navigate('/')} 
                        style={styles.primaryButton}
                    >
                        Back to Home
                    </button>
                    
                    {onRetry && (
                        <button 
                            onClick={onRetry} 
                            style={styles.secondaryButton}
                        >
                            Try Again
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f4f7f6',
        padding: '20px',
    },
    card: {
        textAlign: 'center',
        maxWidth: '500px',
        padding: '40px',
        borderRadius: '12px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    },
    header: {
        fontSize: '6rem',
        fontWeight: 'bold',
        margin: '0',
        color: '#e74c3c',
        lineHeight: '1',
    },
    subHeader: {
        fontSize: '1.5rem',
        color: '#2c3e50',
        marginTop: '20px',
    },
    text: {
        fontSize: '1rem',
        color: '#7f8c8d',
        margin: '15px 0 30px 0',
        lineHeight: '1.5',
    },
    buttonGroup: {
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
    },
    primaryButton: {
        padding: '12px 24px',
        fontSize: '1rem',
        backgroundColor: '#3498db',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: '600',
        transition: 'background 0.3s',
    },
    secondaryButton: {
        padding: '12px 24px',
        fontSize: '1rem',
        backgroundColor: 'transparent',
        color: '#3498db',
        border: '2px solid #3498db',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: '600',
    },
};

export default ErrorPage;