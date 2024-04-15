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
                You pull some strings, but the sound coming out of them does not seem right...
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
          destination: "theend",
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
