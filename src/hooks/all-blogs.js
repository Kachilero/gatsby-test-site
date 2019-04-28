/**
 * Get all of the blog entry data to pass to components
 */
import { useStaticQuery, graphql } from "gatsby"

export const allBlogs = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
        query AllBlogs {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  title,
                  date
                },
                html,
                excerpt,
                fields {
                  slug
                }
              }
            }
          }
        }
    `
  )
  return allMarkdownRemark.edges
}
