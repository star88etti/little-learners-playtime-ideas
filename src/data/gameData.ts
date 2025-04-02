
export interface MontessoriGame {
  id: number;
  title: string;
  emoji: string;
  intro: string;
  setup: string[];
  learningSkills: string[];
  extensionIdeas: string[];
  materialsNeeded: string[];
  category: string;
  ageRange: number[];
}

export const montessoriGames: MontessoriGame[] = [
  {
    id: 1,
    title: "Color Sorting Cups",
    emoji: "🌈",
    intro: "A playful exploration of colors and sorting that builds concentration and visual discrimination while letting little hands work independently.",
    setup: [
      "Gather 3-4 colored cups or containers (use markers and white paper to cover plain cups if needed)",
      "Collect small household items matching each cup color (red blocks, blue socks, yellow toys)",
      "Place all items in a basket and set beside the cups on a small work mat",
      "Show your child how to sort each item into the matching colored cup",
      "Step back and allow your child to continue independently"
    ],
    learningSkills: [
      "Color recognition and matching",
      "Fine motor development through grasping and placing",
      "Concentration and order through classification"
    ],
    extensionIdeas: [
      "Add more colors as your child masters the initial set",
      "Sort by two attributes (blue small items vs. blue large items)",
      "For multiple children, have each child sort their own color, then switch and check each other's work"
    ],
    materialsNeeded: [
      "3-4 colored cups or containers",
      "Small household items in matching colors",
      "Small basket or tray",
      "Work mat (placemats work well)"
    ],
    category: "Sensory",
    ageRange: [2, 3, 4]
  },
  {
    id: 2,
    title: "Water Pouring Station",
    emoji: "💧",
    intro: "A practical life activity that develops concentration, coordination, and independence through careful water transfer between containers.",
    setup: [
      "Set up a tray with a small pitcher of water and 2-3 small cups or containers",
      "Add a small sponge for clean-up",
      "Place a small towel under the tray to catch spills",
      "Demonstrate slowly pouring water from the pitcher into one container, then back",
      "Invite your child to try pouring water between the containers"
    ],
    learningSkills: [
      "Hand-eye coordination and fine motor control",
      "Concentration and focus on precise movements",
      "Independence and self-confidence through mastery"
    ],
    extensionIdeas: [
      "Add food coloring to create colored water for visual interest",
      "Use containers of different shapes or sizes to vary difficulty",
      "For multiple children, set up a washing station for small toys"
    ],
    materialsNeeded: [
      "Small pitcher or measuring cup",
      "2-3 small cups or containers",
      "Small sponge",
      "Towel",
      "Tray"
    ],
    category: "Practical Life",
    ageRange: [2, 3, 4]
  },
  {
    id: 3,
    title: "Nature Texture Hunt",
    emoji: "🍃",
    intro: "A sensory exploration activity that encourages children to discover and categorize different textures from the natural world.",
    setup: [
      "Take a short walk outside to collect natural items with different textures (smooth stones, rough bark, soft leaves, etc.)",
      "Place items on a tray or in a basket",
      "Prepare a sorting mat with sections labeled 'rough', 'smooth', and 'soft' (use pictures for pre-readers)",
      "Invite your child to feel each item and place it in the corresponding section",
      "Encourage descriptive language about how each item feels"
    ],
    learningSkills: [
      "Sensory discrimination and vocabulary development",
      "Classification and categorical thinking",
      "Connection with nature and environmental awareness"
    ],
    extensionIdeas: [
      "Create texture rubbings of items using paper and crayons",
      "Blindfold games where children identify items by touch only",
      "For multiple children, create a guessing game where one describes a texture and others find matching items"
    ],
    materialsNeeded: [
      "Natural items with varied textures",
      "Sorting tray or mat",
      "Labels for texture categories",
      "Small basket or tray"
    ],
    category: "Sensory",
    ageRange: [3, 4]
  },
  {
    id: 4,
    title: "Button Drop Jar",
    emoji: "🧵",
    intro: "A fine motor activity that develops hand strength, pincer grip, and concentration through careful button manipulation.",
    setup: [
      "Find a clean plastic jar with a lid",
      "Cut a slit or hole in the lid that's just big enough for buttons to fit through",
      "Collect a variety of large buttons (ensure they're not choking hazards)",
      "Place buttons in a small bowl next to the jar",
      "Show your child how to pick up buttons one at a time and drop them into the jar"
    ],
    learningSkills: [
      "Fine motor control and pincer grip development",
      "Hand-eye coordination",
      "Concentration and persistence"
    ],
    extensionIdeas: [
      "Use tweezers to pick up the buttons for increased difficulty",
      "Sort buttons by color or size before dropping",
      "For multiple children, time each other to see who can fill their jar fastest"
    ],
    materialsNeeded: [
      "Plastic jar with lid",
      "Large buttons (not choking hazards)",
      "Small bowl",
      "Optional: tweezers"
    ],
    category: "Fine Motor",
    ageRange: [2, 3, 4]
  },
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
    id: 6,
    title: "Counting Clothespins",
    emoji: "🔢",
    intro: "A playful math activity that combines number recognition with fine motor development through pinching clothespins.",
    setup: [
      "Draw or print numbers 1-5 on sturdy paper or cardboard strips",
      "Gather wooden clothespins (spring-type)",
      "Place the number strips and clothespins in a small basket",
      "Show your child how to count out loud while attaching the correct number of clothespins to each strip",
      "Allow your child to work independently matching numbers to quantities"
    ],
    learningSkills: [
      "Number recognition and counting",
      "One-to-one correspondence understanding",
      "Fine motor strength through pincer grip"
    ],
    extensionIdeas: [
      "Add numbers 6-10 as skills progress",
      "Write dots or draw objects on the strips to be counted",
      "For multiple children, race to see who can correctly pin all their cards first"
    ],
    materialsNeeded: [
      "Cardboard or paper strips with numbers",
      "Wooden clothespins",
      "Small basket or tray"
    ],
    category: "Math",
    ageRange: [3, 4]
  },
  {
    id: 7,
    title: "Sensory Rice Scooping",
    emoji: "🍚",
    intro: "A calming sensory bin activity that develops fine motor skills through pouring, scooping, and transferring rice between containers.",
    setup: [
      "Fill a shallow bin with uncooked rice (colored rice is optional but fun)",
      "Provide various scooping tools (spoons, cups, funnels, etc.)",
      "Add small containers for pouring and filling",
      "Place the bin on a large towel to catch spills",
      "Show your child how to scoop and pour the rice between containers"
    ],
    learningSkills: [
      "Fine motor control and hand-eye coordination",
      "Sensory exploration and tactile discrimination",
      "Cause and effect understanding"
    ],
    extensionIdeas: [
      "Hide small toys in the rice for a finding game",
      "Add measuring cups to introduce volume concepts",
      "For multiple children, create a 'rice kitchen' with pretend cooking"
    ],
    materialsNeeded: [
      "Uncooked rice (2-3 cups)",
      "Shallow bin or container",
      "Various scoops and spoons",
      "Small cups or containers",
      "Towel for under the bin"
    ],
    category: "Sensory",
    ageRange: [2, 3, 4]
  },
  {
    id: 8,
    title: "DIY Posting Box",
    emoji: "📫",
    intro: "A shape recognition activity that helps children understand spatial relationships while practicing precise movements.",
    setup: [
      "Find a box (shoebox or similar) and cut different shaped holes in the lid (circle, square, triangle)",
      "Gather or cut out objects that match each shape hole",
      "Place the shapes in a small basket next to the box",
      "Demonstrate how to match each shape to its corresponding hole",
      "Let your child explore posting each shape through the correct hole"
    ],
    learningSkills: [
      "Shape recognition and matching",
      "Spatial awareness and problem-solving",
      "Hand-eye coordination and precision"
    ],
    extensionIdeas: [
      "Add more complex shapes as skills develop",
      "Use different textures for the shapes for sensory experience",
      "For multiple children, create a game where each takes turns choosing a shape with eyes closed"
    ],
    materialsNeeded: [
      "Box with lid (shoebox works well)",
      "Objects or cutouts of different shapes",
      "Scissors (for adult preparation)",
      "Small basket"
    ],
    category: "Fine Motor",
    ageRange: [2, 3]
  },
  {
    id: 9,
    title: "Sound Matching Eggs",
    emoji: "🥚",
    intro: "An auditory discrimination activity using plastic eggs filled with different materials to create and match sounds.",
    setup: [
      "Collect 6-8 plastic Easter eggs or similar containers",
      "Fill pairs of eggs with different materials (rice, beans, buttons, etc.)",
      "Secure eggs with tape to prevent opening",
      "Optional: color-code pairs with matching dots for self-checking",
      "Show your child how to shake eggs and find matching sounds"
    ],
    learningSkills: [
      "Auditory discrimination and matching",
      "Concentration and sensory development",
      "Memory skills and pattern recognition"
    ],
    extensionIdeas: [
      "Increase difficulty by adding more pairs with similar sounds",
      "Create a memory game by turning all eggs upside down",
      "For multiple children, take turns finding matches in a circle"
    ],
    materialsNeeded: [
      "Plastic eggs or small containers with lids",
      "Various filling materials (rice, beans, small beads, etc.)",
      "Tape to secure eggs",
      "Small basket or tray"
    ],
    category: "Sensory",
    ageRange: [3, 4]
  },
  {
    id: 10,
    title: "Flower Arranging",
    emoji: "🌸",
    intro: "A practical life activity that develops fine motor control, aesthetic awareness, and care for living things.",
    setup: [
      "Gather a few flowers (store-bought or from your garden)",
      "Provide a small, stable vase or cup filled with water",
      "Set up a tray with flowers, vase, scissors (optional, with supervision), and a small cloth",
      "Show your child how to carefully place flowers in the vase",
      "Demonstrate wiping water spills with the cloth"
    ],
    learningSkills: [
      "Fine motor skills and hand-eye coordination",
      "Aesthetic appreciation and creativity",
      "Care for nature and living things"
    ],
    extensionIdeas: [
      "Introduce flower names and parts of a flower",
      "Add food coloring to water to observe plant absorption",
      "For multiple children, each creates their own arrangement to compare"
    ],
    materialsNeeded: [
      "Fresh flowers (real or artificial)",
      "Small vase or cup",
      "Water in a small pitcher",
      "Small cloth for spills",
      "Tray to contain materials"
    ],
    category: "Practical Life",
    ageRange: [2, 3, 4]
  }
];

// Function to get a random game
export const getRandomGame = (previousIds: number[] = []): MontessoriGame => {
  // Filter out previously shown games
  const availableGames = montessoriGames.filter(game => !previousIds.includes(game.id));
  
  // If all games have been shown, reset and start over
  if (availableGames.length === 0) {
    return montessoriGames[Math.floor(Math.random() * montessoriGames.length)];
  }
  
  // Return a random game from available games
  return availableGames[Math.floor(Math.random() * availableGames.length)];
};
