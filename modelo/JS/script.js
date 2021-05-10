var dados = []

function ApagaRegistro(id) {
    let _cofirm = confirm("Deseja excluir esse cadastro?")

    if (_cofirm) {
        for (let i = 1; i < dados.length; i++) {
            if (dados[i].ID == id) {

                dados.splice(dados.indexOf(id, i))
            }
        }
        PopulaTabela()
    }
}



function PopulaTabela() {
    if (Array.isArray(dados)) {

        localStorage.setItem("__dados__", JSON.stringify(dados))

        $("#table-dados tbody").html("")

        dados.forEach(function(item) {
            //template STRING 
            $("#table-dados tbody").append(`<tr>  
                <td>${item.ID}</td>
                <td>${item.Nome}</td>
                <td>${item.Email}</td>
                <td>${item.CPFouCNPJ}</td>
                <td>${item.Telefone}</td>
                <td>${item.CEP}</td>
                <td>${item.Logradouro}</td>
                <td>${item.Numero}</td>
                <td>${item.Bairro}</td>
                <td>${item.Cidade}</td>
                <td>${item.Estado}</td>
                <td><button type="button" class="btn btn-danger" onclick="javascript:ApagaRegistro(${item.ID});"><i class="fa fa-trash" /></button></td>
            </tr>`)
        })
    }
}

$(function() {
    //excuta ao carregar da tela
    dados = JSON.parse(localStorage.getItem("__dados__"))

    if (dados) {
        PopulaTabela()
    }

    $("#btnSalvar").click(function() {
        //Função salvar no botão Salvar 

        let Nome = $("#txtNome").val()
        let Email = $("#txtEmail").val()
        let CPFouCNPJ = $("#txtCPFouCNPJ").val()
        let Telefone = $("#txtTelefone").val()
        let CEP = $("#txtCEP").val()
        let Logradouro = $("#txtLogradouro").val()
        let Numero = $("#txtNumero").val()
        let Bairro = $("#txtBairro").val()
        let Cidade = $("#txtCidade").val()
        let Estado = $("#txtEstado").val()

        let registro = {}

        registro.Nome = Nome
        registro.Email = Email
        registro.CPFouCNPJ = CPFouCNPJ
        registro.Telefone = Telefone
        registro.CEP = CEP
        registro.Logradouro = Logradouro
        registro.Numero = Numero
        registro.Bairro = Bairro
        registro.Cidade = Cidade
        registro.Estado = Estado

        registro.ID = dados.length + 1
        dados.push(registro)

        alert("Cadastro salvo com sucesso")
        $("#modal-Registro").modal("hide")

        $("#txtNome").val("")
        $("#txtEmail").val("")
        $("#txtCPFouCNPJ").val("")
        $("#txtTelefone").val("")
        $("#txtCEP").val("")
        $("#txtLogradouro").val("")
        $("#txtNumero").val("")
        $("#txtBairro").val("")
        $("#txtCidade").val("")
        $("#txtEstado").val("")


        PopulaTabela()

    })
})