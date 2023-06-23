import { Box } from "@src/components/Box";
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
