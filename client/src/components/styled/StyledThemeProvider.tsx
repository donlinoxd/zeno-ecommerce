import { ThemeProvider } from "styled-components";
import { GlobalStyled } from "./Global.styled";
import { themeStyled } from "./theme.styled";

type ThemeContainerProps = {
  children: React.ReactNode;
};

const StyledThemeProvider: React.FC<ThemeContainerProps> = ({ children }) => {
  return (
    <ThemeProvider theme={themeStyled}>
      <GlobalStyled />
      {children}
    </ThemeProvider>
  );
};

export default StyledThemeProvider;
