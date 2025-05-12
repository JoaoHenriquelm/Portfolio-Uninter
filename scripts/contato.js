/* Pegando o formulário */ 
const form = document.querySelector('form');

/* Adicionando um escutador de eventos, mais exatamente no submit do formulário */
form.addEventListener('submit', (e) => {
    /* Prevenindo o comportamento de envio */
    e.preventDefault()

    /* Criando o elemento de notificação e o texto que irá aparecer */
    const notificacao = document.createElement('div');
    notificacao.className = 'notificacao';
    notificacao.textContent = 'Mensagem enviada com sucesso!';

    /* Colocando o elemento no documento */
    document.body.appendChild(notificacao);

    /* Resetando o formulário */
    form.reset();

    /* Removendo a notificação depois de 3 segundos */
    setTimeout(() => {
        notificacao.remove();
    }, 3000); 
})