import React from 'react'
import Layout from "../template/Layout"
import Header from '../components/about/header'
import Ourstory from '../components/about/ourstory'
import Ourvalues from '../components/about/ourvalues'
import Teamprofile from '../components/about/teamprofile'
import Ourinvestor from '../components/about/ourinvestor'
import Why from '../components/about/why'
import Viewjob from '../components/about/viewjob'
export default function AboutUs() {
    return (
        <Layout>
            <Header />
            <Ourstory />
            <Ourvalues />
            <Teamprofile />
            <Ourinvestor />
            <Why />
            <Viewjob />

        </Layout>

    )
}