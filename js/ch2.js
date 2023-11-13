function getStoryChapter2(name) {

    return {
        currentScene: "central",
        central: {
            title: "Chapter 2",
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
                {
                    choice: "pick shield",
                    destination: "goHome",
                },
            ],
            image: "central.png",
        },
        tree: {
            title: "Chapter 2",
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
            title: "Chapter 2",
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
            title: "Chapter 2",
            story: `Back at home...
            `,
            image: "attic.png",
            defaultDestination: "central",
            buttonText: "Let's try this again",
        },
    }
}