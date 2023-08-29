const onForm = () => {

const nomeInput  = document.getElementById("nome")
const emailInput  = document.getElementById("email")
const senhaInput  = document.getElementById("senha")

const nome = nomeInput.value;
const email = emailInput.value;
const senha = senhaInput.value;

const nomeError = document.getElementById("nomeError")
const emailError = document.getElementById("emailError")
const senhaError = document.getElementById("senhaError")

nomeInput.classList.remove("input-error")
emailInput.classList.remove("input-error")
senhaInput.classList.remove("input-error")

nomeError.textContent = ""
emailError.textContent = ""
senhaError.textContent = ""

let hasError = false;

if (nome === "") {
    nomeInput.classList.add("input-error");
    nomeError.textContent = "Digite o nome";
    hasError = true;
}else if(nome.length < 3){
    nomeInput.classList.add("input-error");
    nomeError.textContent = "Digite no minimo 3 caracteres";
    hasError = true;
}
 else if (email === "") {
    emailInput.classList.add("input-error");
    emailError.textContent = "Digite o email";
    hasError = true;
}else if (!email.includes("@")) {
    emailInput.classList.add("input-error");
    emailError.textContent = "Email inválido";
    hasError = true;
}
 else if (senha === "") {
    senhaInput.classList.add("input-error");
    senhaError.textContent = "Digite a senha";
    hasError = true;
}else if(senha.length < 8){
    senhaInput.classList.add("input-error");
    senhaError.textContent = "Senha deve ter no minimo 8 caracteres";
    hasError = true;
}
 else {
    alert("Acesso confirmado");
}

if (hasError) {
    return false; 
}else {
    window.location.href = "segundaPagina.html";
}

}