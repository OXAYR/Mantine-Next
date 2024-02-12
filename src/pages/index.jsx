import { Title, Box, Text, Button, useMantineTheme, rem } from "@mantine/core";
import Link from "next/link";

const Index = () => {
	const theme = useMantineTheme();
	return (
		<Box
			sx={{
				"& .title": {
					"margin-top": rem(40),
				},
			}}
		>
			{/* by passing props to the title of component we have made it polymorphic */}

			{/** by using sx we are anble to add style in it */}
			<Title
				order={1}
				component="h1"
				align="center"
				variant="gradient"
				gradient={{ from: "blue", to: "pink", deg: 90 }}
				mt="lg"
				sx={(theme) => ({
					background: theme.colors.teal[8],
					color: "white",
					"&:hover": {
						background: theme.colors.teal[4],
					},
				})}
			>
				Hello from the title
			</Title>

			<Text
				className="title"
				variant="gradient"
				gradient={{ from: "blue", to: "pink", deg: 90 }}
			>
				Hello it is a texxt component
			</Text>
			<Button
				component={Link}
				href="/about"
				variant="filled"
			>
				About
			</Button>
		</Box>
	);
};

export default Index;
