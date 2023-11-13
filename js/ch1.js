function getStoryChapter1(name) {

    return {
        currentScene: "central",
        currentChapter: "1",
        player: {
            inventory: [
                "clothes",
            ]
        },
        lastActionStory: ``,
        central: {
            story: `The story begins here... Once upon a time...<br><br> 
            (Really?! Remember ${name} that you can 'restart' at any point. 
            Buena suerte!)<br><br>
            You are now in the central area. This place looks like a big
            intersection with multiple roads coming in and out. It is a
            beautiful day outside and you feel ready to explore the
            surroundings. There are multiple directions where you can go.
            `,
            story2flag: false,
            story2:`
            You are now in the central area. This place looks like a big
            intersection with multiple roads coming in and out. It is a
            beautiful day outside and you feel ready to explore the
            surroundings. There are multiple directions where you can go.
            `,
            choices: [
                {
                    choice: "attic",
                    destination: "attic",
                },
                {
                    choice: "riverside",
                    destination: "riverside",
                },
                {
                    choice: "tree",
                    destination: "goHome",
                },
                {
                    choice: "cave",
                    destination: "cave",
                },
            ],
            items: [
            ],
            image: "central.png",
        },
        attic: {
            story: `This place looks like the attic of an old building. Although,
            there is only one window, the rays of the sun are sufficient to reveal most of
            the area and you are able to make your way around. Little specks of dust
             are flowing into the
            air and create an interesting visual effect. There are a couple of
            objects in this forgotten place. One of them is rather shiny and looks
            interesting.
            `,
            story2flag: false,
            story2:`
            This place looks like the attic of an old building. Although,
            there is only one window, the rays of the sun are sufficient to reveal most of
            the area and you are able to make your way around. Little specks of dust
            are flowing into the
            air and create an interesting visual effect.
            `,
            choices: [
                {
                    choice: "central",
                    destination: "central",
                },
            ],
            items: [
                {
                    name: "shield",
                    story: `
                    You get closer to the shiny object and pick up the shield.
                    `,
                },
                {
                    name: "food",
                    story: `
                    You take with you some food.
                    `,
                },
            ],
            image: "attic.png",
        },
        tree: {
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
            story: `Back at home...
            `,
            image: "attic.png",
            defaultDestination: "central",
            buttonText: "Let's try this again",
        },
    }
}