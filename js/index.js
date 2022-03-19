var advice_text = document.querySelector("#quote").innerHTML;
const switch_button = document.querySelector("#dice");


//Event Listeners
switch_button.addEventListener("click", getAdvice);


function getAdvice(){
    fetch("https://api.adviceslip.com/advice")
    .then((response) => 
        response.json())
    .then((data) => {
        document.querySelector("#quote").innerHTML = data.slip.advice;
    })
    .catch(function(){
        console.error("You have an error!")
    });

    fetch("https://api.adviceslip.com/advice")
    .then((response) => 
        response.json())
    .then((data) => {
        document.querySelector("#advice-number").innerHTML = data.slip.id;
    })
    .catch(function(){
        console.error("You have an error!")
    });

}