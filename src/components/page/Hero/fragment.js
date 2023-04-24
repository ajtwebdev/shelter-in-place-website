module.exports = () => {
  return `
    title
    description
    image {
        localFile {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    `
}
