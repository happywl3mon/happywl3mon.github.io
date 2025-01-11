const h1 = document.getElementById('h1')
const clock = document.getElementById('clock');
const day = document.getElementById('DayToday');

document.getElementById('font').addEventListener('change', function() {
    const selectedFont = this.value;

    const styleElement = document.querySelector('style');
    styleElement.innerHTML = `* { font-family: '${selectedFont}'; }`;
});