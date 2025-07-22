'use client';
import React from 'react'

interface ErrorProps {
    error: Error;
    reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorProps) => {
    console.error("An error occurred:", error);

    return (
        <>
            <div>An error occurred while processing your request. Please try again later or contact support if the issue persists.</div>
            <button onClick={() => reset()} className='btn'>Try Again</button>
        </>
    )
}

export default ErrorPage