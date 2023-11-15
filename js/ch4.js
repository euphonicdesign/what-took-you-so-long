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
                    choice: "watch window",
                    destination: "watch_window",
                    story: `
                    You look outside the window. The train passes along hills, trees, villages and towns, rivers and bridges, meadows, and lots of other beautiful scenery. Sometimes you see people that smile and wave at you. The landscape you encounter along the way is varied. This makes the trip even more interesting...
                    `,
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
            The train has not changed position.
            `,
            choices: [
                {
                    choice: "small park",
                    destination: "small_park",
                },
                {
                    choice: "watch train",
                    destination: "central_train_station",
                    story: `
                    You inspect the train once more. Seems to be deactivated now.
                    The more you watch it from the outside, the more curios
                    you become... You continue to
                    remain impressed with the technology that makes it work.
                    What powers the train?
                    `,
                    storyConditionMet:`
                    The train is activated. You continue to remain
                    impressed with technology behind it.  It is a marvel of
                    modern engineering...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_train activated"],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "start train",
                    destination: "central_train_station",
                    story: `
                    You still need to find a way to activate the train.
                    `,
                    storyConditionMet:`
                    Good, so the train is now working. You are set to go.
                    You can operate it yourself
                    and choose to go to a couple of locations.
                    After all, you still have to find what you have been
                    looking for...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_train activated"],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "use blueprint",
                    destination: "central_train_station",
                    story: `
                    You need to find the blueprint first.
                    `,
                    storyConditionMet:`
                    You take a closer look at the train and at the
                    blueprint.
                    You now understand how it works... It is a marvel of modern
                    engineering.
                    You leverage the schematics and you activate the train.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["blueprint"],
                        "itemsReturned": [],
                    },
                },
            ],
            items: [
            ],
            
        },

        small_park: {
            image: "small park.jpg",
            story: `
            You exit the central train station and go up.
            You watch the surroundings to get a feeling of how the city might
            be. The streets are very clean and tidy and
            there are only a few cars
            parked around. The sidewalks have trees
            spaced evenly throughout, and the buildings are somewhat distinctive.
            You walk up ahead and pass by a small park. Close to some
            benches, you notice a couple of pigeons that are dressing up
            and arranging their feathers. It is very
            quiet and there are no people around. It is still early morning...
            Why is it early morning?
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "walk",
                    destination: "small_park_side",
                    story: `
                    You continue to walk, and as you pass the park, you start feeling a\
                    strong sensation inside your chest. Something is missing...\
                    when you needed her most...
                    `,
                },
            ],
            items: [
            ],
            
        },

        small_park_side: {
            image: "small park side.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "keep walking",
                    destination: "part_1",
                },
            ],
            items: [
            ],
            
        },

        part_1: {
            image: "part 1.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            Part One.
            `,
            choices: [
                {
                    choice: "continue",
                    destination: "city_streets",
                    story: `
                    You continue walking and pass a couple more intersections. The architecture of the city is really impressing. The buildings are larger and higher than what you have seen until now. More and more people start to appear on the streets and the traffic builds up. You feel a bit lost.
                    `,
                },
            ],
            items: [
            ],
            
        },

        city_streets: {
            image: "city streets.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "ask for directions",
                    destination: "bridge",
                    story: `
                    You ask a person on the street for some directions, and decide to take a tram to shorten your trip. You arrive at the destination and start looking around. You are close to a river that flows throughout the city. On each side of the river there are sidewalks with trees and streetlights. Looks like a good promenade area. There are several bridges allowing people to pass from one side to the other. You are right at one of them. On the left side of the bridge, you notice a row of apartment buildings and a number of trees that define the skyline. On the right side, there are many tall trees and decorative vegetation that make up a large green area. You see a long alley passing through.
                    `,
                },
            ],
            items: [
            ],
            
        },

        bridge: {
            image: "bridge.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            You are now in the bridge area. On the left side there is a row of apartment buildings, while on the right side there is a long alley passing through some large green area.
            `,
            choices: [
                {
                    choice: "room",
                    destination: "room",
                },
                {
                    choice: "central train station",
                    destination: "central_train_station_2",
                },
                {
                    choice: "long alley",
                    destination: "long_alley",
                },
                {
                    choice: "watch river",
                    destination: "watch_river",
                    story: `
                    You go to the top of the bridge and watch the water flow. You have swum in much less pleasant waters... This one looks clear and deep enough. It is like having your own swimming lane in front of the house... You entertain the idea of going for a swim, and then you realize... just because you can do something, doesn't necessarily mean that you should do it, or that you are entitled to do it. It all depends on the ecology of the situation.
                    `,
                    storyConditionMet:`
                    The water is clear and flows smoothly. There are some ducks and seagulls swiming in it. What do the seagulls do here? 
                    In the evening, this place looks rather nice with all the
                    street lights highlighting the trees on each side of the
                    river.
                    Could be an interesting photo. If only you had a camera...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_student met"],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "use seeds",
                    destination: "bridge",
                    story: `
                    You don't have any...
                    `,
                    storyConditionMet:`
                    Maybe not. It needs to stay dry.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["seeds"],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "downtown",
                    destination: "downtown_square",
                    story: `
                    Seems to go downtown. No time for that now. Maybe later...
                    `,
                    storyConditionMet:`
                    You go downtown. You have never been to this area before.
                    You are in a big city square. Not far away from the artisanal
                    fountain, there is a block of buildings. One of them has a large
                    door facing the street.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_dance classes unlocked"],
                        "itemsReturned": [],
                    },
                },
            ],
            items: [
            ],
            
        },

    }
}