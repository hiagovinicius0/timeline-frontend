import { colors } from "./defaults/colors";
import { typography } from "./defaults/typography";

export const theme = {
	typography,
	colors,
};

export type Theme = typeof theme;
export type ThemeTypographyVariants = keyof typeof typography.variants;
