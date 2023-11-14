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
                    You go to the desk and turn on the computer. While the computer boots 
                    up, you notice a pair of keys next to the monitor. You start playing 
                    some video games. One of them contains a colourful map that you 
                    can visualize in full-screen mode.
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

        bridge_end: {
            image: "bridge_end.png",
            story: `
            You climb a small hill and reach a high land platform from which you 
            can see the surroundings. There is a big bridge in front of you, and at 
            the other end, you notice an outdated car that seems to be abandoned. 
            In the far distance, you can see the white golden shores of the sea and 
            a long dam extending far into the sea. Waves of various sizes and shapes 
            create strips of white foam as they come towards the shore. You cross the 
            bridge, and find yourself at the other end. This place looks like a 
            medium sized cross-road. There is a colourful mural nearby with some 
            shapes engraved on it. To your right side, there is an abandoned old car.
            `,
            story2flag: false,
            story2:`
            You are now in the bridge end area. This place looks like a medium sized \
            cross-road. There is a colourful mural nearby with some shapes engraved \
            on it. To your right side, there is an abandoned old car.
            `,
            choices: [
                {
                    choice: "alley split",
                    destination: "alley_split",
                },
                {
                    choice: "drive stop",
                    destination: "drive_stop",
                },
                {
                    choice: "starting place",
                    destination: "starting_place",
                },
                {
                    choice: "contemplate mural",
                    destination: "bridge_end",
                    story: `
                    "You get closer to the mural. The carvings seem to depict young 
                    people playing different sports on the beach. Some of them are 
                    swimming, some others are playing various other games. There are a
                    couple of seagulls flying above in the air. Several fish schools 
                    swim in the sea, and a group of dolphins are having fun.",
                    `,
                },
                {
                    choice: "drive car",
                    destination: "bridge_end",
                    story: `
                    You try the door of the car, but it's locked. \
                    You try to force it, to no avail.
                    `,
                    storyConditionMet:`
                    You get closer to the car and start inspecting it. From the 
                    outside, it looks rather old and out-fashioned. You wonder if it 
                    is still working. You try the keys that you have, and much to 
                    your surprise, the door opens. Although, it's been awhile since 
                    you last time drove, you start the car and press the gas pedal. 
                    It's rolling!
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["keys",],
                        "itemsReturned": ["car",],
                    },
                },
            ],
            items: [
            ],
            
        },

        alley_split: {
            image: "alley_split.jpg",
            story: `
            You walk along a sand alley covered by the shade of the trees which 
            reside on its sides. On each side, there are buckets of dandelions and 
            other small flowers that have yellow and blue colours. The alley splits 
            into 3 directions. One seems to be heading to the dam, the other one to 
            the sunny beach, and the third one to the summer games area.
            `,
            story2flag: false,
            story2:`
            You are now in the alley split area. On the sides, there are trees,
            buckets of dandelions, and other small flowers that have yellow and 
            blue colours. The alley splits into 3 directions. One seems to be 
            heading to the dam, the other one to the sunny beach, and the third 
            one to the summer games area.
            `,
            choices: [
                {
                    choice: "bridge end",
                    destination: "bridge_end",
                },
                {
                    choice: "summer games",
                    destination: "summer_games",
                },
                {
                    choice: "sunny beach",
                    destination: "sunny_beach",
                },
                {
                    choice: "dam",
                    destination: "dam",
                },
            ],
            items: [
            ],
            
        },

        summer_games: {
            image: "summer_games.png",
            story: `
            You take the route to the right. There are several trees along the way 
            and colourful buildings sprinkled here and there. You reach what seems to 
            be an open basketball court.
            `,
            story2flag: false,
            story2:`
            You are now in the summer games area. In front of you there is an open \n\
            basketball court surrounded by trees.
            `,
            choices: [
                {
                    choice: "alley split",
                    destination: "alley_split",
                },
                {
                    choice: "play",
                    destination: "summer_games",
                    story: `
                    It's been awhile since you played a game, so 
                    you decide to take a couple of shots with a makeshift ball. It seems 
                    your accuracy is not as good as it used to be, and you miss good form. 
                    Perhaps you should 
                    train a bit before trying again.
                    `,
                    storyConditionMet:`
                    You missed playing a good game, so you decide to take a couple \n\
                    of shots. Since you are in good form, you run for the final shot \n\
                    towards the basketball ring, and then jump up in the air as high \n\
                    as you can. This gives you a sense of freedom. You grab the ring \n\
                    with the left hand and with the right hand you do a perfect slam-dunk. \n\
                    You let the ring go, and land back on the ground.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["basketball","_good form"],
                        "itemsReturned": ["_understanding",],
                    },
                },
            ],
            items: [
            ],
            
        },

        sunny_beach: {
            image: "sunny_beach.jpg",
            story: `
            You go to the sunny beach. The sand is warm, so you take your shoes off
            and start walking barefoot. It feels nice. There are several people on
            the beach, and they seem to be having fun. The sea waves are coming and
            going. Where the sand gets wet, you notice an interesting seashell. It's
            one of those big ones that always stand apart.
            `,
            story2flag: false,
            story2:`
            You go to the sunny beach. The sand is warm, so you take your shoes off \n\
            and start walking barefoot. It feels nice. There are several people on \n\
            the beach, and they seem to be having fun.
            `,
            choices: [
                {
                    choice: "alley split",
                    destination: "alley_split",
                },
                {
                    choice: "swim",
                    destination: "sunny_beach",
                    story: `
                    You go to swim, but the water is still cold. Perhaps you should try 
                    again some other time. Make sure you have eaten something before diving in.
                    `,
                    storyConditionMet:`
                    You test the water with your feet. The water is good! You dive in 
                    and go full speed ahead. The sea is calm today, and you advance 
                    effortlessly. After a couple of minutes, you stop swimming to catch 
                    your breath. You turn towards the shore and notice that people are 
                    now only tiny little dots on the beach. You start floating on your 
                    back, enjoying the weightlessness sensation, the free massage of the 
                    water waves, and the caressing touch of the sun rays. You turn again
                    towards the shore and start swimming back until you can touch with 
                    your feet solid ground underneath. The whole thing has been a bit 
                    taxing on your body, but at the same time you feel a sense of relaxation.
                    You feel you are in good form now.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_strength"],
                        "itemsReturned": ["_good form",],
                    },
                },
                {
                    choice: "pick seashell",
                    destination: "sunny_beach",
                    story: `
                    You pick the seashell and put it close to your ear. You hear the 
                    sea waves of a distant beach and some nice tune in the background.
                    `,
                    storyConditionMet:`
                    You already have one.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["seashell",],
                    },
                },
            ],
            items: [
            ],
            
        },

        dam: {
            image: "dam.jpg",
            story: `
            You pass by a beautiful beach with golden sand dunes. In some places, 
            the trees create areas of shade. The sea waves come and go. When you 
            reach the dam, you notice that it advances far into the sea. You walk on 
            it until you reach the middle. Behind the rocks, you notice the fishing 
            rod of a fisherman. You go to his place. He looks calm and relaxed.
            `,
            story2flag: false,
            story2:`
            You are now in the dam area. Behind the rocks, you notice the fishing
            rod of a fisherman. You go to his place. He looks calm and relaxed.
            `,
            choices: [
                {
                    choice: "alley split",
                    destination: "alley_split",
                },
                {
                    choice: "lighthouse",
                    destination: "lighthouse",
                },
                {
                    choice: "watch seahorses",
                    destination: "dam",
                    story: `
                    You get close to the water level to observe the seahorses. They 
                    swim peacefully in the proximity of the algae and rocky formations. 
                    They move in rhythmical patterns with a lot of grace and elegance by 
                    flapping their tiny little wings, and by moving their tails up and 
                    down. They seem not to be bothered at all by the big face that is 
                    looking at them. Although they don't speak much, they make an 
                    impression on you. You take a pen and some paper and do a seahorse 
                    drawing. Looking far into the distance, you notice the end of the dam.
                    `,
                    storyConditionMet:`
                    The seahorses swim peacefully in the proximity of the algae and rocky
                    formations.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["seahorse drawing",],
                    },
                },
                {
                    choice: "talk",
                    destination: "dam",
                    story: `
                    You greet the fisherman and chat a bit about the weather and the 
                    sea. It seems that the other day, there was a thunderstorm with big 
                    lightning bolts, which stirred the sea. Now the sea is calm, but 
                    there are no fish around, only a couple of seahorses.
                    `,
                    storyConditionMet:`
                    You talk to the fisherman and he says there are plenty of fish. 
                    They attract groups of dolphins.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_morning"],
                        "itemsReturned": [],
                    },
                },
            ],
            items: [
            ],
            
        },

        lighthouse: {
            image: "lighthouse.png",
            story: `
            You continue your walk up the dam, and farther into the sea until you
            reach a lighthouse. The lighthouse seems to be closed.
            `,
            story2flag: false,
            story2:`
            You are now in the lighthouse area. The lighthouse seems to be closed.
            It is surrounded by rocks.
            `,
            choices: [
                {
                    choice: "dam",
                    destination: "dam",
                },
                {
                    choice: "climb",
                    destination: "lighthouse",
                    story: `
                    You climb the rocks. From up here, you can see the open sea. The 
                    wind blows softly and cools you off from the heat of the sun. The 
                    sea waves hit the rocks and create big splashes. Some of the water 
                    drips reach you; they are cold. Looking far away into the distance, 
                    you notice a tiny dot floating above the horizon line. It must be a 
                    ship sailing around.
                    `,
                    storyConditionMet:`
                    You get closer to the water and immerse your feet \n\
                    in it. The water is still cool after yesterday's thunderstorm, but \n\
                    the sensation is nice, because it is contrasting with the heat outside.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_fisherman_talked"],
                        "itemsReturned": [],
                    },
                    returnedItems: ["_lighthouse visited"],
                },
                {
                    choice: "climb higher",
                    destination: "house",
                    story: `
                    Perhaps you should return here later to watch the sunset.
                    `,
                    storyConditionMet:`
                    You climb the rocks. From up here, you can see the open sea. The wind is 
                    almost totally absent. You look far into the distance. At the horizon line, 
                    you notice many ships that are sailing towards the sunset. They have goldish/reddish 
                    colours and they come in various shapes and sizes. The sunset rays create a warm 
                    wonderful atmosphere. The strong heat of the day has resided and now it feels just 
                    perfect. There are a few clouds close to the horizon. They are back-lit by the big 
                    red ball of the sun, which is dissolving slowly into the sea. You realize it's evening 
                    now and it's been a very long day. As you feel a bit tired, you decide to head home to 
                    get some rest. You go inside the house and fall asleep in an instant. When you wake up 
                    in the morning, you realize the mermaids song language is a known one. It's French! 
                    Perhaps you should study it a little bit.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_song", "_talked to exotic girl"],
                        "itemsReturned": ["_morning"],
                    },
                },
            ],
            items: [
            ],
            
        },



    }
}