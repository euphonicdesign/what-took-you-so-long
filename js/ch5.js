function getStoryChapter5(name) {

    return {
        currentScene: "eyes",
        currentChapter: "5",
        player: {
            inventory: [
                "_look","_hear","_move","_feel","_touch",
            ]
        },
        lastActionStory: ``,
        conditionsAchieved: [
        ],
        eyes: {
            image: "eyes1.png",
            story: `
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "look",
                    destination: "eyes",
                    story: `
                    You notice someone, or something just in front of you.
                    `,
                    storyConditionMet:`
                    You notice someone, or something just in front of you.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["_look"],
                    },
                },
                {
                    choice: "hear",
                    destination: "eyes",
                    story: `
                    You had a different intent.
                    `,
                    storyConditionMet:`
                    Everything is silent. No other sound. You maintain focus on the person in front of you.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_look"],
                        "itemsReturned": ["_hear"],
                    },
                },
                {
                    choice: "move",
                    destination: "eyes",
                    story: `
                    You had a different intent.
                    `,
                    storyConditionMet:`
                    You step closer to her. She keeps looking directly into your eyes.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_look","_hear"],
                        "itemsReturned": ["_move"],
                    },
                },
                {
                    choice: "feel",
                    destination: "eyes",
                    story: `
                    This is different than what you intended.
                    `,
                    storyConditionMet:`
                    You feel her presence. You know her well.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_look","_hear","_move"],
                        "itemsReturned": ["_feel"],
                    },
                },
                {
                    choice: "touch",
                    destination: "eyes",
                    story: `
                    This is different than what you intended.
                    `,
                    storyConditionMet:`
                    You embrace her deeply. You feel one.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_look","_hear","_move","_feel"],
                        "itemsReturned": ["_touch"],
                    },
                },
                {
                    choice: "breath",
                    destination: "train_car",
                    story: `
                    This is different than what you intended.
                    `,
                    storyConditionMet:`
                    This was just a dream... You wake up in the train. It is moving at a very high speed. The nice feeling persists and you feel calm.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_look","_hear","_move","_feel","_touch"],
                        "itemsReturned": [],
                    },
                },
            ],
            items: [
            ],
            
        },

        train_car: {
            image: "train car.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "continue",
                    destination: "train_car2",
                    story: `
                    Continuing from last time...
                    But where should you go now? There are so many ways and so many alternative courses... 
                    `,
                    storyConditionMet:`
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": [],
                    },
                },
            ],
            items: [
            ],
            
        },

        train_car2: {
            image: "train car.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "reflect",
                    destination: "train_car2",
                    story: `
                    As someone once said... head towards beauty...
                    `,
                    storyConditionMet:`
                    As someone once said... head towards beauty...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["_reflect"],
                    },
                },
                {
                    choice: "continue",
                    destination: "watch_window",
                    story: `
                    Not until you know where you want to go next.
                    `,
                    storyConditionMet:`
                    The train continues to travel at a high speed, passing through trees and tunnels, 
                    making sharp slaloms through the mountains. You cannot do anything to slow it 
                    down or stop it. It has a clear objective. Nevertheless, you are happy because 
                    it feels like a real adventure and you are outside your comfort zone. After a 
                    few hours the train reaches a train station and comes to a full stop. That's 
                    good, you were looking forward to arrive at your first destination.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_reflect"],
                        "itemsReturned": [],
                    },
                },
            ],
            items: [
            ],
            
        },

        watch_window: {
            image: "watch window.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "uptown",
                    destination: "uptown",
                },
                
            ],
            items: [
            ],
            
        },

        uptown: {
            image: "uptown.jpg",
            story: `
            You get down and start walking through the city. It is mainly cloudy 
            outside with outbursts of the sun every now and then, and the air is 
            amazingly fresh. As you start exploring the streets, passing a couple 
            of intersections, you realize the city is surrounded by mountains. 
            There is a big sign standing up a hill in the distance. It has few 
            white letters standing out above the trees covering the 
            hill. Do you know that game where the challenge is to find new words 
            by mixing letters? Someone must have liked playing it so much, that 
            they must have decided to create a large scale version of it at the 
            top of the mountain... How could you get up there?
            `,
            story2flag: false,
            story2:`
            The city is surrounded by mountains. 
            There is a big sign standing up a hill in the distance. It has few 
            white letters standing out above the trees covering the 
            hill. How could you get up there?
            `,
            choices: [
                {
                    choice: "walk",
                    destination: "large_building",
                },
                
            ],
            items: [
            ],
            
        },
        large_building: {
            image: "large building.jpg",
            story: `
            You continue walking until you reach a large building. It has a nice 
            and distinctive architecture with a large dome in the middle of it and 
            smaller tower like structures at its sides. The front side, instead of 
            being linear, it describes a concave arch. There is a small green area 
            in front of it with multicolor flowers and some trees. The sidewalk of 
            the main street has groups of yellow tulips planted at its edge.
            `,
            story2flag: false,
            story2:`
            You are in front of a large building. It has a nice 
            and distinctive architecture with a large dome in the middle of it and 
            smaller tower like structures at its sides. There is a small green area 
            in front of it with multicolor flowers and some trees.
            `,
            choices: [
                {
                    choice: "walk",
                    destination: "uptown",
                },
                {
                    choice: "tall building",
                    destination: "tall_building",
                },
                
            ],
            items: [
            ],
            
        },

        tall_building: {
            image: "tall building.jpg",
            story: `
            You go up the streets and you encounter a very tall building made out 
            of large gray bricks. Judging by its appearance and style, it seems 
            to be quite old. Most probably it was built during the medieval times. 
            It has a large clock on one side. 
            `,
            story2flag: false,
            story2:`
            A very tall building made out 
            of large gray bricks stands in fron of you. Judging by its appearance and style, it seems 
            to be quite old. Most probably it was built during the medieval times. 
            It has a large clock on one side. 
            `,
            choices: [
                {
                    choice: "large building",
                    destination: "large_building",
                },
                {
                    choice: "watch clock",
                    destination: "watch_clock",
                    story: `
                    `,
                    storyConditionMet:`
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "check backpack",
                    destination: "open_plaza",
                    story: `
                    The backpack looks empty.
                    `,
                    storyConditionMet:`
                    You feel hungry. You find some snacks in your backpack and start eating. <br>
                    You need to hurry now. You don't know how much time the train wil wait for you...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["snacks"],
                        "itemsReturned": [],
                    },
                },
                
            ],
            items: [
            ],
            
        },

        watch_clock: {
            image: "watch clock.jpg",
            story: `
            The clock's golden arrows are showing the hour. 
            The hours are drawn with roman letters and in the middle there are a couple of stars shinning on a blue background. 
            `,
            story2flag: false,
            story2:`
            The clock's golden arrows are showing the hour. 
            The hours are drawn with roman letters and in the middle there are a couple of stars shinning on a blue background.
            `,
            choices: [
                {
                    choice: "turn back",
                    destination: "tall_building",
                },
            ],
            items: [
                {
                    name: "snacks",
                    story: `
                    You pick up some snacks and put them into your backpack.
                    `,
                },
            ],
            
        },

        open_plaza: {
            image: "open plaza.jpg",
            story: `
            You pass by the building and reach a large open plaza. In the middle of it 
            there is another nice towered building. This one is covered in warm colors, and there's a  
            springwell as well.  
            `,
            story2flag: false,
            story2:`
            You're in a large open plaza. In the middle of it 
            there is another nice towered building. This one is covered in warm colors, and there's a  
            springwell as well.  
            `,
            choices: [
                {
                    choice: "walk",
                    destination: "high_school",
                    story: `
                    You feel a bit lost at the moment. You are not sure where to go next...
                    `,
                    storyConditionMet:`
                    You continue to walk down the streets behind the plaza. The elevation of the ground 
                    is higher here since you are approaching the base of the hill. You encounter a high-school 
                    with a large courtyard and several sport fields. There are several groups of children 
                    playing around. Your recall one of the bright students you met while you were attending 
                    the university classes. He had told you he was originally from this area. Chances are 
                    he must have graduated the same educational institution that sits in front of you. 
                    Thinking retrospectively, it must be a good one. 
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_watch springwell"],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "watch springwell",
                    destination: "open_plaza",
                    story: `
                    You go close to the springwell and start looking at the water jets. As you follow 
                    the trajectory of the water that is being thrown up in the air, your eyes move 
                    up and they settle on the hill behind the plaza. You notice the sign at the 
                    top of it with the large letters standing above the trees. You are quite close.
                    `,
                    storyConditionMet:`
                    You go close to the springwell and start looking at the water jets. As you follow 
                    the trajectory of the water that is being thrown up in the air, your eyes move 
                    up and they settle on the hill behind the plaza. You notice the sign at the 
                    top of it with the large letters standing above the trees. You are quite close.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["_watch springwell"],
                    },
                },
            ],
            items: [
                {
                    name: "water",
                    story: `
                    You pick up some water and put it into your backpack.
                    `,
                },
            ],
            
        },

        high_school: {
            image: "high-school.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "continue",
                    destination: "city_edge",
                },
            ],
            items: [
            ],
            
        },

        city_edge: {
            image: "city edge.jpg",
            story: `
            You continue walking until you reach the edge of the city, the nearby hill or 
            mountain. You are on higher ground here and you have a better view over the 
            city. You notice some tennis fields and some running tracks nearby. The ground 
            of the fields has that brick-like specific color, which matches the roofs of 
            the buildings. Overall the aesthetics of the city resemble that classy medieval 
            town look. There are also a couple of tower structures connected by fortified 
            walls. It must have been an important city erected  between the mountains centuries 
            ago and preserved quite well.
            `,
            story2flag: false,
            story2:`
            You are at the edge of the city. You are on higher ground here and you have a better 
            view over the city. 
            Overall the aesthetics of the city resemble that classy medieval 
            town look. There are also a couple of tower structures connected by fortified 
            walls. It must have been an important city erected between the mountains centuries 
            ago and preserved quite well.
            `,
            choices: [
                {
                    choice: "forest",
                    destination: "forest",
                    story: `
                    Not before taking a photo...
                    `,
                    storyConditionMet:`
                    You return to your way up the hill, and enter the forest. There is 
                    so much light greenery around you. The trees are tall.
                    The vegetation is luxuriant. The air is so clean... You hear the music of the forest. 
                    The leafs moving, the birds singing, the steps you take, all of 
                    these creates an atmospshere that feels peaceful and relaxing... 
                    
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["paraglider photo"],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "check backpack",
                    destination: "city_edge",
                    story: `
                    You check your backpack. While looking inside you find your good old camera.
                    `,
                    storyConditionMet:`
                    You got what you want already.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["camera"],
                    },
                },
                {
                    choice: "check camera",
                    destination: "city_edge",
                    story: `
                    Seems you have lost your camera. You can't find it anymore...
                    `,
                    storyConditionMet:`
                    While checking your camera, you discover its zoom levels. Might come handy later.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["camera"],
                        "itemsReturned": ["_zoom levels"],
                    },
                },
                {
                    choice: "use camera",
                    destination: "paraglider",
                    story: `
                    You don't have one or you don't know how to use it...
                    `,
                    storyConditionMet:`
                    As you look across towards the other end of the city and 
                    across rooftops, you notice another smaller hill covered 
                    by the forest. There is a floating dot above the trees. 
                    That's interesting.
                    You leverage the lens of your camera to zoom in. The floating 
                    dot seems to be a man doing paragliding above the trees of 
                    the hill just above the horizon line. 
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["camera", "_zoom levels"],
                        "itemsReturned": [],
                    },
                },
            ],
            items: [
            ],
            
        },

        paraglider: {
            image: "paraglider.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "continue",
                    destination: "city_edge",
                },
                {
                    choice: "take paraglider photo",
                    destination: "paraglider",
                    story: `
                    You take a photo of the paraglider...
                    `,
                    storyConditionMet:`
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["paraglider photo"],
                    },
                },
            ],
            items: [
            ],
            
        },

        forest: {
            image: "forest.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            You are in the forest. You can hear its music.  
            The leafs moving, the birds singing, the steps you take, all of 
            these creates an atmospshere that feels peaceful and relaxing... 
            `,
            choices: [
                {
                    choice: "continue",
                    destination: "forest",
                },
            ],
            items: [
            ],
            
        },

    }
}