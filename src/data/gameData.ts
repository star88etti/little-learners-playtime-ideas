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
  },
  {
    id: 11,
    title: "Sensory Rice Pouring",
    emoji: "🍚",
    intro: "A calming practical life activity that builds concentration and fine motor control while introducing early math concepts.",
    setup: [
      "Fill one small container halfway with uncooked rice or beans",
      "Place an empty matching container next to it",
      "Add a small spoon and place both containers on a tray",
      "Demonstrate slowly scooping rice from one container and pouring it into the other",
      "Allow your child to practice transferring the rice back and forth"
    ],
    learningSkills: [
      "Fine motor control and hand-eye coordination",
      "Focus and concentration",
      "Early math concepts like volume and quantity"
    ],
    extensionIdeas: [
      "Try different pouring tools like a small funnel or measuring cup",
      "Add food coloring to the rice for visual interest",
      "For multiple children, set up a 'pouring station' where each child has their own set"
    ],
    materialsNeeded: [
      "Uncooked rice or beans",
      "Two small containers",
      "Small spoon or scoop",
      "Tray or placemat",
      "Optional: food coloring for colored rice"
    ],
    category: "Practical Life",
    ageRange: [2, 3, 4]
  },
  {
    id: 12,
    title: "Texture Treasure Basket",
    emoji: "🧶",
    intro: "A sensory-rich exploration that stimulates tactile development and builds vocabulary while encouraging natural curiosity.",
    setup: [
      "Collect 8-10 household items with different textures (smooth stone, rough sponge, soft fabric, etc.)",
      "Place items in a shallow basket that's easy for small hands to access",
      "Sit with your child and introduce the basket",
      "Allow free exploration of each item, naming textures as they discover them",
      "Observe which textures engage your child most"
    ],
    learningSkills: [
      "Sensory discrimination and tactile development",
      "Vocabulary enrichment with descriptive language",
      "Object permanence and exploration"
    ],
    extensionIdeas: [
      "Create texture matching pairs (two soft items, two rough items)",
      "Play a blindfolded guessing game with older children",
      "For multiple children, take turns describing an item for others to find"
    ],
    materialsNeeded: [
      "Shallow basket or tray",
      "8-10 items with varied textures",
      "Optional: blindfold for extension activity"
    ],
    category: "Sensory",
    ageRange: [2, 3, 4]
  },
  {
    id: 13,
    title: "Button Drop Jar",
    emoji: "🪙",
    intro: "A simple yet engaging fine motor activity that builds hand strength and coordination while providing auditory feedback.",
    setup: [
      "Find a clean plastic container with a secure lid",
      "Cut a slit in the lid large enough for buttons to fit through",
      "Gather a collection of large, child-safe buttons",
      "Show your child how to pick up buttons one at a time and drop them through the slit",
      "Listen to the satisfying sound as buttons drop into the container"
    ],
    learningSkills: [
      "Pincer grip and fine motor development",
      "Hand-eye coordination",
      "Cause and effect understanding"
    ],
    extensionIdeas: [
      "Sort buttons by color or size before dropping",
      "Count buttons as they're dropped for early math practice",
      "For multiple children, take turns or have a timed button-dropping challenge"
    ],
    materialsNeeded: [
      "Plastic container with lid (like a coffee can or large yogurt container)",
      "Large, child-safe buttons or coins",
      "Scissors (for adult to prepare the lid)",
      "Optional: colored buttons for sorting"
    ],
    category: "Fine Motor",
    ageRange: [2, 3, 4]
  },
  {
    id: 14,
    title: "Water Transfer Sponges",
    emoji: "💧",
    intro: "A practical life water activity that develops concentration and coordination while giving a sense of purpose and accomplishment.",
    setup: [
      "Fill a small bowl with water",
      "Place an empty bowl next to it",
      "Cut kitchen sponges into smaller, hand-sized pieces",
      "Show your child how to dip the sponge in water, squeeze it over the empty bowl",
      "Let them transfer water back and forth between the bowls"
    ],
    learningSkills: [
      "Hand strength and coordination",
      "Concentration and focus",
      "Understanding of water properties"
    ],
    extensionIdeas: [
      "Add food coloring to create colored water for transfer",
      "Use different tools like basters, turkey basters, or eyedroppers",
      "For two children, see who can transfer more water in a set time"
    ],
    materialsNeeded: [
      "Two small bowls or containers",
      "Kitchen sponges cut into smaller pieces",
      "Water",
      "Towel for spills",
      "Optional: food coloring"
    ],
    category: "Practical Life",
    ageRange: [2, 3, 4]
  },
  {
    id: 15,
    title: "Flower Arranging Station",
    emoji: "🌸",
    intro: "A beautiful practical life activity that nurtures aesthetic awareness and precise movements while connecting children to nature.",
    setup: [
      "Collect small flowers and greenery from your garden or purchase child-safe varieties",
      "Cut stems to manageable lengths for small hands",
      "Fill a small pitcher with water",
      "Provide a few small vases or containers",
      "Show your child how to place flowers one at a time in the vases"
    ],
    learningSkills: [
      "Fine motor control and precision",
      "Aesthetic development and creativity",
      "Care for living things"
    ],
    extensionIdeas: [
      "Create color-themed arrangements",
      "Learn the names of different flowers and plants",
      "For multiple children, each can create arrangements for different spaces in your home"
    ],
    materialsNeeded: [
      "Child-safe flowers and greenery with stems cut short",
      "Small pitcher with water",
      "Small vases or containers",
      "Tray to contain spills",
      "Optional: scissors for older children to cut stems (with supervision)"
    ],
    category: "Practical Life",
    ageRange: [3, 4]
  },
  {
    id: 16,
    title: "Napkin Folding Practice",
    emoji: "🍽️",
    intro: "A practical life activity that develops fine motor skills and sequential memory while preparing children for contributing to family meals.",
    setup: [
      "Gather 4-6 cloth napkins (paper can work too)",
      "Place napkins in a small basket",
      "Sit with your child and demonstrate a simple napkin fold (triangle or rectangle)",
      "Unfold and allow your child to practice the same fold",
      "Create a special place to store the folded napkins for meal times"
    ],
    learningSkills: [
      "Fine motor development and hand coordination",
      "Sequential memory and following steps",
      "Pride in contributing to family routines"
    ],
    extensionIdeas: [
      "Learn progressively more complex folds",
      "Match napkins to plates or placemats for table setting",
      "For multiple children, each can be responsible for folding different colors"
    ],
    materialsNeeded: [
      "4-6 cloth or paper napkins",
      "Small basket",
      "Optional: place to store folded napkins"
    ],
    category: "Practical Life",
    ageRange: [3, 4]
  },
  {
    id: 17,
    title: "Pompom Transfer",
    emoji: "🔍",
    intro: "A delightful fine motor activity that develops pincer grip and hand-eye coordination while encouraging focused concentration.",
    setup: [
      "Fill a small bowl with colorful pompoms",
      "Place an empty egg carton or ice cube tray next to it",
      "Provide tweezers or tongs appropriate for your child's hand size",
      "Demonstrate picking up pompoms and transferring them to the compartments",
      "Allow your child to practice at their own pace"
    ],
    learningSkills: [
      "Fine motor control and pincer grip development",
      "Hand-eye coordination",
      "Focused attention and precision"
    ],
    extensionIdeas: [
      "Sort pompoms by color into different compartments",
      "Use different sized pompoms for varied difficulty",
      "For multiple children, have a friendly race to fill compartments"
    ],
    materialsNeeded: [
      "Colorful pompoms in various sizes",
      "Child-sized tweezers or tongs",
      "Small bowl or container",
      "Egg carton, ice cube tray, or muffin tin",
      "Optional: color matching guide"
    ],
    category: "Fine Motor",
    ageRange: [2, 3, 4]
  },
  {
    id: 18,
    title: "Pipe Cleaner Stringing",
    emoji: "🧶",
    intro: "An engaging threading activity that strengthens finger muscles and coordination while allowing creative expression.",
    setup: [
      "Gather pipe cleaners and cut them into 4-6 inch pieces",
      "Collect stringing materials (beads with large holes, cut straws, cheerios)",
      "Bend one end of each pipe cleaner to prevent beads from falling off",
      "Demonstrate threading items onto the pipe cleaners",
      "Encourage creating patterns or simply exploring the materials"
    ],
    learningSkills: [
      "Fine motor development and hand-eye coordination",
      "Early pattern recognition",
      "Spatial awareness"
    ],
    extensionIdeas: [
      "Create specific patterns to follow",
      "Shape completed pipe cleaners into letters, numbers, or designs",
      "For multiple children, create collaborative sculptures by connecting pieces"
    ],
    materialsNeeded: [
      "Pipe cleaners",
      "Beads with large holes",
      "Cut straws or other threading materials",
      "Container for loose parts",
      "Optional: pattern cards for older children"
    ],
    category: "Fine Motor",
    ageRange: [3, 4]
  },
  {
    id: 19,
    title: "Counting Bears Cave",
    emoji: "🐻",
    intro: "A playful counting activity that introduces one-to-one correspondence and number sense through imaginative play.",
    setup: [
      "Gather small counting objects (bears, animals, or blocks)",
      "Create simple 'caves' from paper cups or small containers",
      "Number the caves from 1-5 using stickers or markers",
      "Demonstrate counting out the correct number of objects for each cave",
      "Encourage your child to match quantities to numerals"
    ],
    learningSkills: [
      "One-to-one correspondence",
      "Number recognition",
      "Counting skills"
    ],
    extensionIdeas: [
      "Add higher numbers as your child masters 1-5",
      "Create story problems (3 bears went for a walk, 2 more joined them)",
      "For multiple children, take turns being the 'keeper of the caves'"
    ],
    materialsNeeded: [
      "Small countable objects",
      "Paper cups or containers for 'caves'",
      "Number labels 1-5",
      "Tray or placemat",
      "Optional: dice for random number selection"
    ],
    category: "Math",
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
  },
  {
    id: 22,
    title: "Emotion Face Matching",
    emoji: "😊",
    intro: "A social-emotional activity that develops emotional awareness and vocabulary through playful matching.",
    setup: [
      "Create simple cards with different emotion faces (happy, sad, angry, surprised)",
      "Make matching cards with emotion names or scenarios",
      "Demonstrate matching emotions to names or situations",
      "Encourage discussion about when we might feel each emotion",
      "Practice making the facial expressions together"
    ],
    learningSkills: [
      "Emotional recognition and vocabulary",
      "Social awareness and empathy",
      "Matching and categorization"
    ],
    extensionIdeas: [
      "Create emotion charades by acting out feelings",
      "Draw pictures of things that create different emotions",
      "For multiple children, take turns showing emotions for others to guess"
    ],
    materialsNeeded: [
      "Emotion face cards",
      "Matching word or scenario cards",
      "Small basket or container",
      "Optional: mirror for practicing expressions",
      "Optional: drawing materials for extension activities"
    ],
    category: "Practical Life",
    ageRange: [2, 3, 4]
  },
  {
    id: 23,
    title: "Nature Paintbrushes",
    emoji: "🖌️",
    intro: "A creative art activity that connects children with nature while developing fine motor skills and artistic expression.",
    setup: [
      "Collect natural items (pinecones, leaves, flowers, sticks)",
      "Secure items to craft sticks with rubber bands to create brushes",
      "Prepare washable paint in a few colors",
      "Demonstrate using different natural brushes for unique patterns",
      "Encourage experimentation with different textures and techniques"
    ],
    learningSkills: [
      "Creative expression and experimentation",
      "Cause and effect understanding",
      "Fine motor control"
    ],
    extensionIdeas: [
      "Compare patterns made by different natural materials",
      "Create a collaborative nature-painted mural",
      "For multiple children, exchange brushes to try different textures"
    ],
    materialsNeeded: [
      "Natural items for brushes",
      "Craft sticks",
      "Rubber bands",
      "Washable paint",
      "Paper",
      "Containers for paint",
      "Smock or apron"
    ],
    category: "Fine Motor",
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
