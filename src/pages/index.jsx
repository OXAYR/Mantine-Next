import { Title, Box } from "@mantine/core";

const Index = () => {
	return (
		<Box>
			{/* by passing props to the title of component we have made it polymorphic */}

			<Title
				order={3}
				component="p"
				align="center"
			>
				Hello from the title
			</Title>
		</Box>
	);
};

export default Index;
