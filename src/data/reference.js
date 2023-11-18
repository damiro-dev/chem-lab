// reference for itemsData and items images
// images are named using reference number with .png extension

const referenceData = [
  {
    reference: 1,
    name: 'microscope',
    description: 'a microscope with a magnifying glass',
  },
  {
    reference: 2,
    name: 'timer',
    description: 'clock to keep track of time',
  },
  {
    reference: 3,
    name: 'lens set',
    description: 'a pair of glass to refract light',
  },
  {
    reference: 4,
    name: 'dikdikan',
    description: 'use to cruch substances',
  },
  {
    reference: 5,
    name: 'spring weigh',
    description: 'use to weigh objects with a spring',
  },
  {
    reference: 6,
    name: 'blue ring test tube',
    description: 'a test tube with a blue ring',
  },
  {
    reference: 7,
    name: 'flame tripod',
    description: 'a magnifying glass',
  },
  {
    reference: 8,
    name: 'test tube rack',
    description: 'a rack to hold test tubes',
  },
  {
    reference: 9,
    name: 'gas burner',
    description: 'a bottle container for gas',
  },
  {
    reference: 10,
    name: 'big tong',
    description: 'a big tong',
  },
  {
    reference: 11,
    name: 'gloves',
    description: 'a pair of gloves',
  },
  {
    reference: 12,
    name: 'petri dish',
    description: 'a dish for holding specimens',
  },
  {
    reference: 13,
    name: 'gas tube',
    description: 'a tube for controlling gas',
  },
  {
    reference: 14,
    name: 'beam balance',
    description: 'a balance with a beam',
  },
  {
    reference: 15,
    name: 'red pump',
    description: 'a rubber red pump',
  },
  {
    reference: 16,
    name: 'tong',
    description: 'a usual tong',
  },
  {
    reference: 17,
    name: 'dark botelya',
    description: 'a dark glass cannister',
  },
  {
    reference: 18,
    name: 'disecting set',
    description: 'a set of tools for disecting',
  },
  {
    reference: 19,
    name: 'long neck flask',
    description: 'a tall rounded flask',
  },
  {
    reference: 20,
    name: 'screen',
    description: 'a screen made with steel wires',
  },
  {
    reference: 21,
    name: 'spoontula',
    description: 'a spoon with spatula on both ends',
  },
  {
    reference: 22,
    name: 'malaking thermometer',
    description: 'a plastic eqpt that looks like a thermometer',
  },
  {
    reference: 23,
    name: 'vials',
    description: 'a set of small glass containers',
  },
  {
    reference: 24,
    name: 'red Ts',
    description: 'a set of red metal object that shaped like a T',
  },
  {
    reference: 25,
    name: 'litmus paper',
    description: 'a bunch of litmus paper',
  },
  {
    reference: 26,
    name: 'paper de hapon',
    description: 'a set of onion like thin sheets of paper',
  },
  {
    reference: 27,
    name: 'slides',
    description: 'a set of gless slides',
  },
  {
    reference: 28,
    name: 'flat weight',
    description: 'a metal flat top weighing scale',
  },
  {
    reference: 29,
    name: 'brush for bottle',
    description: 'set of brushes for cleaning a bottle',
  },
  {
    reference: 30,
    name: 'plastic pitsel',
    description: 'a plastic container made to easily transfer liquids',
  },
  {
    reference: 31,
    name: 'bottle with takip',
    description: 'a pair of bottle with a cap',
  },
  {
    reference: 32,
    name: 'magnet',
    description: 'a metal magnet used to attract metal objects',
  },
  {
    reference: 33,
    name: 'inertia tube',
    description: 'a tube used to experiemnt with inertia',
  },
  {
    reference: 34,
    name: 'magnifying glass',
    description: 'a glass used to magnify objects',
  },
  {
    reference: 35,
    name: 'thermometer',
    description: 'eqpt use to measure temperature',
  },
  {
    reference: 36,
    name: 'barometer',
    description: 'eqpt used to measure pressure',
  },
  {
    reference: 37,
    name: 'beakers',
    description: 'a glass container for holding liquids',
  },
  {
    reference: 38,
    name: 'glass stirer',
    description: 'a long glass object used to stir',
  },
  {
    reference: 39,
    name: 'dropper',
    description: 'a plastic object used to control drop of liquids',
  },
  {
    reference: 40,
    name: 'ceramic bowl',
    description: 'a bowl made of ceramic',
  },
  {
    reference: 41,
    name: 'soil tester',
    description: 'eqpt used to test soil',
  },
  {
    reference: 42,
    name: 'metal tray',
    description: 'a metal tray used to lay objects',
  },
  {
    reference: 43,
    name: 'glass dish',
    description: 'a glass dish used to hold objects',
  },
  {
    reference: 44,
    name: 'cork',
    description: 'an object used to seal liquids into containers',
  },
  {
    reference: 45,
    name: 'rubber cork',
    description: 'a rubber object used to seal liquids into containers',
  },
  {
    reference: 46,
    name: 'flash light',
    description: 'a light used to flash objects',
  },
  {
    reference: 47,
    name: 'glass funnel',
    description: 'a long glass object used to funnel objects',
  },
  {
    reference: 48,
    name: 'chem electricity ckt',
    description: 'a circuit used to experiment with chemical elements',
  },
  {
    reference: 49,
    name: 'square plate weigh',
    description: 'a flat top squared plate used to weigh objects',
  },
  {
    reference: 50,
    name: 'plastic dish case',
    description: 'a plastic case used to hold glass dishes',
  },
  {
    reference: 51,
    name: 'flask',
    description: 'a regular flask',
  },
  {
    reference: 52,
    name: 'ammeter',
    description: 'a eqpt used to measure current',
  },
  {
    reference: 53,
    name: 'laser',
    description: 'a laser used to emit strong light',
  },
  {
    reference: 54,
    name: 'earth core',
    description: 'a model of earth that shows its core',
  },
  {
    reference: 55,
    name: 'voltmeter',
    description: 'a eqpt used to measure voltage',
  },
  {
    reference: 56,
    name: 'prism',
    description: 'a glass object used to reflect light',
  },
  {
    reference: 57,
    name: 'goggles',
    description: 'a pair of glasses to protect eyes',
  },
  {
    reference: 58,
    name: 'chacko',
    description: 'a pair of wooden objects that has ball and ring on each pair',
  },
  {
    reference: 59,
    name: 'telescope',
    description: 'a device used to observe objects',
  },
  {
    reference: 60,
    name: 'calculator',
    description: 'a eqpt used to perform calculations',
  },
];

export default referenceData;
