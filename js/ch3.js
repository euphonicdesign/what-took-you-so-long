function getStoryChapter3(name) {

    return {
        currentScene: "port",
        currentChapter: "3",
        player: {
            inventory: [
            ]
        },
        lastActionStory: ``,
        conditionsAchieved: [
        ],
        port: {
            image: "port.jpg",
            story: `
            Continuing from last time...<br>
            You are still in the port area with this pressing thought on your
            mind,
            and a lot of determination. Time to get moving!
            `,
            story2flag: false,
            story2:`
            You take the up route and drive along the coastline until you
            reach the port. To the east, you see lines of ships
            and big naval cranes moving cargo around. In your area, there are
            mainly light vessels used by tourists and sailing enthusiasts.
            You get closer to one of the ships. This one has a tall mast and
            long white sails. On one of its sides there is a shiny inscription.
            It says 'Princess'. You go aboard and
            you encounter a sailor, who is looking far into the sea. He has a
            couple of drawings on his table.
            `,
            choices: [
                {
                    choice: "city intersection",
                    destination: "city_intersection",
                },
            ],
            items: [
            ],
            
        },

        city_intersection: {
            image: "city intersection.jpg",
            story: `
            In the middle of the interesection there is a
            big artisanal fountain. You could either go right to visit the east city,
            or you could go up to return to the port.
            `,
            story2flag: false,
            story2:`
            In the middle of the interesection there is a
            big artisanal fountain. You could either go right to visit the east city,
            or you could go up to return to the port.
            `,
            choices: [
                {
                    choice: "port",
                    destination: "port",
                },
                {
                    choice: "east city",
                    destination: "east_city",
                },
            ],
            items: [
            ],
            
        },

        east_city: {
            image: "east city.jpg",
            story: `
            You could continue driving to the right and exit the city, or you
            could choose to go left and return to the city intersection.
            `,
            story2flag: false,
            story2:`
            You could continue driving to the right and exit the city, or you
            could choose to go left and return to the city intersection.
            `,
            choices: [
                {
                    choice: "city intersection",
                    destination: "city_intersection",
                },
                {
                    choice: "forest",
                    destination: "forest",
                },
            ],
            items: [
            ],
            
        },

        forest: {
            image: "forest.jpg",
            story: `
            You go right, and drive on this route until you reach the
            edge of a forest. The road leading into the forest is not paved.
            Knowing that your car is not in a very good shape, and that the brakes are
            not working very well, you ponder whether you should continue on this
            way, or not. You check the gas indicator, and  it seems there is not too much
            fuel left in the reservoir either. You think about
            it for a second, and then you decide to walk on foot into the forest.
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "camping",
                    destination: "camping1",
                },
                {
                    choice: "admire vegetation",
                    destination: "forest",
                    story: `
                    As you walk, you admire the vegetation and all the greenery that
                    surrounds you.
                    The branches of the trees cast long shadows on the ground.
                    Through the branches, you see and hear various
                    birds that are chirping and singing
                    melodic trills.
                    The air is very rich and pleasant, and
                    you feel at peace.
                    The more you advance, the more you find things
                    that captivate your attention, and make you want to go even further
                    into the forest.
                    At some point, you ask yourself whether you should return. It is then
                    when you realize that nothing in your environment would
                    indicate your way back. You are lost...
                    `,
                },
            ],
            items: [
            ],
            
        },

        camping1: {
            image: "camping1.jpg",
            story: `
            You continue to walk until you encounter a large and empty trunk
            of an old tree, fallen down on the ground. Behind it, you find what
            seems to be the remnants of a camping fire. Someone must have been
            here before... There are some rocks arranged in a concentric manner,
            and some ashes and leftovers of the wood that must have burnt
            inside the containment.
            Not too far away, you also notice a pile of neatly arranged wood
            sticks.
            You would like to advance beyond this point,
            but you stop... Something is blocking the way. There is large spider web covering the way ahead...
            `,
            story2flag: false,
            story2:`
            In the middle of this place there is what seems to be the remnants of a
            camping fire with some ashes and wood leftovers, surrounded by rocks.
            Not too far away, there is a pile of neatly arranged wood sticks.
            You want to advance beyond this point,
            but a large spider web is preventing you from doing it...
            `,
            choices: [
                {
                    choice: "web",
                    destination: "web",
                    story: `
                    You go towards the spider web. It looks very peculiar from the outside.
                    `
                },
                {
                    choice: "fireplace",
                    destination: "fireplace",
                    story: `
                    You go towards the fireplace.
                    `,
                },
                {
                    choice: "get stick",
                    destination: "camping1",
                    story: `
                    You pick up a stick from the nearby pile.
                    `,
                    storyConditionMet:`
                    You already have one.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["stick"],
                    },
                },
                
            ],
            items: [
            ],
            
        },

        web: {
            image: "web.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "camping",
                    destination: "camping1",
                },
                {
                    choice: "watch",
                    destination: "web",
                    story: `
                    You get closer to the web and start looking at the details.
                    It seems rather sticky... Better not to touch it!
                    But wait! There is something there making small movements.
                    A small ladybug seems to be entrapped...
                    `,
                    storyConditionMet:`
                    You get closer to the web, and start looking at the details.\
                    It seems rather sticky... Better not to touch it!
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["_ladybug observation"],
                    },
                },
                {
                    choice: "release",
                    destination: "web",
                    story: `
                    Nothing to release...
                    `,
                    storyConditionMet:`
                    With a careful touch, you manage to release the ladybug. She flies away and lands on a pile of dry leafs. You pick up a couple of them.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_ladybug observation"],
                        "itemsReturned": ["leafs"],
                    },
                },
                {
                    choice: "push",
                    destination: "web",
                    story: `
                    Too sticky... you would rather not do that!
                    `,
                    storyConditionMet:`
                    Really sticky... you would rather not do that!
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "use stick",
                    destination: "web",
                    story: `
                    You need to find a stick.
                    `,
                    storyConditionMet:`
                    The web seems to be highly resistant. What sort of spider\
                    web is this?
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["stick"],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "use torch",
                    destination: "forest_clearing",
                    story: `
                    You need to find a torch.
                    `,
                    storyConditionMet:`
                    You use the lighting torch on the spider web and the web melts away.
                    You are now able to pass!
                    You walk ahead and reach a medium sized open area surrounded by trees.
                    There are many flowers growing around with colors ranging from
                    bright red to full white. The flowers are large and fragrant. They
                    seem to be wild peonies.  It's strange, because you thought they
                    grew only in the Spring. At the edge of the
                    area, next to the forest trees, you notice some mushrooms.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["torch"],
                        "itemsReturned": ["_web melted"],
                    },
                },
                
            ],
            items: [
            ],
            
        },

        fireplace: {
            image: "fireplace1.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            You get closer to the fireplace. A circle of rocks surrounds some ashes and wood
            leftovers.
            `,
            choices: [
                {
                    choice: "camping",
                    destination: "camping1",
                },
                {
                    choice: "watch",
                    destination: "fireplace",
                    story: `
                    `,
                    storyConditionMet:`
                    You watch the campfire. There are a couple of rocks arranged
                    in a circle, and in the middle of it, there is a small fire burning
                    lightly. From time to time you hear some pops and cracks, and you see
                    small red dots raising up into the air and then vanishing
                    away. Unless you add more dry leafs, the fire is going to
                    fade away pretty soon.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_fire started"],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "use rock",
                    destination: "fireplace",
                    story: `
                    You need a rock and make sure the fireplace is prepared.
                    `,
                    storyConditionMet:`
                    You take your rock and then you pick a second one from the circle
                    of stones. You pick the one that shines the most,
                    and then you strike the two of them to create a
                    spark... Unfortunately, it doesn't work like in the movies,
                    and there is one more detail you might have overlooked -
                    these are not flint stones! Fortunately, there was a box of
                    matches next to the shiny rock you have picked up, and you
                    use it to light up
                    the fire. You are as happy as a child with the result!
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["rock","_fireplace prepared"],
                        "itemsReturned": ["_fire started"],
                    },
                },
                {
                    choice: "use leafs",
                    destination: "fireplace",
                    story: `
                    You need to find a some leafs first.
                    `,
                    storyConditionMet:`
                    You remove the ashes and other wood leftovers, you take the
                    dry leafs you have
                    collected, and then you spread them inside the circle of rocks.
                    You make sure sure they are distributed evenly, and there is
                    enough air in between.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["leafs"],
                        "itemsReturned": ["_fireplace prepared"],
                    },
                },
                {
                    choice: "use stick",
                    destination: "fireplace",
                    story: `
                    You need a stick and make sure the fire is started.
                    `,
                    storyConditionMet:`
                    You push the end of the stick into the fire and then you
                    pull it out. You have just created an olympic torch.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["stick", "_fire started"],
                        "itemsReturned": ["torch"],
                    },
                },
                
            ],
            items: [
                {
                    name: "rock",
                    story: `
                    You have picked up a rock.
                    `,
                },
            ],
            
        },

        forest_clearing: {
            image: "forest clearing.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            This place is surrounded by trees and there are
            many flowers growing around, with colors ranging from
            bright red to full white. The flowers are large and fragrant. They
            seem to be wild peonies. At the edge of the
            area, next to the forest trees, you notice some mushrooms.
            `,
            choices: [
                {
                    choice: "squirell",
                    destination: "squirell",
                },
                
            ],
            items: [
            ],
            
        },

    }
}