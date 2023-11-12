console.log("The javascript file has been loaded.");

let story;
function getStory(name) {

    return {
        currentScene: "central",
        central: {
            title: "Chapter 1",
            story: `The story begins here... Once upon a time...<br><br> 
            (Really?! Remember ${name} that you can 'restart' at any point. 
            Buena suerte!)<br><br>
            You are now in the central area. This place looks like a big
            intersection with multiple roads coming in and out. It is a
            beautiful day outside and you feel ready to explore the
            surroundings. There are multiple directions where you can go.
            `,
            choices: [
                {
                    choice: "tree",
                    destination: "tree",
                },
                {
                    choice: "riverside",
                    destination: "riverside",
                },
                {
                    choice: "goHome",
                    destination: "goHome",
                },
            ],
            image: "central.png",
        },
        tree: {
            title: "Chapter 1",
            story: `It is where the road has brought you. You would like to advance
            farther, but a giant tree and some luxurious vegetation are blocking
            your way. This natural barrier creates a large area of shade. It looks
            rather impressive and you wonder if there is any way around it...
            On the ground, you notice a sturdy ladder.
            `,
            choices: [
                {
                    choice: "central",
                    destination: "central",
                },
            ],
            image: "tree.png",
        },
        riverside: {
            title: "Chapter 1",
            story: `The road continues down south, and to the left side
            there is a narrow river flowing downstream. You are sitting on the
            right side of the road. From here, you can see green grass and
            a deep forest looming into the background. You hear a strange noise
            coming from nearby. A white unicorn is resting down on the ground.
            He does not look very well...
            `,
            choices: [
                {
                    choice: "central",
                    destination: "central",
                },
                {
                    choice: "princess",
                    destination: "princess",
                },
            ],
        },

        goHome: {
            title: "Chapter 1",
            story: `Back at home...
            `,
            image: "attic.png",
            defaultDestination: "central",
            buttonText: "Let's try this again",
        },
    }
}

const startButton = document.querySelector("#start-button");
const content = document.querySelector("#content");

startButton.addEventListener("click", function() {
    const nameInput = document.querySelector("#name-input");
    story = getStory(nameInput.value);
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
        <h1>${story[story.currentScene].title}</h1>
        <p>${story[story.currentScene].story}</p>
        ${image}<br>
        ${getInputs()}
        <br>
        <button id="submit-button">${text}</button>
        `;
    if(story[story.currentScene].image){
        document.querySelector("img").src = `./img/${story[story.currentScene].image}`;
    }
    let submitButton = document.querySelector("#submit-button");
    submitButton.addEventListener("click", getInputValue)
};

function getInputValue(){
    // console.log("You clicked the button");
    let inputs = document.querySelectorAll('input[type="radio"]');
    for(let i=0; i < inputs.length; i++){
        if(inputs[i].checked) {
            story.currentScene = inputs[i].getAttribute("data-destination");
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
