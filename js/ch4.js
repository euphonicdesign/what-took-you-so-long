function getStoryChapter4(name) {

    return {
        currentScene: "watch_train",
        currentChapter: "4",
        player: {
            inventory: [
            ]
        },
        lastActionStory: ``,
        conditionsAchieved: [
        ],
        watch_train: {
            image: "watch train.jpg",
            story: `
            Continuing from last time...<br>
            Apparently she had all the 
            mathematics sorted out already... There must be more then 
            what meets the eye!
            `,
            story2flag: false,
            story2:`
            Test.
            `,
            choices: [
                {
                    choice: "onboard",
                    destination: "train_car",
                    story: `
                    You onboard the train and sit down. The seats are nice and comfortable. The windows are large and clear, giving you a good view of the surroundings. At the window's sides, you notice a pair of curtains made from high-quality fabrics. Whoever designed the interior of the cabin must have very good taste. It makes you feel at ease and relaxed. Then, the train starts moving... It is a smooth ride! If it weren't for the windows and for the objects outside, you would not be able to tell if you are moving or holding position.
                    `,
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
                    choice: "wake up",
                    destination: "central_train_station",
                    story: `
                    No need to do that. The princess is awake.
                    `,
                    storyConditionMet:`
                    Few hours pass until you get close to the outskirts of a very large city. The train is moving more slowly now and continues to advance until it reaches the central train station. It makes a quiet sound and comes to a full stop by the platform. You gently touch the princess, and she wakes up while stretching her body. You get off the train and step onto the platform.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_princess asleep"],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "watch princess",
                    destination: "train_car",
                    story: `
                    The princess rests her head on your shoulder and starts dreaming. She looks serene and happy.
                    `,
                    storyConditionMet:`
                    The princess rests her head on your shoulder and starts dreaming. She looks serene and happy.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["_princess asleep"],
                    },
                },
                {
                    choice: "watch window",
                    destination: "watch_window",
                    story: `
                    You look outside the window. The train passes along hills, trees, villages and towns, rivers and bridges, meadows, and lots of other beautiful scenery. Sometimes you see people that smile and wave at you. The landscape you encounter along the way is varied. This makes the trip even more interesting...
                    `,
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
                    choice: "watch interior",
                    destination: "train_car",
                    story: `
                    You are inside the train car.
                    `,
                },
            ],
            items: [
            ],
            
        },

        central_train_station: {
            image: "central train station.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "watch interior",
                    destination: "train_car",
                    story: `
                    You are inside the train car.
                    `,
                },
            ],
            items: [
            ],
            
        },

    }
}