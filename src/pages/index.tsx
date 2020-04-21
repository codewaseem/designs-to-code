import React from "react";
import { injectIntl, InjectedIntlProps } from "gatsby-plugin-intl";
import { Layout } from "~/components/Layout";
import { SEO } from "~/components/SEO";
import Day2 from "./day-2";

const Index: React.FC<InjectedIntlProps> = () => {
  return (
    <Layout>
      <SEO
        title="Designs to Code"
        description="Here I code designs from https://uidesigndaily.com"
      />
      <Day2 />
    </Layout>
  );
};

export default injectIntl(Index);
