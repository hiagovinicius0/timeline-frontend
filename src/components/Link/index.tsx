import { ReactNode, forwardRef } from "react";
import NextLink from "next/link";
import { Text } from "../Text";
import { StyleSheet } from "@src/theme/StyleSheet";
import { ThemeTypographyVariants } from "@src/theme";
import { useTheme } from "@src/theme/ThemeProvider";

interface LinkProps {
	href: string;
	children: ReactNode;
	styleSheet?: StyleSheet;
	variant?: ThemeTypographyVariants;
	colorVariant?:
		| "primary"
		| "accent"
		| "neutral"
		| "success"
		| "warning"
		| "negative";
	colorVariantEnabled?: boolean;
}

export const Link = forwardRef(
	(
		{
			href,
			children,
			colorVariant,
			styleSheet,
			colorVariantEnabled,
			...props
		}: LinkProps,
		ref
	) => {
		const theme = useTheme();
		const isExternalLink = href.startsWith("http");
		const currentColorSet = {
			color: theme.colors[colorVariant].x500,
			hover: {
				color: theme.colors[colorVariant].x400,
			},
			focus: {
				color: theme.colors[colorVariant].x600,
			},
		};
		const linkProps = {
			ref,
			children,
			href,
			tag: "a",
			styleSheet: {
				textDecoration: "none",
				...(colorVariantEnabled && {
					color: currentColorSet.color,
				}),
				...styleSheet,
				hover: {
					...styleSheet?.hover,
					...(colorVariantEnabled && {
						color: currentColorSet.focus.color,
					}),
				},
				focus: {
					...styleSheet?.focus,
					...(colorVariantEnabled && {
						color: currentColorSet.focus.color,
					}),
				},
			},

			...props,
		};
		if (isExternalLink) return <Text {...{ target: "blank", ...linkProps }} />;
		return (
			<NextLink href={href} passHref legacyBehavior>
				<Text {...linkProps} />
			</NextLink>
		);
	}
);

Link.defaultProps = {
	colorVariant: "primary",
	colorVariantEnabled: true,
};
