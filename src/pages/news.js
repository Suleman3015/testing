import React from 'react'
import { Feature } from '../components/news/Feature'
import InTheNews from '../components/news/InTheNews'
import NewsCards from '../components/news/NewsCards'

const News = () => {
    return (
        <div>
            <NewsCards />
            <Feature />
            <InTheNews />
        </div>
    )
}

export default News
