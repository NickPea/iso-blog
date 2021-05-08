//

//page components
import HomePage from "../pages/home-page";
import AboutPage from "../pages/about-page";
import ContactPage from "../pages/contact-page";
import ArticlePage from "../pages/article-page";
import CategoryPage from "../pages/category-page";
import LoginPage from "../pages/auth/login";
import LogoutPage from "../pages/auth/logout";
import RegisterPage from "../pages/auth/register";
import ResetPasswordPage from "../pages/auth/reset-password";
import ResetPasswordEmailSentPage from "../pages/auth/reset-password-email-sent";
import Dashboard from "../pages/dashboard";
import NewArticle from "../pages/dashboard/new-article";

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
	//auth
	{
		path: "/login",
		component: LoginPage,
		label: null,
		navigatable: false,
	},
	{
		path: "/logout",
		component: LogoutPage,
		label: null,
		navigatable: false,
	},
	{
		path: "/register",
		component: RegisterPage,
		label: null,
		navigatable: false,
	},
	{
		path: "/reset-password",
		component: ResetPasswordPage,
		label: null,
		navigatable: false,
	},
	{
		path: "/reset-password-email-sent",
		component: ResetPasswordEmailSentPage,
		label: null,
		navigatable: false,
	},
	{
		path: "/dashboard",
		component: Dashboard,
		label: null,
		navigatable: false,
	},
	{
		path: "/dashboard/new-post",
		component: NewArticle,
		label: null,
		navigatable: false,
	},
];
