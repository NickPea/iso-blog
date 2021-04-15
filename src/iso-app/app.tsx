//

import React, { Fragment } from "react";
import RouterSwitch from "./routing/RouterSwitch";
import GlobalCSS from "./styles/global-css";
import MainLayout from "./layout/Main";

export default () => {
	return (
		<GlobalCSS>
			<MainLayout>
				<RouterSwitch />
			</MainLayout>
		</GlobalCSS>
	);
};
