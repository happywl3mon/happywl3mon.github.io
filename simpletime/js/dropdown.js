const toggleMenu = document.getElementById('button');
const menu = document.getElementById('menu');

toggleMenu.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        setTimeout(() => {
            menu.classList.remove('scale-95', 'opacity-0');
            menu.classList.add('scale-100', 'opacity-100');
        }, 10);
    } else {
        menu.classList.remove('scale-100', 'opacity-100');
        menu.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
            menu.classList.add('hidden');
        }, 300); // Длительность анимации
    }
});

document.addEventListener('click', (event) => {
    if (!toggleMenu.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.remove('scale-100', 'opacity-100');
        menu.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
            menu.classList.add('hidden');
        }, 300);
    }
});