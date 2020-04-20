import React from "react";
import Helmet, { HelmetProps } from "react-helmet";
import { injectIntl, InjectedIntlProps } from "gatsby-plugin-intl";
import { Location } from "@reach/router";
import twitterImage from "~/assets/images/profile-card-1.png";

type Props = {
  /** Description text for the description meta tags */
  description?: string;
} & HelmetProps &
  InjectedIntlProps;

/**
 * An SEO component that handles all element in the head that can accept
 */
const SEO: React.FC<Props> = ({
  children,
  description = "Designs to Code",
  title,
  intl,
}) => {
  const metaDescription = description;

  return (
    <Location>
      {({ location }) => (
        <Helmet
          htmlAttributes={{
            lang: intl.locale,
          }}
          title={title}
          titleTemplate="%s | Website"
        >
          <meta
            property="keywords"
            content="UI/UX, Front-End, Full-Stack, HTML5, CSS3, JavaScript, SVG, React, Gatsby, Emotion, TypeScript"
          />
          <meta property="description" content={metaDescription} />

          {/* OG tags */}
          <meta
            property="og:url"
            content={`https://designs-to-code.netlify.app/${location.pathname}`}
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:locale" content={intl.locale} />
          <meta property="og:image" content={twitterImage} />
          <meta property="og:image:alt" content={twitterImage} />
          <meta property="twitter:card" content="summary_large_image" />

          {children}
        </Helmet>
      )}
    </Location>
  );
};

export default injectIntl(SEO);
