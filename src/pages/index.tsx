import React from "react";
import { injectIntl, InjectedIntlProps } from "gatsby-plugin-intl";
import { css } from "@emotion/core";
import { Layout } from "~/components/Layout";
import { SEO } from "~/components/SEO";
import { ReactComponent as BgPattern } from "~/assets/images/bg-pattern.svg";

const Index: React.FC<InjectedIntlProps> = () => {
  return (
    <Layout>
      <SEO title="Hello" />
      <div
        css={css`
          background: #28223f;
          min-height: 100vh;
          min-width: 100vw;
        `}
      >
        <div
          css={css`
            display: flex;
            height: 100vh;
            justify-content: center;
            align-items: center;
          `}
        >
          <div
            css={css`
              width: 435px;
              height: 635px;
              background: #231e39;
              border-radius: 5px;
              position: relative;
              box-shadow: 0 30px 10px -20px #1d1832;
            `}
          >
            af
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default injectIntl(Index);
