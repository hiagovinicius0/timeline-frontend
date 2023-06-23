import { ReactNode } from "react";
import {
	ThemeProvider as StyledThemeProvider,
	useTheme as useThemeStyled,
} from "styled-components";
import { theme, Theme } from ".";

export const useTheme = (): Theme => {
	return useThemeStyled() as unknown as any;
};

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};
