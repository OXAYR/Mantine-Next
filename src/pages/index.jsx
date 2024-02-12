import { Title, Box, Text } from "@mantine/core";

const Index = () => {
	return (
		<Box>
			{/* by passing props to the title of component we have made it polymorphic */}

			<Title
				order={1}
				component="h1"
				align="center"
				variant="gradient"
				gradient={{ from: "blue", to: "pink", deg: 90 }}
			>
				Hello from the title
			</Title>

			<Text
				variant="gradient"
				gradient={{ from: "blue", to: "pink", deg: 90 }}
			>
				Hello it is a texxt component
			</Text>
		</Box>
	);
};

export default Index;
