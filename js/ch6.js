function getStoryChapter6(name) {

    return {
        currentScene: "central_train_station",
        currentChapter: "6",
        player: {
            inventory: [
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
                    choice: "breaza",
                    destination: "breaza",
                },
                {
                    choice: "iasi",
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
                    choice: "explore breaza",
                    destination: "breaza2",
                },
                {
                    choice: "central station",
                    destination: "central_train_station",
                },
                {
                    choice: "sinaia",
                    destination: "sinaia",
                },
                {
                    choice: "azuga",
                    destination: "azuga",
                },
                {
                    choice: "predeal",
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
                    choice: "breaza station",
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
            You are in Iasi.
            `,
            story2flag: false,
            story2:`
            You are in Iasi.
            `,
            choices: [
                {
                    choice: "central station",
                    destination: "central_train_station",
                },
                {
                    choice: "continue",
                    destination: "iasi_continue",
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
                    choice: "explore sinaia",
                    destination: "sinaia2",
                },
                {
                    choice: "breaza",
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
                    choice: "sinaia station",
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
                    choice: "breaza",
                    destination: "breaza",
                },
                {
                    choice: "moeciu",
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
                    choice: "explore moeciu",
                    destination: "moeciu2",
                },
                {
                    choice: "azuga",
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
                    choice: "moeciu station",
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
                    choice: "explore predeal",
                    destination: "predeal2",
                },
                {
                    choice: "breaza",
                    destination: "breaza",
                },
                {
                    choice: "brasov",
                    destination: "brasov",
                },
                {
                    choice: "sibiu",
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
                    choice: "predeal station",
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
                    choice: "explore brasov",
                    destination: "brasov2",
                },
                {
                    choice: "predeal",
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
                    choice: "brasov station",
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
                    choice: "explore sibiu",
                    destination: "sibiu2",
                },
                {
                    choice: "predeal",
                    destination: "predeal",
                },
                {
                    choice: "cluj",
                    destination: "cluj",
                },
                {
                    choice: "timisoara",
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
                    choice: "sibiu station",
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
                    choice: "explore cluj",
                    destination: "cluj2",
                },
                {
                    choice: "sibiu",
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
                    choice: "cluj station",
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
                    choice: "sibiu",
                    destination: "sibiu",
                },
            ],
            items: [
            ], 
        },

    }
}