function getStoryChapter6(name) {

    return {
        currentScene: "central_train_station",
        currentChapter: "6",
        player: {
            inventory: ["camera","_docile dog", "_guard recommendation", "_way forward", "_fisherman recommendation",
            ]
        },
        lastActionStory: ``,
        conditionsAchieved: [
        ],
        central_train_station: {
            image: "central train station.jpg",
            story: `
            You are at the Central Train Station.
            `,
            story2flag: false,
            story2:`
            You are at the Central Train Station.
            `,
            choices: [
                {
                    choice: "go to Breaza",
                    destination: "breaza",
                },
                {
                    choice: "go to Iasi",
                    destination: "iasi",
                },
                {
                    choice: "return home",
                    destination: "theend",
                    story: `
                    You need a couple more photos and make someone smile before you return home.
                    `,
                    storyConditionMet:`
                    The train returns to the city with the big campus. You return to your place 
                    and lie down on your bed. You feel tired, but happy that You have travelled 
                    quite a lot, seen many beautiful places, and encountered many interesting people. 
                    Then  you become pensative and get lost in your own thoughts... Still no sign 
                    from the princess...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["rose photo", "palace photo", "_smile"],
                        "itemsReturned": [],
                    },
                },
            ],
            items: [
            ],
            
        },

        breaza: {
            image: "breaza.jpg",
            story: `
            You are in Breaza.
            `,
            story2flag: false,
            story2:`
            You are in Breaza.
            `,
            choices: [
                {
                    choice: "return to Central Station",
                    destination: "central_train_station",
                },
                {
                    choice: "explore Breaza",
                    destination: "breaza2",
                },
                {
                    choice: "go to Sinaia",
                    destination: "sinaia",
                },
                {
                    choice: "go to Azuga",
                    destination: "azuga",
                    story: `
                    Not before you get a recommendation of some sort...
                    `,
                    storyConditionMet:`
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_fisherman recommendation"],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "go to Predeal",
                    destination: "predeal",
                },
                
            ],
            items: [
            ],
            
        },
        breaza2: {
            image: "breaza2.jpg",
            story: `
            Breaza is situated atop of a hilly area covered by trees. There are numerous houses around having beautiful gardens with colored flowers.
            `,
            story2flag: false,
            story2:`
            Breaza is situated atop of a hilly area covered by trees. There are numerous houses around having beautiful gardens with colored flowers.
            `,
            choices: [
                {
                    choice: "Breaza station",
                    destination: "breaza",
                },
                {
                    choice: "old bench",
                    destination: "breaza3",
                },
                {
                    choice: "garden",
                    destination: "breaza4",
                    story: `
                    You cannot pass... A big dog is guarding the way.
                    `,
                    storyConditionMet:`
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_docile dog"],
                        "itemsReturned": [],
                    },
                },

                {
                    choice: "spruce tree",
                    destination: "breaza5",
                    story: `
                    You cannot pass... A big dog is guarding the way.
                    `,
                    storyConditionMet:`
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_docile dog"],
                        "itemsReturned": [],
                    },
                },
            ],
            items: [
            ],
            
        },

        //old bench
        breaza3: {
            image: "breaza3.jpg",
            story: `
            You find an old bench.
            `,
            story2flag: false,
            story2:`
            You find an old bench.
            `,
            choices: [
                {
                    choice: "explore Breaza",
                    destination: "breaza2",
                },
                {
                    choice: "white flower",
                    destination: "breaza3",
                    story: `
                    As you walk through the streets you find an interesting white flower.
                    `,
                    storyConditionMet:`
                    As you walk through the streets you find an interesting white flower.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["white flower"],
                    },
                },
                {
                    choice: "big dog",
                    destination: "breaza3",
                    story: `
                    A big dog is guarding the way forward... <em>A lion might help here...</em>
                    `,
                    storyConditionMet:`
                    You show the dog a picture of the lion statue you have encountered in Iasi. The dog becomes docile and let you pass along.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_lion encountered"],
                        "itemsReturned": ["_docile dog"],
                    },
                },
                {
                    choice: "pick cherry",
                    destination: "breaza3",
                    story: `
                    A cherry tree! How lovely! You would love to pick up one of the cherries, but the big dog does not let you pass.
                    `,
                    storyConditionMet:`
                    You pick up a cherry.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_docile dog"],
                        "itemsReturned": ["cherry"],
                    },
                },
                {
                    choice: "pick fir cone",
                    destination: "breaza3",
                    story: `
                    Several fir cones are lying on the ground. You pick one of them.
                    `,
                    storyConditionMet:`
                    You already have one.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["fir cone"],
                    },
                },
            ],
            items: [
            ],
            
        },

        //garden
        breaza4: {
            image: "breaza4.jpg",
            story: `
            You continue to stroll along Breaza's streets encountering several things along the way.
            `,
            story2flag: false,
            story2:`
            You continue to stroll along Breaza's streets encountering several things along the way.
            `,
            choices: [
                {
                    choice: "explore Breaza",
                    destination: "breaza2",
                },
                {
                    choice: "watch gate portal",
                    destination: "breaza4",
                    story: `
                    There is some sort of gate leading to nowhere. That's odd...
                    `,
                    storyConditionMet:`
                    There is some sort of gate leading to nowhere. That's odd...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["_gate portal 1"],
                    },
                },
                {
                    choice: "use gate portal",
                    destination: "timisoara6",
                    story: `
                    The portal does not work...
                    `,
                    storyConditionMet:`
                    The portal teleports you directly to Timisoara... That's interesting.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_gate portal 1", "_gate portal 2"],
                        "itemsReturned": ["_Timisoara clock started"],
                    },
                },

                {
                    choice: "pick chamomile flowers",
                    destination: "breaza4",
                    story: `
                    You pick up a couple of chamomile flowers.
                    `,
                    storyConditionMet:`
                    You have enough.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["chamomile flowers"],
                    },
                },
                {
                    choice: "pick rose",
                    destination: "breaza4",
                    story: `
                    You pick up a rose and take a photo of it.
                    `,
                    storyConditionMet:`
                    You already have one.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["rose flower", "rose photo"],
                    },
                },
                {
                    choice: "pick poppy flower",
                    destination: "breaza4",
                    story: `
                    You pick up a poppy flower.
                    `,
                    storyConditionMet:`
                    You have enough.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["poppy flower"],
                    },
                },
            ],
            items: [
            ],
            
        },

        //spruce tree
        breaza5: {
            image: "breaza5.jpg",
            story: `
            Continuing along the path you find a spruce tree.
            `,
            story2flag: false,
            story2:`
            You are in the spruce tree area.
            `,
            choices: [
                {
                    choice: "explore Breaza",
                    destination: "breaza2",
                },
                {
                    choice: "watch bee",
                    destination: "breaza5",
                    story: `
                    You watch the bee cross-fertilizing the flowers. That's interesting...
                    `,
                    storyConditionMet:`
                    You watch the bee cross-fertilizing the flowers. That's interesting...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["_bee watched", "bee 1"],
                    },
                },

                {
                    choice: "sit on bench",
                    destination: "breaza5",
                    story: `
                    The bench looks rather old and fragile. You prefer not to...
                    `,
                    storyConditionMet:`
                    The bench looks rather old and fragile. You prefer not to...
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

        iasi: {
            image: "iasi.jpg",
            story: `
            You arrive at Iasi. 
            `,
            story2flag: false,
            story2:`
            You are in Iasi.
            `,
            choices: [
                {
                    choice: "return to Central Station",
                    destination: "central_train_station",
                },
                {
                    choice: "explore Iasi",
                    destination: "iasi2",
                },
            ],
            items: [
            ],
            
        },

        iasi2: {
            image: "iasi2.jpg",
            story: `
            You are exploring Iasi. It is a beautiful city and the people are friendly. There are many universities around, beautiful parks and a big palace. 
            `,
            story2flag: false,
            story2:`
            You are exploring Iasi. It is a beautiful city and the people are friendly. There are many universities around, beautiful parks and a big palace.
            `,
            choices: [
                {
                    choice: "Iasi station",
                    destination: "iasi",
                },
                {
                    choice: "park",
                    destination: "iasi3",
                },
                {
                    choice: "artizanal fountain",
                    destination: "iasi4",
                },
                {
                    choice: "botanical garden",
                    destination: "iasi5",
                },
                {
                    choice: "palace",
                    destination: "iasi6",
                },
                
            ],
            items: [
            ],
            
        },

        //iasi park
        iasi3: {
            image: "iasi3.jpg",
            story: `
            You are in the park.
            `,
            story2flag: false,
            story2:`
            You are in the park.
            `,
            choices: [
                {
                    choice: "explore Iasi",
                    destination: "iasi2",
                },
                {
                    choice: "watch king statue",
                    destination: "iasi3",
                    story: `
                    Numerous statues of past kings are spread throughout the city. You take note of their names.
                    `,
                    storyConditionMet:`
                    Numerous statues of past kings are spread throughout the city. You take note of their names.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["_king names"],
                    },
                },
                {
                    choice: "attend university classes",
                    destination: "iasi3",
                    story: `
                    It is true that there are so many universities around, however you don't need to do that anymore. 
                    You've had your fair share of class attendance in the past. You can just relax now.
                    `,
                },
                {
                    choice: "watch lion statue",
                    destination: "iasi3",
                    story: `
                    Another thing that you notice is the lion statues.
                    `,
                    storyConditionMet:`
                    Another thing that you notice is the lion statues.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["_lion encountered"],
                    },
                },
                {
                    choice: "observe sparrow",
                    destination: "iasi3",
                    story: `
                    Down the ground there a couple of chalk drawings. A sparrow is hopping around.
                    `,
                    storyConditionMet:`
                    Down the ground there a couple of chalk drawings. A sparrow is hopping around.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": [],
                    },
                },

                {
                    choice: "stump flowers",
                    destination: "iasi3",
                    story: `
                    From one of the tree stumps inside the park, multicolored flowers have grown up.
                    `,
                    storyConditionMet:`
                    From one of the tree stumps inside the park, multicolored flowers have grown up.
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

        //artizanal fountain
        iasi4: {
            image: "iasi4.jpg",
            story: `
            You are in the artizanal fountain area.
            `,
            story2flag: false,
            story2:`
            You are in the artizanal fountain area.
            `,
            choices: [
                {
                    choice: "explore Iasi",
                    destination: "iasi2",
                },
                {
                    choice: "fight dragon",
                    destination: "iasi4",
                    story: `
                    In the middle of the artizanal fountain there is a mighty dragon head rising up. A nearby kid is playing with a stick near the fountain. 
                    Should you attack the dragon? Maybe not this time around... The kid might have a better go at it.  
                    `,
                    storyConditionMet:`
                    Will let the kid have a go at it.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["_dragon encountered"],
                    },
                },
                {
                    choice: "observe tree",
                    destination: "iasi4",
                    story: `
                    There's a tree in the middle of the pavement... The tree is more important than the pedestrians' way. 
                    `,
                    storyConditionMet:`
                    There's a tree in the middle of the pavement...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": [],
                    },
                },

                {
                    choice: "pigeon",
                    destination: "iasi4",
                    story: `
                    There's a pigeon. He follows some sort of pattern on the ground. 
                    `,
                    storyConditionMet:`
                    You watch the pattern that the pigeon is making on ground. You now have a better understanding of it.
                    Seems to be indicating some sort of direction. 
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_poster watched"],
                        "itemsReturned": ["_pigeon pattern observed"],
                    },
                },
            ],
            items: [
            ],
            
        },

        //botanical garden
        iasi5: {
            image: "iasi5.jpg",
            story: `
            You head up towards the botanical garden.
            `,
            story2flag: false,
            story2:`
            You are at the botanical garden.
            `,
            choices: [
                {
                    choice: "explore Iasi",
                    destination: "iasi2",
                },
                {
                    choice: "bicycles",
                    destination: "iasi5",
                    story: `
                    Not this time. Walking is better.
                    `,
                    storyConditionMet:`
                    Not this time. Walking is better.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["_Iasi bicycle"],
                    },
                },
                {
                    choice: "water lilies",
                    destination: "iasi5",
                    story: `
                    You watch the water lilies. They look nice. You pick one.
                    `,
                    storyConditionMet:`
                    You watch the water lilies.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["lilie"],
                    },
                },
                {
                    choice: "give bait",
                    destination: "iasi5",
                    story: `
                    There's someone fishing in one of the ponds. He needs some bait to attract the fish. 
                    `,
                    storyConditionMet:`
                    You offer the fisherman the cherry you have picked up from Breaza. What kind of bait is this? 
                    What kind of fish will it attract? Nevertheless the fisherman offers you his thanks and recommends
                    you to visit other cities as well, like for example Azuga.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["cherry"],
                        "itemsReturned": ["_fisherman recommendation"],
                    },
                },
                {
                    choice: "green house",
                    destination: "iasi5",
                    story: `
                    You enter the green house. Marvellous plants appear in front of you. 
                    `,
                    storyConditionMet:`
                    You enter the green house. Marvellous plants appear in front of you. 
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

        //palace
        iasi6: {
            image: "iasi6.jpg",
            story: `
            You are near the palace. 
            `,
            story2flag: false,
            story2:`
            You are near the palace.
            `,
            choices: [
                {
                    choice: "explore Iasi",
                    destination: "iasi2",
                },
                {
                    choice: "watch palace",
                    destination: "iasi6",
                    story: `
                    Unfortunatelly, there's a big barrier that is blocking the passage to it. The palace is still under construction.
                    Nevertheless, you can still grab a photo of it from the distance.
                    `,
                    storyConditionMet:`
                    Unfortunatelly, there's a big barrier that is blocking the passage to it. The palace is still under construction.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["palace photo"],
                    },
                },
                {
                    choice: "watch horses",
                    destination: "iasi6",
                    story: `
                    In the front of the pallace there's an adorned carriage with two mighty horses in front of it.
                    `,
                    storyConditionMet:`
                    In the front of the pallace there's an adorned carriage with two mighty horses in front of it.
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

        sinaia: {
            image: "sinaia.jpg",
            story: `
            You are in Sinaia.
            `,
            story2flag: false,
            story2:`
            You are in Sinaia.
            `,
            choices: [
                {
                    choice: "return to Breaza",
                    destination: "breaza",
                },
                {
                    choice: "explore Sinaia",
                    destination: "sinaia2",
                },
                
                
            ],
            items: [
            ],
            
        },

        sinaia2: {
            image: "sinaia2.jpg",
            story: `
            You have arrived to Sinaia, e nearby winter-time resort. As you walk throughout the town 
            you notice the statue of a lady carrying some water. There is a castle as well and the views
            are magnificent.
            `,
            story2flag: false,
            story2:`
            You have arrived to Sinaia, e nearby winter-time resort. As you walk throughout the town 
            you notice the statue of a lady carrying some water. There is a castle as well and the views
            are magnificent.
            `,
            choices: [
                {
                    choice: "Sinaia station",
                    destination: "sinaia",
                    
                },
                {
                    choice: "upstream",
                    destination: "sinaia5",
                },
                {
                    choice: "castle",
                    destination: "sinaia4",
                },
                {
                    choice: "top",
                    destination: "sinaia6",
                },
            ],
            items: [
            ],
            
        },

        //castle
        sinaia4: {
            image: "sinaia4.jpg",
            story: `
            You are in castle area.
            `,
            story2flag: false,
            story2:`
            You are in castle area.
            `,
            choices: [
                {
                    choice: "explore Sinaia",
                    destination: "sinaia2",
                },

                {
                    choice: "watch bear statue",
                    destination: "sinaia4",
                    story: `
                    You watch the statue of a bear. One of the "locals" so to speak.
                    `,
                    storyConditionMet:`
                    You watch the statue of a bear. One of the "locals" so to speak.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "watch dog statue",
                    destination: "sinaia4",
                    story: `
                    You watch the statue of a dog. Looks like a watch-dog.
                    `,
                    storyConditionMet:`
                    You watch the statue of a dog. Looks like a watch-dog.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "watch lady statue",
                    destination: "sinaia4",
                    story: `
                    You watch the statue of a lady. Her chest is uncovered. Hope she does not get a cold!
                    `,
                    storyConditionMet:`
                    You watch the statue of a lady. Her chest is uncovered. Hope she does not get a cold!
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

        sinaia5: {
            image: "sinaia5.jpg",
            story: `
            You are walking upstream. The scenery around here is impressive.
            `,
            story2flag: false,
            story2:`
            You are walking upstream. The scenery around here is impressive.
            `,
            choices: [
                {
                    choice: "explore Sinaia",
                    destination: "sinaia2",
                },
                {
                    choice: "use canon",
                    destination: "sinaia5",
                    story: `
                    You encounter a canon. Using it is out of the question for the time being.
                    `,
                    storyConditionMet:`
                    What if? What if you shot the canon? Would that help? After you shoot the 
                    canon, you hear a loud noise out in the distance.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_guard met"],
                        "itemsReturned": ["_canon shot"],
                    },
                },
                {
                    choice: "watch lady statue",
                    destination: "sinaia5",
                    story: `
                    You notice the statue of a lady carrying a water vase on her shoulder.
                    `,
                    storyConditionMet:`
                    You notice the statue of a lady carrying a water vase on her shoulder.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "watch spring",
                    destination: "sinaia5",
                    story: `
                    You get closer to a nearby spring and notice a plastic bottle of water stuck into a fallen branch.
                    Apparently, some of the people don't see the consequence of not minimizing their plastic consumption, 
                    and do not even consider how to properly dispose the packaging of everyday products. It's a pity! 
                    In situations like these, it's the little things that matter. Assuming more responsibility might help.
                    You pick up the plastic bottle and remove the bottleneck. 
                    `,
                    storyConditionMet:`
                    You watch the nearby spring flowing downstream...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["plastic bottle"],
                    },
                },
            ],
            items: [
            ],
        },

        //top
        sinaia6: {
            image: "sinaia6.jpg",
            story: `
            You continue climbing upstream until you reach the top of the mountain.
            `,
            story2flag: false,
            story2:`
            You are at the top of the mountain.
            `,
            choices: [
                {
                    choice: "explore Sinaia",
                    destination: "sinaia2",
                },
                {
                    choice: "talk to motorcyclist",
                    destination: "sinaia6",
                    story: `
                    A black motorcycle passes by. Vuuuummmm...
                    `,
                    storyConditionMet:`
                    Vuuuummmm...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "talk to guard",
                    destination: "sinaia6",
                    story: `
                    Close by there's a building with some antennas on top and a sleeping guard next to it.
                    You try to awake the guard, but fail to do so...
                    `,
                    storyConditionMet:`
                    The guard is awake now. Apparently some loud noise disturbed his sleep. He recommends that you visit Sibiu...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_canon shot"],
                        "itemsReturned": ["_guard recommendation"],
                    },
                },
                {
                    choice: "admire view",
                    destination: "sinaia6",
                    story: `
                    The view is impressive... You can see the peaks of the nearby mountains and 
                    down the valley, the town. Close by there is a building with some antennas on top and
                    a person guarding its entrance. You take a photo of this view.
                    `,
                    storyConditionMet:`
                    The view is impressive... You can see the peaks of the nearby mountains and 
                    down the valley, the town. Close by there is a building with some antennas on top and
                    a person guarding its entrance.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["_guard met", "top view photo"],
                    },
                },
                {
                    choice: "watch bee",
                    destination: "sinaia6",
                    story: `
                    You watch the bee cross-fertilizing the flowers. That's interesting...
                    `,
                    storyConditionMet:`
                    You watch the bee cross-fertilizing the flowers. That's interesting...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["_bee2 watched","bee 2"],
                    },
                },
            ],
            items: [
            ],
        },

        azuga: {
            image: "azuga.jpg",
            story: `
            You are in Azuga at the top of the mountain.
            `,
            story2flag: false,
            story2:`
            You are in Azuga at the top of the mountain.
            `,
            choices: [
                {
                    choice: "return to Breaza",
                    destination: "breaza",
                },
                {
                    choice: "take photo",
                    destination: "azuga",
                    story: `
                    A house surrounded by fences completely covered in snow. That's an interesting picture...
                    You take your camera out and shoot a photo.
                    `,
                    storyConditionMet:`
                    A house surrounded by fences completely covered in snow. That's an interesting picture...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["snow house photo"],
                    },
                },
                {
                    choice: "go to Moeciu",
                    destination: "moeciu",
                },
            ],
            items: [
            ], 
        },

        moeciu: {
            image: "moeciu.jpg",
            story: `
            You are in Moeciu and back to the future.
            `,
            story2flag: false,
            story2:`
            You are in Moeciu and back to the future.
            `,
            choices: [
                {
                    choice: "return to Azuga",
                    destination: "azuga",
                },
                {
                    choice: "explore Moeciu",
                    destination: "moeciu2",
                },
                
            ],
            items: [
            ], 
        },

        moeciu2: {
            image: "moeciu2.jpg",
            story: `
            Sparse houses embelish the snow covered hills of Moeciu.
            `,
            story2flag: false,
            story2:`
            Sparse houses embelish the snow covered hills of Moeciu.
            `,
            choices: [
                {
                    choice: "Moeciu station",
                    destination: "moeciu",
                },
                {
                    choice: "flower vase",
                    destination: "moeciu2",
                    story: `
                    A flower vase. 
                    `,
                    storyConditionMet:`
                    A flower vase. 
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "use bees",
                    destination: "moeciu2",
                    story: `
                    Doesn't make any sense... <em>Not enough bees around...</em>
                    `,
                    storyConditionMet:`
                    Doesn't make any sense... You do it anyway. You release the bees and they start fertilizing the flowers in the vase.
                    You pick one of the fertilized flowers.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["bee 1", "bee 2"],
                        "itemsReturned": ["fertilized flower"],
                    },
                },
                {
                    choice: "go inside",
                    destination: "moeciu3",
                },
            ],
            items: [
            ], 
        },

        //go inside
        moeciu3: {
            image: "moeciu3.jpg",
            story: `
            You are inside your guest house in Moeciu sitting at a table.
            `,
            story2flag: false,
            story2:`
            You are inside your guest house in Moeciu sitting at a table.
            `,
            choices: [
                {
                    choice: "explore Moeciu",
                    destination: "moeciu2",
                },
                {
                    choice: "take photo",
                    destination: "moeciu3",
                    story: `
                    A miniature bicycle is placed on top of the table, carrying some plant pots. It is an interesting view, so you take your camera out 
                    and shoot a photo. 
                    `,
                    storyConditionMet:`
                    A miniature bicycle is placed on top of the table, carrying some plant pots.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["bicycle photo"],
                    },
                },
            ],
            items: [
            ], 
        },

        predeal: {
            image: "predeal.jpg",
            story: `
            You are in Predeal.
            `,
            story2flag: false,
            story2:`
            You are in Predeal.
            `,
            choices: [
                {
                    choice: "return to Breaza",
                    destination: "breaza",
                },
                {
                    choice: "explore Predeal",
                    destination: "predeal2",
                },
                {
                    choice: "go to Brasov",
                    destination: "brasov",
                },
                {
                    choice: "go to Sibiu",
                    destination: "sibiu",
                    story: `
                    Too far away... Maybe later...
                    `,
                    storyConditionMet:`
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_guard recommendation"],
                        "itemsReturned": [],
                    },
                },
                
            ],
            items: [
            ], 
        },

        predeal2: {
            image: "predeal2.jpg",
            story: `
            You are in Predeal 2.
            `,
            story2flag: false,
            story2:`
            You are in Predeal 2.
            `,
            choices: [
                {
                    choice: "Predeal station",
                    destination: "predeal",
                },
                {
                    choice: "predeal 3",
                    destination: "predeal3",
                },
                {
                    choice: "predeal 4",
                    destination: "predeal4",
                },
            ],
            items: [
            ], 
        },

        predeal3: {
            image: "predeal3.jpg",
            story: `
            You are in Predeal 3.
            `,
            story2flag: false,
            story2:`
            You are in Predeal 3.
            `,
            choices: [
                {
                    choice: "predeal 2",
                    destination: "predeal2",
                },
            ],
            items: [
            ], 
        },
        predeal4: {
            image: "predeal4.jpg",
            story: `
            You are in Predeal 4.
            `,
            story2flag: false,
            story2:`
            You are in Predeal 4.
            `,
            choices: [
                {
                    choice: "predeal 2",
                    destination: "predeal2",
                },
            ],
            items: [
            ], 
        },

        brasov: {
            image: "brasov.jpg",
            story: `
            You are in Brasov.
            `,
            story2flag: false,
            story2:`
            You are in Brasov.
            `,
            choices: [
                {
                    choice: "return to Predeal",
                    destination: "predeal",
                },
                {
                    choice: "explore Brasov",
                    destination: "brasov2",
                },
            ],
            items: [
            ], 
        },

        brasov2: {
            image: "brasov2.jpg",
            story: `
            You have been here before.
            `,
            story2flag: false,
            story2:`
            You have been here before.
            `,
            choices: [
                {
                    choice: "Brasov station",
                    destination: "brasov",
                },
                {
                    choice: "park",
                    destination: "brasov3",
                },
            ],
            items: [
            ], 
        },

        brasov3: {
            image: "brasov3.jpg",
            story: `
            You are in one of the beautiful parks of Brasov.
            `,
            story2flag: false,
            story2:`
            You are in one of the beautiful parks of Brasov.
            `,
            choices: [
                {
                    choice: "explore Brasov",
                    destination: "brasov2",
                },
                {
                    choice: "take photo",
                    destination: "brasov3",
                    story: `
                    You take a photo of the park.
                    `,
                    storyConditionMet:`
                    You have done that already...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["park photo"],
                    },
                },
            ],
            items: [
            ], 
        },

        sibiu: {
            image: "sibiu.jpg",
            story: `
            The train stops this time near a mountainous area. You are in Sibiu.
            `,
            story2flag: false,
            story2:`
            You are in Sibiu.
            `,
            choices: [
                {
                    choice: "return to Predeal",
                    destination: "predeal",
                },
                {
                    choice: "explore Sibiu",
                    destination: "sibiu2",
                },
                {
                    choice: "go to Cluj",
                    destination: "cluj",
                },
                {
                    choice: "go to Timisoara",
                    destination: "timisoara",
                },
                
            ],
            items: [
            ], 
        },

        sibiu2: {
            image: "sibiu2.jpg",
            story: `
            You have only one day to explore Sibiu. You encounter a castle and its wall fortifications. The archiecture 
            of the city looks amazing, but the time is short and you have to rush through it.
            Who knows, you might return some other time...  
            `,
            story2flag: false,
            story2:`
            You encounter a castle and its wall fortifications. The archiecture 
            of the city looks amazing, but the time is short and you have to rush through it.
            Who knows, you might return some other time...
            `,
            choices: [
                {
                    choice: "Sibiu station",
                    destination: "sibiu",
                },
                {
                    choice: "entrance",
                    destination: "sibiu3",
                },
                {
                    choice: "center",
                    destination: "sibiu4",
                    story: `
                    You are not sure how to get to the city center... 
                    <em>The birds might help here.</em>
                    `,
                    storyConditionMet:`
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_way forward"],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "night time",
                    destination: "sibiu5",
                    story: `
                    You are not sure how to get to proceed forward... 
                    <em>The birds might help here.</em>
                    `,
                    storyConditionMet:`
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_way forward"],
                        "itemsReturned": [],
                    },
                },
            ],
            items: [
            ], 
        },

        //entrance
        sibiu3: {
            image: "sibiu3.jpg",
            story: `
            You are near the entrance of Sibiu.
            `,
            story2flag: false,
            story2:`
            You are near the entrance of Sibiu.
            `,
            choices: [
                {
                    choice: "explore Sibiu",
                    destination: "sibiu2",
                },
                {
                    choice: "watch poster",
                    destination: "sibiu3",
                    story: `
                    Right next to the entrance in Sibiu you notice a 
                    city sign with a poster on it. The poster states that Sibiu is the 
                    european capital of culture. 
                    `,
                    storyConditionMet:`
                    The poster states that Sibiu is the 
                    european capital of culture. 
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["_poster watched"],
                    },
                },
                {
                    choice: "pigeon",
                    destination: "sibiu3",
                    story: `
                    You encounter a pigeon. 
                    `,
                    storyConditionMet:`
                    The pigeon seems to be indicating the way forward... 
                    You follow the path indicated by the pigeon.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_pigeon pattern observed"],
                        "itemsReturned": ["_way forward"],
                    },
                },
            ],
            items: [
            ], 
        },

        //center
        sibiu4: {
            image: "sibiu4.jpg",
            story: `
            You are in the historical center of Sibiu. You notice an open plaza populated by people and groups of pigeons flying above. Beautiful buildings are surrounding the plaza square.
            `,
            story2flag: false,
            story2:`
            You are in the historical center of Sibiu. You notice an open plaza populated by people and groups of pigeons flying above. Beautiful buildings are surrounding the plaza square.
            `,
            choices: [
                {
                    choice: "explore Sibiu",
                    destination: "sibiu2",
                },
                {
                    choice: "people",
                    destination: "sibiu4",
                    story: `
                    Unfortunately, you don't have a lot of time to interact with the people in the plaza square.
                    `,
                    storyConditionMet:`
                    Unfortunately, you don't have a lot of time to interact with the people in the plaza square.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "watch buildings",
                    destination: "sibiu4",
                    story: `
                    The buildings have multiple colors. The irony of the situation is that you are the one 
                    watching the buildings... 
                    `,
                    storyConditionMet:`
                    The buildings have multiple colors. The irony of the situation is that you are the one 
                    watching the buildings...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "hole covering",
                    destination: "sibiu4",
                    story: `
                    There's a metal street hole covering, with an emblem on it... 
                    `,
                    storyConditionMet:`
                    There's a metal street hole covering, with an emblem on it...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "college",
                    destination: "sibiu4",
                    story: `
                    As you stroll around you encounter a big college. 
                    `,
                    storyConditionMet:`
                    As you stroll around you encounter a big college. 
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


        //night time
        sibiu5: {
            image: "sibiu5.jpg",
            story: `
            As you continue to stroll around the streets the night time comes.
            `,
            story2flag: false,
            story2:`
            As you continue to stroll around the streets the night time comes.
            `,
            choices: [
                {
                    choice: "explore Sibiu",
                    destination: "sibiu2",
                },
                {
                    choice: "cofee places",
                    destination: "sibiu5",
                    story: `
                    Several coffee places can be found here. 
                    `,
                    storyConditionMet:`
                    Several coffee places can be found here. 
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "art gallery",
                    destination: "sibiu5",
                    story: `
                    No time for it now. 
                    `,
                    storyConditionMet:`
                    No time for it now. 
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "lookout tower",
                    destination: "sibiu5",
                    story: `
                    You find a lookout tower and some wall fortifications illuminated by the street lamps.
                    The view is impressive, so you decide to take a photo of it. 
                    `,
                    storyConditionMet:`
                    You find a lookout tower and some wall fortifications illuminated by the street lamps.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["tower photo"],
                    },
                },
                {
                    choice: "night lamps",
                    destination: "sibiu5",
                    story: `
                    The streets and surrounding buildings are so beautiful at night when illuminated by the street lamps.
                    `,
                    storyConditionMet:`
                    The streets and surrounding buildings are so beautiful at night when illuminated by the street lamps.
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

        cluj: {
            image: "cluj.jpg",
            story: `
            You are in Cluj.
            `,
            story2flag: false,
            story2:`
            You are in Cluj.
            `,
            choices: [
                {
                    choice: "return to Sibiu",
                    destination: "sibiu",
                },
                {
                    choice: "explore Cluj",
                    destination: "cluj2",
                },
            ],
            items: [
            ], 
        },

        cluj2: {
            image: "cluj2.jpg",
            story: `
            You are in Cluj. Seems to be a beautiful city.
            `,
            story2flag: false,
            story2:`
            You are in Cluj. Seems to be a beautiful city.
            `,
            choices: [
                {
                    choice: "Cluj station",
                    destination: "cluj",
                },
                {
                    choice: "park",
                    destination: "cluj3",
                },
                {
                    choice: "downtown",
                    destination: "cluj4",
                },
                {
                    choice: "botanical garden",
                    destination: "cluj5",
                },
            ],
            items: [
            ], 
        },

        //park
        cluj3: {
            image: "cluj3.jpg",
            story: `
            You reach the park area.
            `,
            story2flag: false,
            story2:`
            You reach the park area.
            `,
            choices: [
                {
                    choice: "explore Cluj",
                    destination: "cluj2",
                },
                {
                    choice: "watch plane",
                    destination: "cluj3",
                    story: `
                    As you walk through the park you hear the noise of a plane and raise your head. It is a big plane. 
                    But how does the plane work?
                    Thinking a little bit, the principles are very similar. It's only the medium that changes, you don't 
                    have to start all over again, from scratch...
                    `,
                    storyConditionMet:`
                    But how does the plane work?
                    Thinking a little bit, the principles are very similar. It's only the medium that changes, so you don't 
                    have to start all over again from scratch...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "uphill",
                    destination: "cluj3",
                    story: `
                    You choose to take a path going up a hill not far away from the park. You find a place where they serve icecream.
                    Being very hot outside, you grab one. From up here, you can see the entire city. The view is breath-taking. 
                    You wish the princess was here to see it...
                    `,
                    storyConditionMet:`
                    You go up the hill to the nice view with icecream. 
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["icecream"],
                    },
                },
                {
                    choice: "gate monument",
                    destination: "cluj3",
                    story: `
                    As you walk throughout the park you notice some sort of suspended gate monument. You never understood what the artist wanted
                    to say...
                    `,
                    storyConditionMet:`
                    As you walk throughout the park you notice some sort of suspended gate monument. You never understood what the artist wanted
                    to say...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["_gate portal 2"],
                    },
                },
                {
                    choice: "observe statues",
                    destination: "cluj3",
                    story: `
                    As you approach the end of the park you notice a construction area. Inside there are several statues resembling aquatic figures.
                    One of them looks like a half-man, half-seahorse creature. You find that very odd. Again, the artist's decision... Nevertheless,
                    you might return here sometime... 
                    `,
                    storyConditionMet:`
                    As you approach the end of the park you notice a construction area. Inside there are several statues resembling aquatic figures.
                    One of them looks like a half-man, half-seahorse creature. You find that very odd. Again, the artist's decision... Nevertheless,
                    you might return here sometime... 
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

        //downtown
        cluj4: {
            image: "cluj4.jpg",
            story: `
            You are in downtown Cluj. It is a beautiful city with beautiful people. People are walking at a different pace here.
            `,
            story2flag: false,
            story2:`
            You are in downtown Cluj. It is a beautiful city with beautiful people.
            `,
            choices: [
                {
                    choice: "explore Cluj",
                    destination: "cluj2",
                },
                {
                    choice: "restaurant",
                    destination: "cluj4",
                    story: `
                    You are not hungry now.
                    `,
                    storyConditionMet:`
                    You go inside and buy some bread.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_duck observed"],
                        "itemsReturned": ["bread"],
                    },
                },
                {
                    choice: "tea place",
                    destination: "cluj4",
                    story: `
                    No time for it. You are in a hurry.
                    `,
                    storyConditionMet:`
                    No time for it. You are in a hurry.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "university",
                    destination: "cluj4",
                    story: `
                    Funny, among others, this university has a faculty similar to the one where you have attended classes. It is written 
                    on the inscription.
                    `,
                    storyConditionMet:`
                    Funny, among others, this university has a faculty similar to the one where you have attended classes. It is written 
                    on the inscription.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "give flowers",
                    destination: "cluj4",
                    story: `
                    You notice a cute girl. Perhaps it could be a good idea to offer her the flowers you have collected. You are still 
                    missing a couple ones. 
                    <em>You may need: a white flower, a fertilized flower, a tulip, a rose, chamomile, a poppy, and a lilie.</em>
                    `,
                    storyConditionMet:`
                    The girl smiles and thanks you.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["fertilized flower", "white flower", "tulip flower", "rose flower", "chamomile flowers", "poppy flower", "lilie"],
                        "itemsReturned": ["_smile"],
                    },
                },
                {
                    choice: "car",
                    destination: "cluj4",
                    story: `
                    Underneath a passage you find a colorful car painted by an artist most probably. The hood has a large butterfly painted on top.
                    `,
                    storyConditionMet:`
                    Underneath a passage you find a colorful car painted by an artist most probably. The hood has a large butterfly painted on top.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "check stadium",
                    destination: "cluj4",
                    story: `
                    By chance you encounter a big stadium in your way. You go near the gates and look inside. Looks impressive.
                    `,
                    storyConditionMet:`
                    By chance you encounter a big stadium in your way. You go near the gates and look inside. Looks impressive.
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

        //botanical garden
        cluj5: {
            image: "cluj5.jpg",
            story: `
            You climb up until you reach the botanical garden.
            `,
            story2flag: false,
            story2:`
            You climb up until you reach the botanical garden.
            `,
            choices: [
                {
                    choice: "explore Cluj",
                    destination: "cluj2",
                },
                {
                    choice: "pick up tulip",
                    destination: "cluj5",
                    story: `
                    At the entrance of the botanical garden you notice a row of beautiful pink tulips. You go to grab one, 
                    but the guard does not let you...
                    `,
                    storyConditionMet:`
                    The guard seems to be distracted by the quacks of the duck. You manage to pick up a tulip flower.
                    You also grab your camera and take a shot at the row of tulips.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_duck quacks"],
                        "itemsReturned": ["tulip flower", "tulips photo"],
                    },
                },
                {
                    choice: "japanese garden",
                    destination: "cluj5",
                    story: `
                    There's a japanese garden inside the botanical garden. A duck is swimming peacefully inside the pond.
                    `,
                    storyConditionMet:`
                    There's a japanese garden inside the botanical garden. A duck is swimming peacefully inside the pond.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["_duck observed"],
                    },
                },
                {
                    choice: "feed duck",
                    destination: "cluj5",
                    story: `
                    You cannot feed the duck. You don't have any food left...
                    `,
                    storyConditionMet:`
                    You feed the duck and the duck starts quacking...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["bread"],
                        "itemsReturned": ["_duck quacks"],
                    },
                },
            ],
            items: [
            ], 
        },

        timisoara: {
            image: "timisoara.jpg",
            story: `
            You are in Timisoara.
            `,
            story2flag: false,
            story2:`
            You are in Timisoara.
            `,
            choices: [
                {
                    choice: "return to Sibiu",
                    destination: "sibiu",
                },
                {
                    choice: "explore Timisoara",
                    destination: "timisoara2",
                },
            ],
            items: [
            ], 
        },

        timisoara2: {
            image: "timisoara2.jpg",
            story: `
            You are in Timisoara. There are plenty of places to see and visit here.
            `,
            story2flag: false,
            story2:`
            You are in Timisoara. There are plenty of places to see and visit here.
            `,
            choices: [
                {
                    choice: "Timisoara station",
                    destination: "timisoara",
                },
                {
                    choice: "watch princess statue",
                    destination: "timisoara3",
                },
                {
                    choice: "central park",
                    destination: "timisoara4",
                },
                {
                    choice: "river",
                    destination: "timisoara5",
                },
                {
                    choice: "big clock",
                    destination: "timisoara6",
                },
            ],
            items: [
            ], 
        },

        timisoara3: {
            image: "timisoara3.jpg",
            story: `
            You are in Timisoara 3.
            `,
            story2flag: false,
            story2:`
            You are in Timisoara 3.
            `,
            choices: [
                {
                    choice: "timisoara 2",
                    destination: "timisoara2",
                },
            ],
            items: [
            ], 
        },

        timisoara4: {
            image: "timisoara4.jpg",
            story: `
            You are in Timisoara 4.
            `,
            story2flag: false,
            story2:`
            You are in Timisoara 4.
            `,
            choices: [
                {
                    choice: "timisoara 2",
                    destination: "timisoara2",
                },
            ],
            items: [
            ], 
        },

        timisoara5: {
            image: "timisoara5.jpg",
            story: `
            You are in Timisoara 5.
            `,
            story2flag: false,
            story2:`
            You are in Timisoara 5.
            `,
            choices: [
                {
                    choice: "timisoara 2",
                    destination: "timisoara2",
                },
            ],
            items: [
            ], 
        },

        timisoara6: {
            image: "timisoara6.jpg",
            story: `
            You are in Timisoara 6.
            `,
            story2flag: false,
            story2:`
            You are in Timisoara 6.
            `,
            choices: [
                {
                    choice: "timisoara 2",
                    destination: "timisoara2",
                },
            ],
            items: [
            ], 
        },

    }
}