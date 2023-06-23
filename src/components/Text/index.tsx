import { ReactNode, forwardRef } from "react";
import { ThemeTypographyVariants } from "@src/theme";
import { StyleSheet } from "@src/theme/StyleSheet";
import { BaseComponent } from "@src/theme/BaseComponent";
import { useTheme } from "@src/theme/ThemeProvider";

interface TextProps {
	variant?: ThemeTypographyVariants;
	tag?: "a" | "p" | "li" | "h1" | "h2" | "h3" | string;
	children?: ReactNode;
	styleSheet?: StyleSheet;
}

export const Text = forwardRef(
	({ styleSheet, variant, tag, ...props }: TextProps, ref) => {
		const theme = useTheme();
		const textVariant = theme.typography.variants[variant];
		return (
			<BaseComponent
				as={tag}
				styleSheet={{
					fontFamily: theme.typography.fontFamily,
					...textVariant,
					...styleSheet,
				}}
				ref={ref}
				{...props}
			/>
		);
	}
);

Text.defaultProps = {
	tag: "p",
	variant: "body2",
};
