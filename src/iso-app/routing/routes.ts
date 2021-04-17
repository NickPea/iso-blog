//

//page components
import HomePage from "../pages/home-page";
import AboutPage from "../pages/about-page";
import ContactPage from "../pages/contact-page";
import ArticlePage from "../pages/article-page";
import CategoryPage from "../pages/category-page";

export default [
	{ path: "/", component: HomePage, label: "Home", navigatable: true },
	{
		path: "/about",
		component: AboutPage,
		label: "About Me",
		navigatable: true,
	},
	{
		path: "/contact",
		component: ContactPage,
		label: "Contact Me",
		navigatable: true,
	},
	{
		path: "/article/:articleslug",
		component: ArticlePage,
		label: null,
		navigatable: false,
	},
	{
		path: "/category/:categoryslug",
		component: CategoryPage,
		label: null,
		navigatable: false,
	},
];
