function getStoryChapter2(name) {

    return {
        currentScene: "starting_place",
        currentChapter: "2",
        player: {
            inventory: [ "ideas",
            ]
        },
        lastActionStory: ``,
        conditionsAchieved: [
        ],
        starting_place: {
            story: `
            Continuing from last time...
            As you follow the white bunny, you start feeling a mild warm sensation 
            throughout  your body. Slowly, your senses give up on you, and you lose 
            consciousness. When you wake up, you realize you are in a different place. 
            There is something peculiar about it. Something has changed, but you can't 
            put your finger on it. For sure, the air is different. It is fresh, and 
            you can breathe easily.You look around for the princess, but she's gone.
            What has happened?
            `,
            story2flag: false,
            story2:`
            You are now in the starting place area. It is warm and sunny outside.The 
            wind is blowing softly. There are several ways to go around.
            `,
            choices: [
                {
                    choice: "library",
                    destination: "library",
                },
                {
                    choice: "house",
                    destination: "house",
                },
                {
                    choice: "bridge end",
                    destination: "bridge_end",
                },
            ],
            items: [
            ],
            image: "starting_place.png",
        },
        library: {
            story: `
            You pass by several house blocks and take several turns. The people you 
            encounter along the way seem to be occupied with their daily activities. 
            You realize you are in a small quiet town. It feels good to be away from 
            the agitation of the big city. A couple more turns, and you reach what 
            seems to be an ancient school. Curiosity drives you in, and you find a 
            library that is open.
            `,
            story2flag: false,
            story2:`
            You are now in the library area. There are several bookcases standing 
            against the wall. Books of all sizes and shapes fill the shelves.
            `,
            choices: [
                {
                    choice: "starting place",
                    destination: "starting_place",
                },
                {
                    choice: "research",
                    destination: "library",
                    story: `
                    You go to the library to do some research, but you realize that now 
                    may not be the best moment. You feel there are some other things to 
                    attend first.
                    `,
                    storyConditionMet:`
                    You start to research the French language. You find a couple of good 
                    books, some old lectures, some tapes, and a few filmstrips. The grammar 
                    and sounds seem so complicated and pretentious, but you stick with it. 
                    After a few hours, you get the basics. You can now understand and also
                    speak 'un peu de francais'.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_morning",],
                        "itemsReturned": ["_Francais",],
                    },
                },
            ],
            items: [
            ],
            image: "library.png",
        },
        house: {
            image: "house.png",
            story: `
            As you walk, you find yourself in front of a small house and decide to
            enter. Inside, you find a desk with a computer, a table, a bed, and a
            very old bookshelf that has several books.
            `,
            story2flag: false,
            story2:`
            You are now in the house area. Everything looks fine. The room is well
            lit and it has a desk with a computer, a table, a bed, and a very old
            bookshelf.
            `,
            choices: [
                {
                    choice: "starting place",
                    destination: "starting_place",
                },
                {
                    choice: "read",
                    destination: "house",
                    story: `
                    You go to the bookshelf to read something. Except a couple of fairy 
                    tales, that stir your imagination, you find most of the books plain 
                    boring, or it could be that you just don't understand them. In any 
                    case, you decide to do something else.
                    `,
                },
                {
                    choice: "play",
                    destination: "map",
                    story: `
                    You go to the desk and turn on the computer. While the computer boots 
                    up, you notice a pair of keys next to the monitor. You start playing 
                    some video games. One of them contains a colourful map that you 
                    can visualize in full-screen mode.
                    `,
                    storyConditionMet:`
                    You start playing some video games. One of them contains a colourful
                    map that you can visualize in full-screen mode.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["ideas",],
                        "itemsReturned": ["keys",],
                    },
                },
                {
                    choice: "eat",
                    destination: "house",
                    story: `
                    You are not hungry at this time of the day.
                    `,
                    storyConditionMet:`
                    You feel hungry so you grab the food you got from the sailor and
                    prepare yourself a nice meal. You take a couple of bites. It's good,
                    it's tasty, in fact, it's the best food you have had lately.
                    Good mix of various nutrients.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["food","_morning"],
                        "itemsReturned": ["_strength",],
                    },
                },
            ],
            items: [
            ],
            
        },

        map: {
            image: "map.jpg",
            story: `
            As you walk, you find yourself in front of a small house and decide to
            enter. Inside, you find a desk with a computer, a table, a bed, and a
            very old bookshelf that has several books.
            `,
            story2flag: false,
            story2:`
            You are now in the house area. Everything looks fine. The room is well
            lit and it has a desk with a computer, a table, a bed, and a very old
            bookshelf.
            `,
            choices: [
                {
                    choice: "house",
                    destination: "house",
                },
            ],
            items: [
            ],
            
        },

    }
}