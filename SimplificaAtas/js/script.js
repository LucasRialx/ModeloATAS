let produto = { nome: '', descricao: '', imagem: '' };

function abrirModal(nome, descricao, imagem) {
    produto.nome = nome;
    produto.descricao = descricao;
    produto.imagem = imagem;

    const conteudo = `
        <h3>${nome}</h3>
        <img src="${imagem}" alt="${nome}" style="width: 100%; max-height: 250px; object-fit: cover; border-radius: 8px; margin-bottom: 10px;">
        <p>${descricao}</p>
        <div class="campo-quantidade">
            <label for="quantidade">Quantidade:</label>
            <input type="number" id="quantidade" min="1" value="1" required>
        </div>
        <button class="botao-continuar" onclick="avancarFormulario()">Continuar</button>

    `;

    document.getElementById('conteudo-modal').innerHTML = conteudo;
    document.getElementById('modal-orcamento').style.display = 'flex';
}

function avancarFormulario() {
    const qtd = document.getElementById('quantidade').value;
    const form = `
        <h3>Orçamento: ${produto.nome}</h3>
        <form action="mailto:contato@simplificaatas.com" method="POST" enctype="text/plain">
            <input type="hidden" name="Produto" value="${produto.nome}">
            <input type="hidden" name="Quantidade" value="${qtd}">
            <label>Nome:<br><input type="text" name="Nome" required></label>
            <label>E-mail Corporativo:<br><input type="email" name="Email" required></label>
            <label>Telefone:<br><input type="tel" name="Telefone" required></label>
            <label>Nome da Empresa:<br><input type="text" name="Empresa" required></label>
            <label>CNPJ:<br><input type="text" name="CNPJ" required></label>
            <button type="submit" class="botao-continuar">Enviar Orçamento</button>

        </form>
    `;
    document.getElementById('conteudo-modal').innerHTML = form;
}

function fecharModal() {
    document.getElementById('modal-orcamento').style.display = 'none';
}