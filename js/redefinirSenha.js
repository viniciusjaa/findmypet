function openMessage() {
  var message;
  var emailNumero = document.getElementById("emailNumero");
  var perguntaSeg = document.getElementById("perguntaSeg");

  if (emailNumero.value != '' || perguntaSeg.value != '') {
    message = "Um e-mail para redefinir sua senha lhe foi enviado!";
  } else {
    message = "Preencha um dos campos abaixo!";
  }
  document.getElementById("msg").innerHTML = alert(message);
}