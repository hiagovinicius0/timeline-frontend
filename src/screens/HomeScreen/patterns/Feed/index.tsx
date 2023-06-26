import { Box } from "@src/components/Box";
import { Button } from "@src/components/Button";
import { Icon } from "@src/components/Icon";
import { Image } from "@src/components/Image";
import { Link } from "@src/components/Link";
import { Text } from "@src/components/Text";
import { ReactNode } from "react";

interface FeedProps {
	children: ReactNode;
}

export const Feed = ({ children }: FeedProps) => {
	return (
		<Box>
			<Text>Feed Base</Text>
			{children}
		</Box>
	);
};

Feed.Header = () => {
	return (
		<Box>
			<Button>Olá pessoas!</Button>
			<Button.Base href="https://www.google.com">
				<Image
					src="https://github.com/omariosouto.png"
					alt="Imagem de perfil do Mario Souto"
					styleSheet={{ width: "128px", height: "128px", borderRadius: "100%" }}
				/>
			</Button.Base>

			<Link href="https://youtube.com/DevSoutinho">
				<Icon name="youtube" />
			</Link>
			<Icon name="twitter" />
			<Icon name="instagram" />
			<Icon name="github" />
			<Text>Feed Header</Text>
		</Box>
	);
};

Feed.Posts = () => {
	return (
		<Box>
			<Text>Feed Posts</Text>
		</Box>
	);
};
