const inputField = document.getElementById('inputField'); 
const headerdoc =document.getElementById('header');
const  gameBoard =document.getElementById('gameBoard');
const box1 = document.getElementById('box1');
const game=document.getElementsByClassName('game');
const restartbtn =document.getElementById('restartbtn');

const cardArray = [
    { name: 'red', color: '#ff0000' },
    { name: 'green', color: '#00ff00' },
    { name: 'blue', color: '#0000ff' },
    { name: 'yellow', color: '#ffff00' },
    { name: 'pink', color: '#ff69b4' },
    { name: 'cyan', color: '#00ffff' },
    { name: 'lightgray', color: '#d3d3d3' },
    { name: 'black', color: '#000000' },
    { name: 'white', color: '#ffffff' },
    { name: 'orange', color: '#ffa500' },
    { name: 'red', color: '#ff0000' },
  { name: 'green', color: '#00ff00' },
  { name: 'blue', color: '#0000ff' },
  { name: 'yellow', color: '#ffff00' },
  { name: 'pink', color: '#ff69b4' },
  { name: 'cyan', color: '#00ffff' },
  { name: 'lightgray', color: '#d3d3d3' },
  { name: 'black', color: '#000000' },
  { name: 'white', color: '#ffffff' },
  { name: 'orange', color: '#ffa500' },
  ];

  let flippedcCards =[];
  let matchedPairs = 0;

  shffulecards ()
  displaycards()


  window.onload = () => {
    gameBoard.style.display = 'none';  // Hide game board
    if (game.length > 0) {
        game[0].style.display = 'none';  // Hide game class
    }
};
restartbtn.addEventListener('click',(event)=>{
    if (event.key === 'Enter') { 
        headerdoc.style.display = 'none'; 
        gameBoard.style.display = 'block';  
        if (game.length > 0) {
            game[0].style.display = 'grid'; 
        }
    } else {
        alert('Another key pressed: please Enter key .....');
    }
})

  

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { 
        headerdoc.style.display = 'none'; 
        gameBoard.style.display = 'block';  
        if (game.length > 0) {
            game[0].style.display = 'grid'; 
        }
    } else {
        alert('Another key pressed: please Enter key .....');
    }
});


function shffulecards (){
    for(let i=cardArray.length-1;i>=0;i--){
        const randIndex =Math.floor(Math.random()*(i+1));
        [cardArray[i],cardArray[randIndex]]=[cardArray[randIndex],cardArray[i]]
        
    }
}

// displaycards
function displaycards(){
    cardArray.forEach((curr,index,arr)=>{
          const card =document.createElement('div');
          card.setAttribute('id',index);
          card.classList.add('cardback');
          card.classList.add('active')
          gameBoard.append(card);
          card.addEventListener('click',flipcart);
    })
}

function flipcart(){
  if (flippedcCards.length < 2 && this.classList.contains('active')) {
    let cardId = this.getAttribute("id");
    flippedcCards.push(this);
    this.classList.remove("cardback");
    this.innerHTML = cardArray[cardId].name;
    if (flippedcCards.length == 2) {
        setTimeout(checkMatch,1000);
    }
  }
}

function checkMatch(){
    const cardId1 = flippedcCards[0].getAttribute('id');
    const cardId2 = flippedcCards[1].getAttribute('id');
    if(cardArray[cardId1].name === cardArray[cardId2].name){
        flippedcCards
        flippedcCards[0].style.border = 'none';
        flippedcCards[0].style.backgroundColor = '#9DBDFF';
        flippedcCards[0].innerHTML = '';
        flippedcCards[0].classList.remove('active');
        flippedcCards[1].classList.remove('active');
        flippedcCards[1].style.border = 'none';
        flippedcCards[1].style.backgroundColor = '#9DBDFF';
        flippedcCards[1].innerHTML = '';
        matchedPairs++;
        checkGameOver();
    }
    else{
        flippedcCards[0].innerHTML = '';
        flippedcCards[0].classList.add('cardback');
        flippedcCards[1].innerHTML = '';
        flippedcCards[1].classList.add('cardback');
    }
    flippedcCards = [];
}
function checkGameOver(){
    if(matchedPairs == cardArray.length/2){
        while(gameBoard.firstChild){
            gameBoard.removeChild(gameBoard.firstChild)
        }
        gameBoard.innerHTML = 'You Won';
        gameBoard.classList.remove('game');
        gameBoard.classList.add('won');
       
    }
}

  