//

import React, { Fragment } from "react";
import RouterSwitch from "./routing/RouterSwitch";
import GlobalJssStyles from "./styles/appjss";
import MainLayout from "./layout/Main";

export default () => {
	return (
		<GlobalJssStyles>
			<MainLayout>
				<RouterSwitch />
			</MainLayout>
		</GlobalJssStyles>
	);
};
