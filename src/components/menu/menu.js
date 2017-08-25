export function createMenu(...items) {
    const menu = document.createElement('ul');
    menu.innerHTML = items.map(item => `<li>${item}</li>`).join('');
    return menu;
}
