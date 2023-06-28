import { Box } from "@src/components/Box";
import { Button } from "@src/components/Button";
import { Icon } from "@src/components/Icon";
import { Text } from "@src/components/Text";
import { useTheme } from "@src/theme/ThemeProvider";

export const Menu = () => {
	const theme = useTheme();
	const baseSize = "40px";
	return (
		<Box
			styleSheet={{
				position: "absolute",
				left: 0,
				right: 0,
				top: 0,
				flexDirection: "row",
				width: "100%",
				justifyContent: "space-between",
				paddingVertical: "16px",
				paddingHorizontal: "20px",
				color: theme.colors.neutral.x000,
			}}
		>
			<Button.Base
				styleSheet={{
					backgroundColor: theme.colors.primary.x500,
					width: baseSize,
					height: baseSize,
					borderRadius: "100%",
					alignItems: "center",
					justifyContent: "center",
					hover: {
						backgroundColor: theme.colors.primary.x400,
					},
					focus: {
						backgroundColor: theme.colors.primary.x600,
					},
				}}
			>
				<Text> MS</Text>
			</Button.Base>
			<Button.Base
				styleSheet={{
					borderRadius: "100%",
					backgroundColor: theme.colors.neutral.x500,
					width: baseSize,
					height: baseSize,
					alignItems: "center",
					justifyContent: "center",
					hover: {
						backgroundColor: theme.colors.neutral.x400,
					},
					focus: {
						backgroundColor: theme.colors.neutral.x600,
					},
				}}
			>
				<Icon name="menu" />
			</Button.Base>
		</Box>
	);
};
