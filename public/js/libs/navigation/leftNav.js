export function leftNav(elem) {
    if(elem) {
        elem.addEventListener('click', () => {
            console.log(elem);
        })
    }
}