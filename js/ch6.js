function getStoryChapter6(name) {

    return {
        currentScene: "central_train_station",
        currentChapter: "6",
        player: {
            inventory: ["camera",
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
                    choice: "return to central station",
                    destination: "central_train_station",
                },
                {
                    choice: "Sinaia",
                    destination: "sinaia",
                },
                {
                    choice: "Azuga",
                    destination: "azuga",
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
            You are in Breaza 2.
            `,
            story2flag: false,
            story2:`
            You are in Breaza 2.
            `,
            choices: [
                {
                    choice: "Breaza station",
                    destination: "breaza",
                },
                {
                    choice: "breaza 3",
                    destination: "breaza3",
                },
                {
                    choice: "breaza 4",
                    destination: "breaza4",
                },
                {
                    choice: "breaza 5",
                    destination: "breaza5",
                },
            ],
            items: [
            ],
            
        },

        breaza3: {
            image: "breaza3.jpg",
            story: `
            You are in Breaza 3.
            `,
            story2flag: false,
            story2:`
            You are in Breaza 3.
            `,
            choices: [
                {
                    choice: "breaza 2",
                    destination: "breaza2",
                },
            ],
            items: [
            ],
            
        },

        breaza4: {
            image: "breaza4.jpg",
            story: `
            You are in Breaza 4.
            `,
            story2flag: false,
            story2:`
            You are in Breaza 4.
            `,
            choices: [
                {
                    choice: "breaza 2",
                    destination: "breaza2",
                },
            ],
            items: [
            ],
            
        },

        breaza5: {
            image: "breaza5.jpg",
            story: `
            You are in Breaza 5.
            `,
            story2flag: false,
            story2:`
            You are in Breaza 5.
            `,
            choices: [
                {
                    choice: "breaza 2",
                    destination: "breaza2",
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
                    choice: "return to central station",
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
                        "itemsReturned": ["_lion encoutered"],
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
                    What kind of fish will it attract? Nevertheless the fisherman offers you his thanks.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["cherry"],
                        "itemsReturned": ["_bait offered"],
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
                        "itemsReturned": ["Iasi palace photo"],
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
            You are in Sinaia 2.
            `,
            story2flag: false,
            story2:`
            You are in Sinaia 2.
            `,
            choices: [
                {
                    choice: "Sinaia station",
                    destination: "sinaia",
                },
                {
                    choice: "sinaia 4",
                    destination: "sinaia4",
                },
                {
                    choice: "sinaia 5",
                    destination: "sinaia5",
                },
                {
                    choice: "sinaia 6",
                    destination: "sinaia6",
                },
            ],
            items: [
            ],
            
        },

        sinaia4: {
            image: "sinaia4.jpg",
            story: `
            You are in Sinaia 4.
            `,
            story2flag: false,
            story2:`
            You are in Sinaia 4.
            `,
            choices: [
                {
                    choice: "sinaia 2",
                    destination: "sinaia2",
                },
            ],
            items: [
            ],
        },

        sinaia5: {
            image: "sinaia5.jpg",
            story: `
            You are in Sinaia 5.
            `,
            story2flag: false,
            story2:`
            You are in Sinaia 5.
            `,
            choices: [
                {
                    choice: "sinaia 2",
                    destination: "sinaia2",
                },
            ],
            items: [
            ],
        },

        sinaia6: {
            image: "sinaia6.jpg",
            story: `
            You are in Sinaia 6.
            `,
            story2flag: false,
            story2:`
            You are in Sinaia 6.
            `,
            choices: [
                {
                    choice: "sinaia 2",
                    destination: "sinaia2",
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
            You are in Sibiu.
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
            You are in Sibiu 2.
            `,
            story2flag: false,
            story2:`
            You are in Sibiu 2.
            `,
            choices: [
                {
                    choice: "Sibiu station",
                    destination: "sibiu",
                },
                {
                    choice: "sibiu 3",
                    destination: "sibiu3",
                },
                {
                    choice: "sibiu 4",
                    destination: "sibiu4",
                },
                {
                    choice: "sibiu 5",
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