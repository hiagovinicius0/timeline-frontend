import { parseStyleSheet } from "@skynexui/responsive_stylesheet";
import { StyleSheet } from "@src/theme/StyleSheet";
import { forwardRef } from "react";
import styled from "styled-components";

interface StyledBaseComponent {
	styleSheet?: StyleSheet;
	ref?: any;
}

const StyledBaseComponent = styled.div<StyledBaseComponent>`
	display: flex;
	flex-direction: column;
	align-content: flex-start;
	flex-shrink: 0;
	${({ styleSheet }) => parseStyleSheet(styleSheet)}
`;
interface BaseComponentProps {
	styleSheet: StyleSheet;
	[key: string]: any;
}
export const BaseComponent = forwardRef<unknown, BaseComponentProps>(
	(props, ref) => {
		return <StyledBaseComponent ref={ref} {...props} />;
	}
);

BaseComponent.defaultProps = {
	styleSheet: {},
};
