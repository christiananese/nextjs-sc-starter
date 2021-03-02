import { createGlobalStyle, ThemeProvider } from "styled-components";
import media from "styled-media-query";
import { COLORS, SIZES } from "../config/styles";

const GlobalStyle = createGlobalStyle`
  html {
    --color-text: ${COLORS.text};
    --color-background: ${COLORS.background};
    --color-primary: ${COLORS.primary};

    --size-xs: ${SIZES.xs};
    --size-sm: ${SIZES.sm};
    --size-md: ${SIZES.md};
    --size-lg: ${SIZES.lg};
    --size-xl: ${SIZES.xl};

    --fixedNavHeight: 60px;
    --fixedNavSpacing: 48px;
    --fixedNavScrollMargin: calc(var(--fixedNavHeight) + var(--fixedNavSpacing));

    --gradient-main: linear-gradient(147.14deg, #f80 6.95%, #e63535 93.05%);

    // todo choos what to keep -> stripe
    --gutterWidth: 16px;
    --scrollbarWidth: 0px;
    --windowWidth: calc(100vw - var(--scrollbarWidth));

    --layoutWidth: calc(var(--windowWidth) - var(--gutterWidth)*2);
    --layoutWidthMax: 1280px;

    --viewportWidthSmall: 375;
    --viewportWidthMedium: 600;
    --viewportWidthLarge: 1112;
    --viewportScale: calc(var(--windowWidth)/var(--viewportWidthLarge));

    --paddingTop: 160px;
    --paddingBottom: 160px;

    --columnPaddingNone: 0;
    --columnPaddingNormal: 16px;
    --columnPaddingMedium: 16px;
    --columnPaddingLarge: 16px;
    --columnPaddingXLarge: 16px;

    --rowGapNormal: 8px;
    --rowGapMedium: 24px;
    --rowGapLarge: 32px;
    --rowGapXLarge: 64px;
    --rowGap: var(--rowGapNormal);

    --columnCountMax: 1;
    --columnWidth: calc(var(--layoutWidth)/var(--columnCountMax));
    --columnMaxWidth: calc(var(--layoutWidthMax)*0.25);
    --copyMaxWidth: calc(var(--columnMaxWidth)*3);


    ${media.greaterThan("small")`
      // TODO set SM defaults
    `}
    ${media.greaterThan("medium")`
      // TODO set SM defaults
    `}
    ${media.greaterThan("large")`
      // TODO set SM defaults
      --gutterWidth: 32px;
    `}
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
