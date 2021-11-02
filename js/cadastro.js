function verificaCampos() {
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var celular = document.getElementById("celular");
    var endereco = document.getElementById("endereco");
    var nrResidencia = document.getElementById("nr-residencia");
    var complemento = document.getElementById("complemento");
    var senha = document.getElementById("senha");
    var repitaSenha = document.getElementById("repita-senha");
    var resposta = document.getElementById("resposta");

    if(nome.value == "") {
        alert("Preencha o campo Nome");
        return false;
    }

    if(email.value == "") {
        alert("Preencha o campo E-mail");
        return false;
    }

    if(celular.value == "") {
        alert("Preencha o campo Celular");
        return false;
    }

    if(endereco.value == "") {
        alert("Preencha o campo Endereço");
        return false;
    }

    if(nrResidencia.value == "") {
        alert("Preencha o campo Nº");
        return false;
    }

    if(complemento.value == "") {
        alert("Preencha o campo Complemento");
        return false;
    }

    if(senha.value == "") {
        alert("Preencha o campo Senha");
        return false;
    }
    if(repitaSenha.value == "") {
        alert("Preencha o campo Repita Senha");
        return false;
    }
    if(repitaSenha.value != senha.value) {
        alert("As senhas não correspondem");
        return false;
    }
    
    if(resposta.value == "") {
        alert("Preencha o campo Resposta");
        return false;
    }
}