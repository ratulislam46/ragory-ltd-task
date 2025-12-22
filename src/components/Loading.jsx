import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-3">
            <ScaleLoader color="#2563EB" size={40} />
            <p className="text-sm text-gray-500">Loading . . .</p>
        </div>

    );
};

export default Loading;