import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"

import blogStyles from "../styles/blog.module.scss"

import { allBlogs } from "../hooks/all-blogs"

const BlogPage = () => {
  const blogData = allBlogs()

  return (
    <Layout>
      <h1>Blog</h1>
      <p>Post will show up here</p>
      <ol>
        {blogData.map((blogData, index) => (
          <li className={blogStyles.blogData} key={index}>
            <Link to={`/blog/${blogData.node.fields.slug}`}><h2>{blogData.node.frontmatter.title}</h2></Link>
            <p className={blogStyles.date}>{blogData.node.frontmatter.date}</p>
            <p>{blogData.node.excerpt}</p>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage;
