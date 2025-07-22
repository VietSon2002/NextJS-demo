'use client';
import React, { useState } from 'react';
import { CldUploadWidget, CldImage } from 'next-cloudinary';

interface CloudinaryResult {
    public_id: string;
}

const UploadPage = () => {
    const [publicId, setPublicID] = useState('');

    return (
        <>
            {
                publicId && (
                    <CldImage src={publicId} width={270} height={180} alt="render-img" />)}
            <CldUploadWidget
                uploadPreset="uywr2r8i"
                onSuccess={(result) => {
                    console.log(result);
                    const info = result.info as CloudinaryResult;
                    setPublicID(info.public_id);
                }}
            >
                {({ open }) => (
                    <button
                        className="btn btn-primary"
                        onClick={() => open()}
                    >
                        Upload
                    </button>
                )}
            </CldUploadWidget>
        </>
    );
};

export default UploadPage;
