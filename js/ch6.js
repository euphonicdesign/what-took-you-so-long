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
                    choice: "continue",
                    destination: "iasi_continue",
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