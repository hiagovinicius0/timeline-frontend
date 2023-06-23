import { ReactNode } from "react";
import { StyleSheet } from "@src/theme/StyleSheet";
import { BaseComponent } from "@src/theme/BaseComponent";

interface BoxProps {
	children?: ReactNode;
	styleSheet?: StyleSheet;
	tag?: "main" | "div" | "article" | "section" | "ul" | string;
}

export const Box = ({ children, styleSheet, tag, ...props }: BoxProps) => {
	const Tag = tag || "div";
	return (
		<BaseComponent as={Tag} styleSheet={styleSheet} {...props}>
			{children}
		</BaseComponent>
	);
};
