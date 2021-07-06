import React from 'react'
import BlockComponent from '../components/blog-list/BlockComponent'
import BlogCard from '../components/blog-list/BlogCard'
import GetStarted from '../components/home/GetStarted'

const blogList = () => {
    return (
        <div>
            <BlockComponent />
            <BlogCard />
            <GetStarted />
        </div>
    )
}

export default blogList
