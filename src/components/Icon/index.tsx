import { BaseComponent } from "@src/theme/BaseComponent";
import * as icons from "./svgs";
import { StyleSheet } from "@src/theme/StyleSheet";

const iconSizes = {
	xs: "12px",
	sm: "16px",
	md: "24px",
	lg: "32px",
	xl: "36px",
};

interface IconProps {
	name: keyof typeof icons;
	styleSheet?: StyleSheet;
	size?: keyof typeof iconSizes;
}

export const Icon = ({ name, size, ...props }: IconProps) => {
	const CurrentIcon = icons[name];
	if (!CurrentIcon) return <>{`${name} is not a valid icon!`}</>;
	return (
		<BaseComponent
			as="svg"
			styleSheet={{ width: iconSizes[size], height: iconSizes[size] }}
			color="inherit"
			fill="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<CurrentIcon />
		</BaseComponent>
	);
};

Icon.defaultProps = {
	name: "default",
	size: "md",
};
