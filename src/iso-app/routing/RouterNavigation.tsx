//

import React, {Fragment} from 'react'
import { Link } from 'react-router-dom';
import routeList from './routes';


export default () => {
	return (
		<Fragment>
			{routeList.map((route) => {
				return <Link key={route.path} to={route.path}>{route.label}</Link>;
			})}
		</Fragment>
	);
};