function getStoryChapter1(name) {

    return {
        currentScene: "central",
        currentChapter: "1",
        player: {
            inventory: [
                "clothes", "flower", "food", "water", "zapatos", "_smile",
            ]
        },
        lastActionStory: ``,
        conditionsAchieved: [
            "test1",
            "test2",
        ],
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
                {
                    choice: "talk",
                    destination: "riverside",
                    story: `
                    You talk to the unicorn and you find out his story. He needs 
                    your help.
                    `,
                    storyConditionMet:`
                    Suddenly he feels rejuvenated, he gets up and
                    runs into the deep forest. He leaves an interesting flower behind him
                    and you pick it up.
                    `,
                    condition: {
                        "conditionMet": false,
                    },
                },
                {
                    choice: "give food",
                    destination: "riverside",
                    story: `
                    You don't have any food left...
                    `,
                    storyConditionMet:`
                    The unicorn eats the little food you offer him. He gets
                    additional strength back..
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["food",],
                        "itemsReturned": ["_unicorn strength"],
                    },
                },
                {
                    choice: "give water",
                    destination: "riverside",
                    story: `
                    You don't have any water left...
                    `,
                    storyConditionMet:`
                    The unicorn drinks the water you have brought him. He gets
                    additional strength back...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["water",],
                        "itemsReturned": ["_unicorn hidratation"],
                    },
                },
            ],
            image: "riverside.png",
        },

        princess: {
            story: `You arrive at another house and choose to enter the main room. It is a
            delightful place. There are some books spread on a nearby
            table. In the middle of the table, there is a vase with some colourful
            flowers, and at the table side there are two comfortable chairs.
            Looking into the background, you see a window and a couple of plants
            showering into the light. You also notice a beautiful princess that is
            looking at you.
            `,
            choices: [
                {
                    choice: "riverside",
                    destination: "riverside",
                },
                {
                    choice: "talk to the princess",
                    destination: "princess",
                    story: `
                    The princess offers you a 
                    cup of coffee and tells you that she had a busy day. She had to
                    leave her office at 3PM, and then run to the university to take an exam.
                    She can now finally rest. You continue to talk. The
                    conversation is nice and stimulating. She feels relaxed now.
                    `,
                    storyConditionMet:`
                    The princess feels relaxed now...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["coffee"],
                    },
                },
                {
                    choice: "give flower",
                    destination: "princess",
                    story: `
                    You don't have any flowers...
                    `,
                    storyConditionMet:`
                    The princess has received your flower and starts smiling.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["flower"],
                        "itemsReturned": ["_smile"],
                    },
                },
                {
                    choice: "give zapatos",
                    destination: "castle",
                    story: `
                    You need a pair of zapatos and make sure the princess is happy...
                    `,
                    storyConditionMet:`
                    You show her the pair of zapatos you have found.
                    They remind you of an Argentinian folk dance called Chacarera, where the man does
                    this pattern with his feet, resembling the attitude of a wild horse. It may look a bit silly, but
                    can be great fun. She finds the zapatos a little bit old fashioned, and shows you
                    her pair of dance shoes. You find the heels just a bit too high and a little bit too
                    sharp, and you ponder on the idea that they could be used as weapons. 
                    She laughs. Everything is fine now and you got a big smile.
                    You take the princess and you go to a new place.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["zapatos","_smile",],
                        "itemsReturned": ["_smile1"],
                    },
                },
            ],
            image: "princess.png",
        },

        goHome: {
            story: `Back at home...
            `,
            image: "attic.png",
            defaultDestination: "central",
            buttonText: "Let's try this again",
        },

        castle: {
            story: `The castle...
            `,
            image: "attic.png",
            defaultDestination: "central",
            buttonText: "Let's try this again",
        },
    }
}