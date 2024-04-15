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
      ],
      items: [],
    },
  };
}
