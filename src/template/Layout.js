import React from 'react'
import Nav from '../components/nav/navbar'
import Footer from '../components/footer/footer1'
const Layout = ({ children }) => {
    return (
        <div>
            {/* insert Navbar here bro */}
            <Nav />
            {children}
            <Footer/>
            {/* insert Footer here bro */}
        </div>
    )
}

export default Layout
