console.log("The javascript file has been loaded.");

let story;

const startButton = document.querySelector("#start-button");
const content = document.querySelector("#content");

startButton.addEventListener("click", function() {
    const nameInput = document.querySelector("#name-input");
    story = getStoryChapter1(nameInput.value);
    renderScene();
});

function getInputs(){
    let input = "";
    if(!story[story.currentScene].choices){
        return "";
    }
    for(let i=0; i<story[story.currentScene].choices.length; i++){
        // console.log(story[story.currentScene].choices[i].choice);
        input += `
            <input data-destination=${story[story.currentScene].choices[i].destination} id="radio${(i+1)}" type="radio" name="choices">
            <label for="radio${(i+1)}">${story[story.currentScene].choices[i].choice}</label>
            <br>
        `;
    }

    return input;
};

function getPickInputs(){
    let input = "";
    if(!story[story.currentScene].items){
        return "";
    }
    let numberOfChoices = story[story.currentScene].choices.length;
    for(let i=0; i<story[story.currentScene].items.length; i++){
        // console.log(story[story.currentScene].choices[i].choice);
        input += `
            <input 
                data-destination=${story.currentScene}
                data-action-type="pick"
                data-item=${story[story.currentScene].items[i].name} 
                id="radio${(numberOfChoices+i+1)}" 
                type="radio" 
                name="choices">
            <label for="radio${(numberOfChoices+i+1)}">pick ${story[story.currentScene].items[i].name}</label>
            <br>
        `;
    }

    return input;
};

function getInventory(){
    let input = "";

    if(story.player.inventory){
        for(let i=0; i<story.player.inventory.length; i++){
            input += `${story.player.inventory[i]}, `;
        }
    }
    input = input.slice(0,input.length-2);

    return input;
}

function getItemsAroundYou(){
    let input = "";

    if(story[story.currentScene].items){
        for(let i=0; i<story[story.currentScene].items.length; i++){
            input += `${story[story.currentScene].items[i].name}, `;
        }
    }

    input = input.slice(0,input.length-2);
    return input;
}

function renderScene() {
    let text = "Continue";
    let image = "";
    if(story[story.currentScene].image){
        image = "<img></img>";
    }
    if(story[story.currentScene].buttonText){
        text = story[story.currentScene].buttonText;
    }
    content.innerHTML = `
        <button id="chapter1-button" class="chapter-buttons">Chapter 1</button>
        <button id="chapter2-button" class="chapter-buttons">Chapter 2</button>
        <br>
        <h1>Chapter ${story.currentChapter}</h1>
        <p>${displayLastActionText()}</p>
        <p>${displayStoryText()}</p>
        ${image}<br>
        <p>
            Inventory: ${getInventory()} <br>
            Around you: ${getItemsAroundYou()}
            <br>
            What next?
        <p>
        
        ${getInputs()}
        ${getPickInputs()}
        <br>
        <button id="submit-button">${text}</button>
        `;
    if(story[story.currentScene].image){
        document.querySelector("img").src = `./img/ch${story.currentChapter}/${story[story.currentScene].image}`;
    }
    let submitButton = document.querySelector("#submit-button");
    submitButton.addEventListener("click", getInputValue)

    setChapterButtonsLogic();
};

function getInputValue(){
    // console.log("You clicked the button");
    let inputs = document.querySelectorAll('input[type="radio"]');
    for(let i=0; i < inputs.length; i++){
        if(inputs[i].checked) {
            story.currentScene = inputs[i].getAttribute("data-destination");
            
            //check if action is of type pick
            if(inputs[i].getAttribute("data-action-type")){
                if(inputs[i].getAttribute("data-action-type")==="pick"){
                    let array = story[story.currentScene].items;
                    let itemName = inputs[i].getAttribute("data-item");

                    //find the index of the item and store it in j
                    let index = -1;
                    for(let j=0;j<array.length;j++){
                        if(array[j].name === itemName){
                            index = j;
                            break;
                        } 
                    }

                    //add last action story
                    story.lastActionStory = array[index].story;

                    //remove item from scene items
                    if (index !== -1) {
                        array.splice(index, 1);
                    }
                    //move item to player inventory
                    story.player.inventory.push(itemName);

                    
                }
            }
            
            renderScene();
            return;
        }
    }

    //in case nothing is selected go to a default destination, or do nothing
    if(story[story.currentScene].defaultDestination){
        story.currentScene = story[story.currentScene].defaultDestination;
        renderScene();
    }
    
}

function setChapterButtonsLogic() {
    const chapter1Button = document.querySelector("#chapter1-button");
    chapter1Button.addEventListener("click",()=>{
        console.log("Click");
        //nameInput
        story = getStoryChapter1("");
        renderScene();
    })

    const chapter2Button = document.querySelector("#chapter2-button");
    chapter2Button.addEventListener("click",()=>{
        console.log("Click Chapter 2");
        //nameInput
        story = getStoryChapter2("");
        renderScene();
    })
}

function displayStoryText() {
    let input = "";

    if(story[story.currentScene].story2flag && story[story.currentScene].story2){
        input = story[story.currentScene].story2;
    }
    else {
        input = story[story.currentScene].story;
        story[story.currentScene].story2flag = true;
    }

    return input;
};

function displayLastActionText(){
    //check if there was a last action performed and display the text
    input = "";

    if(story.lastActionStory){
        input = story.lastActionStory;
    }

    return input;

}
