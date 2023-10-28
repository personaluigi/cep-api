const preencherEndereco = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
}

const preencherBairro = (endereco) => {
    document.getElementById('bairro').value = endereco.bairro;
}

const preencherCidade = (endereco) => {
    document.getElementById('cidade').value = endereco.localidade;
}

const preencherUF = (endereco) => {
    document.getElementById('estado').value = endereco.uf;
}

const buscarCEP = async() => {
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;

    const dados = await fetch(url);
    const endereco = await dados.json()

    preencherEndereco(endereco);
    preencherBairro(endereco);
    preencherCidade(endereco);
    preencherUF(endereco);
}

document.getElementById('cep').addEventListener('focusout', buscarCEP);