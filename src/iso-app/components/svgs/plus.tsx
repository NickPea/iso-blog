//

import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({});

export const PlusIcon = (props: any) => {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="#000000"
		>
			<path d="M0 0h24v24H0V0z" fill="none" />
			<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
		</svg>
	);
};
