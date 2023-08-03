export function isMobileDevice() {
    let width = window.innerWidth;
    return width > 992 ? false : true;
}