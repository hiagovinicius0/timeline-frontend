import { ThemeTypographyVariants } from "@src/theme";
import { Text } from "../Text";
import styled from "styled-components";
import { MouseEvent, ReactNode, useRef } from "react";
import { useRipple } from "react-use-ripple";
import { StyleSheet } from "@src/theme/StyleSheet";
import { useRouter } from "next/router";

const StyledButton = styled(Text)<any>``;

export interface ButtonBaseProps {
	href?: string;
	children: ReactNode;
	textVariant?: ThemeTypographyVariants;
	styleSheet?: StyleSheet;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonBase = ({
	textVariant,
	children,
	styleSheet,
	href,
	...props
}: ButtonBaseProps) => {
	const router = useRouter();
	const ref = useRef();
	useRipple(ref, {
		animationLength: 500,
		rippleColor: "rgba(255,255,255,0.7)",
	});
	const isLink = Boolean(href);
	const Tag = isLink ? "a" : "button";

	return (
		<StyledButton
			tag={Tag}
			ref={ref}
			href={href}
			styleSheet={{
				border: "0",
				backgroundColor: "transparent",
				color: "inherit",
				outline: "0",
				cursor: "pointer",
				textDecoration: "none",
				...styleSheet,
			}}
			onClick={(event) => {
				isLink && event.preventDefault();
				isLink && router.push(href);
				!isLink && props.onClick && props.onClick(event);
			}}
			{...props}
		>
			{children}
		</StyledButton>
	);
};
