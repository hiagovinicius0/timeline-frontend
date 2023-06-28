import { Box } from "@src/components/Box";
import { Text } from "@src/components/Text";
import { useTheme } from "@src/theme/ThemeProvider";

export const Footer = () => {
	const theme = useTheme();
	return (
		<Box
			styleSheet={{
				height: "120px",
				backgroundColor: theme.colors.neutral.x900,
				color: theme.colors.neutral.x000,
				width: "100%",
				alignItems: "center",
				justifyContent: "center",
				paddingHorizontal: "24px",
				paddingVertical: "24px",
				textAlign: "center",
			}}
		>
			<Text variant="body2">Feito por Hiago </Text>
		</Box>
	);
};
