import React from "react";
import { Global, css } from "@emotion/core";
import { normalize } from "polished";

// import { Theme } from "../../styled";
// import { above, spacer } from "~/utils/styles";

const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={() => css`
        ${normalize()}

        *,
        *:before,
        *:after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        img {
          max-width: 100%;
        }
      `}
    />
  );
};

export default GlobalStyles;
