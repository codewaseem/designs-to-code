import React from "react";
import { injectIntl, InjectedIntlProps } from "gatsby-plugin-intl";
import { css } from "@emotion/core";
import { Layout } from "~/components/Layout";
import { SEO } from "~/components/SEO";
import styled from "../styled";
import WaseemAhmedPic from "~/assets/images/waseem-ahmed.jpg";

const StyledSkillsSection = styled.div`
  display: flex;
  flex-wrap: wrap;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 17px;
  mix-blend-mode: normal;
  opacity: 0.81;
  > * {
    display: inline-block;
    flex: 1;
    padding: 10px;
    border: 2px solid #2d2747;
    border-radius: 3px;
    white-space: nowrap;
    margin: 5px;
    max-width: fit-content;
    cursor: pointer;
  }
`;
const SkillHeading = styled.h3`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 15px;
  margin-left: 5px;
`;
const SkillsWrapper = styled.div`
  padding: 20px;
  background: #1f1a36;
`;

const ProfileCard = styled.div`
  width: 435px;
  background: #231e39;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 40px 10px -20px #1d1832;
  display: grid;
  grid-template-rows: 2fr 1fr;
`;

const ProfileDetails = styled.div`
  font-family: Montserrat;
  color: #b3b8cd;
  text-align: center;
  display: grid;
  justify-items: center;
  align-items: center;
  align-content: center;
  padding-top: 50px;
  padding-bottom: 40px;
`;
const ProfilePicContainer = styled.div`
  height: 132px;
  width: 132px;
  border: 1px solid #03bfcb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProTag = styled.span`
  position: absolute;
  background: #febb0b;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #231e39;
  width: 48px;
  height: 25px;
  border-radius: 3px;
  left: 25px;
  top: 25px;
  line-height: 17px;
`;

const ProfileImg = styled.img`
  width: 116px;
  height: 116px;
  border-radius: 50%;
`;

const UserDetails = styled.div`
  display: grid;
  grid-gap: 10px;
  margin: 25px 97px;
  max-width: fit-content;
`;

const UserName = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
`;
const UserCity = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  text-transform: uppercase;
`;
const UserTitle = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
`;

const CtaButtonWrapper = styled.div`
  width: 295px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

const CtaButton = styled.button`
  font-size: 16px;
  background: transparent;
  padding: 17px 32px;
  color: #03bfcb;
  border: 1px solid #03bfcb;
  border-radius: 3px;
  cursor: pointer;
`;

const CtaButtonAccent = styled(CtaButton)`
  background: #03bfcb;
  color: #231e39;
`;

const Index: React.FC<InjectedIntlProps> = () => {
  return (
    <Layout>
      <SEO title="Hello" />
      <div
        css={css`
          background: #28223f;
          min-height: 100vh;
          min-width: 100vw;

          color: #b3b8cd;
        `}
      >
        <div
          css={css`
            display: grid;
            height: 100%;
            min-height: 100vh;
            justify-content: center;
            align-items: center;
            align-content: center;
          `}
        >
          <ProfileCard>
            <ProTag>Pro</ProTag>
            <ProfileDetails>
              <ProfilePicContainer>
                <ProfileImg src={WaseemAhmedPic} alt="Waseem Ahmed" />
              </ProfilePicContainer>
              <UserDetails>
                <UserName>Waseem Ahmed</UserName>
                <UserCity>Full-Stack Engineer</UserCity>
                <UserTitle>
                  User Interface designer and front end developer.
                </UserTitle>
              </UserDetails>
              <CtaButtonWrapper>
                <CtaButtonAccent type="button">Message</CtaButtonAccent>
                <CtaButton type="button">Following</CtaButton>
              </CtaButtonWrapper>
            </ProfileDetails>
            <SkillsWrapper>
              <SkillHeading>SKILLS</SkillHeading>
              <StyledSkillsSection>
                <span>UI/UX</span>
                <span>Front End Development</span>
                <span>HTML</span>
                <span>Front End Development</span>
                <span>Jquery</span>
                <span>CSS</span>
                <span>Adobe</span>
              </StyledSkillsSection>
            </SkillsWrapper>
          </ProfileCard>
        </div>
      </div>
    </Layout>
  );
};

export default injectIntl(Index);
