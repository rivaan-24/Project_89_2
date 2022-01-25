var player1 = "";
var player2 = "";

function addPlayer() {
    player1 = document.getElementById("player_1_name").value;
    localStorage.setItem("player_1_name", player1);
    player2 = document.getElementById("player_2_name").value;
    localStorage.setItem("player_2_name", player2);
    window.location = "index_2.html"
}