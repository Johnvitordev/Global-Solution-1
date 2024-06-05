var toggle = document.getElementById("area_toggle")
var caixa = document.getElementById("caixa")
var chat_bola = document.getElementById("chatbtn")

toggle.addEventListener("click",toggle_btn)
chat_bola.addEventListener("click",toggle_chat)

function toggle_btn(){
    caixa.setAttribute("hidden", "true");
    chat_bola.removeAttribute("hidden");
}
function toggle_chat(){
    chat_bola.setAttribute("hidden", "true");
    caixa.removeAttribute("hidden");
}

document.addEventListener("DOMContentLoaded", function() {
    var opcoesButtons = document.querySelectorAll(".opcoes");
    var conversa = document.getElementById("conversa");

    opcoesButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var clickedText = button.innerText;
            conversa.innerHTML += "<br>" + clickedText;
        });
    });
});
