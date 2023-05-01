var player1score = document.querySelector('.player1score')
var player2score = document.querySelector('.player2score')
var currentscore1 = document.querySelector('.currentscore1')
var currentscore2 = document.querySelector('.currentscore2')
var rolldice = document.querySelector('.rolldice')
var player1 = document.querySelector('.player1')
var player2 = document.querySelector('.player2')
var hold = document.querySelector('.hold')
var newgame = document.querySelector('.newgame')
var diceimg = document.querySelector('.diceimg')
var currentplayer = 1
var firstui = document.querySelector('.firstui')
var playgame = document.querySelector('.playgame')
var main = document.querySelector('.main')
var morebtn = document.querySelector('.morebtn')
var close = document.querySelector('.close')
var setting = document.querySelector('.setting')
var overlay = document.querySelector('.overlay')


overlay.addEventListener('click',over)
function over(){
    overlay.classList.add('hiden')
    setting.classList.add('hiden')
}

close.addEventListener('click',closing)
function closing(){
    setting.classList.add('hiden')
    firstui.classList.remove('hiden')
    overlay.classList.add('hiden')

}

morebtn.addEventListener('click',detailing)

function detailing(){
    setting.classList.remove('hiden')
    overlay.classList.remove('hiden')
    
    
}
playgame.addEventListener('click',()=>{
    firstui.classList.add('hiden')
    main.classList.remove('hiden')
    
})

rolldice.addEventListener('click',Rolldice)

function Rolldice(){
    let myNumber = Math.floor(Math.random() * 6 + 1) 
    diceimg.classList.remove('hidden') 
    diceimg.src = `./${myNumber}.png`
    if(myNumber == 1){
        if(currentplayer == 1){
            currentscore1.textContent = 0;
            currentplayer = 2;
        } else{
            currentplayer = 1;
            currentscore2.textContent = 0;
        }
        player1.classList.toggle('color')
        player2.classList.toggle('color')
    } else{
        if(currentplayer == 1){
            currentscore1.textContent=Number(currentscore1.textContent) + myNumber
        }else{
            currentscore2.textContent = Number(currentscore2.textContent) + myNumber
            
        }
    }
    
}
hold.addEventListener('click',holdbutton)


function holdbutton(){
player2.classList.toggle('color')
player1.classList.toggle('color')

if(currentplayer == 1){
    currentplayer = 2;
    diceimg.src = `./1.png`
    player1score.textContent=Number(player1score.textContent) + Number(currentscore1.textContent)

    currentscore1.textContent = 0;
    if(Number(player1score.textContent) >= 50){
        alert("player 1 Win")
        location.reload()
    }
} else{
    currentplayer = 1
    player2score.textContent = Number(player2score.textContent) + Number(currentscore2.textContent)
    diceimg.src = `./1.png`
    currentscore2.textContent = 0;
    if(Number(player2score.textContent) >= 50){
        alert("player 2 win")
        location.reload()
    }
}
}

newgame.addEventListener('click',again)
function again(){
    currentscore1.textContent = 0
    currentscore2.textContent = 0
    player1score.textContent = 0
    player2score.textContent = 0
    diceimg.src = `./1.png`
}




 

