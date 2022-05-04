const choices = document.querySelectorAll('.tile');
console.log(choices)

let madeChoice = false;
let choiceOne = null;
let choiceTwo = null;

//event handler to make selection. works, need to compare choices to remove cards that are correctly chosen. Is there a way to make this more DRY on html?
//https://www.w3schools.com/jsref/dom_obj_event.asp
//https://www.w3schools.com/jsref/event_onclick.asp
function makeChoice(e) {
    let target = e.currentTarget;
    target.className = target.className
    .replace('choice', '')
    if (madeChoice == false) {
        madeChoice = true;
        choiceOne = this.target;
        console.log("first guess")
        console.log(target.dataset.color)
        //https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
    } else {
        madeChoice = false;
        choiceTwo = this.target;
        console.log('second guess')
        console.log(target.dataset.color)
    } if (choiceOne.dataset.color === choiceTwo.dataset.color) {//not working properly
        console.log("correct")
    }
    //set timeout for incorrect selections to revert to default color
}

//find way to randomize where the cards are. Probably would have to make the grid in a for loop and not in divs || or find a way to push random 2 pair values to empty dataset on HTML