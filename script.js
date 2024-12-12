const simButton = document.getElementById('sim');
const naoButton = document.getElementById('nao');
const respostaDiv = document.getElementById('resposta');

simButton.addEventListener('click', () => {
    respostaDiv.style.display = 'block';
});

naoButton.addEventListener('click', () => {
    const x = Math.floor(Math.random() * window.innerWidth - 100);
    const y = Math.floor(Math.random() * window.innerHeight - 50);
    naoButton.style.position = 'absolute';
    naoButton.style.left = x + 'px';
    naoButton.style.top = y + 'px';
});
