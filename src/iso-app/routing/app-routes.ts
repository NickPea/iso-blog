//

import HomePage from "../pages/home";
import TestingPage from "../pages/testing";
import FeaturePage from "../pages/feature";

export default [
	{ path: "/", component: HomePage, label: "Home" },
	{ path: "/feature", component: FeaturePage, label: "Feature" },
	{ path: "/testing", component: TestingPage, label: "Testing" },
];

