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
          <div
            css={css`
              width: 435px;
              background: #231e39;
              border-radius: 5px;
              position: relative;
              box-shadow: 0 30px 10px -20px #1d1832;
              display: grid;
              grid-template-rows: 2fr 1fr;
            `}
          >
            <div css={css``}>af</div>
            <div
              css={css`
                padding: 20px;
                background: #1f1a36;
              `}
            >
              <h3
                css={css`
                  font-family: Montserrat;
                  font-style: normal;
                  font-weight: 500;
                  font-size: 16px;
                  line-height: 15px;
                  margin-left: 5px;
                `}
              >
                SKILLS
              </h3>
              <div
                css={css`
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
                  }
                `}
              >
                <span>UI/UX</span>
                <span>Front End Development</span>
                <span>HTML</span>
                <span>Front End Development</span>
                <span>Jquery</span>
                <span>CSS</span>
                <span>Adobe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default injectIntl(Index);
