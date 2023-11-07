const button = document.querySelector('#hooray');
const jingle = new Audio('/sounds/jingle.wav') // sound by Mace Studios: https://www.youtube.com/@MacePlace

button.addEventListener('click', function() {
  jingle.play();
});

jingle.addEventListener('ended', function() {
    window.open('https://www.dns-shop.ru/product/10c21e20b7691b80/mikrofon-fifine-k678-cernyj/')
  });
