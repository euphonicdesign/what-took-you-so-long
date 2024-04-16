function getStoryChapter7(name) {
  return {
    currentScene: "booklets",
    currentChapter: "7",
    player: {
      // inventory: ["camera","_docile dog", "_guard recommendation", "_way forward", "_fisherman recommendation",
      //             "_shield down",
      // ]
      inventory: [],
    },
    lastActionStory: ``,
    conditionsAchieved: [],
    booklets: {
      image: "booklets.jpg",
      story: `
            Continuing from last time ${name}...
            Travelling and all of that has been fun. However, you are about to start a new endeavor. You are now in the city. Around you there is a shelf full of booklets.
            `,
      story2flag: false,
      story2: `
            You are now in the city. Around you there is a shelf full of booklets.
            `,
      choices: [
        {
          choice: "get booklet",
          destination: "booklets",
          story: `
                      You pick one of the booklets and start reading. Inside you find details about an international classical music competition and the different venues you could visit.
                      `,
          storyConditionMet: `
                      You already have one.
                      `,
          condition: {
            conditionMet: false,
            itemsRequired: [],
            itemsReturned: ["booklet"],
          },
        },
        {
          choice: "continue",
          destination: "athenaeum",
          story: `
                    You cannot continue.
                      
                      `,
          storyConditionMet: `
                    You go to the first venue.  
                      `,
          condition: {
            conditionMet: false,
            itemsRequired: ["booklet"],
            itemsReturned: [],
          },
        },
      ],
      items: [],
    },
    athenaeum: {
      image: "athenaeum.jpg",
      story: `
            You are now near the athenaeum. Since the sun is pretty strong outside you take cover under the shade of a tree.
            `,
      story2flag: false,
      story2: `
            You are now near the athenaeum. Since the sun is pretty strong outside you take cover under the shade of a tree.
            `,
      choices: [
        {
          choice: "go inside the Athenaeum",
          destination: "inside_athenaeum",
        },
        {
          choice: "go to the Conservatory",
          destination: "conservatory_stage",
        },
        {
          choice: "go to the Concert Hall",
          destination: "concert_hall",
        },
      ],
      items: [],
    },
    inside_athenaeum: {
      image: "inside_athenaeum.jpg",
      story: `
            You are now inside the athenaeum. 
            `,
      story2flag: false,
      story2: `
            You are now inside the athenaeum.
            `,
      choices: [
        {
          choice: "go outside",
          destination: "athenaeum",
        },
        {
          choice: "climb stairs",
          destination: "athenaeum_empty_stage",
        },
      ],
      items: [],
    },
    athenaeum_empty_stage: {
      image: "athenaeum_empty_stage.jpg",
      story: `
            You climb the stairs of the athenaeum. The stage looks empty... 
            `,
      story2flag: false,
      story2: `
            You are inside the main hall of the athenaeum. The stage looks empty... 
            `,
      choices: [
        {
          choice: "exit",
          destination: "inside_athenaeum",
        },
        {
          choice: "listen to the music",
          destination: "athenaeum_full_stage",
          story: `
            There is no music...
            `,
          storyConditionMet: `
            `,
          condition: {
            conditionMet: false,
            itemsRequired: ["_piano tinkered"],
            itemsReturned: ["_athenaeum music listened"],
          },
        },
      ],
      items: [],
    },
    conservatory_stage: {
      image: "conservatory_stage.jpg",
      story: `
              You enter the conservatory. Someone is playing the violin on the main stage.
              `,
      story2flag: false,
      story2: `
            Someone is playing the violin on the main stage.
              `,
      choices: [
        {
          choice: "exit",
          destination: "athenaeum",
        },
        {
          choice: "go to the backrows",
          destination: "conservatory_backrows",
        },
        {
          choice: "piano",
          destination: "piano",
        },
        {
          choice: "listen to the music",
          destination: "conservatory_stage",
          story: `
                  Despite being so young, the contestats are very talented. They play their instruments amazingly well. It is a pity that the audience is so limited, even though the entrance is free for all. 
                  `,
          storyConditionMet: `
            Despite being so young, the contestats are very talented. They play their instruments amazingly well. It is a pity that the audience is so limited, even though the entrance is free for all.
                  `,
          condition: {
            conditionMet: false,
            itemsRequired: [],
            itemsReturned: [],
          },
        },
      ],
      items: [],
    },
    conservatory_backrows: {
      image: "conservatory_backrows.jpg",
      story: `
                You go to the backrows. The jury seems to be studying their notes.
                `,
      story2flag: false,
      story2: `
                The jury seems to be studying their notes.
                `,
      choices: [
        {
          choice: "front rows",
          destination: "conservatory_stage",
        },
        {
          choice: "evaluate",
          destination: "final_performance",
          story: `
                Not enough harmony. You need to raise the harmony levels.
                `,
          storyConditionMet: `
                It's time for the final performance of the contestants. You are all ears. You now have a solid grasp of musical structure.
                `,
          condition: {
            conditionMet: false,
            itemsRequired: ["_concert started"],
            itemsReturned: ["_final performance"],
          },
        },
        {
          choice: "make noise",
          destination: "conservatory_backrows",
          story: `
                  Shh... Be quiet. You are not allowed to make any noise here... The jury is deliberating...
                  `,
          storyConditionMet: `
                    Shh... Be quiet. You are not allowed to make any noise here... The jury is deliberating...
                  `,
          condition: {
            conditionMet: false,
            itemsRequired: [],
            itemsReturned: [],
          },
        },
      ],
      items: [],
    },
    piano: {
      image: "piano.jpg",
      story: `
                You go near the piano. Its strings look sharp.
                `,
      story2flag: false,
      story2: `
                You go near the piano. Its strings look sharp.
                `,
      choices: [
        {
          choice: "front rows",
          destination: "conservatory_stage",
        },
        {
          choice: "pull strings",
          destination: "piano",
          story: `
                You pull some strings, but the sound coming out of them does not seem to be right...
                `,
          storyConditionMet: `
                The piano seems to be tuned now.
                `,
          condition: {
            conditionMet: false,
            itemsRequired: ["_piano tinkered"],
            itemsReturned: [],
          },
        },
        {
          choice: "tinker with the strings",
          destination: "piano",
          story: `
              You tinker with the strings of the piano... After an odd sound, you manage to pull some harmony out of it.
              `,
          storyConditionMet: `
                There is harmony coming out of the piano.
              `,
          condition: {
            conditionMet: false,
            itemsRequired: [],
            itemsReturned: ["_piano tinkered"],
          },
        },
      ],
      items: [],
    },
    concert_hall: {
      image: "concert_hall.jpg",
      story: `
                You choose to go to the concert hall. The stage looks empty now.
                `,
      story2flag: false,
      story2: `
                You choose to go to the concert hall. The stage looks empty now.
                `,
      choices: [
        {
          choice: "return",
          destination: "athenaeum",
        },
        {
          choice: "listen to the concert",
          destination: "concert",
          story: `
                The concert has not started yet...
                `,
          storyConditionMet: `
                The concert has started. The performance is outstanding. Harmony is at its maximum level.
                `,
          condition: {
            conditionMet: false,
            itemsRequired: ["_athenaeum music listened"],
            itemsReturned: ["_concert started"],
          },
        },
      ],
      items: [],
    },

    athenaeum_full_stage: {
      image: "athenaeum_full_stage.jpg",
      story: `
              The orchestra is performing on the stage. You start listening to the music... Harmony levels increased.
              `,
      story2flag: false,
      story2: `
            The orchestra is performing on the stage. You start listening to the music... Harmony levels increased.
              `,
      choices: [
        {
          choice: "return",
          destination: "inside_athenaeum",
        },
      ],
      items: [],
    },

    concert: {
      image: "concert.jpg",
      story: `
                  `,
      story2flag: false,
      story2: `
                  `,
      choices: [
        {
          choice: "return",
          destination: "concert_hall",
        },
      ],
      items: [],
    },

    final_performance: {
      image: "final_performance.jpg",
      story: `
                    `,
      story2flag: false,
      story2: `
                    `,
      choices: [
        {
          choice: "continue",
          destination: "part2",
        },
      ],
      items: [],
    },

    part2: {
      image: "part2.jpg",
      story: `
                      `,
      story2flag: false,
      story2: `
                      `,
      choices: [
        {
          choice: "part 2",
          destination: "home",
        },
      ],
      items: [],
    },

    home: {
      image: "home.jpg",
      story: `
        You are now home.
                        `,
      story2flag: false,
      story2: `
        You are now home.
                        `,
      choices: [
        {
          choice: "office",
          destination: "home",
          story: `
                  Having your education completed by now, you are working side by side with the people you have encountered before...
                  Being the 1st day in the office, you go to the reception and meet there a young lady. It is her 1st day in the office as well.
                  You know her from high-school. 
                  `,
          storyConditionMet: `
                  Having your education completed by now, you are working side by side with the people you have encountered before...
                  `,
          condition: {
            conditionMet: false,
            itemsRequired: [],
            itemsReturned: ["_office visited"],
          },
        },
        {
          choice: "travel",
          destination: "airport",
          story: `
                    There are other matters to attend first.
                    `,
          storyConditionMet: `
                    It is still early morning. Your taxi driver has come to pick you up for the airport and is waiting outside your room. It's time to depart on your first
            flight adventure.
                    `,
          condition: {
            conditionMet: false,
            itemsRequired: ["_office visited"],
            itemsReturned: [],
          },
        },
      ],
      items: [],
    },

    airport: {
      image: "airport.jpg",
      story: `
                      `,
      story2flag: false,
      story2: `
                      `,
      choices: [
        {
          choice: "depart",
          destination: "in_air_1",
        },
      ],
      items: [],
    },

    in_air_1: {
      image: "airport.jpg",
      story: `
        As the plane departs you start feeling the acceleration pressure building up in your chest. In no time you are in the air.
                      `,
      story2flag: false,
      story2: `
        You are in the air now.
                      `,
      choices: [
        {
          choice: "look outside",
          destination: "look_outside_1",
          story: `
                      `,
          storyConditionMet: `
                      `,
          condition: {
            conditionMet: false,
            itemsRequired: [],
            itemsReturned: ["_looked outside 1"],
          },
        },
        {
          choice: "fly",
          destination: "connection",
          story: `
                        `,
          storyConditionMet: `
                        `,
          condition: {
            conditionMet: false,
            itemsRequired: ["_looked outside 1"],
            itemsReturned: [],
          },
        },
      ],
      items: [],
    },

    look_outside_1: {
      image: "look_outside_1.jpg",
      story: `
          You look outside the plane window. The weather is nice and sunny...
                        `,
      story2flag: false,
      story2: `
                        `,
      choices: [
        {
          choice: "return to your seat",
          destination: "in_air_1",
        },
      ],
      items: [],
    },

    connection: {
      image: "connection.jpg",
      story: `
          You continue flying until you reach your connection to your final destination. Once the airplance touches down, somewhere near luggage area you notice a girl with beautiful blue eyes and nice features. She kindof looks like the princess. It ends up she's one of your new colleagues.
                        `,
      story2flag: false,
      story2: `
          You are at your flight connection airport.
                        `,
      choices: [
        {
          choice: "depart",
          destination: "in_air_2",
        },
      ],
      items: [],
    },

    in_air_2: {
      image: "airport.jpg",
      story: `
          Once again you are in the air.
                        `,
      story2flag: false,
      story2: `
          Once again you are in the air.
                        `,
      choices: [
        {
          choice: "attempt landing",
          destination: "final_destination",
          story: `Unfortunately, the plane cannot land, due to the snowstorm outside...
                            `,
          storyConditionMet: `
            After half an hour of moving in circles up in the air, the pilot announces that he will atempt to land the plane. The landing is rough due to the snow that has built up on the runway. The plane comes to a complete halt. After 5 minutes of tension, the captain announces that due to poor visibility, we are stuck on the runway. After 15 more minutes the plane starts moving again and we are able to dock at the terminal. 
                            `,
          condition: {
            conditionMet: false,
            itemsRequired: ["_holding pattern", "_plane chat"],
            itemsReturned: [],
          },
        },
        {
          choice: "look outside",
          destination: "look_outside_2",
        },
        {
          choice: "chat",
          destination: "in_air_2",
          story: `One of your colleagues approaches you. She's being friendly and you have a nice conversation. It is the first time you are communicating with someone in a foreign language. 
                              `,
          storyConditionMet: `
            It is the first time you are communicating with someone in a foreign language. 
                              `,
          condition: {
            conditionMet: false,
            itemsRequired: [],
            itemsReturned: ["_plane chat"],
          },
        },
      ],
      items: [],
    },

    look_outside_2: {
      image: "look_outside_2.jpg",
      story: `
            You look outside the plane window. Everything is covered with snow...
                          `,
      story2flag: false,
      story2: `
            You look outside the plane window. Everything is covered with snow...
                          `,
      choices: [
        {
          choice: "return to your seat",
          destination: "in_air_2",
        },
        {
          choice: "start worrying",
          destination: "look_outside_2",
          story: `Once you reach your final destination, the captain announces that the plane cannot land due to the snowstorm. Being up in the air at such a high altitude you start worrying. The plane is moving in circles, flying a holding pattern.
                          `,
          storyConditionMet: `
          Once you reach your final destination, the captain announces that the plane cannot land due to the snowstorm. Being up in the air at such a high altitude you start worrying. The plane is moving in circles, flying a holding pattern.
                          `,
          condition: {
            conditionMet: false,
            itemsRequired: [],
            itemsReturned: ["_holding pattern"],
          },
        },
      ],
      items: [],
    },

    final_destination: {
      image: "final_destination.jpg",
      story: `
            
                          `,
      story2flag: false,
      story2: `
            You are at your final destination. It is snowing heavily.
                          `,
      choices: [
        {
          choice: "train travel",
          destination: "heavy_rain",
          story: `Not before you take a couple of photos...
                              `,
          storyConditionMet: `
              It's time to move on to you next destination. You pick up a train and travel to the hotel location. By now, it is night outside and the snow has turned into heavy rain...
                              `,
          condition: {
            conditionMet: false,
            itemsRequired: [
              "gothic building photo",
              "signpost photo",
              "castle photo",
              "stairs photo",
            ],
            itemsReturned: [],
          },
        },
        {
          choice: "gothic building",
          destination: "gothic_building",
        },
        {
          choice: "castle",
          destination: "castle",
          story: `You don't know how to reach there...
                              `,
          storyConditionMet: `
              You are on your way to the castle.
                              `,
          condition: {
            conditionMet: false,
            itemsRequired: ["_castle direction"],
            itemsReturned: [],
          },
        },
        {
          choice: "signpost",
          destination: "signpost",
        },
        {
          choice: "stairs",
          destination: "stairs",
        },
      ],
      items: [],
    },

    gothic_building: {
      image: "gothic_building.jpg",
      story: `
              As you explore the surroundings you reach a tall gothic style building.
                            `,
      story2flag: false,
      story2: `
              You are near a tall gothic style building.
                            `,
      choices: [
        {
          choice: "return",
          destination: "final_destination",
        },
        {
          choice: "take photo",
          destination: "gothic_building",
          story: `You pull up your camera, and take a photo of the building.
                            `,
          storyConditionMet: `
            You already have one.
                            `,
          condition: {
            conditionMet: false,
            itemsRequired: [],
            itemsReturned: ["gothic building photo"],
          },
        },
      ],
      items: [],
    },
    signpost: {
      image: "signpost.jpg",
      story: `
              You have reached a signpost showing the way to the castle.
                            `,
      story2flag: false,
      story2: `
              You are near a tall gothic style building.
                            `,
      choices: [
        {
          choice: "return",
          destination: "final_destination",
        },
        {
          choice: "observe",
          destination: "signpost",
          story: `You observe the direction indicated by the signpost.
                            `,
          storyConditionMet: `
            You observe the direction indicated by the signpost.
                            `,
          condition: {
            conditionMet: false,
            itemsRequired: [],
            itemsReturned: ["_castle direction"],
          },
        },
        {
          choice: "take photo",
          destination: "signpost",
          story: `You pull up your camera, and take a photo of the signpost.
                            `,
          storyConditionMet: `
            You already have one.
                            `,
          condition: {
            conditionMet: false,
            itemsRequired: [],
            itemsReturned: ["signpost photo"],
          },
        },
      ],
      items: [],
    },

    castle: {
      image: "castle.jpg",
      story: `
                              `,
      story2flag: false,
      story2: `
                You are near the castle area.
                              `,
      choices: [
        {
          choice: "return",
          destination: "final_destination",
        },
        {
          choice: "take photo",
          destination: "castle",
          story: `You pull up your camera, and take a photo of the castle.
                              `,
          storyConditionMet: `
              You already have one.
                              `,
          condition: {
            conditionMet: false,
            itemsRequired: [],
            itemsReturned: ["castle photo"],
          },
        },
      ],
      items: [],
    },

    stairs: {
      image: "stairs.jpg",
      story: `You climb up a couple of stairs to get a better view of the surroundings.
                              `,
      story2flag: false,
      story2: `
      You climb up a couple of stairs to get a better view of the surroundings.
                              `,
      choices: [
        {
          choice: "return",
          destination: "final_destination",
        },
        {
          choice: "take photo",
          destination: "stairs",
          story: `You pull up your camera, and take a photo of the surroundings.
                              `,
          storyConditionMet: `
              You already have one.
                              `,
          condition: {
            conditionMet: false,
            itemsRequired: [],
            itemsReturned: ["stairs photo"],
          },
        },
      ],
      items: [],
    },

    heavy_rain: {
      image: "heavy_rain.jpg",
      story: `
                              `,
      story2flag: false,
      story2: `
                You have reached your final destination. It is raining heavily outside and it is cold.
                              `,
      choices: [
        {
          choice: "hotel",
          destination: "hotel",
        },
      ],
      items: [],
    },

    theend: {
      image: "final_performance.jpg",
      story: `
        You have reached the end of chapter 7... 
        `,
      story2flag: false,
      story2: `
        `,
      choices: [],
      items: [],

      buttonText: "Select the 8th chapter from the top",
    },
  };
}
