import { useStaticQuery, graphql } from "gatsby"

export const useRecentPostsSigns = () => {
  const data = useStaticQuery(graphql`
    query SignsPost {
      wpCategory(name: { eq: "Signs of The Times" }) {
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
