import React from "react";
import { injectIntl, InjectedIntlProps } from "gatsby-plugin-intl";
import { Layout } from "~/components/Layout";
import { SEO } from "~/components/SEO";
import ProfileCard from "./day-1";

const Index: React.FC<InjectedIntlProps> = () => {
  return (
    <Layout>
      <SEO
        title="Designs to Code"
        description="Here I code designs from https://uidesigndaily.com"
      />
      <ProfileCard />
    </Layout>
  );
};

export default injectIntl(Index);
