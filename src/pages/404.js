/**
 * 404 page
 */
import React from 'react'
import { Link } from "gatsby"

import Layout from '../components/layout'
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head pageTitle="404" />
      <h1>Page not found</h1>
      <Link to={"/"}>Head Home</Link>
    </Layout>
  )
}

export default NotFound
