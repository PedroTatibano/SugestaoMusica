import './style.css';
import Conferir from './conferir';

document.querySelector('#app').innerHTML = `
    <div>
        <main>
            <form id="myForm" class="formulario">
                <input type="text" placeholder="Escreva seu nome" name="nome" class="InputdeLeigo" required />
                <select name="Ator" id="lang" required>
                    <option value="select" disabled selected>Selecione um cantor</option>
                    <option value="Slipknot">Slipknot</option>
                    <option value="AvengedSevenfold">AvengedSevenfold</option>
                    <option value="Black Sabbath">Black Sabbath</option>
                </select>
  
                <button type="button" class="butao">Exibir Sugestões</button>
            </form>
            
            <ul id="sugestoes-list"></ul>
        </main>
    </div>
`;

document.querySelector('.butao').addEventListener('click', function(event) {
    if (document.getElementById('myForm').checkValidity()) {
        event.preventDefault();
        Conferir();
    } else {
        alert('Por favor, preencha o campo obrigatório.');
    }
});
