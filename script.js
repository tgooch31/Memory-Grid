const choices = document.querySelectorAll('.tile');
//create new variable randomChoices, set random choices = choices.sort randomized array
//container variable will be set to randomized array
console.log(choices)

//button function to start game, set 60 second timer to match all cards. next levels will take 10 seconds off timer down to 30 seconds and you win.

//create variable for container div, array of div choices - .sort for randomize google.

let choiceOne = null;
let choiceTwo = null;

let selections = [];
//event handler to make selection. works, need to compare choices to remove cards that are correctly chosen. Is there a way to make this more DRY on html?
//https://www.w3schools.com/jsref/dom_obj_event.asp
//https://www.w3schools.com/jsref/event_onclick.asp

//compare array length to call back to compare function if statement.
function incorrect() {
    selections[0].className = "tile"
    selections[1].className = "tile"
    choiceOne = null;
    choiceTwo = null;
    }

function correct() {
    if (selections[0].dataset.color === selections[1].dataset.color) {//not working properly
        choiceOne = null;
        choiceTwo = null;
        console.log("correct")
    }
}
function makeChoice(e) {
    let target = e.currentTarget;
    selections.push(target);
    console.log(selections);
    target.className = target.className
    .replace('choice', '')
    if (choiceOne == false) {
        choiceOne = true;
        choiceOne = this.target;
        console.log("first guess")
        console.log(target.dataset.color)
        //https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
    } else if (choiceOne == true && choiceTwo == null){
        choiceTwo = true;
        choiceTwo = this.target;
        console.log('second guess')
        console.log(target.dataset.color)
    } if (selections[0].dataset.color === selections[1].dataset.color) {//not working properly
        // choiceOne = null;
        // choiceTwo = null;
        // console.log("correct")
        correct;
    } else {
        setTimeout(incorrect, 2000)
        }
    }
    //set timeout for incorrect selections to revert to default color


//create function to compare choices at end of choiceTwo statement. if selection1 && selection2 !== -- choiceOne & choiceTwo = null; start over

//array of colors, iterate to create squares.
//find way to randomize where the cards are. Probably would have to make the grid in a for loop and not in divs || or find a way to push random 2 pair values to empty dataset on HTML