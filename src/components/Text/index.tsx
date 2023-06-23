import { ReactNode } from "react";
import { ThemeTypographyVariants } from "@src/theme";
import { StyleSheet } from "@src/theme/StyleSheet";
import { BaseComponent } from "@src/theme/BaseComponent";
import { useTheme } from "@src/theme/ThemeProvider";

interface TextProps {
	variant?: ThemeTypographyVariants;
	tag?: "p" | "li" | "h1" | "h2" | "h3" | string;
	children?: ReactNode;
	styleSheet?: StyleSheet;
}

export const Text = ({ styleSheet, variant, ...props }: TextProps) => {
	const theme = useTheme();
	const textVariant = theme.typography.variants[variant];
	return (
		<BaseComponent
			styleSheet={{
				fontFamily: theme.typography.fontFamily,
				...textVariant,
				...styleSheet,
			}}
			{...props}
		/>
	);
};

Text.defaultProps = {
	tag: "p",
	variant: "body2",
};
