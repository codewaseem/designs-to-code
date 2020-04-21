import React from "react";
import styled from "@theme/styled";

const PageContainer = styled.div`
  background: linear-gradient(143.13deg, #c6c9ff 0%, #999eff 98.17%);
  min-height: 100vh;
  min-width: 100vh;
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
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 118px 315px;
  grid-gap: 35px;
  z-index: 1;
`;

const DashboardHeader = styled.header`
  background: white;
  grid-column: 1 / -1;
`;

const DashboardAside = styled.aside`
  background: #2a2847;
`;

const DashboardMain = styled.main`
  display: grid;
  grid-gap: 20px;
  grid-column: 2 / -1;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 1fr;

  > * {
    background: white;
  }
`;

const MainContentFooter = styled.footer`
  grid-column: 1 / -1;
`;

export default function Day2() {
  return (
    <PageContainer>
      <PageContent>
        <FancyBorder />
        <DashboardContainer>
          <DashboardHeader />
          <DashboardAside />
          <DashboardMain>
            <section></section>
            <section></section>
            <MainContentFooter />
          </DashboardMain>
        </DashboardContainer>
      </PageContent>
    </PageContainer>
  );
}
