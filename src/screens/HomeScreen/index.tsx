import { Box } from "@src/components/Box";
import { Background } from "./patterns/Background";
import { Menu } from "./patterns/Menu";
import { Text } from "@src/components/Text";
import { Feed } from "./patterns/Feed";
import { Footer } from "./patterns/Footer";
import { useTheme } from "@src/theme/ThemeProvider";

export const HomeScreen = () => {
	const theme = useTheme();
	return (
		<Box
			tag="main"
			styleSheet={{
				backgroundColor: theme.colors.positive.x100,
				flex: 1,
				alignItems: "center",
			}}
		>
			<Background />
			<Menu />
			<Feed>
				<Feed.Header />
				<Text variant="display1">Últimas Atualizações</Text>
				<Feed.Posts></Feed.Posts>
			</Feed>
			<Footer />
		</Box>
	);
};
