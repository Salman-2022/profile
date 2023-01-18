const userChoices = document.querySelectorAll('.button')
const man = document.getElementById('human-choice')
const computer = document.getElementById('computer-choice')
const response = document.getElementById('response')
const result = document.getElementById('score')
const restart = document.getElementById('restart')

const game =['rock','paper','scissor']
score = 0

userChoices.forEach(choice=>{
    choice.onclick=()=>
    {
        man.innerHTML=choice.value
        computer.innerHTML = Math.random(game)

        const ram = Math.floor(Math.random()*3)
        // console.log(game[ram])
        computer.innerText=game[ram]
        fight(choice.value,game[ram])
    }
}) 

const fight=(user,bot)=>{
    if(user == bot){
        response.innerText='Draw'
    }
    else if(user == 'rock' && bot == 'paper') {
        lose()
    }
    else if(user == 'paper' && bot == 'scissor'){
        lose()
    }
    else if(user == 'scissor' && bot == 'rock'){
        lose()
    }
    else{
        win()
    }
}

function win(){
    response.innerText='you win'
    score++
    result.innerHTML = score
}
function lose(){
    response.innerText = 'you lose'
    score--
    result.innerText = score
}
restart.onclick=()=>{
    score=0
    result.innerText=score
    response.innerText='START'
    man.innerText='YOU'
    computer.innerText='BOT'
}