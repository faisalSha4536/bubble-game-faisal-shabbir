setInterval(function(){

    document.querySelector('#wellcome').style.display = 'none';
    document.querySelector('#main').style.transform = 'scale(1)';
},5000)


let timer = 65;
let score = 0;
let newNumber = 0;

function randomBubble(){

    let clutter = "";
    
    for( let i = 1; i<=171; i++ ){
    
        let rn = Math.floor(Math.random()*100)
        clutter += `<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector('#pbottom').innerHTML = clutter;
}

function decreaseTime(){
    let timeStop = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector('#timeint').textContent = timer;
        }else{
            clearInterval(timeStop);
            document.querySelector('#pbottom').innerHTML = `<h1>Game Over</h1>`;
            setTimeout(function(){
                document.querySelector('#pbottom').innerHTML = `<h1>Your Score<br>${score}</h1>`;
                document.querySelector('#ptop').innerHTML = "";
            },2000)
            
        }
    },1000)
}

function increaseScore(){
    score += 10;
    document.querySelector('#score').textContent = score
}


document.querySelector('#pbottom').addEventListener('click', function(dets){
    let clicked = Number(dets.target.textContent)
    if( clicked === newNumber){
        increaseScore();
        randomBubble();
        newHit();
    }
})


function newHit(){
    newNumber = Math.floor(Math.random()*10);
    document.querySelector('#hit').textContent = newNumber
}

randomBubble();
decreaseTime();
newHit()

