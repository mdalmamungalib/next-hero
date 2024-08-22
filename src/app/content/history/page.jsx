import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <h1 className='text-3xl p-3 text-white bg-blue-700 rounded-md w-48 text-center'><Link href={"/content/history/vision"}>Vision Here</Link></h1>
        </div>
    );
};

export default page;