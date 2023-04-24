import { useStaticQuery, graphql } from "gatsby"

export const useRecentPostsTheWord = () => {
  const data = useStaticQuery(graphql`
    query WordPost {
      wpCategory(name: { eq: "The Word" }) {
        posts {
          nodes {
            post {
              title
              excerpt
              content
              bannerImage {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            uri
          }
        }
      }
    }
  `)
  return data
}
