import React from 'react';
import BlogPage from './blogList';
import BlogDetails from './blogDetail';
import Link from 'next/link';

const Blog = () => {
  return (
    <div className='flex flex-col items-center'>
    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
      Blog List
    </h1>
    <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
      <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
        Home
      </Link>
      <span className='text-white'>/</span>
      <Link href="/blog" className='text-[#FF9F0D]'>
        Blog
      </Link>
    </div>
 
    <div>
      <BlogPage />
      <BlogDetails />
    </div>
    </div>
  )
}

export default Blog