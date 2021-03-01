import { createGlobalStyle, ThemeProvider } from "styled-components";
import { COLORS, SIZES } from "../config/styles";

const GlobalStyle = createGlobalStyle`
  html {
    --color-text: ${COLORS.text};
    --color-background: ${COLORS.background};
    --color-primary: ${COLORS.primary};

    --size-xs: ${SIZES.sm};
    --size-sm: ${SIZES.sm};
    --size-md: ${SIZES.sm};
    --size-lg: ${SIZES.sm};
    --size-xl: ${SIZES.sm};
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
