const comicsData = [
  {
    level: 1,
    heading: 'Welcome!',
    type: 'dialog',
    comic: [
      {
        character: 'Xia',
        dialog:
          'Oh hi trainee, im Xia! Welcome to the lab! Its a mess here, hope you can help us find the missing equipment on this lab.',
        duration: 1,
        delay: 0.5,
      },
      {
        character: 'Daniel',
        dialog:
          'Hello! I am Daniel. Your job is to find the missing items listed by clicking on them. Make sure to confirm the items you find.',
        duration: 1,
        delay: 0.5,
      },
      {
        character: 'Xia',
        dialog: 'Lets try 1 item for now. It should be easy. You can PAUSE by tapping on the timer.',
        duration: 1,
        delay: 0.5,
      },
      {
        character: 'Daniel',
        dialog: 'Oh, please be aware of the time limit. You only have 30 seconds to find your first item. Good luck!',
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
        dialog: 'Let us tell you something ...',
        duration: 1,
        delay: 0.5,
      },
      {
        character: 'Daniel',
        dialog: 'Most of the time, you need to find multiple items to get the job done. Lets try 3 items now.',
        duration: 1,
        delay: 0.5,
      },
      {
        character: 'Xia',
        dialog:
          'Thats 3 items in 30 seconds. Ill give you a tip, scroll left and right, you might find some items there. Good luck!',
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
        dialog: 'Good job! You are officially a Trainee now.',
        duration: 1,
        delay: 0.5,
      },
      {
        character: 'Daniel',
        dialog: 'Jobs easy right? I think youll get the hang of it. Congrats!',
        duration: 1,
        delay: 0.5,
      },
      {
        character: 'Xia',
        dialog: 'You need to get to certain levels to get promoted. I think you can be in your own now.',
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
          'Wow! We cant believe you easily made it here, congrats! From here on, Its you against the clock. Looking forward to see you secure that elusive 1st place!',
        duration: 1,
        delay: 0.5,
      },
      {
        character: 'Daniel',
        dialog:
          'Were pretty sure you know your lab equipment now. Congrats on being an expert! Now nail that 1st place in the hall of fame. Good luck!',
        duration: 1,
        delay: 0.5,
      },
    ],
  },
];

export default comicsData;
