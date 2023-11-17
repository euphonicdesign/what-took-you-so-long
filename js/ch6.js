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
                {
                    choice: "explore",
                    destination: "breaza2",
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
                    choice: "breaza",
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
                    choice: "breaza",
                    destination: "breaza",
                },
                {
                    choice: "explore",
                    destination: "sinaia2",
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
                    choice: "sinaia",
                    destination: "sinaia",
                },
                {
                    choice: "sinaia 3",
                    destination: "sinaia3",
                },
                {
                    choice: "sinaia 4",
                    destination: "sinaia3",
                },
                {
                    choice: "sinaia 5",
                    destination: "sinaia3",
                },
                {
                    choice: "sinaia 6",
                    destination: "sinaia3",
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
                    choice: "predeal",
                    destination: "predeal",
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
                    choice: "sibiu",
                    destination: "sibiu",
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