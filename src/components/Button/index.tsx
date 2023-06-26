import { ReactNode } from "react";
import { ButtonBase, ButtonBaseProps } from "./ButtonBase";
import { ColorVariant, Variant, colorVariantBy } from "./colorVariantBy";
import { useTheme } from "@src/theme/ThemeProvider";
import { ButtonSize, buttonSize } from "./buttonSize";

interface ButtonProps extends ButtonBaseProps {
	children: ReactNode;
	fullWidth?: boolean;
	colorVariant?: ColorVariant;
	variant?: Variant;
	size?: ButtonSize;
}

export const Button = ({
	children,
	styleSheet,
	fullWidth,
	colorVariant,
	variant,
	size,
}: ButtonProps) => {
	const theme = useTheme();
	return (
		<ButtonBase
			styleSheet={{
				...colorVariantBy(theme, colorVariant, variant),
				...buttonSize[size],
				alignSelf: "flex-start",
				...(fullWidth && {
					alignSelf: "initial",
				}),
				...styleSheet,
			}}
		>
			{children}
		</ButtonBase>
	);
};

Button.defaultProps = {
	fullWidth: false,
	size: "md",
	variant: "contained",
	colorVariant: "primary",
};

Button.Base = ButtonBase;
