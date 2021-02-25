export function menu() {
    let menu = document.querySelector('#menu');
    menu.querySelector('a.activeItem').classList.remove('activeItem');
    menu.querySelector(`a[href="${location.href}"]`).classList.add('activeItem');
}