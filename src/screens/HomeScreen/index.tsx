import { Box } from "@src/components/Box";
import { Background } from "./patterns/Background";
import { Menu } from "./patterns/Menu";
import { Text } from "@src/components/Text";
import { Feed } from "./patterns/Feed";
import { Footer } from "./patterns/Footer";

export const HomeScreen = () => {
	return (
		<Box tag="main">
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
