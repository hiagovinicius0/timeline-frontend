import { Box } from "@src/components/Box";

export const Background = () => {
	const imageUrl =
		"https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80";
	return (
		<Box
			styleSheet={{
				width: "100%",
				height: "400px",
				backgroundImage: `url("${imageUrl}")`,
				backgroundPosition: "center",
				backgroudSize: "cover",
			}}
		/>
	);
};
