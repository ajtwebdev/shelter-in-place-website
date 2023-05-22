
    import { graphql } from 'gatsby'
  
    export const componentFragments = graphql`
       
 
      fragment Page_Acknowledgements on WpPage_Pagecomponents_PageComponents_Acknowledgements {
        
          title
        
      }
     
 
      fragment Page_Badges on WpPage_Pagecomponents_PageComponents_Badges {
        
      title
    
      }
     
 
      fragment Page_Banner on WpPage_Pagecomponents_PageComponents_Banner {
        
        title
        description
        subheader
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
     
 
      fragment Page_Beliefs on WpPage_Pagecomponents_PageComponents_Beliefs {
        
            title
          
      }
     
 
      fragment Page_Benefits1 on WpPage_Pagecomponents_PageComponents_Benefits1 {
        
  subheader
  title
  benefitContent {
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
  }
  
      }
     
 
      fragment Page_Bio on WpPage_Pagecomponents_PageComponents_Bio {
        
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
          
      }
     
 
      fragment Page_Carousel on WpPage_Pagecomponents_PageComponents_Carousel {
        
    subheader
    title
    carouselContent {
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
    }
  
      }
     
 
      fragment Page_ComponentA on WpPage_Pagecomponents_PageComponents_ComponentA {
        
  body
  subheader
  title
  componentItems {
    title
    text
    button
    image {
      altText
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
    
      }
     
 
      fragment Page_ComponentB on WpPage_Pagecomponents_PageComponents_ComponentB {
        
    body
    subheader
    title
    componentItems {
      title
      text
      button
      image {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
      
      }
     
 
      fragment Page_ComponentC on WpPage_Pagecomponents_PageComponents_ComponentC {
        
        subheader
        title
        body
        image {
            altText
            localFile {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    
      }
     
 
      fragment Page_ComponentD on WpPage_Pagecomponents_PageComponents_ComponentD {
        
    subheader
    title
    content {
        text
    }
  
      }
     
 
      fragment Page_ComponentE on WpPage_Pagecomponents_PageComponents_ComponentE {
        
  subheader
  title
  content {
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
  }
    
      }
     
 
      fragment Page_Cta1 on WpPage_Pagecomponents_PageComponents_Cta1 {
        
  body
  title
  subheader
  image {
    altText
    localFile {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
    
      }
     
 
      fragment Page_Curse on WpPage_Pagecomponents_PageComponents_Curse {
        
              title
            
      }
     
 
      fragment Page_Ebook on WpPage_Pagecomponents_PageComponents_Ebook {
        
    title
    image {
        altText
        localFile {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
    
      }
     
 
      fragment Page_Faq on WpPage_Pagecomponents_PageComponents_Faq {
        
  title
  body
  questions {
    question
    answer
  }
  
      }
     
 
      fragment Page_Hero on WpPage_Pagecomponents_PageComponents_Hero {
        
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
    
      }
     
 
      fragment Page_ImageGallery on WpPage_Pagecomponents_PageComponents_ImageGallery {
        
            body
            title
            subheader
            imageGallery {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
    
      }
     
 
      fragment Page_ImageLeft on WpPage_Pagecomponents_PageComponents_ImageLeft {
        
          subheader
          title
          body
          image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
      
      }
     
 
      fragment Page_ImageRight on WpPage_Pagecomponents_PageComponents_ImageRight {
        
        subheader
        title
        body
        image {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
    
      }
     
 
      fragment Page_ImageSlider on WpPage_Pagecomponents_PageComponents_ImageSlider {
        
    subheader
    title
    body
  
      }
     
 
      fragment Page_ProcessA on WpPage_Pagecomponents_PageComponents_ProcessA {
        
  title
  processContent {
    number
    processDescription
  }
  
      }
     
 
      fragment Page_ProcessB on WpPage_Pagecomponents_PageComponents_ProcessB {
        
    title
    subheader
    body
    processContent {
      number
      title
      body
    }
    
      }
     
 
      fragment Page_Seo on WpPage_Pagecomponents_PageComponents_Seo {
        
      title
      description
      
      }
     
 
      fragment Page_TabsSide on WpPage_Pagecomponents_PageComponents_TabsSide {
        
    title
    tabsContent {
      tabTitle
      tabList
      tabLabel
      tabBody
      tabImage {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    
      }
     
 
      fragment Page_TabsTop on WpPage_Pagecomponents_PageComponents_TabsTop {
        
  title
  tabsContent {
    tabTitle
    tabList
    tabLabel
    tabBody
    tabImage {
      altText
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
  
      }
     
 
      fragment Page_Testimonial on WpPage_Pagecomponents_PageComponents_Testimonial {
        
    title
    testimonials {
        testimonialBody
        testimonialTitle
        testimonialName
    }
    
      }
     
 
      fragment Page_Text on WpPage_Pagecomponents_PageComponents_Text {
        
      text
      }
    
    `
    