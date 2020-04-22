import React from "react";
import styled from "@theme/styled";
import ProfileCard1 from "../components/ProfileCard1";
import { Layout } from "../components/Layout";
import { SEO } from "~/components/SEO";

const PageContainer = styled.div`
  background: #28223f;
  min-height: 100vh;
  min-width: 100vw;
  color: #b3b8cd;
`;

const PageContent = styled.div`
  display: grid;
  height: 100%;
  min-height: 95vh;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export default function() {
  return (
    <Layout>
      <SEO
        title="Day 1 | Daily Design To Code | Waseem Ahmed"
        description="Here I code designs from https://uidesigndaily.com everyday."
        seoImageUrl="/day1.png"
      />
      <PageContainer>
        <PageContent>
          <ProfileCard1 />
        </PageContent>
      </PageContainer>
    </Layout>
  );
}
