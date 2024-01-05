const comicsData = [
  {
    level: 1,
    heading: 'Welcome!',
    type: 'dialog',
    comic: [
      {
        character: 'Xia',
        dialog:
          'Hi! trainee, I am Xia. Welcome to the lab! It is a mess here. I hope that you can help us find the missing equipment in this laboratory scene.',
        duration: 1,
        delay: 0.5,
      },
      {
        character: 'Daniel',
        dialog:
          'Hello! I am Daniel. Your goal is to find the missing laboratory items by clicking on them. Select the correct items listed.',
        duration: 1,
        delay: 0.5,
      },
      {
        character: 'Xia',
        dialog:
          'Let us try the first item. Once in the game, you can PAUSE anytime by clicking the timer above the scene.',
        duration: 1,
        delay: 0.5,
      },
      {
        character: 'Daniel',
        dialog: 'Please be mindful of the time limit. You only have 30 seconds to find the first missing item. Enjoy!',
        duration: 1,
        delay: 0.5,
      },
    ],
  },
  {
    level: 2,
    heading: 'Lets step it up ',
    type: 'dialog',
    comic: [
      {
        character: 'Xia',
        dialog: 'Good job! Let us try another one.',
        duration: 1,
        delay: 0.5,
      },
      {
        character: 'Daniel',
        dialog:
          'In the next round, you will need to locate and identify 3 specific missing items in 30 seconds to progress to the next level.',
        duration: 1,
        delay: 0.5,
      },
      {
        character: 'Xia',
        dialog: 'You can scroll from left to right to find some items there.',
        duration: 1,
        delay: 0.5,
      },
    ],
  },
  {
    level: 3,
    heading: 'Trainee',
    type: 'both',
    comic: [
      {
        character: 'Xia',
        dialog: 'Great job! You are officially a TRAINEE now.',
        duration: 1,
        delay: 0.5,
      },
      {
        character: 'Daniel',
        dialog:
          'As the difficulty increases, I believe you will find more enjoyment in the challenge, as you progress to higher levels.',
        duration: 1,
        delay: 0.5,
      },
      {
        character: 'Xia',
        dialog:
          'Advancing to specific levels will help you earn promotions, acquire more stars, and unlock various badges. I trust in your ability to accomplish these milestones on your own.',
        duration: 1,
        delay: 0.5,
      },
      {
        character: 'Daniel',
        dialog: 'We will just pop-up from time to time to assess your progress. Good luck!',
        duration: 1,
        delay: 0.5,
      },
    ],
  },
  {
    level: 6,
    heading: 'Apprentice',
    type: 'banner',
    comic: [],
  },
  {
    level: 11,
    heading: 'Supervisor',
    type: 'banner',
    comic: [],
  },
  {
    level: 16,
    heading: 'Manager',
    type: 'banner',
    comic: [],
  },
  {
    level: 21,
    heading: 'Director',
    type: 'banner',
    comic: [],
  },
  {
    level: 26,
    heading: 'Expert',
    type: 'both',
    comic: [
      {
        character: 'Xia',
        dialog:
          'Impressive progress! Congratulations on reaching this stage swiftly. Now, it is a race against time. We eagerly anticipate witnessing your goal of securing the elusive first place!',
        duration: 1,
        delay: 0.5,
      },
      {
        character: 'Daniel',
        dialog:
          'Your knowledge of laboratory equipment, apparatuses, and materials is commendable, establishing you as an expert! Now, aim to secure the top spot in the hall of fame. Best of luck as you strive for that first-place position!',
        duration: 1,
        delay: 0.5,
      },
    ],
  },
];

export default comicsData;
