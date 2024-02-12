// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

import { localStorageColorSchemeManager } from "./localStorageColorScheme";

export default function App({ Component, pageProps }) {
	const colorSchemeManager = localStorageColorSchemeManager({
		key: "dark",
	});
	return (
		<MantineProvider colorSchemeManager={colorSchemeManager}>
			<Component {...pageProps} />
		</MantineProvider>
	);
}
