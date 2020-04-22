import React from "react";
import styled from "@theme/styled";
import ProfilePicPng from "~/assets/images/day-2-pic.png";
import G1 from "~/assets/images/d2-g1.png";
import G2 from "~/assets/images/d2-g2.png";
import { Layout } from "../components/Layout";
import { css } from "@emotion/core";
import { SEO } from "../components/SEO";

const BellIcon = () => (
  <svg
    width="21"
    height="24"
    viewBox="0 0 21 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5 8.6C16.5 4.95492 13.5451 2 9.9 2C6.25492 2 3.3 4.95492 3.3 8.6C3.3 16.3 0 18.5 0 18.5H19.8C19.8 18.5 16.5 16.3 16.5 8.6"
      stroke="#73718E"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.8029 22.9C11.4094 23.5785 10.6843 23.9961 9.89995 23.9961C9.11557 23.9961 8.39053 23.5785 7.99695 22.9"
      stroke="#73718E"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PageContainer = styled.div`
  background: linear-gradient(143.13deg, #c6c9ff 0%, #999eff 98.17%);
  min-height: 100vh;
  min-width: 100vh;
  font-family: Muli;
`;

const PageContent = styled.div`
  min-height: 98vh;
  min-width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FancyBorder = styled.div`
  border-radius: 31% 69% 47% 53% / 54% 64% 36% 46%;
  background: #9ea3ff;
  mix-blend-mode: normal;
  opacity: 0.85;
  width: 798px;
  height: 676px;
  position: absolute;
`;

const DashboardContainer = styled.div`
  max-width: 992px;
  width: 95%;
  margin: auto;
  display: grid;
  grid-template-columns: 283px 1fr;
  grid-template-rows: 118px 1fr;
  grid-gap: 35px;
  z-index: 1;
`;

const DashboardHeader = styled.header`
  background: white;
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 45px;
  border-radius: 10px;

  /* &:hover {
    box-shadow: 0px 8px 15px #7746f0;
  } */

  button {
    padding: 18px 25px;
    box-shadow: 0px 11px 20px rgba(157, 116, 255, 0.7);
    border-radius: 5px;
    display: flex;
  }
`;

const DashboardAside = styled.aside`
  background: #2a2847;
  box-shadow: 0px 8px 25px #27217f;
  border-radius: 5px;
  display: grid;
  padding-top: 114px;
  justify-items: center;
  align-content: flex-start;
`;

const DashboardMain = styled.main`
  display: grid;
  grid-gap: 20px;
  grid-column: 2 / -1;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 118px;

  > * {
    background: white;
  }
`;

const MainContentFooter = styled.footer`
  grid-column: 1 / -1;
  box-shadow: 0px 8px 15px #7746f0;
  border-radius: 5px;
  padding: 35px 30px;
  display: grid;
  grid-template-columns: 24% 31% 45%;
  grid-column-gap: 2px;
`;

const Button = styled.button`
  background: #9d74ff;
  box-shadow: 0px 11px 20px rgba(14, 13, 30, 0.648);
  border-radius: 5px;
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  border: 0;
  letter-spacing: 1.5px;
  padding: 17px 61px;
  color: #ffffff;
`;

const OvalEffect = styled.div`
  height: 18px;
  width: 90px;
  border-radius: 50%;
  background: #9992ff;
  mix-blend-mode: normal;
  opacity: 0.18;
`;

const AsideText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  width: 173px;
  color: #ffffff;
  margin: 20px auto 35px;
`;

const HeaderNavigation = styled.div`
  ul {
    list-style: none;
    display: flex;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */

    color: #2a2847;
    > li {
      flex: 1;

      &:not(:last-of-type) {
        margin-right: 45px;
      }

      &:not(:first-of-type) {
        mix-blend-mode: normal;
        opacity: 0.7;
      }
    }
  }
`;

const HeaderMenuBar = styled.menu`
  display: flex;
  align-items: center;
`;

const NotificationIcon = styled.span`
  display: inline-block;
  margin: 0 42px 0 51px;
  position: relative;

  i {
    display: inline-block;
    background: #9d74ff;
    border-radius: 50%;
    color: white;
    width: 17px;
    height: 17px;
    font-family: Muli;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 17px;
    text-align: center;
    position: absolute;
    left: 50%;
    top: -50%;
    transform: translateY(50%);
  }
`;

const ProfilePic = styled.img`
  border-radius: 50%;
  width: 42px;
  height: 42px;
  border: 2px solid lightgreen;
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
`;

const StatsText = styled.span`
  font-size: 14px;
  line-height: 18px;
  color: #0e0d1e;
`;
const StatsColor = styled.span`
  display: inline-block;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  margin-right: 10px;
  background: #7972e9;
`;

const StatsProgress = styled.div`
  height: 15px;
  background: #918bed;
  border-radius: 2px;
  margin-top: 15px;
`;

const StatsProgressLeft = styled(StatsProgress)`
  background: #7972e9;
  border-radius: 100px 2px 2px 100px;
`;

const StatsProgressRight = styled(StatsProgress)`
  background: #ad91f1;
  border-radius: 2px 100px 100px 2px;
`;

const StatsDetails = styled.div`
  border-radius: 5px;
  padding: 25px 30px;

  h3 {
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */
    font-weight: normal;
    color: #2a2847;
  }

  h1 {
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    margin: 1px auto 16px;
    color: #2a2847;
  }
`;

const Plus = styled.span`
  font-size: 32px;
  display: inline-block;
  margin-right: 10px;
`;

export default function Day2() {
  return (
    <Layout>
      <SEO
        title="Day 2 | Daily Design To Code | Waseem Ahmed"
        description="This is day 2 of my daily design to code challenge."
        seoImageUrl="/day2.png"
      />
      <PageContainer>
        <PageContent>
          <FancyBorder />
          <DashboardContainer>
            <DashboardHeader>
              <HeaderNavigation>
                <ul>
                  <li>Dashboard</li>
                  <li>Projects</li>
                  <li>Users</li>
                </ul>
              </HeaderNavigation>
              <HeaderMenuBar>
                <Button>
                  {" "}
                  <Plus>+</Plus> Add new segment
                </Button>
                <NotificationIcon>
                  <BellIcon />
                  <i>3</i>
                </NotificationIcon>
                <ProfilePic src={ProfilePicPng} alt="me" />
              </HeaderMenuBar>
            </DashboardHeader>
            <DashboardAside>
              <OvalEffect />
              <AsideText>Upgrade to PRO to unlock more features</AsideText>
              <Button>Upgrade</Button>
            </DashboardAside>
            <DashboardMain>
              <StatsDetails>
                <h3>Users</h3>
                <h1>9,452</h1>
                <img src={G1} alt="Graph One" />
              </StatsDetails>
              <StatsDetails>
                <h3>New users</h3>
                <h1>6,245</h1>
                <img src={G2} alt="Graph Two" />
              </StatsDetails>
              <MainContentFooter>
                <section>
                  <Stats>
                    <StatsColor
                      css={css`
                        background: #7972e9;
                      `}
                    />
                    <StatsText>24% Direct</StatsText>
                  </Stats>
                  <StatsProgressLeft />
                </section>
                <section>
                  <Stats>
                    <StatsColor />
                    <StatsText>31% Social</StatsText>
                  </Stats>
                  <StatsProgress />
                </section>
                <section>
                  <Stats>
                    <StatsColor
                      css={css`
                        background: #ad91f1;
                      `}
                    />
                    <StatsText>45% Organic</StatsText>
                  </Stats>
                  <StatsProgressRight />
                </section>
              </MainContentFooter>
            </DashboardMain>
          </DashboardContainer>
        </PageContent>
      </PageContainer>
    </Layout>
  );
}
