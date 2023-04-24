import React from "react"
import { Section, Container, Flex } from "../../layoutComponents"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const Text = styled.div`
  text-align: center;
`

const ListBox = styled.div``

const TabsWrapper = styled.div`
  .css-13o7eu2 {
    display: flex;
  }
`

const TabListWrapper = styled.div`
  .css-1xhq01z {
    flex-direction: column;
  }
`

export default function TabsSide({ title, tabsContent }) {
  return (
    <Section>
      <Container>
        <Text>
          <h2 className="title">{title}</h2>
        </Text>
        <TabsWrapper>
          <Tabs>
            <TabListWrapper>
              <TabList>
                {tabsContent.map(tab => {
                  return <Tab>{tab.tabLabel}</Tab>
                })}
              </TabList>
            </TabListWrapper>

            <TabPanels>
              {tabsContent.map(tab => {
                return (
                  <TabPanel>
                    <Flex>
                      <div>
                        <h3 className="subheader accent">{tab.tabTitle}</h3>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: `${tab.tabBody}`,
                          }}
                        />
                        <ListBox>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: `${tab.tabList}`,
                            }}
                          />
                        </ListBox>
                      </div>
                    </Flex>
                    <GatsbyImage
                      image={
                        tab.tabImage.localFile.childImageSharp.gatsbyImageData
                      }
                      alt={tab.tabImage.altText}
                    />
                  </TabPanel>
                )
              })}
            </TabPanels>
          </Tabs>
        </TabsWrapper>
      </Container>
    </Section>
  )
}
