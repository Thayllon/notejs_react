import React from "react";
import { BrowserRouter } from "react-router-dom";

import PageLayout from "../../containers/PageLayout/PageLayout";
import Routes, { menu } from "../Routes";
import SettingsProvider from "../Settings/SettingsProvider";
import NotesProvider from "../Notes/NotesProvider";


const App = () => (
		<BrowserRouter>
			<SettingsProvider>
				<NotesProvider>
					<PageLayout	menu={menu} >
						<Routes />
					</PageLayout>
				</NotesProvider>
			</SettingsProvider>
		</BrowserRouter>
	);

export default App;