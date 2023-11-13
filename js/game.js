console.log("The javascript file has been loaded.");

let story;

let npcs = {
    player: {
        inventory: [
            "food", "clothes"
        ]
    }
};

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
                data-item=${story[story.currentScene].items[i]} 
                id="radio${(numberOfChoices+i+1)}" 
                type="radio" 
                name="choices">
            <label for="radio${(numberOfChoices+i+1)}">pick ${story[story.currentScene].items[i]}</label>
            <br>
        `;
    }

    return input;
};

function getInventory(){
    let input = "";

    if(npcs.player.inventory){
        for(let i=0; i<npcs.player.inventory.length; i++){
            input += `${npcs.player.inventory[i]}, `;
        }
    }
    input = input.slice(0,input.length-2);

    return input;
}

function getItemsAroundYou(){
    let input = "";

    if(story[story.currentScene].items){
        for(let i=0; i<story[story.currentScene].items.length; i++){
            input += `${story[story.currentScene].items[i]}, `;
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
        <h1>${story[story.currentScene].title}</h1>
        <p>${story[story.currentScene].story}</p>
        ${image}<br>
        <p>
            Inventory: ${getInventory()} <br>
            Around you: ${getItemsAroundYou()}
        <p>
        
        ${getInputs()}
        ${getPickInputs()}
        <br>
        <button id="submit-button">${text}</button>
        `;
    if(story[story.currentScene].image){
        document.querySelector("img").src = `./img/${story[story.currentScene].image}`;
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
                    let item = inputs[i].getAttribute("data-item");

                    //remove item from scene items
                    let index = array.indexOf(item);
                    if (index !== -1) {
                        array.splice(index, 1);
                    }
                    //move item to player inventory
                    npcs.player.inventory.push(item);
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
