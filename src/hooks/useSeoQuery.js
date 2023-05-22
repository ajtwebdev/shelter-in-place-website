import { useStaticQuery, graphql } from "gatsby"

export const useSeoQuery = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    wpPage(databaseId: {eq: 167}) {
      title
    }
  }
  `)
  return data
}
