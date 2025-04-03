
import { MontessoriGame } from './types';

export const scienceGames: MontessoriGame[] = [
  {
    id: 5,
    title: "Indoor Nature Walk",
    emoji: "🔍",
    intro: "An exploration activity that brings natural elements indoors for observation, classification, and language development.",
    setup: [
      "Collect various natural items (pinecones, leaves, rocks, flowers, etc.) and place in a basket",
      "Create simple cards with pictures or drawings of each item",
      "Spread out a nature-themed mat or green cloth as your 'forest floor'",
      "Place the items around the room for your child to find",
      "Give your child the basket and cards to match each found item"
    ],
    learningSkills: [
      "Visual discrimination and matching",
      "Vocabulary development through naming natural elements",
      "Cognitive mapping and memory skills"
    ],
    extensionIdeas: [
      "Add a magnifying glass to observe details of each item",
      "Create simple classification activities (plants vs. rocks, etc.)",
      "For multiple children, create a scavenger hunt list with pictures"
    ],
    materialsNeeded: [
      "Various natural items",
      "Picture cards of each item",
      "Basket for collecting",
      "Green cloth or mat",
      "Optional: magnifying glass"
    ],
    category: "Science",
    ageRange: [2, 3, 4]
  },
  {
    id: 20,
    title: "Sink or Float Testing Lab",
    emoji: "🧪",
    intro: "A simple scientific investigation that develops prediction skills and introduces basic physics concepts through water play.",
    setup: [
      "Fill a clear container halfway with water",
      "Collect various small household objects (cork, rock, crayon, plastic toy)",
      "Create a simple chart with 'sink' and 'float' columns",
      "Demonstrate predicting and then testing each object",
      "Guide your child to sort objects after testing"
    ],
    learningSkills: [
      "Scientific prediction and observation",
      "Understanding of basic physics concepts",
      "Classification skills"
    ],
    extensionIdeas: [
      "Test multiple objects of the same material (different sized rocks)",
      "Introduce the concept of density with simple explanations",
      "For multiple children, each can make predictions before group testing"
    ],
    materialsNeeded: [
      "Clear container of water",
      "Collection of various small objects",
      "Simple chart or sorting tray",
      "Towel for spills",
      "Optional: recording sheet for results"
    ],
    category: "Science",
    ageRange: [3, 4]
  },
  {
    id: 21,
    title: "Magnetic Discovery Board",
    emoji: "🧲",
    intro: "An engaging scientific exploration that introduces magnetism through hands-on investigation and sorting.",
    setup: [
      "Collect a variety of small metal and non-metal objects",
      "Provide a child-safe magnet wand or large magnet",
      "Create a sorting tray labeled 'magnetic' and 'not magnetic'",
      "Demonstrate testing objects with the magnet",
      "Encourage independent testing and sorting"
    ],
    learningSkills: [
      "Scientific testing and observation",
      "Understanding of magnetism",
      "Classification based on properties"
    ],
    extensionIdeas: [
      "Test which surfaces magnets can work through (paper, fabric, plastic)",
      "Explore magnet strength with different sized magnets",
      "For multiple children, create a magnetic scavenger hunt around the house"
    ],
    materialsNeeded: [
      "Child-safe magnet or magnetic wand",
      "Collection of metal and non-metal objects",
      "Sorting tray or labeled containers",
      "Tray for materials",
      "Optional: recording sheet for older children"
    ],
    category: "Science",
    ageRange: [2, 3, 4]
  }
];
