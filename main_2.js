player1_score = 0;
player2_score = 0;
player1_name = localStorage.getItem("player_1_name");
player2_name = localStorage.getItem("player_2_name");

document.getElementById("score_player1").innerHTML = player1_name + ": ";
document.getElementById("score_player2").innerHTML = player2_name + ": ";

document.getElementById("questionTurn").innerHTML = "Question Turn = " + player1_name;
document.getElementById("answerTurn").innerHTML = "Answer Turn = " + player2_name;

document.getElementById("score1").innerHTML = player1_score;
document.getElementById("score2").innerHTML = player2_score;

function buttonSend() {
    number1 = document.getElementById("input1").value;
    number2 = document.getElementById("input2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    console.log("The answer is: "+ actual_answer);

    question = "<h4 id = 'question'>" + number1 + "x" + number2 + "</h4>";
    text_input = "<br> <br> Answer = <input type = 'number' placeholder = 'Enter answer here..' id = 'text_input_answer'>";
    button_check = "<br> <br> <button id = 'button_check' onclick = 'check_answer()' class = 'btn btn-danger'> Check your answer here </button>";
    div_answer_row = question + text_input + button_check;
    document.getElementById("output").innerHTML = div_answer_row;
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
}
question_turn = "player_1";
answer_turn = "player_2";

function check_answer() {
    get_answer = document.getElementById("text_input_answer").value;
    if (get_answer == actual_answer) {
        if (answer_turn == "player_1") {
            player1_score++;
            document.getElementById("score1").innerHTML = player1_score;
            console.log("Player 1 score =" + player1_score);
        }
        else {
            player2_score++;
            document.getElementById("score2").innerHTML = player2_score;
            console.log("Player 2 score =" + player2_score);
        }
    }

    if (question_turn == "player_1") {
        question_turn = "player_2";
        document.getElementById("questionTurn").innerHTML = "Question Turn = " + player2_name;
    }
    else {
        question_turn = "player_1";
        document.getElementById("questionTurn").innerHTML = "Question Turn = " + player1_name;
    }

    if (answer_turn == "player_1") {
        answer_turn = "player_2";
        document.getElementById("answerTurn").innerHTML = "Answer Turn = " + player2_name;
    }
    else {
        answer_turn = "player_1";
        document.getElementById("answerTurn").innerHTML = "Answer Turn = " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}