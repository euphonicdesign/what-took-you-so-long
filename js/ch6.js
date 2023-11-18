function getStoryChapter6(name) {

    return {
        currentScene: "central_train_station",
        currentChapter: "6",
        player: {
            inventory: ["camera","_docile dog"
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
                    choice: "Breaza",
                    destination: "breaza",
                },
                {
                    choice: "Iasi",
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
                        "itemsRequired": ["rose photo", "palace photo"],
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
                    choice: "explore Breaza",
                    destination: "breaza2",
                },
                {
                    choice: "return to Central Station",
                    destination: "central_train_station",
                },
                {
                    choice: "Sinaia",
                    destination: "sinaia",
                },
                {
                    choice: "Azuga",
                    destination: "azuga",
                    story: `
                    Not before you get a recommendation of some sort...
                    `,
                    storyConditionMet:`
                    As you walk through the streets you find an interesting white flower.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_fisherman recommendation"],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "Predeal",
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
                        "itemsReturned": ["_bee watched"],
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
                    choice: "explore Iasi",
                    destination: "iasi2",
                },
                {
                    choice: "return to Central Station",
                    destination: "central_train_station",
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
                    There's a pigeon. 
                    `,
                    storyConditionMet:`
                    There's a pigeon. 
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
                    You watch the water lilies.
                    `,
                    storyConditionMet:`
                    You watch the water lilies.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": [],
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
                    choice: "explore Sinaia",
                    destination: "sinaia2",
                },
                {
                    choice: "return to Breaza",
                    destination: "breaza",
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
                    The guard is awake now. He recommends that you visit Sibiu...
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
                    a person guarding its entrance.
                    `,
                    storyConditionMet:`
                    The view is impressive... You can see the peaks of the nearby mountains and 
                    down the valley, the town. Close by there is a building with some antennas on top and
                    a person guarding its entrance.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["_guard met"],
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
                        "itemsReturned": ["_bee2 watched"],
                    },
                },
            ],
            items: [
            ],
        },

        azuga: {
            image: "azuga.jpg",
            story: `
            You are in Azuga.
            `,
            story2flag: false,
            story2:`
            You are in Azuga.
            `,
            choices: [
                {
                    choice: "return to Breaza",
                    destination: "breaza",
                },
                {
                    choice: "Moeciu",
                    destination: "moeciu",
                },
            ],
            items: [
            ], 
        },

        moeciu: {
            image: "moeciu.jpg",
            story: `
            You are in Moeciu.
            `,
            story2flag: false,
            story2:`
            You are in Moeciu.
            `,
            choices: [
                {
                    choice: "explore Moeciu",
                    destination: "moeciu2",
                },
                {
                    choice: "return to Azuga",
                    destination: "azuga",
                },
            ],
            items: [
            ], 
        },

        moeciu2: {
            image: "moeciu2.jpg",
            story: `
            You are in Moeciu 2.
            `,
            story2flag: false,
            story2:`
            You are in Moeciu 2.
            `,
            choices: [
                {
                    choice: "Moeciu station",
                    destination: "moeciu",
                },
                {
                    choice: "moeciu 3",
                    destination: "moeciu3",
                },
            ],
            items: [
            ], 
        },

        moeciu3: {
            image: "moeciu3.jpg",
            story: `
            You are in Moeciu 3.
            `,
            story2flag: false,
            story2:`
            You are in Moeciu 3.
            `,
            choices: [
                {
                    choice: "moeciu 2",
                    destination: "moeciu2",
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
                    choice: "explore Predeal",
                    destination: "predeal2",
                },
                {
                    choice: "return to Breaza",
                    destination: "breaza",
                },
                {
                    choice: "Brasov",
                    destination: "brasov",
                },
                {
                    choice: "Sibiu",
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
                    choice: "explore Brasov",
                    destination: "brasov2",
                },
                {
                    choice: "return to Predeal",
                    destination: "predeal",
                },
                
            ],
            items: [
            ], 
        },

        brasov2: {
            image: "brasov2.jpg",
            story: `
            You are in Brasov 2.
            `,
            story2flag: false,
            story2:`
            You are in Brasov 2.
            `,
            choices: [
                {
                    choice: "Brasov station",
                    destination: "brasov",
                },
                {
                    choice: "brasov 3",
                    destination: "brasov3",
                },
            ],
            items: [
            ], 
        },

        brasov3: {
            image: "brasov3.jpg",
            story: `
            You are in Brasov 3.
            `,
            story2flag: false,
            story2:`
            You are in Brasov 3.
            `,
            choices: [
                {
                    choice: "brasov 2",
                    destination: "brasov2",
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
                    choice: "explore Sibiu",
                    destination: "sibiu2",
                },
                {
                    choice: "return to Predeal",
                    destination: "predeal",
                },
                {
                    choice: "Cluj",
                    destination: "cluj",
                },
                {
                    choice: "Timisoara",
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
                },
                {
                    choice: "night time",
                    destination: "sibiu5",
                },
            ],
            items: [
            ], 
        },

        sibiu3: {
            image: "sibiu3.jpg",
            story: `
            You are in Sibiu 3.
            `,
            story2flag: false,
            story2:`
            You are in Sibiu 3.
            `,
            choices: [
                {
                    choice: "sibiu 2",
                    destination: "sibiu2",
                },
            ],
            items: [
            ], 
        },

        sibiu4: {
            image: "sibiu4.jpg",
            story: `
            You are in Sibiu 4.
            `,
            story2flag: false,
            story2:`
            You are in Sibiu 4.
            `,
            choices: [
                {
                    choice: "sibiu 2",
                    destination: "sibiu2",
                },
            ],
            items: [
            ], 
        },

        sibiu5: {
            image: "sibiu5.jpg",
            story: `
            You are in Sibiu 5.
            `,
            story2flag: false,
            story2:`
            You are in Sibiu 5.
            `,
            choices: [
                {
                    choice: "sibiu 2",
                    destination: "sibiu2",
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
                    choice: "explore Cluj",
                    destination: "cluj2",
                },
                {
                    choice: "return to Sibiu",
                    destination: "sibiu",
                },
            ],
            items: [
            ], 
        },

        cluj2: {
            image: "cluj2.jpg",
            story: `
            You are in Cluj 2.
            `,
            story2flag: false,
            story2:`
            You are in Cluj 2.
            `,
            choices: [
                {
                    choice: "Cluj station",
                    destination: "cluj",
                },
                {
                    choice: "cluj 3",
                    destination: "cluj3",
                },
                {
                    choice: "cluj 4",
                    destination: "cluj4",
                },
                {
                    choice: "cluj 5",
                    destination: "cluj5",
                },
            ],
            items: [
            ], 
        },

        cluj3: {
            image: "cluj3.jpg",
            story: `
            You are in Cluj 3.
            `,
            story2flag: false,
            story2:`
            You are in Cluj 3.
            `,
            choices: [
                {
                    choice: "cluj 2",
                    destination: "cluj2",
                },
            ],
            items: [
            ], 
        },

        cluj4: {
            image: "cluj4.jpg",
            story: `
            You are in Cluj 4.
            `,
            story2flag: false,
            story2:`
            You are in Cluj 4.
            `,
            choices: [
                {
                    choice: "cluj 2",
                    destination: "cluj2",
                },
            ],
            items: [
            ], 
        },

        cluj5: {
            image: "cluj5.jpg",
            story: `
            You are in Cluj 5.
            `,
            story2flag: false,
            story2:`
            You are in Cluj 5.
            `,
            choices: [
                {
                    choice: "cluj 2",
                    destination: "cluj2",
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
                    choice: "explore Timisoara",
                    destination: "timisoara2",
                },
                {
                    choice: "return to Sibiu",
                    destination: "sibiu",
                },
            ],
            items: [
            ], 
        },

        timisoara2: {
            image: "timisoara2.jpg",
            story: `
            You are in Timisoara 2.
            `,
            story2flag: false,
            story2:`
            You are in Timisoara 2.
            `,
            choices: [
                {
                    choice: "Timisoara station",
                    destination: "timisoara",
                },
                {
                    choice: "timisoara 3",
                    destination: "timisoara3",
                },
                {
                    choice: "timisoara 4",
                    destination: "timisoara4",
                },
                {
                    choice: "timisoara 5",
                    destination: "timisoara5",
                },
                {
                    choice: "timisoara 6",
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