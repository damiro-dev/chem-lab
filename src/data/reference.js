// reference for itemsData and items images
// images are named using reference number with .png extension

const referenceData = [
  {
    reference: 1,
    name: 'Microscope',
    description: 'It is used for magnifying small objects or specimens for detailed examination.',
  },
  {
    reference: 2,
    name: 'Evaporating Dish',
    description:
      'It is used for heating stable solid compounds and elements as well as for evaporating non-volatile solutions.',
  },
  {
    reference: 3,
    name: 'Florence Flask',
    description:
      'It has a round body with a single long neck with either a round or a flat bottom that can be used as a container to hold solutions of chemicals.',
  },
  {
    reference: 4,
    name: 'Test Tube Rack',
    description: 'It is used for the storage of test tubes.',
  },
  {
    reference: 5,
    name: 'Mirror Set',
    description: 'It is used to utilize reflection to redirect, focus, and collect light.',
  },
  {
    reference: 6,
    name: 'Tripod',
    description:
      'It is used to provide stable support for laboratory glassware and equipment, especially during heating.',
  },
  {
    reference: 7,
    name: 'Crucible Tongs',
    description: 'It is used for handling hot crucibles and to pick up other hot objects.',
  },
  {
    reference: 8,
    name: 'Graduated Cylinder',
    description: 'It is used to measure the volume of liquids.',
  },
  {
    reference: 9,
    name: 'Triple Beam Balance',
    description: 'It is used to determine the mass of samples.',
  },
  {
    reference: 10,
    name: 'Test Tube Holder',
    description: 'It is used to hold the test tube.',
  },
  {
    reference: 11,
    name: 'Mortar and Pestle',
    description: 'It is used for grinding and pulverizing substances.',
  },
  {
    reference: 12,
    name: 'Spatula',
    description:
      'It is used in mixing, scraping, scooping, and other tasks related to transferring materials and samples from one place to another.',
  },
  {
    reference: 13,
    name: 'Thermometer',
    description: 'It is used to measure temperature.',
  },
  {
    reference: 14,
    name: 'Microscope Slides',
    description: 'It is designed to hold samples in place for examination with a microscope.',
  },
  {
    reference: 15,
    name: 'Stopwatch',
    description: 'It is used to measure time intervals using specific activation and deactivation points.',
  },
  {
    reference: 16,
    name: 'Wire Gauze',
    description:
      'It is placed under the container holding the liquid that is being heated so that the container does not have direct contact with the flame.',
  },
  {
    reference: 17,
    name: 'Alcohol Lamp',
    description: 'It is a source of heat and light and is used for heating substances.',
  },
  {
    reference: 18,
    name: 'Gloves',
    description: 'It is used for safeguarding and protecting the hands.',
  },
  {
    reference: 19,
    name: 'Hand Lens',
    description: 'It is used in science and fieldwork to magnify small objects or details for closer examination.',
  },
  {
    reference: 20,
    name: 'Pipette Dropper',
    description: 'It is a device used to transfer small amounts of liquid. ',
  },
  {
    reference: 21,
    name: 'Spring Balance',
    description: 'It is commonly used to measure the force exerted on an object.',
  },
  {
    reference: 22,
    name: 'Bunsen Burner',
    description: 'It produced an open flame for various applications, like heating.',
  },
  {
    reference: 23,
    name: 'Pipette Bulb',
    description: 'It is used to draw and dispense precise volumes of liquids with a pipette.',
  },
  {
    reference: 24,
    name: 'Sling Psychrometer',
    description: 'It is used for standard air humidity measurements.',
  },
  {
    reference: 25,
    name: 'Sedimentator Tube',
    description: 'It is used to determine the settling characteristics of suspended particles in a liquid.',
  },
  {
    reference: 26,
    name: 'Wash Bottle',
    description:
      'It is used to rinse various pieces of laboratory glassware, such as test tubes and round-bottom flasks.',
  },
  {
    reference: 27,
    name: 'Hot Plate',
    description:
      'It is designed for heating and maintaining the temperature of substances in a controlled and precise manner.',
  },
  {
    reference: 28,
    name: 'Dissecting Pan',
    description: 'It is used to hold specimens and tools during dissection.',
  },
  {
    reference: 29,
    name: 'DC Voltmeter',
    description: 'It is used to determine the voltage between any two locations on an electric circuit.',
  },
  {
    reference: 30,
    name: 'Measuring Cup',
    description:
      'It is a piece of glassware or plasticware used to measure, dispense, and transfer liquids for various experimental purposes with a reasonable level of accuracy.',
  },
  {
    reference: 31,
    name: 'pH Meter',
    description: 'It is an instrument used to measure the acidity and alkalinity of a solution.',
  },
  {
    reference: 32,
    name: 'Cork Borer',
    description:
      'It is a metal instrument that is used to cut a hole in a cork or rubber stopper to insert glass tubing.',
  },
  {
    reference: 33,
    name: 'Dissecting Tools',
    description: 'It is a specialized instrument used in biology for the dissection of specimens.',
  },
  {
    reference: 34,
    name: 'Aneroid Barometer',
    description: 'It is a sealed metal chamber used to measure atmospheric pressure. ',
  },
  {
    reference: 35,
    name: 'Universal pH Paper',
    description: 'It is used to determine if a solution is acidic, alkaline, or neutral. ',
  },
  {
    reference: 36,
    name: 'Bar Magnet',
    description: 'It is used as stirrer in laboratories for magnetic experiments.',
  },
  {
    reference: 37,
    name: 'Top Load Electronic Balance',
    description: 'It is used for the accurate measurement of the weight of materials.',
  },
  {
    reference: 38,
    name: 'Lens Paper',
    description: 'It is used to clean lenses and other glass objects without scratching the surface.',
  },
  {
    reference: 39,
    name: 'DC Ammeter',
    description: 'It is used to measure the current flowing through a conductor.',
  },
  {
    reference: 40,
    name: 'Prism',
    description:
      'It is an instrument for analyzing light and determining the identity and structure of materials that emit or absorb light.',
  },
  {
    reference: 41,
    name: 'Laser Light',
    description:
      'It is used to provide a visible and clear light source to obtain accurate measurements during optical experiments.',
  },
  {
    reference: 42,
    name: 'Ring and Ball',
    description: 'It is used to determine the softening point of different bituminous materials.',
  },
  {
    reference: 43,
    name: 'Electrical Conductivity Apparatus',
    description: 'It is used to measure the electrical resistance of a material, typically a solution or substance.',
  },
  {
    reference: 44,
    name: 'Flashlight',
    description: 'It is a portable, battery-operated device used for illumination.',
  },
  {
    reference: 45,
    name: 'Solar System Simulator',
    description:
      'It is used to explore and understand the arrangement, motion, and characteristics of the sun, planets, moons, asteroids, and comets within our solar system.',
  },
  {
    reference: 46,
    name: 'Earth Globe',
    description: 'It is a spherical model of the earth that shows landmasses and water bodies.',
  },
  {
    reference: 47,
    name: 'Earth Inner Structure Model',
    description: 'It is a model that shows the inner structure of Earth.',
  },
  {
    reference: 48,
    name: 'Sun Inner Structure Model',
    description: 'It is a model that shows the inner structure of the Sun.',
  },
  {
    reference: 49,
    name: 'Utility Kitchen Scale',
    description: 'It is used to measure the weight of the substance.',
  },
  {
    reference: 50,
    name: 'Scientific Calculator',
    description:
      'It is a type of electronic calculator, designed to calculate problems in science, engineering, and mathematics. ',
  },
  {
    reference: 51,
    name: 'Soil Meter Test',
    description: 'A device used to measure the acidity or alkalinity of a soil. ',
  },
  {
    reference: 52,
    name: 'Rubber Stopper',
    description: 'It is used to seal containers to prevent leakage or contamination.',
  },
  {
    reference: 53,
    name: 'Test Tubes',
    description:
      'It is used for mixing and heating chemicals and reactions in smaller quantities than beakers and flasks.',
  },
  {
    reference: 54,
    name: 'Beaker',
    description: 'It is used to measure the volume of liquids.',
  },
  {
    reference: 55,
    name: 'Test Tube Brush',
    description: 'It is used for cleaning the test tube.',
  },
  {
    reference: 56,
    name: 'Erlenmeyer Flask',
    description: 'It is used for running reactions, heating, and mixing chemicals. It is easier to mix than beakers.',
  },
  {
    reference: 57,
    name: 'Watch Glass',
    description: 'It is used for holding small samples or covering beakers.',
  },
  {
    reference: 58,
    name: 'Funnel',
    description: 'It is used for transferring liquids into small containers.',
  },
  {
    reference: 59,
    name: 'Petri Dish',
    description: 'It is used for cultivating and observing microorganisms such as bacteria and fungi.',
  },
  {
    reference: 60,
    name: 'Stirring Rod',
    description: 'It is used to stir and mix solutions.',
  },
  {
    reference: 61,
    name: 'Safety Goggles',
    description: 'It is worn to prevent eye injuries while handling corrosive chemicals.',
  },
  {
    reference: 62,
    name: 'Electrolysis Apparatus',
    description:
      'It is a laboratory setup used to carry out a chemical process in which an electric current is passed through an electrolyte to induce a chemical reaction.',
  },
  {
    reference: 63,
    name: 'Vials',
    description: 'It is used to store a small tissue sample in a sealed container to prevent contamination.',
  },
  {
    reference: 64,
    name: 'Volumetric Flask',
    description:
      'It is used in preparing a solution using a pear-shaped design with a long neck to get a specific concentration of a chemical reagent.',
  },
  {
    reference: 65,
    name: 'Amber Reagent Bottle',
    description: 'It is used to store a highly reactive chemical solution safely.',
  },
  {
    reference: 66,
    name: 'Pipette',
    description: 'It is used to measure the exact volume and move small amounts of liquid.',
  },
  {
    reference: 67,
    name: 'Spot Test Plate',
    description: 'It is used to facilitate minor chemical reactions on a very small scale.',
  },
  {
    reference: 68,
    name: 'Cork Stopper',
    description: 'It is used to securely close a culture tube to prevent contamination.',
  },
  {
    reference: 69,
    name: 'Celestial Star Globe',
    description:
      'It is used to identify constellations, stars, and celestial objects while gaining an understanding of astronomy.',
  },
  {
    reference: 70,
    name: 'Telescope',
    description:
      'It is an optical instrument used for observing distant objects, including celestial objects in the night sky.',
  },
  {
    reference: 71,
    name: 'Clear Reagent Bottle',
    description: 'It is used to store a highly reactive chemical solution safely.',
  },
];

export default referenceData;
