import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"

import blogStyles from "../styles/blog.module.scss"

import { allBlogs } from "../hooks/all-blogs"
import { contentfulBlogs } from '../hooks/all-contentful-blogs'

const BlogPage = () => {
  const blogData = allBlogs()
  const contentfulBlogData = contentfulBlogs()

  return (
    <Layout>
      <h1>Blog</h1>
      <h2>Contentful Blogs</h2>
      <ol className={blogStyles.posts}>
        {contentfulBlogData.map((contentfulBlogData, index) => (
          <li className={blogStyles.blogData} key={index}>
            <Link to={`/blog/${contentfulBlogData.node.slug}`}>
            <h2>{contentfulBlogData.node.title}</h2>
            <p className={blogStyles.date}>{contentfulBlogData.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>

      <h2>Local Blogs</h2>
      <ol className={blogStyles.posts}>
        {blogData.map((blogData, index) => (
          <li className={blogStyles.blogData} key={index}>
            <Link to={`/blog/${blogData.node.fields.slug}`}>
              <h2>{blogData.node.frontmatter.title}</h2>
              <p className={blogStyles.date}>{blogData.node.frontmatter.date}</p>
            </Link>
            <p>{blogData.node.excerpt}</p>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage;
