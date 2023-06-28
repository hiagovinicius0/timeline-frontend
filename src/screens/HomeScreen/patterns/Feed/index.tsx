import { Box } from "@src/components/Box";
import { Button } from "@src/components/Button";
import { Icon } from "@src/components/Icon";
import { Image } from "@src/components/Image";
import { Link } from "@src/components/Link";
import { Text } from "@src/components/Text";
import { useTheme } from "@src/theme/ThemeProvider";
import { ReactNode } from "react";

interface FeedProps {
	children: ReactNode;
}

export const Feed = ({ children }: FeedProps) => {
	const theme = useTheme();
	return (
		<Box
			styleSheet={{
				width: "100%",
				backgroundColor: theme.colors.neutral.x000,
				marginTop: "-228px",
				maxWidth: "683px",
				borderRadius: "8px",
				paddingVertical: "40px",
				paddingHorizontal: "32px",
			}}
		>
			{children}
		</Box>
	);
};

Feed.Header = () => {
	const theme = useTheme();
	return (
		<Box
			styleSheet={{
				borderBottom: `1px solid ${theme.colors.neutral.x200}`,
				marginBottom: "24px",
				paddingBottom: "24px",
			}}
		>
			<Box
				styleSheet={{
					flexDirection: "row",
					justifyContent: "space-between",
					gap: "16px",
					marginBottom: "16px",
				}}
			>
				<Image
					src="https://github.com/hiagovinicius0.png"
					alt="Imagem de perfil do Mario Souto"
					styleSheet={{
						width: { xs: "100px", md: "128px" },
						height: { xs: "100px", md: "128px" },
						borderRadius: "100%",
					}}
				/>
				<Box
					styleSheet={{
						justifyContent: "space-between",
					}}
				>
					<Box
						styleSheet={{
							display: {
								xs: "none",
								md: "flex",
							},
							justifyContent: "space-between",
							flex: 1,
						}}
					>
						<Button fullWidth colorVariant="primary" size="xl" href="/">
							Newsletter
						</Button>
						<Button fullWidth colorVariant="neutral" size="xl" href="/">
							Buy me a coffee
						</Button>
					</Box>
					<Box
						styleSheet={{
							display: {
								xs: "flex",
								md: "none",
							},
							justifyContent: "space-between",
							flex: 1,
						}}
					>
						<Button fullWidth colorVariant="primary" size="xs" href="/">
							Newsletter
						</Button>
						<Button fullWidth colorVariant="neutral" size="xs" href="/">
							Buy me a coffee
						</Button>
					</Box>
				</Box>
			</Box>
			<Text variant="heading4" tag="h1">
				Hiago Vinícius
			</Text>

			{/*<Link href="https://youtube.com/DevSoutinho">
				<Icon name="youtube" />
			</Link>
			<Icon name="twitter" />
			<Icon name="instagram" />
			<Icon name="github" />*/}
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
