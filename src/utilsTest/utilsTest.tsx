import { ThemeProvider } from "styled-components";
import GlobalStyle from "../style/GlobalStyle";
import mainStyleColors from "../style/themeColors";

interface ProviderWrapperProps {
  children: JSX.Element | JSX.Element[];
}

export const ProviderWrapper = ({ children }: ProviderWrapperProps) => {
  return (
    <ThemeProvider theme={mainStyleColors}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
