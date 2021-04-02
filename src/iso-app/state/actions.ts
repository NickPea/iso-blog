//

//constants
export const CONST_APP_BOOT_START = 'APP-BOOT-START';
export const CONST_APP_BOOT_FINISH = 'APP-BOOT-FINISH'

//creators
export const actionAppBootStart = () => {
    return {type: CONST_APP_BOOT_START};
}
export const actionAppBootFinish = () => {
    return {type: CONST_APP_BOOT_FINISH};
}
