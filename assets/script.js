//Starting Quiz Variables
var startQuiz = document.getElementById('start-quiz');
var startQuizContainer = document.getElementById('start-quiz-container');
//Timer Variables
var timer = 100;
var countdown = document.getElementById('countdown');
//Question 1 Variables
var question1Container = document.getElementById('question1Container')
var question1 = document.getElementById('question1p');
var question1A1 = document.getElementById('button1q1');
var question1A2 = document.getElementById('button2q1');
var question1A3 = document.getElementById('button3q1');
var question1A4 = document.getElementById('button4q1');
//Question 2 Variables
var question2Container = document.getElementById('question2Container')
var question2 = document.getElementById('question2p');
var question2A1 = document.getElementById('button1q2');
var question2A2 = document.getElementById('button2q2');
var question2A3 = document.getElementById('button3q2');
var question2A4 = document.getElementById('button4q2');
//Question 3 Variables
var question3Container = document.getElementById('question3Container')
var question3 = document.getElementById('question3p');
var question3A1 = document.getElementById('button1q3');
var question3A2 = document.getElementById('button2q3');
var question3A3 = document.getElementById('button3q3');
var question3A4 = document.getElementById('button4q3');
// Question 4 Variables
var question4Container = document.getElementById('question4Container')
var question4 = document.getElementById('question4p');
var question4A1 = document.getElementById('button1q4');
var question4A2 = document.getElementById('button2q4');
var question4A3 = document.getElementById('button3q4');
var question4A4 = document.getElementById('button4q4');
//Question 5 Variables
var question5Container = document.getElementById('question5Container')
var question5 = document.getElementById('question5p');
var question5A1 = document.getElementById('button5q1');
var question5A2 = document.getElementById('button5q2');
var question3A3 = document.getElementById('button2q1');
var question3A3 = document.getElementById('button2q1');
//Game Over Variables
var gameOverContainer = document.getElementById('game-over-container');
var initialsInput = document.getElementById('initials');
//High Score Variables
var highscoreContainer = document.getElementById('highscoreContainer');
//Hiding all question Divs
question5Container.style.display ="none";
question4Container.style.display ="none";
question3Container.style.display = "none";
question2Container.style.display = "none";
question1Container.style.display = "none";
gameOverContainer.style.display = "none";
highscoreContainer.style.display = "none";



function startquiz(){
   var myInterval = setInterval(updateCountdown, 1000);

function updateCountdown(){
    countdown.innerHTML = timer;
    timer--;
    if(timer < 0){
    question5Container.style.display ="none";
    question4Container.style.display ="none";
    question3Container.style.display = "none";
    question2Container.style.display = "none";
    question1Container.style.display = "none";
    gameOverContainer.style.display = "block";
    highscoreContainer.style.display = "none";
    clearInterval(myInterval);
    }
}
    startQuizContainer.style.display = "none";
    question1Container.style.display = "block";


    document.getElementById('question1Container').addEventListener('click', function(){
        var target = event.target;
        if(target.id === 'button1q1' || target.id === 'button2q1' || target.id === 'button4q1'){
            question1Container.style.display = "none";
            question2Container.style.display = "block";
            alert("Incorrect");
            timer -= 5;
        }
        else if(target.id === 'button3q1'){
            question1Container.style.display = "none";
            question2Container.style.display = 'block';
}
         else{
             alert('Please click a valid button');
         }
    });
    document.getElementById('question2Container').addEventListener('click', function(){
        var target = event.target;
        if(target.id === 'button1q2' || target.id === 'button2q2' || target.id === 'button4q2'){
                       question2Container.style.display = "none";
                       question3Container.style.display = "block";
                       alert("Incorrect");
                       timer -= 5;
                   }
                   else if(target.id === 'button3q2'){
                       question2Container.style.display = "none";
                       question3Container.style.display = 'block';
        }
                    else{
                        alert('Please click a valid button');
                    }
    })
    document.getElementById('question3Container').addEventListener('click', function(){
        var target = event.target;
        if(target.id === 'button1q3' || target.id === 'button2q3' || target.id === 'button3q3'){
                       question3Container.style.display = "none";
                       question4Container.style.display = "block";
                       alert("Incorrect");
                       timer -=5
                   }
                   else if(target.id === 'button4q3'){
                       question3Container.style.display = "none";
                       question4Container.style.display = 'block';
                   }
                   else{
                       alert("Please click a valid button");
                   }
    })
    document.getElementById('question4Container').addEventListener('click', function(){
        var target = event.target;
        if(target.id === 'button1q4' || target.id === 'button2q4' || target.id === 'button4q4'){
                       question4Container.style.display = "none";
                       question5Container.style.display = "block";
                       alert("Incorrect");
                       timer -= 5
                   }
                   else if(target.id === 'button3q4'){
                    question4Container.style.display = "none";
                    question5Container.style.display = 'block';
                }
                else{
                    alert("Please click a valid button");
                }
    })
    document.getElementById('question5Container').addEventListener('click', function(){
        var target = event.target;
        if(target.id === 'button1q5' || target.id === 'button2q5' || target.id === 'button3q5'){
                       question5Container.style.display = "none";
                       gameOverContainer.style.display = "block";
                       alert("Incorrect");
                       timer -= 5;
                       var score = timer;
                       localStorage.setItem("Score",score);
                       console.log(score);
                       clearInterval(myInterval);
                       
                   }
                   else if(target.id === 'button4q5'){
                    question5Container.style.display = "none";
                    gameOverContainer.style.display = 'block';
                    var score = timer;
                    localStorage.setItem("Score",score);
                    console.log(score);
                    clearInterval(myInterval);
                }
                else{
                    alert("Please click a valid button");
                }
                
    })
    document.getElementById("logHighscore").addEventListener('click', function(){
        let initialsT = document.getElementById("initials").value;
        console.log(initialsT)
        localStorage.setItem("Initials", initialsT);
        
        
        gameOverContainer.style.display = "none";
        highscoreContainer.style.display = "block";
        
 
    })
    function setHighscore(){
       var initialsT = localStorage.getItem("Initials");
       var score = localStorage.getItem("Score");
        var listEl = document.getElementById("highscore-leaderboard");
        var highscore = document.createElement("li");
        highscore.className = "highscores"
        highscore.innerHTML = (initialsT + "-" + score);
        listEl.appendChild(highscore);
    }
setHighscore();
    function clearHighscore(){
        localStorage.removeItem('Score');
        localStorage.removeItem('Initials');
     var highscoreList =   document.getElementById("highscore-leaderboard");
     highscoreList.innerHTML = "";

    }
    document.getElementById("clearHighscore").addEventListener('click', function(){
        clearHighscore();
    })
    document.getElementById("retry").addEventListener('click', function(){
        window.location.reload();
    })
}

startQuiz.onclick = startquiz;





