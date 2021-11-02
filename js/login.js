function openMessage() {
  var message;
  var fname = document.getElementById("fname");
  var lname = document.getElementById("lname");

  if (lname.value != '' && fname.value != '') {
    message = "Bem-Vindo!";
  } else {
    message = "Não foi possível fazer login! Preencha todos os campos";
  }

  document.getElementById("msg").innerHTML = alert(message);
  }
