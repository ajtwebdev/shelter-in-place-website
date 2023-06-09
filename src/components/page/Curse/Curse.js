import React from "react"
import { Container, Flex, Section } from "../../layoutComponents"
import styled from "styled-components"

const Wrapper = styled.div`
  background: url("../../images/hero-1.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 6em 0;
`

const Item = styled.div`
  padding: 4em;
  background: rgba(255, 255, 255, 0.8);
  p {
    max-width: 70ch;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
  }
`

const TextItem = styled.div`
  text-align: center;
`
export default function Curse() {
  return (
    <Wrapper>
      <Section>
        <Container>
          <Item className="spacing">
            <h2 className="title accent">we believe:</h2>
            <p>
              This discussion is meant for those who are truly seeking the
              truth, who are ready to acknowledge that the universe around us is
              infinite and inexplicable to us, who are ready to open themselves
              to a God who created us, and who loves us. The authority from
              which we speak is the Holy Bible (the Word of God). To go forward
              there are a few premises that we must acknowledge:
            </p>
            <Flex>
              <div className="spacing">
                <TextItem>
                  <h3 className="bold accent italics">
                    1. There is a creator God who made us and who loves us,
                  </h3>
                  <p>
                    John 1:3-43 All things were made by him; and without him was
                    not anything made that was made.
                  </p>
                </TextItem>
                <TextItem>
                  <h3 className="bold accent italics">
                    2. All people have an inherent awareness of their own
                    immortality,
                  </h3>
                  <p>
                    Ecclesiastes 3:11 He has made everything beautiful in its
                    time. Also He has put eternity in their hearts, except that
                    no one can find out the work that God does from beginning to
                    end.
                  </p>
                </TextItem>
                <TextItem>
                  <h3 className="bold accent italics">
                    3. We were created with a need to serve and glorify God,
                  </h3>
                  <p>
                    1 Samuel 12:24 Only fear the Lord and serve him faithfully
                    with all your heart. For consider what great things he has
                    done for you.
                  </p>
                </TextItem>
              </div>
              <div className="spacing">
                <TextItem>
                  <h3 className="bold accent italics">
                    4. The world we live in groans under the burden of man’s
                    tenure, and the world reflects the evil influences of
                    mankind
                  </h3>
                  <p>
                    Romans 8:22-23 22 For we know that the whole creation groans
                    and labors with birth pangs together until now. 23 Not only
                    that, but we also who have the firstfruits of the Spirit,
                    even we ourselves groan within ourselves, eagerly waiting
                    for the adoption, the redemption of our body.
                  </p>
                </TextItem>
                <TextItem>
                  <h3 className="bold accent italics">
                    5. Mankind is not evolving upward, but is in a downward
                    spiral towards his own destruction. All people are sinners
                    and are therefore at enmity with God. You and all men are
                    sinners before God, and there is nothing we can do on our
                    own merit to please Him or be made right with Him.
                  </h3>
                  <p>
                    Proverbs 14:1 There is a way that seems right to a man, but
                    its end is the way of death.
                  </p>
                </TextItem>
              </div>
            </Flex>
            <div>
              <h2 className="accent title">gods solutions for man</h2>
              <p>
                If the Lord is calling you, if you want to be saved from this
                accursed World, you must understand that you are at enmity God,
                you are his enemy and can do nothing earn His favour – yet He
                loves you, and wants you to come to Him. If you want to be saved
                from evil and the certainty of Hell and separation from God
                forever, you must repent of your sins, ask the Lord Jesus Christ
                will forgive your sins. 2 Corinthians 7:10 For godly sorrow
                produces repentance leading to salvation, not to be regretted;
                but the sorrow of the world produces death. Acts 16:31 Believe
                on the Lord Jesus Christ, and thou shalt be saved.. Romans 10:9
                That if you confess with your mouth the Lord Jesus, and believe
                in your heart that God raised him from the dead you will be
                saved. John 3:3 Jesus said … Most assuredly, I say to you,
                unless one is born again he cannot see the kingdom of God. Acts
                2:36 Then Peter said to them, ‘Repent and let everyone of you be
                baptised in the name of Jesus Christ for the remission of sins;
                and you shall receive the gift of the Holy Spirit. John 3:16 For
                God so love the world that He gave his only begotten son, that
                whosoever in Him should perish but have everlasting life. Romans
                3:10-18 10 As it is written, There is none righteous, no, not
                one:11 There is none that understandeth, there is none that
                seeketh after God.12 They are all gone out of the way, they are
                together become unprofitable; there is none that doeth good, no,
                not one.13 Their throat is an open sepulchre; with their tongues
                they have used deceit; the poison of asps is under their lips:14
                Whose mouth is full of cursing and bitterness:15 Their feet are
                swift to shed blood:16 Destruction and misery are in their
                ways:17 And the way of peace have they not known:18 There is no
                fear of God before their eyes.
              </p>
            </div>
            <div>
              <h2 className="title">when you are saved</h2>
              <p>
                When you have received the saving grace of the Lord Jesus, the
                Holy Spirit dwells within you. Ephesians 1:13 And take the
                helmet of salvation, and the sword of the Spirit, which is the
                word of God 1 Corinthians 3:16-17 16 Do you not know that you
                are the temple of God and that the Spirit of God dwells in you?
                17 If anyone defiles the temple of God, God will destroy him.
                For the temple of God is holy, which temple you are. It is a
                mystical experience to accept Jesus into your heart. Some
                people’s lives are immediately changed dramatically, some
                people’s lives are more gradually changed, but always there is a
                sense of coming home, a desire to know God more, a sense of
                wanting to please Him and rather oneself. You will want the
                things of the world less and less, and you seek the god more and
                more. Please take upon yourself to read the Word of God, ask the
                Lord to lead you to find a bible believing fellowship. Look for
                fellowships that have a dispensational view of Bible
                interpretation, and have a pretribulation understanding of the
                return of the Lord Jesus Christ. Read the Word; purchase a bible
                that has study helps within it. The New King James New Scofield
                Edition is recommended. Note in the About Us – Acknowledgments
                of this site that there is a list of people/books/ministries
                that helped me over the years. Welcome to the fellowship of
                Jesus Christ. Feel free to contacts us.
              </p>
            </div>
          </Item>
        </Container>
      </Section>
    </Wrapper>
  )
}
