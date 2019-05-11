import { graphql, useStaticQuery } from "gatsby"

export const contentfulBlogs = () => {
  const { allContentfulBlogPost } = useStaticQuery(
    graphql`
      query allContentfulBlogPost {
        allContentfulBlogPost (
          sort: {
            fields: publishedDate,
            order: DESC,
          }) {
          edges {
            node {
              title,
              slug,
              publishedDate(formatString: "MMMM Do, YYYY"),
            }
          }
        }
      }
    `
  )
  return allContentfulBlogPost.edges
}
