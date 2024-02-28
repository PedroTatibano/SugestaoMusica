

export default function Conferir() {
    const formData = document.querySelector('#myForm'); 
    const nome = formData.querySelector("input[name='nome']").value;
    const selectedValue = formData.querySelector("select[name='Ator']").value;
    const sugestoesLista = document.getElementById('sugestoes-list');

    
    sugestoesLista.innerHTML = '';

   if(nome){

    const saudacao = `Olá, ${nome}! Aqui estão suas recomendações de músicas:`;

    adicionarSugestao(saudacao, sugestoesLista);

    switch (selectedValue) {
        case 'Slipknot':
            adicionarSugestaoComLink('Duality', 'https://www.youtube.com/watch?v=6fVE8kSM43I', sugestoesLista);
            adicionarSugestaoComLink('Psychosocial', 'https://www.youtube.com/watch?v=5abamRO41fE', sugestoesLista);
            break;
        case 'AvengedSevenfold':
            adicionarSugestaoComLink('Nightmare', 'https://www.youtube.com/watch?v=94bGzWyHbu0', sugestoesLista);
            adicionarSugestaoComLink('Afterlife', 'https://www.youtube.com/watch?v=HIRNdveLnJI', sugestoesLista);
            break;
        case 'Black Sabbath':
            adicionarSugestaoComLink('Heaven and Hell', 'https://www.youtube.com/watch?v=RVUK2rtAkJE', sugestoesLista);
            adicionarSugestaoComLink('War Pigs', 'https://www.youtube.com/watch?v=zY5nYmTUfnQ', sugestoesLista);
            break;
        default:
            adicionarSugestao('Nenhuma sugestão disponível para esta opção', sugestoesLista);
    }
}
}

function adicionarSugestao(Sugestao, sugestoesLista) {
    const li = document.createElement('li');
    li.textContent = Sugestao;
    sugestoesLista.appendChild(li);
}
function adicionarSugestaoComLink(Sugestao, linkYoutube, sugestoesLista) {
    const li = document.createElement('li');
    const linkElemento = document.createElement('span');

    linkElemento.textContent = Sugestao;

    li.appendChild(linkElemento);

    li.addEventListener('click', function () {
        window.open(linkYoutube, '_blank');
    });
    sugestoesLista.appendChild(li);
}



