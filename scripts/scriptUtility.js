/* function play(){
    const homeSection =document.getElementById('home-screen')
    homeSection.classList.add('hidden')
    //console.log(homeSection.classList)
    const playGroundSection =document.getElementById('play-ground')
    playGroundSection.classList.remove('hidden')
    console.log(playGroundSection)
} */

//Utility:::::::
function hideElementById(eleId){
    const element =document.getElementById(eleId);
    element.classList.add('hidden')
} 
function addElementById(eleId){
    const element = document.getElementById(eleId)
    element.classList.remove('hidden')
}

function setBackgoroundColor(eleId){
    const element =document.getElementById(eleId);
    element.classList.add('bg-orange-400')
}

function removeBackgoroundColor(eleId){
    const element =document.getElementById(eleId);
    element.classList.remove('bg-orange-400')
}

function getARandomAlphabet(){
    const alphabetString ='abcdefghijklmnopqrstuvwxyz'
    const alphabets =alphabetString.split('')
    //get a random index between 0 - 25;
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    
    const alphabet = alphabets[index]
    //console.log(index, alphabet)
    return alphabet;
}

function continueGame(){
    const alphabet = getARandomAlphabet();
    //console.log('your random alphabet', alphabet)

    const currentAlphabetElement =document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet;
    setBackgoroundColor(alphabet);
}

function play(){
    hideElementById('home-screen');
    addElementById('play-ground');
    continueGame()
}
function handleKeyUp(event){
    const playerPressed = event.key;
    const cureentAlphabet =document.getElementById('current-alphabet')
    const curAlphabet = cureentAlphabet.innerText;
    const expectedAlphabet = curAlphabet.toLowerCase();

    //console.log('player pressed',playerPressed , 'current key ',expectedAlphabet)
    if(playerPressed === expectedAlphabet){
        console.log('you have presen corrrctly', expectedAlphabet)
        const currentScoreEle = document.getElementById('score-btn');
        const scoreText = currentScoreEle.innerText;
        const currentScore = parseInt(scoreText)
        console.log(currentScore)
        const newScore = currentScore+1; 
        currentScoreEle.innerText = newScore;
        
        removeBackgoroundColor(expectedAlphabet)
        continueGame()
    }else{
        console.log('wrong')
        const currentLifeEle =document.getElementById('life-btn');
        const currentLifeText =currentLifeEle.innerText;
        const currentLife = parseInt(currentLifeText)

        const newLife =currentLife -1;
        currentLifeEle.innerText = newLife; 
    }
}

document.addEventListener('keyup' , handleKeyUp)
