module.exports = () => {
    return `
            title
            description
            image {
                altText
                localFile {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
          `
  }
  