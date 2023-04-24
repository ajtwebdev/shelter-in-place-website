import { useStaticQuery, graphql } from "gatsby"

export const useProverbQuery = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      wpPage(databaseId: { eq: 158 }) {
        id
        title
        proverb {
          title
          image {
            localFile {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)
  return data
}
