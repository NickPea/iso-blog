//

//constants
export const APP_BOOT_START = "APP_BOOT_START";
export const APP_BOOT_FINISH = "APP_BOOT_FINISH";
export const APP_SET_USER = "APP_SET_USER";

//creators
export const AppBootStart = () => {
	return { type: APP_BOOT_START };
};
export const AppBootFinish = () => {
	return { type: APP_BOOT_FINISH };
};

export const AppSetUser = (user: object) => {
	return { type: APP_SET_USER, payload: user };
};
