const SAVE_KEY = "bloomhaven-save-v2";

const flowers = [
  f("Daisy", "Common", 7, 1, 2, 3, 4, ["cheerful", "meadow", "simple"], "#fff176"),
  f("Tulip", "Common", 9, 1, 2, 5, 3, ["spring", "cup", "bright"], "#ff6f61"),
  f("Sunflower", "Common", 13, 2, 1, 6, 5, ["sunny", "tall", "seeded"], "#ffc928"),
  f("Lavender", "Common", 11, 2, 6, 3, 6, ["fragrant", "herb", "calming"], "#9b7ad9"),
  f("Marigold", "Common", 10, 2, 3, 4, 5, ["golden", "hardy", "warm"], "#f28f33"),
  f("Zinnia", "Common", 14, 2, 2, 6, 4, ["colorful", "sturdy", "summer"], "#ff5c9a"),
  f("Cosmos", "Common", 13, 1, 2, 5, 5, ["airy", "meadow", "delicate"], "#f799c4"),
  f("Black-Eyed Susan", "Uncommon", 24, 3, 2, 5, 6, ["wild", "golden", "pollinator"], "#f4b83f"),
  f("Coneflower", "Uncommon", 26, 3, 3, 5, 7, ["wild", "pollinator", "sturdy"], "#d96cb3"),
  f("Snapdragon", "Uncommon", 28, 3, 3, 7, 4, ["bright", "upright", "playful"], "#f06d7a"),
  f("Rose", "Uncommon", 34, 3, 7, 8, 4, ["fragrant", "romantic", "thorned"], "#e84f76"),
  f("Peony", "Uncommon", 38, 4, 5, 9, 4, ["lush", "romantic", "soft"], "#f59ac0"),
  f("Iris", "Rare", 52, 5, 3, 9, 5, ["royal", "water-loving", "elegant"], "#6277d9"),
  f("Hydrangea", "Rare", 55, 5, 4, 8, 4, ["water-loving", "clustered", "soft"], "#6db7e8"),
  f("Lily", "Rare", 58, 5, 8, 8, 5, ["fragrant", "water-loving", "graceful"], "#f8f0df"),
  f("Dahlia", "Rare", 62, 6, 3, 10, 4, ["layered", "dramatic", "autumn"], "#c94f8a"),
  f("Foxglove", "Rare", 64, 6, 4, 8, 6, ["woodland", "bell", "tall"], "#b064c8"),
  f("Aster", "Rare", 66, 6, 3, 7, 7, ["starlight", "autumn", "pollinator"], "#8464d8"),
  f("Orchid", "Epic", 86, 7, 4, 10, 3, ["exotic", "delicate", "moonlit"], "#c77dff"),
  f("Ranunculus", "Epic", 90, 7, 3, 10, 4, ["layered", "luxury", "soft"], "#ff9f6e"),
  f("Lavender Rose", "Hybrid", 92, 4, 10, 9, 7, ["fragrant", "romantic", "calming"], "#c76fb0", ["Lavender", "Rose"]),
  f("Royal Iris", "Hybrid", 98, 4, 5, 10, 6, ["royal", "water-loving", "elegant"], "#475ed1", ["Iris", "Tulip"]),
  f("Sunset Bloom", "Hybrid", 105, 4, 5, 10, 7, ["warm", "dramatic", "bright"], "#ff7a45", ["Marigold", "Dahlia"]),
  f("Golden Star", "Hybrid", 96, 4, 3, 9, 9, ["golden", "starlight", "pollinator"], "#ffd84e", ["Sunflower", "Aster"]),
  f("Meadow Crown", "Hybrid", 88, 3, 4, 8, 8, ["meadow", "royal", "wild"], "#f4dd72", ["Daisy", "Cosmos"]),
  f("Woodland Bell", "Hybrid", 100, 4, 5, 8, 8, ["woodland", "bell", "fragrant"], "#a875c9", ["Foxglove", "Lavender"]),
  f("Velvet Peony", "Hybrid", 112, 5, 7, 10, 5, ["lush", "romantic", "luxury"], "#b93970", ["Peony", "Ranunculus"]),
  f("Crystal Lily", "Hybrid", 118, 5, 9, 10, 6, ["water-loving", "graceful", "rare"], "#dff9ff", ["Lily", "Hydrangea"]),
  f("Starlight Orchid", "Hybrid", 136, 6, 5, 10, 8, ["starlight", "exotic", "moonlit"], "#a478ff", ["Orchid", "Aster"]),
  f("Moon Blossom", "Hybrid", 160, 6, 8, 10, 9, ["moonlit", "fragrant", "legendary"], "#eef0ff", ["Starlight Orchid", "Crystal Lily"]),
];

const species = {
  Fox: { color: "#d98245", icon: "fox", passive: "+10% hybrid discovery chance", hybridBonus: 0.1 },
  Rabbit: { color: "#f2e7d5", icon: "rabbit", passive: "+10% flower growth speed", growthBonus: 0.1 },
  Mongoose: { color: "#ba855b", icon: "mongoose", passive: "+10% shop revenue", revenueBonus: 0.1 },
};

const flowerFamilies = [
  { id: "wildflower", name: "Wildflowers", flowers: ["Daisy", "Black-Eyed Susan", "Coneflower", "Cosmos", "Meadow Crown"], breakthrough: "Wildflower Expert", note: "Wildflower Expert: cheerful meadow blooms often lead toward crown-shaped hybrids." },
  { id: "fragrant", name: "Fragrant Flowers", flowers: ["Lavender", "Rose", "Lily", "Lavender Rose", "Woodland Bell", "Moon Blossom"], breakthrough: "Fragrance Research", note: "Fragrance Research: Rose and Lavender share a useful trait when pollinators are active." },
  { id: "water", name: "Water Flowers", flowers: ["Iris", "Hydrangea", "Lily", "Royal Iris", "Crystal Lily"], breakthrough: "Water Studies", note: "Water Studies: rain-loving flowers can reveal glassy petals when paired carefully." },
  { id: "luxury", name: "Luxury Flowers", flowers: ["Peony", "Dahlia", "Orchid", "Ranunculus", "Velvet Peony", "Starlight Orchid"], breakthrough: "Luxury Collection", note: "Luxury Collection: layered luxury blooms attract richer customer rumors and rarer hybrid leads." },
  { id: "exotic", name: "Exotic Flowers", flowers: ["Orchid", "Starlight Orchid", "Moon Blossom"], breakthrough: "Exotic Studies", note: "Exotic Studies: moonlit and exotic flowers may connect to Grandfather's missing garden records." },
];

const discoveryLinks = [
  { from: "Daisy", to: "Meadow Crown", hint: ["A meadow flower may crown another.", "Daisy and Cosmos share a meadow path.", "Daisy + Cosmos may reveal something special."] },
  { from: "Cosmos", to: "Meadow Crown", hint: ["Airy wildflowers sometimes hide royal shapes.", "Cosmos and Daisy point toward a meadow hybrid.", "Cosmos + Daisy may reveal something special."] },
  { from: "Lavender", to: "Lavender Rose", hint: ["Fragrant flowers often work well together.", "Rose and Lavender share a useful trait.", "Rose + Lavender may reveal something special."] },
  { from: "Rose", to: "Lavender Rose", hint: ["A romantic flower needs a calming neighbor.", "Rose and Lavender share a useful trait.", "Rose + Lavender may reveal something special."] },
  { from: "Iris", to: "Royal Iris", hint: ["Elegant flowers may become more formal.", "Iris and Tulip both carry strong silhouettes.", "Iris + Tulip may reveal something special."] },
  { from: "Tulip", to: "Royal Iris", hint: ["Cup-shaped spring flowers can refine elegant blooms.", "Tulip and Iris both suggest ceremony.", "Tulip + Iris may reveal something special."] },
  { from: "Marigold", to: "Sunset Bloom", hint: ["Warm flowers hold onto evening light.", "Marigold and Dahlia share dramatic warmth.", "Marigold + Dahlia may reveal something special."] },
  { from: "Dahlia", to: "Sunset Bloom", hint: ["Layered petals can catch a sunset.", "Dahlia and Marigold share dramatic warmth.", "Dahlia + Marigold may reveal something special."] },
  { from: "Sunflower", to: "Golden Star", hint: ["Sunny flowers sometimes look upward.", "Sunflower and Aster connect gold with starlight.", "Sunflower + Aster may reveal something special."] },
  { from: "Aster", to: "Golden Star", hint: ["Starlight traits may brighten golden blooms.", "Aster and Sunflower connect stars with sun.", "Aster + Sunflower may reveal something special."] },
  { from: "Foxglove", to: "Woodland Bell", hint: ["Bell-shaped woodland flowers like calming herbs.", "Foxglove and Lavender echo in the same breeze.", "Foxglove + Lavender may reveal something special."] },
  { from: "Lavender", to: "Woodland Bell", hint: ["Calming herbs sometimes answer woodland bells.", "Lavender and Foxglove echo in the same breeze.", "Lavender + Foxglove may reveal something special."] },
  { from: "Peony", to: "Velvet Peony", hint: ["Lush petals can become luxurious.", "Peony and Ranunculus both carry soft layered traits.", "Peony + Ranunculus may reveal something special."] },
  { from: "Ranunculus", to: "Velvet Peony", hint: ["Luxury flowers may deepen familiar blooms.", "Ranunculus and Peony both carry soft layered traits.", "Ranunculus + Peony may reveal something special."] },
  { from: "Lily", to: "Crystal Lily", hint: ["Water-loving flowers can reveal crystal-like petals.", "Lily and Hydrangea both remember the rain.", "Lily + Hydrangea may reveal something special."] },
  { from: "Hydrangea", to: "Crystal Lily", hint: ["Clustered water flowers may clarify graceful blooms.", "Hydrangea and Lily both remember the rain.", "Hydrangea + Lily may reveal something special."] },
  { from: "Orchid", to: "Starlight Orchid", hint: ["Exotic flowers may need unusual conditions.", "Orchid and Aster connect moonlit delicacy with stars.", "Orchid + Aster may reveal something special."] },
  { from: "Aster", to: "Starlight Orchid", hint: ["Starlight traits may awaken exotic petals.", "Aster and Orchid connect stars with moonlit delicacy.", "Aster + Orchid may reveal something special."] },
  { from: "Starlight Orchid", to: "Moon Blossom", hint: ["A rare hybrid points beyond ordinary gardens.", "Starlight Orchid and Crystal Lily share moonlit clarity.", "Starlight Orchid + Crystal Lily may reveal something special."] },
  { from: "Crystal Lily", to: "Moon Blossom", hint: ["A crystal bloom points toward the Moon Garden.", "Crystal Lily and Starlight Orchid share moonlit clarity.", "Crystal Lily + Starlight Orchid may reveal something special."] },
];

const researchNotes = [
  "Fragrant flowers often produce refined hybrids.",
  "Sunny flowers pair well with cheerful wild blooms.",
  "Water-loving flowers can reveal crystal-like petals.",
  "Native flowers attract strong pollinators.",
  "Exotic flowers may require rare events to unlock their full potential.",
  "Golden flowers respond to starlight traits.",
  "Woodland bells echo when planted near calming herbs.",
  "Layered petals make luxurious bouquets and surprising hybrids.",
  "Moonlit blooms may need another rare hybrid nearby.",
  "Meadow flowers sometimes crown each other after a lucky walk.",
  "Lavender and Rose can create a calming romantic hybrid.",
  "Asters make golden flowers feel like stars.",
  "Hydrangea and Lily both remember the rain.",
];

const journalTabs = [
  { id: "flowers", label: "Flowers" },
  { id: "network", label: "Network" },
  { id: "research", label: "Research" },
  { id: "grandfather", label: "Grandfather" },
  { id: "facts", label: "Facts" },
  { id: "town", label: "Town" },
];

const grandfatherNotes = [
  {
    id: "morning-rain",
    title: "Morning Rain",
    text: "The old beds always looked best after a morning rain. Your grandmother said the flowers liked being spoken to. I suspect she simply paid closer attention than I did.",
  },
  {
    id: "seed-before-coins",
    title: "Seeds Before Coins",
    text: "Bloomhaven was not built by merchants. It was built by gardeners who traded seeds before they traded coins.",
  },
  {
    id: "moon-garden-ledgers",
    title: "The Moon Garden",
    text: "The Moon Garden appears in three ledgers, but never on any map. Either it was hidden, or someone wanted it forgotten.",
  },
  {
    id: "lavender-bees",
    title: "Lavender and Bees",
    text: "The bees favored lavender even when the roses were in full bloom. There is a lesson there, I think.",
  },
  {
    id: "right-neighbor",
    title: "The Right Neighbor",
    text: "Some flowers seem ordinary until paired with the right neighbor.",
  },
];

const gardeningFacts = [
  {
    id: "deadheading",
    title: "Deadheading",
    text: "Deadheading spent flowers can encourage some plants to produce more blooms.",
  },
  {
    id: "pollinator-cues",
    title: "Pollinator Cues",
    text: "Many pollinators are attracted by scent, color, and flower shape.",
  },
  {
    id: "lavender-soil",
    title: "Lavender Care",
    text: "Lavender generally prefers well-drained soil and plenty of sunlight.",
  },
  {
    id: "native-support",
    title: "Native Flowers",
    text: "Native flowers often support local bees, butterflies, and other pollinators.",
  },
  {
    id: "cold-germination",
    title: "Cold Conditions",
    text: "Some seeds germinate better after exposure to cold conditions.",
  },
  {
    id: "florist-balance",
    title: "Bouquet Balance",
    text: "Florists often use focal flowers, filler flowers, and greenery to create balanced arrangements.",
  },
];

const townRecords = [
  { id: "restoration-10", value: 10, title: "Town Square Beds Cleared", text: "Town Square flower beds cleared for the first time in years." },
  { id: "restoration-25", value: 25, title: "Clover Cafe Growers", text: "Clover Cafe has begun hosting morning growers again." },
  { id: "restoration-40", value: 40, title: "Society Front Room", text: "The Botanical Society reopened its front room." },
  { id: "restoration-60", value: 60, title: "Market Board", text: "The market board now accepts florist contracts." },
  { id: "restoration-80", value: 80, title: "Festival Banners", text: "Festival banners have been found in storage." },
  { id: "restoration-100", value: 100, title: "District 1 Restored", text: "Bloomhaven Town Square has been restored." },
];

const eventPool = [
  { name: "Bee Swarm", rarity: "Common", min: 0, duration: 2, note: "A gentle swarm settles near fragrant blooms.", effect: "+15% hybrid success for 2 days.", reward: "pollination" },
  { name: "Weather Forecast", rarity: "Common", min: 0, duration: 1, note: "A cool drizzle is expected overnight.", effect: "Growing flowers rest faster tomorrow.", reward: "growth" },
  { name: "Rare Butterfly", rarity: "Uncommon", min: 5000, duration: 0, note: "A blue butterfly lands on the journal ribbon.", effect: "Unlocks an advanced research clue.", reward: "advanced-note" },
  { name: "Traveling Botanist", rarity: "Rare", min: 8000, duration: 0, note: "A botanist offers a seed from a roadside pouch.", effect: "Adds one uncommon or rare seed.", reward: "seed" },
  { name: "Ancient Journal Page", rarity: "Epic", min: 12000, duration: 0, note: "A loose page names a forgotten pairing.", effect: "Adds a specific hybrid clue.", reward: "specific-note" },
];

const natureEncounters = [
  { name: "Bee Swarm", rarity: "Common", min: 0, duration: 2, note: "A gentle swarm follows you back to the beds.", effect: "+15% hybrid success for 2 days and +2 Pollination Points.", reward: "pollination" },
  { name: "Monarch Butterfly", rarity: "Uncommon", min: 5000, duration: 0, note: "A monarch circles a flower sketch in the journal.", effect: "Adds a family clue and 1 Discovery Energy.", reward: "family-clue" },
  { name: "Golden Bee", rarity: "Rare", min: 8000, duration: 1, note: "A golden bee dusts the greenhouse latch with pollen.", effect: "Improves the next hybrid attempt.", reward: "hybrid-focus" },
  { name: "Rare Pollinator", rarity: "Rare", min: 8000, duration: 0, note: "An unfamiliar pollinator favors the strongest scent trail.", effect: "Adds an advanced research clue.", reward: "advanced-note" },
  { name: "Traveling Botanist", rarity: "Rare", min: 8000, duration: 0, note: "A botanist trades a roadside observation for a seed.", effect: "Adds one uncommon or rare seed.", reward: "seed" },
  { name: "Migrating Butterflies", rarity: "Epic", min: 12000, duration: 2, note: "A ribbon of butterflies crosses Town Square at dusk.", effect: "Adds a journal investigation and lasting pollination.", reward: "journal-fragment" },
  { name: "Ancient Journal Fragment", rarity: "Epic", min: 12000, duration: 0, note: "A torn page names weather, scent, and moonlight in the same margin.", effect: "Adds a specific hybrid clue and journal page.", reward: "specific-note" },
];

const expeditionOptions = [
  { id: "meadow", name: "Meadow Survey", cost: 4, reward: "Wildflower clue, journal progress, and a meadow seed chance.", action: () => { addFamilyInsight("wildflower"); if (Math.random() < 0.45) addSeed(random(["Cosmos", "Black-Eyed Susan", "Coneflower"]), 1); } },
  { id: "pollinator", name: "Pollinator Watch", cost: 5, reward: "Pollination Points and stronger hybrid odds.", action: () => { state.pollinationPoints += 3; state.eventEffects.pollination = Math.max(state.eventEffects.pollination || 0, 1); } },
  { id: "wildflower", name: "Wildflower Hunt", cost: 6, reward: "Rare seed chance and Discovery Network clue.", action: () => { addFamilyInsight("wildflower"); addSeed(random(["Black-Eyed Susan", "Coneflower", "Snapdragon"]), 1); } },
  { id: "research", name: "Botanical Research Walk", cost: 7, reward: "Research note, journal page chance, and family insight.", action: () => { addNote(3); if (Math.random() < 0.55) addSpecificHybridNote(); addFamilyInsight(random(flowerFamilies).id); } },
];

const stepProviders = {
  manual: {
    label: "Manual Entry",
    status: "Prototype Source",
    description: "Manual entry is used for this prototype. Future versions may connect to fitness apps and wearables.",
  },
};

const futureStepIntegrations = ["Apple Health", "Health Connect", "Google Fit", "Samsung Health", "Fitbit", "WHOOP", "Strava"];

const startingSeeds = { Daisy: 4, Tulip: 3, Sunflower: 2, Lavender: 2, Marigold: 2, Rose: 1, Cosmos: 1 };
const plotUpgradeSizes = [12, 16, 20, 24];
const plotUpgradeCosts = [60, 150, 290];
const qualities = ["Common", "Fine", "Premium", "Masterpiece"];
const qualityMultipliers = { Common: 1, Fine: 1.35, Premium: 1.8, Masterpiece: 2.5 };
const strategyOptions = {
  Budget: { label: "Budget Blooms", description: "More simple orders, lower rewards, easier completion." },
  Boutique: { label: "Boutique Florist", description: "More premium orders, higher rewards, quality matters more." },
  Collector: { label: "Collector's Corner", description: "More hybrid and rare flower requests." },
};
const residents = [
  {
    id: "wendy",
    name: "Wendy Wren",
    portrait: "wren",
    occupation: "Wedding planner",
    personality: "Warm, organized, secretly sentimental.",
    likes: ["romantic", "elegant"],
    dialogue: {
      early: "A little color in Town Square changes how people stand. They linger instead of hurrying through.",
      friend: "Your grandfather used to save the best roses for tiny ceremonies. He said small vows deserved grand flowers.",
      story: "Some wedding ledgers mention the Five Great Gardens. Couples came here just to be married near them.",
    },
    request: "I need flowers for a small wedding. Nothing grand, just something that feels remembered.",
  },
  {
    id: "ben",
    name: "Ben Badger",
    portrait: "badger",
    occupation: "Clover Cafe owner",
    personality: "Practical, gentle, always thinking in seasonal menus.",
    likes: ["fragrant"],
    dialogue: {
      early: "The cafe smells better when the florist is busy. Funny how hope can have a scent.",
      friend: "Lavender tea was your grandfather's favorite. He always traded a clue for a cup.",
      story: "He left notes tucked in cafe books. I thought they were recipes until the sketches started blooming.",
    },
    request: "I'm creating a new lavender tea display. Could you bring something fragrant for the counter?",
  },
  {
    id: "finch",
    name: "Professor Finch",
    portrait: "finch",
    occupation: "Botanical Society researcher",
    personality: "Precise, excitable, prone to whispering at petals.",
    likes: ["rare", "hybrid"],
    dialogue: {
      early: "Bloomhaven's decline is not natural. Rare cultivars vanished from records and gardens at the same time.",
      friend: "Your grandfather was mapping hybrids that responded to moonlight. Most of those pages are missing.",
      story: "The Five Great Gardens were not just places. They were living collections, each with a guardian flower.",
    },
    request: "Bring me a hybrid flower I haven't studied. Even one petal could confirm a theory.",
  },
  {
    id: "rosewood",
    name: "Rosewood Fox",
    portrait: "fox",
    occupation: "Hotel manager",
    personality: "Elegant, dryly funny, obsessed with guest impressions.",
    likes: ["luxury", "lush", "romantic"],
    dialogue: {
      early: "Guests ask what Bloomhaven is known for. I would prefer an answer more poetic than 'parking'.",
      friend: "The old hotel guestbook is full of flower hunters. They checked in with empty cases and left with legends.",
      story: "One entry says your grandfather found a bloom that opened only when the whole town celebrated.",
    },
    request: "A guest suite needs a showpiece bloom. Something lush enough to make people lower their voices.",
  },
  {
    id: "millie",
    name: "Millie Rabbit",
    portrait: "rabbit",
    occupation: "Town gardener",
    personality: "Earnest, muddy-kneed, protective of native plants.",
    likes: ["native", "wild", "meadow", "pollinator"],
    dialogue: {
      early: "The wild beds remember more than we do. Give them time and they tell on themselves.",
      friend: "Your grandfather taught me to leave room for volunteers. 'The best flowers arrive uninvited,' he said.",
      story: "One missing journal page described a garden that grew back overnight after every harvest.",
    },
    request: "The town beds need native color. Bring me something wild or meadow-grown.",
  },
];
const restorationMilestones = [
  { value: 10, title: "Town flower beds cleaned", text: "The first public beds are weeded and ready for color." },
  { value: 25, title: "Clover Cafe rumors", text: "Cafe regulars begin sharing flower pairing gossip." },
  { value: 40, title: "Botanical Society unlocks", text: "The society doors open to promising growers." },
  { value: 60, title: "Town Square market opens", text: "Market stalls return with ribbons and seed crates." },
  { value: 80, title: "Flower festival announced", text: "A festival flyer appears on the square notice board." },
  { value: 100, title: "District 1 restored", text: "Bloomhaven Town Square is blooming again." },
];
const taskDefinitions = [
  { id: "choose-animal", title: "Meet the Farmhand", objective: "Choose an animal and presentation.", hint: "Fox helps hybrid discovery, Rabbit speeds growth, Mongoose boosts shop income. Male/female changes the farmhand portrait style only.", reward: { coins: 8 }, complete: () => !!state.species && !!state.gender },
  { id: "plant-3", title: "Wake the Beds", objective: "Plant 3 flowers.", hint: "Use Starter Mix for Daisy + Cosmos + Tulip. That sets up your first order and first hybrid.", reward: { coins: 12, restoration: 2 }, complete: () => state.stats.planted >= 3 },
  { id: "harvest-1", title: "First Bloom", objective: "Harvest your first flower.", hint: "End the day once your beds are planted. Ready beds glow darker.", reward: { coins: 10, note: true }, complete: () => state.stats.harvested >= 1 },
  { id: "fill-order-1", title: "First Customer", objective: "Fill 1 florist order.", hint: "Simple orders accept any quality. Higher-quality requests pay more later.", reward: { reputation: 2, restoration: 4 }, complete: () => state.stats.orders >= 1 },
  { id: "log-steps", title: "A Walk Through Town", objective: "Enter today's steps.", hint: "Even 0 steps gives an opportunity. Walking adds clues, seeds, and hybrid odds.", reward: { note: true, seed: "Black-Eyed Susan" }, complete: () => state.stats.stepsLogged >= 1 },
  { id: "attempt-hybrid", title: "Try a Cross", objective: "Attempt your first hybrid.", hint: "Try Daisy + Cosmos in Hybridize. Your first correct hybrid is stabilized.", reward: { coins: 15, note: true }, complete: () => state.hybridAttempts >= 1 },
  { id: "discover-hybrid", title: "A New Bloom", objective: "Discover your first hybrid.", reward: { reputation: 3, restoration: 8, seed: "Iris" }, complete: () => state.stats.hybrids >= 1 },
  { id: "restore-10", title: "First Signs of Bloom", objective: "Reach 10% restoration.", reward: { coins: 20, note: true }, complete: () => state.restoration >= 10 },
  { id: "harvest-fine", title: "A Better Bloom", objective: "Harvest a Fine flower or better.", reward: { coins: 20, reputation: 1 }, complete: () => state.stats.fineHarvests >= 1 },
  { id: "premium-order", title: "Quality Counter", objective: "Complete a Premium order.", reward: { coins: 35, reputation: 2 }, complete: () => state.stats.premiumOrders >= 1 },
  { id: "sell-hybrid", title: "Rare Sale", objective: "Sell a hybrid flower.", reward: { coins: 25, restoration: 3 }, complete: () => state.stats.hybridSales >= 1 },
  { id: "earn-100", title: "Busy Florist", objective: "Earn 100 coins in one day.", reward: { reputation: 3, note: true }, complete: () => state.stats.bestDailyCoins >= 100 },
  { id: "switch-strategy", title: "Shop Identity", objective: "Switch shop strategy.", reward: { coins: 15, seed: "Peony" }, complete: () => state.stats.strategySwitches >= 1 },
];
const flowerByName = new Map(flowers.map((flower) => [flower.name, flower]));
const starters = flowers.filter((flower) => !flower.recipe);
const hybrids = flowers.filter((flower) => flower.recipe);
const app = document.querySelector("#app");
const memoryStorage = {};
let pendingJournalUnlocks = [];
let state = createNewState();

function f(name, rarity, value, growthDays, fragrance, beauty, pollinator, traits, color, recipe = null) {
  return { name, rarity, value, growthDays, fragrance, beauty, pollinator, traits, color, recipe };
}

function createNewState() {
  return {
    day: 1,
    phase: "Morning",
    coins: 70,
    reputation: 0,
    restoration: 8,
    weather: "Clear",
    species: "",
    gender: "",
    active: "farm",
    plots: Array.from({ length: 12 }, () => null),
    maxPlots: 12,
    seeds: { ...startingSeeds },
    inventory: {},
    discovered: ["Daisy", "Tulip", "Sunflower", "Lavender", "Marigold", "Rose", "Cosmos"],
    residents: createResidentState(),
    storyEntries: [],
    journalPages: 0,
    journal: createJournalState(),
    familyBreakthroughs: [],
    notes: [researchNotes[0]],
    events: [],
    orders: [],
    shopStrategy: "Budget",
    strategyChangedDay: 0,
    dailyCoinsEarned: 0,
    stepToday: 0,
    lastProviderSync: null,
    discoveryEnergy: 0,
    pollinationPoints: 0,
    discoveryTokens: 0,
    nextHybridBoost: false,
    lastStepSummary: null,
    lastStepDay: 0,
    pollinationBonus: false,
    eventEffects: {},
    growthBoost: false,
    hybridAttempts: 0,
    completedTasks: [],
    stats: {
      planted: 0,
      harvested: 0,
      orders: 0,
      stepsLogged: 0,
      hybrids: 0,
      fineHarvests: 0,
      premiumOrders: 0,
      hybridSales: 0,
      strategySwitches: 0,
      bestDailyCoins: 0,
    },
    hasSeenIntro: false,
  };
}

function createJournalState() {
  return {
    activeTab: "flowers",
    grandfather: ["morning-rain"],
    facts: ["pollinator-cues"],
    townRecords: [],
  };
}

function createResidentState() {
  return Object.fromEntries(residents.map((resident) => [resident.id, { friendship: 0, met: false }]));
}

function init() {
  state = loadState() || createNewState();
  if (!state.orders.length) state.orders = starterOrders();
  ensureEarlyOrder();
  syncJournalUnlocks();
  render();
  pendingJournalUnlocks = [];
  if (!state.hasSeenIntro) {
    state.hasSeenIntro = true;
    saveState();
    showWelcome();
  }
}

function render() {
  document.documentElement.style.setProperty("--player-color", state.species ? species[state.species].color : "#d98245");
  app.innerHTML = `
    <div class="app">
      ${renderTopbar()}
      <main class="main">
        ${renderTaskCard()}
        ${renderFarm()}
        ${renderFlorist()}
        ${renderJournal()}
        ${renderHybridize()}
        ${renderValley()}
      </main>
      ${renderNav()}
      <div id="modal" class="modal hidden"></div>
      <div id="toasts" class="toast-stack"></div>
    </div>
  `;
  app.onclick = handleClick;
}

function renderTaskCard() {
  const activeTask = taskDefinitions.find((task) => !state.completedTasks.includes(task.id));
  if (!activeTask) {
    return `
      <section class="task-card complete">
        <div>
          <strong>Town Square Steward</strong>
          <p>All early goals complete. Keep growing, pairing, and restoring Bloomhaven.</p>
        </div>
        <span>Done</span>
      </section>
    `;
  }
  return `
    <section class="task-card">
      <div>
        <strong>${activeTask.title}</strong>
        <p>${activeTask.objective}</p>
        <p class="task-hint">${activeTask.hint || nextObjectiveHint()}</p>
        <small>Reward: ${rewardText(activeTask.reward)}</small>
      </div>
      <span>${state.completedTasks.length + 1}/${taskDefinitions.length}</span>
    </section>
  `;
}

function renderTopbar() {
  const passive = species[state.species]?.passive || "Choose an animal to begin";
  const farmhand = state.species ? `${state.gender ? `${state.gender} ` : ""}${state.species}` : "New farmhand";
  return `
    <header class="topbar">
      <div class="brand">
        <div class="logo" aria-hidden="true"></div>
        <div>
          <h1>Bloomhaven</h1>
          <small>${farmhand} - ${passive}</small>
        </div>
      </div>
      <div class="stats">
        <span class="pill">Day ${state.day}</span>
        <span class="pill">${state.phase}</span>
        <span class="pill">${state.coins} coins</span>
        <span class="pill">${state.reputation} rep</span>
        <span class="pill">${state.discoveryEnergy} energy</span>
        <span class="pill">${state.pollinationPoints} pollen</span>
        <span class="pill">${state.discoveryTokens} token${state.discoveryTokens === 1 ? "" : "s"}</span>
      </div>
    </header>
  `;
}

function renderFarm() {
  const sceneClass = state.phase === "Evening" && state.day % 3 === 0 ? "night" : state.phase === "Evening" ? "evening" : "";
  return `
    <section class="screen ${isActive("farm")}" data-screen="farm">
      <div class="desktop-grid">
        <div>
          <div class="hero-scene ${sceneClass}">
            ${sceneClass === "night" ? '<div class="moon"></div>' : '<div class="sun"></div>'}
            <div class="cloud"></div>
            ${renderTownStrip()}
            <div class="farm-ground">
              ${renderGrass()}
              <div class="pollinator" style="left:14%;top:38px"></div>
              ${renderCharacter()}
              <div class="plots">${state.plots.map(renderPlot).join("")}</div>
            </div>
          </div>
          <div class="quick-actions">
            <button data-action="advance-phase">Advance Time</button>
            <button data-action="next-day">End Day</button>
            <button data-action="wait-ready">Wait Until Ready</button>
            <button data-action="new-game">New Game</button>
          </div>
        </div>
        <aside>
          ${renderSpeciesPicker()}
          <div class="panel">
            <h2>Plant Flowers</h2>
            <p class="tagline">${filledPlots()} / ${state.maxPlots} beds planted.</p>
            <p class="tagline">Choose a seed, then tap an empty bed or plant in the first open plot.</p>
            <div class="grid">
              <select id="seed-select">${renderSeedOptions()}</select>
              <button data-action="plant-selected" ${hasSeeds() ? "" : "disabled"}>Plant First Open Plot</button>
              <button data-action="plant-starter-mix" ${canPlantStarterMix() ? "" : "disabled"}>Plant Starter Mix</button>
            </div>
          </div>
          ${renderPlotExpansion()}
          <div class="panel">
            <h2>Daily Steps</h2>
            <p class="tagline">Manual entry is used for this prototype. Future versions may connect to fitness apps and wearables.</p>
            ${renderStepSourcePanel()}
            <div class="resource-grid">
              <span><strong>${state.discoveryEnergy}</strong> Discovery Energy</span>
              <span><strong>${state.pollinationPoints}</strong> Pollination Points</span>
              <span><strong>${state.discoveryTokens}</strong> Discovery Tokens</span>
            </div>
            <div class="grid">
              <input id="step-input" aria-label="Today's steps" type="number" min="0" step="100" value="${state.stepToday}" />
              <button data-action="submit-steps">Log Daily Steps</button>
            </div>
            ${renderStepSummary()}
          </div>
          ${renderDiscoveryActions()}
          ${renderExpeditions()}
          <div class="panel">
            <h2>Active Events</h2>
            <div class="event-list">${renderActiveEvents()}</div>
          </div>
        </aside>
      </div>
    </section>
  `;
}

function renderCharacter() {
  const label = state.species ? `${state.gender || ""} ${state.species}`.trim() : "?";
  return `<div class="character species-${state.species || "none"} presentation-${state.gender || "none"}" title="${label}"></div>`;
}

function renderTownStrip() {
  const restored = state.restoration >= 35;
  const lively = state.restoration >= 65;
  return `
    <div class="town-strip">
      <div class="building colorful" title="Bloomhaven Florist"></div>
      <div class="building ${restored ? "colorful" : ""}" title="Clover Cafe"></div>
      <div class="building ${lively ? "colorful" : "locked"}" title="Botanical Society"></div>
    </div>
  `;
}

function renderGrass() {
  return Array.from({ length: 22 }, (_, index) => {
    const left = 4 + ((index * 17) % 93);
    const bottom = 8 + ((index * 23) % 190);
    return `<span class="grass" style="left:${left}%;bottom:${bottom}px;animation-delay:${(index % 5) * 0.2}s"></span>`;
  }).join("");
}

function renderPlot(plot, index) {
  if (!plot) {
    return `<button class="plot empty" data-action="plant-plot" data-index="${index}"><span class="plot-name">Empty Bed</span><span class="plot-meta">Fresh soil</span><span class="plot-stage stage-empty"></span></button>`;
  }
  const flower = flowerByName.get(plot.name);
  const ready = plot.daysLeft <= 0;
  const stage = plotStage(plot, flower);
  return `
    <button class="plot ${ready ? "ready" : ""} stage-${stage}" data-action="${ready ? "harvest" : "inspect-plot"}" data-index="${index}">
      <span class="plot-name">${plot.name}</span>
      <span class="plot-meta">${ready ? "Bloom" : `${stageLabel(stage)} - ${plot.daysLeft} day${plot.daysLeft === 1 ? "" : "s"}`}</span>
      ${renderPlotStage(stage, flower)}
    </button>
  `;
}

function plotStage(plot, flower) {
  if (plot.daysLeft <= 0) return "bloom";
  const total = Math.max(1, flower.growthDays);
  const progress = 1 - plot.daysLeft / total;
  if (progress < 0.34) return "seed";
  if (progress < 0.67) return "sprout";
  return "bud";
}

function stageLabel(stage) {
  return { seed: "Seed", sprout: "Sprout", bud: "Bud", bloom: "Bloom" }[stage] || "Growing";
}

function renderPlotStage(stage, flower) {
  if (stage === "seed") return '<span class="plot-stage stage-seed"></span>';
  if (stage === "sprout") return '<span class="plot-stage stage-sprout"></span>';
  if (stage === "bud") return `<span class="plot-stage stage-bud" style="--bloom:${flower.color}"></span>`;
  return `<span class="pixel-flower" style="--bloom:${flower.color}"></span>`;
}

function renderSpeciesPicker() {
  if (state.species && state.gender) {
    return `
      <div class="panel player-panel">
        <div class="animal-badge portrait-${state.species} presentation-${state.gender}"></div>
        <div><h2>${state.gender} ${state.species} Farmhand</h2><p class="tagline">${species[state.species].passive}</p></div>
      </div>
    `;
  }
  return `
    <div class="panel starter-panel">
      <h2>Choose Your Farmhand</h2>
      <p class="tagline">Pick one of three animal backgrounds, then choose male or female portrait styling.</p>
      <div class="species-grid">
        ${Object.entries(species).map(([name, data]) => `
          <button class="species-card ${state.species === name ? "selected" : ""}" data-action="choose-species" data-species="${name}">
            <span class="animal-badge portrait-${name}"></span>
            <strong>${name}</strong>
            <span class="muted">${data.passive}</span>
          </button>
        `).join("")}
      </div>
      <div class="presentation-picker">
        <button class="${state.gender === "Male" ? "active" : ""}" data-action="choose-gender" data-gender="Male">Male</button>
        <button class="${state.gender === "Female" ? "active" : ""}" data-action="choose-gender" data-gender="Female">Female</button>
      </div>
    </div>
  `;
}

function renderPlotExpansion() {
  const nextSize = nextPlotSize();
  if (!nextSize) {
    return `<div class="panel"><h2>Farm Expansion</h2><p class="tagline">All 24 beds are unlocked.</p></div>`;
  }
  const cost = plotUpgradeCost();
  return `
    <div class="panel">
      <h2>Farm Expansion</h2>
      <p class="tagline">Unlock ${nextSize} total beds for ${cost} coins.</p>
      <button data-action="buy-plots" ${state.coins >= cost ? "" : "disabled"}>Buy More Beds</button>
    </div>
  `;
}

function renderFlorist() {
  const strategy = strategyOptions[state.shopStrategy] || strategyOptions.Budget;
  return `
    <section class="screen ${isActive("florist")}" data-screen="florist">
      <div class="panel">
        <h2>Bloomhaven Florist</h2>
        <p class="tagline">Sell loose stems for quick coins or fill orders for reputation and restoration.</p>
      </div>
      <div class="desktop-grid">
        <div class="panel">
          <h3>Shop Strategy</h3>
          <p class="tagline">${strategy.description}</p>
          <div class="strategy-grid">
            ${Object.entries(strategyOptions).map(([key, strategy]) => `
              <button class="strategy-button ${state.shopStrategy === key ? "active" : ""}" data-action="switch-strategy" data-strategy="${key}" ${state.strategyChangedDay === state.day || state.shopStrategy === key ? "disabled" : ""}>
                ${strategy.label}
              </button>
            `).join("")}
          </div>
          <p class="muted">${state.strategyChangedDay === state.day ? "Strategy already changed today." : "You can switch once per day."}</p>
        </div>
        <div class="panel">
          <h3>Customer Orders</h3>
          <div class="order-list">${state.orders.map(renderOrder).join("")}</div>
        </div>
        <div class="panel">
          <h3>Bloomhaven Residents</h3>
          <p class="tagline">Friendship grows when flowers matter to someone.</p>
          <div class="resident-list">${residents.map(renderResidentCard).join("")}</div>
        </div>
        <div class="panel">
          <h3>Flower Inventory</h3>
          <div class="inventory-list">${renderInventory(true)}</div>
        </div>
        <div class="panel">
          <h3>Seed Stand</h3>
          <div class="seed-grid">${renderSeedMarket()}</div>
        </div>
      </div>
    </section>
  `;
}

function renderOrder(order, index) {
  const normalized = normalizeOrder(order);
  return `
    <div class="order-card order-${normalized.type}">
      <div class="order-head">
        <strong>${normalized.customer}</strong>
        <span>${normalized.residentId ? "Personal" : normalized.type}</span>
      </div>
      <p>${normalized.flavor}</p>
      <div class="order-items">
        ${normalized.items.map((item) => `<span>${item.count} ${item.name}<small>${qualityRequirementText(item.minQuality)}</small></span>`).join("")}
      </div>
      <p class="muted">${normalized.coins} coins - ${normalized.rep} reputation${normalized.residentId ? ` - friendship +${normalized.friendship || 8}` : ""}</p>
      <button data-action="fulfill-order" data-index="${index}" ${canFulfill(normalized) ? "" : "disabled"}>Fill Order</button>
    </div>
  `;
}

function renderInventory(withSell = false) {
  const entries = Object.keys(state.inventory).filter((name) => totalFlowerCount(name) > 0);
  if (!entries.length) return '<p class="muted">Harvest flowers to fill the shelves.</p>';
  return entries.map((name) => {
    const flower = flowerByName.get(name);
    const qualityRows = qualities.map((quality) => {
      const count = inventoryCount(name, quality);
      if (!count) return "";
      return `
        <div class="quality-row">
          <span class="quality-badge quality-${quality}">${quality}</span>
          <strong>x${count}</strong>
          ${withSell ? `<button data-action="sell-flower" data-flower="${name}" data-quality="${quality}">Quick Sell</button>` : ""}
        </div>
      `;
    }).join("");
    return `
      <div class="item-row">
        <div>
          <strong>${name}</strong>
          <small>${flower.rarity} - base ${flower.value} coins</small>
          <p class="hold-note">Hold for Orders, or quick sell a quality below.</p>
          <div class="quality-list">${qualityRows}</div>
        </div>
      </div>
    `;
  }).join("");
}

function renderSeedMarket() {
  return starters.slice(0, 14).map((flower) => `
    <div class="seed-card">
      <strong>${flower.name}</strong>
      <span class="muted">${flower.rarity} - ${seedCost(flower)} coins</span>
      <button data-action="buy-seed" data-flower="${flower.name}" ${state.coins >= seedCost(flower) ? "" : "disabled"}>Buy Seed</button>
    </div>
  `).join("");
}

function renderJournal() {
  const discoveredCount = state.discovered.length;
  const activeTab = state.journal?.activeTab || "flowers";
  return `
    <section class="screen ${isActive("journal")}" data-screen="journal">
      <div class="panel">
        <h2>Grandfather's Journal</h2>
        <p class="tagline">A field guide, florist ledger, and trail of missing memories.</p>
        <p><strong>Discovered: ${discoveredCount} / ${flowers.length}</strong></p>
        <div class="progress"><span style="width:${(discoveredCount / flowers.length) * 100}%"></span></div>
        <div class="journal-stats">
          <span>${starters.filter((flower) => isDiscovered(flower.name)).length}/${starters.length} seed flowers</span>
          <span>${hybrids.filter((flower) => isDiscovered(flower.name)).length}/${hybrids.length} hybrids</span>
          <span>${journalEntryCount()} journal entries</span>
        </div>
      </div>
      <div class="journal-tabs">
        ${journalTabs.map((tab) => `<button class="journal-tab ${activeTab === tab.id ? "active" : ""}" data-action="journal-tab" data-tab="${tab.id}">${tab.label}</button>`).join("")}
      </div>
      ${renderJournalTab(activeTab)}
    </section>
  `;
}

function renderJournalTab(tab) {
  if (tab === "network") return renderDiscoveryNetwork();
  if (tab === "research") return renderResearchJournal();
  if (tab === "grandfather") return renderGrandfatherJournal();
  if (tab === "facts") return renderFactsJournal();
  if (tab === "town") return renderTownJournal();
  return renderFlowerJournal();
}

function renderFlowerJournal() {
  return `
    <div class="panel journal-note-panel">
      <h3>Flower Journal</h3>
      <p class="tagline">${nextJournalTease()} Silhouettes hide names until a seed, bloom, or hybrid is discovered.</p>
    </div>
    <div class="journal-grid">${flowers.map(renderFlowerCard).join("")}</div>
  `;
}

function renderDiscoveryNetwork() {
  const knownFlowers = state.discovered.map((name) => flowerByName.get(name)).filter(Boolean);
  const connected = knownFlowers.filter((flower) => connectedDiscoveries(flower.name).length).slice(0, 10);
  return `
    <div class="panel journal-note-panel discovery-board">
      <h3>Discovery Network</h3>
      <p class="tagline">Every new bloom can point toward another. The board only shows known flowers, nearby mysteries, and clues you have earned.</p>
      <div class="family-progress-grid">${flowerFamilies.map(renderFamilyProgress).join("")}</div>
    </div>
    <div class="network-list">
      ${connected.length ? connected.map(renderNetworkNode).join("") : '<div class="journal-entry locked"><div class="journal-sketch"></div><div><strong>No links mapped yet</strong><p class="muted">Discover more flowers or try your first hybrid to sketch connections.</p></div></div>'}
    </div>
  `;
}

function renderFamilyProgress(family) {
  const total = family.flowers.length;
  const count = family.flowers.filter((name) => isDiscovered(name)).length;
  const unlocked = state.familyBreakthroughs?.includes(family.id);
  return `
    <div class="family-card ${unlocked ? "unlocked" : ""}">
      <div class="family-card-head">
        <strong>${family.name}</strong>
        <span>${count}/${total}</span>
      </div>
      <div class="mini-progress"><span style="width:${(count / total) * 100}%"></span></div>
      <p class="muted">${unlocked ? family.breakthrough : nextFamilyHint(family, count)}</p>
    </div>
  `;
}

function renderNetworkNode(flower) {
  const links = connectedDiscoveries(flower.name);
  return `
    <div class="network-node">
      <div class="network-source">
        <div class="card-bloom" style="--bloom:${flower.color}"><span class="pixel-flower"></span></div>
        <div>
          <strong>${flower.name}</strong>
          <div class="family-tags">${renderFamilyTags(flower)}</div>
        </div>
      </div>
      <div class="network-links">${links.map((link) => renderNetworkLink(link, flower.name)).join("")}</div>
    </div>
  `;
}

function renderNetworkLink(link, sourceName) {
  const target = flowerByName.get(link.to);
  const known = isDiscovered(link.to);
  const hint = progressiveHint(link, sourceName);
  return `
    <div class="network-link ${known ? "known" : "mystery"}">
      <div class="network-line"></div>
      ${known ? `<div class="card-bloom" style="--bloom:${target.color}"><span class="pixel-flower"></span></div>` : '<div class="silhouette"></div>'}
      <div>
        <strong>${known ? target.name : `Mystery ${target.rarity}`}</strong>
        <p class="muted">${hint}</p>
        <div class="family-tags">${known ? renderFamilyTags(target) : targetFamilies(target).slice(0, 2).map((family) => `<span class="family-badge muted-badge">${family.name}</span>`).join("")}</div>
      </div>
    </div>
  `;
}

function renderResearchJournal() {
  const notes = [...new Set(state.notes || [])];
  return `
    <div class="panel journal-note-panel">
      <h3>Research Notes</h3>
      <p class="tagline">Hybrid clues are permanent once found. Use them to reason about traits instead of guessing blindly.</p>
      <div class="journal-entry-list">
        ${notes.map((note, index) => renderJournalEntry({ title: `Clue ${index + 1}`, text: note }, "research")).join("")}
      </div>
    </div>
  `;
}

function renderGrandfatherJournal() {
  return `
    <div class="panel journal-note-panel">
      <h3>Grandfather's Notes</h3>
      <p class="tagline">${unlockedCount("grandfather", grandfatherNotes)} / ${grandfatherNotes.length} notes recovered through harvests, hybrids, steps, and restoration.</p>
      <div class="journal-entry-list">${grandfatherNotes.map((entry) => renderLockedJournalEntry(entry, "grandfather")).join("")}</div>
    </div>
  `;
}

function renderFactsJournal() {
  return `
    <div class="panel journal-note-panel">
      <h3>Gardening Facts</h3>
      <p class="tagline">Field-guide facts unlock as you farm, sell, walk, and discover. They are educational flavor for curious growers.</p>
      <div class="journal-entry-list">${gardeningFacts.map((entry) => renderLockedJournalEntry(entry, "facts")).join("")}</div>
    </div>
  `;
}

function renderTownJournal() {
  return `
    <div class="panel journal-note-panel">
      <h3>Town Records</h3>
      <p class="tagline">${residentsMet()} / ${residents.length} residents met - ${state.journalPages} missing journal page${state.journalPages === 1 ? "" : "s"} found</p>
      <div class="journal-entry-list">${townRecords.map((entry) => renderTownRecord(entry)).join("")}</div>
      <h3>Residents</h3>
      <div class="story-list">${renderStoryEntries()}</div>
      <div class="resident-list">${residents.map(renderResidentCard).join("")}</div>
    </div>
  `;
}

function renderLockedJournalEntry(entry, section) {
  if (isJournalUnlocked(section, entry.id)) return renderJournalEntry(entry, section);
  return `
    <div class="journal-entry locked">
      <div class="journal-sketch"></div>
      <div>
        <strong>Undiscovered Page</strong>
        <p class="muted">${journalLockedHint(section, entry)}</p>
      </div>
    </div>
  `;
}

function renderTownRecord(entry) {
  if (isJournalUnlocked("townRecords", entry.id)) return renderJournalEntry(entry, "town");
  return `
    <div class="journal-entry locked">
      <div class="journal-sketch"></div>
      <div>
        <strong>${entry.value}% Restoration Record</strong>
        <p class="muted">Restore Bloomhaven further to recover this town record.</p>
      </div>
    </div>
  `;
}

function renderJournalEntry(entry, section) {
  return `
    <div class="journal-entry journal-${section}">
      <div class="journal-sketch"></div>
      <div>
        <strong>${entry.title}</strong>
        <p>${entry.text}</p>
      </div>
    </div>
  `;
}

function renderResidentCard(resident) {
  const friendship = friendshipFor(resident.id);
  return `
    <div class="resident-card">
      <div class="resident-portrait portrait-${resident.portrait}"></div>
      <div>
        <div class="resident-head">
          <strong>${resident.name}</strong>
          <span>${friendship}/100</span>
        </div>
        <p class="muted">${resident.occupation} - ${resident.personality}</p>
        <div class="friendship-bar"><span style="width:${friendship}%"></span></div>
        <p class="resident-likes">Likes: ${resident.likes.join(", ")}</p>
        <p class="resident-perk">${residentPerkText(resident)}</p>
        <div class="resident-actions">
          <button data-action="talk-resident" data-resident="${resident.id}">Talk</button>
          <button data-action="gift-resident" data-resident="${resident.id}" ${canGiftResident(resident) ? "" : "disabled"}>Deliver Favorite</button>
        </div>
      </div>
    </div>
  `;
}

function renderStoryEntries() {
  if (!state.storyEntries.length) return '<p class="muted">Stories unlock through friendship, discoveries, and restoration.</p>';
  return state.storyEntries.map((entry) => `<div class="story-card"><strong>${entry.title}</strong><p>${entry.text}</p></div>`).join("");
}

function renderFlowerCard(flower) {
  const known = isDiscovered(flower.name);
  if (!known) {
    return `
      <div class="flower-card unknown">
        <div class="silhouette"></div>
        <strong>${flower.recipe ? "Mystery Hybrid" : "Undiscovered Seed"}</strong>
        <span class="rarity-chip">${flower.rarity}</span>
        <div class="family-tags">${targetFamilies(flower).slice(0, 2).map((family) => `<span class="family-badge muted-badge">${family.name}</span>`).join("")}</div>
        <p class="muted">${flower.recipe ? clueFor(flower) : "A seed has not reached your farm yet."}</p>
      </div>
    `;
  }
  return `
    <div class="flower-card">
      <div class="card-bloom" style="--bloom:${flower.color}"><span class="pixel-flower"></span></div>
      <strong>${flower.name}</strong>
      <div class="family-tags">${renderFamilyTags(flower)}</div>
      <p class="muted">${flower.rarity} - ${flower.value} coins - ${flower.growthDays} days</p>
      <p>Fragrance ${flower.fragrance} - Beauty ${flower.beauty} - Pollinators ${flower.pollinator}</p>
      <p class="muted">${flower.traits.join(", ")}</p>
    </div>
  `;
}

function renderHybridize() {
  return `
    <section class="screen ${isActive("hybridize")}" data-screen="hybridize">
      <div class="panel">
        <h2>Hybridization Garden</h2>
        <p class="tagline">Pair harvested flowers. Events, notes, and animal passives improve your odds.</p>
      </div>
      <div class="desktop-grid">
        <div class="panel">
          <h3>Try a Pairing</h3>
          <div class="grid">
            <select id="hybrid-a">${renderInventoryOptions()}</select>
            <select id="hybrid-b">${renderInventoryOptions()}</select>
            <button data-action="try-hybrid" ${inventoryFlowerCount() >= 2 ? "" : "disabled"}>Cross-Pollinate</button>
          </div>
          <p class="muted">${hybridChanceText()}</p>
        </div>
        <div class="panel">
          <h3>Likely Leads</h3>
          <div class="event-list">${renderHybridLeads()}</div>
        </div>
      </div>
    </section>
  `;
}

function renderHybridLeads() {
  const hidden = hybrids.filter((hybrid) => !isDiscovered(hybrid.name)).slice(0, 5);
  if (!hidden.length) return '<p class="muted">Every known hybrid has been discovered.</p>';
  return hidden.map((flower) => `<div class="event-card"><strong>Unknown ${flower.rarity}</strong><p>${clueFor(flower)}</p></div>`).join("");
}

function renderValley() {
  return `
    <section class="screen ${isActive("valley")}" data-screen="valley">
      <div class="panel restoration-panel">
        <h2>Bloomhaven Town Square</h2>
        <p class="tagline">Discovery, orders, and rare flowers restore District 1.</p>
        <div class="progress"><span style="width:${state.restoration}%"></span></div>
        <p><strong>${state.restoration}% restored</strong></p>
        <p class="milestone-now">${currentMilestoneText()}</p>
      </div>
      <div class="milestone-list">${restorationMilestones.map(renderMilestone).join("")}</div>
      <div class="district-list">
        <div class="district-card ${state.restoration >= 10 ? "restored" : ""}"><strong>Grandfather's Farm</strong><p>${state.restoration >= 10 ? "Fresh beds and fluttering pollinators return." : "The fields are quiet but ready."}</p></div>
        <div class="district-card"><strong>Bloomhaven Florist</strong><p>${state.reputation >= 8 ? "Locals are talking about your bouquets." : "A small counter waits for regular customers."}</p></div>
        <div class="district-card ${state.restoration >= 60 ? "restored" : ""}"><strong>Town Square</strong><p>${state.restoration >= 60 ? "Market stalls return with ribbons and seed crates." : "The old square needs color."}</p></div>
        <div class="district-card ${state.restoration >= 60 ? "restored" : ""}"><strong>General Store</strong><p>Seed packets arrive through step events and florist income.</p></div>
        <div class="district-card ${state.restoration >= 25 ? "restored" : ""}"><strong>Clover Cafe</strong><p>${state.restoration >= 25 ? "Cafe regulars trade rumors about rare flowers." : "The owner wants cheerful table flowers."}</p></div>
        <div class="district-card ${state.restoration >= 40 ? "restored" : ""}"><strong>Botanical Society</strong><p>${state.restoration >= 40 ? "Unlocked: members request rare research specimens." : "Locked until Bloomhaven feels alive again."}</p></div>
      </div>
    </section>
  `;
}

function renderMilestone(milestone) {
  const unlocked = state.restoration >= milestone.value;
  return `
    <div class="milestone ${unlocked ? "unlocked" : ""}">
      <strong>${milestone.value}%</strong>
      <span>${milestone.title}</span>
    </div>
  `;
}

function renderNav() {
  return `
    <nav class="bottom-nav">
      ${[
        ["farm", "Farm"],
        ["florist", "Florist"],
        ["journal", "Journal"],
        ["hybridize", "Hybridize"],
        ["valley", "Valley"],
      ].map(([id, label]) => `<button class="nav-button ${state.active === id ? "active" : ""}" data-action="nav" data-target="${id}">${label}</button>`).join("")}
    </nav>
  `;
}

function renderSeedOptions() {
  const options = Object.entries(state.seeds).filter(([, count]) => count > 0);
  return options.length ? options.map(([name, count]) => `<option value="${name}">${name} seed x${count}</option>`).join("") : '<option value="">No seeds</option>';
}

function renderInventoryOptions() {
  const options = Object.keys(state.inventory).filter((name) => totalFlowerCount(name) > 0);
  return options.length ? options.map((name) => `<option value="${name}">${name} x${totalFlowerCount(name)}</option>`).join("") : '<option value="">No flowers</option>';
}

function renderEvent(event) {
  return `
    <div class="event-card rarity-${event.rarity || "Common"}">
      <strong>${event.name}</strong>
      <p>${event.note}</p>
      <small>${event.rarity || "Common"} - ${event.effect || "Opportunity event"}${event.duration ? ` - ${event.duration} day${event.duration === 1 ? "" : "s"}` : ""}</small>
    </div>
  `;
}

function renderActiveEvents() {
  const eventCards = state.events.map(renderEvent).join("");
  const effectCards = Object.entries(state.eventEffects).map(([key, days]) => {
    const label = key === "pollination" ? "Bee Swarm Lingering" : key === "hybridFocus" ? "Focused Pollinator Trail" : "Helpful Weather";
    const effect = key === "pollination" ? "+15% hybrid success and better quality odds." : key === "hybridFocus" ? "The next hybrid attempt has improved odds." : "Flowers grow faster overnight.";
    return `<div class="event-card rarity-Common"><strong>${label}</strong><p>${effect}</p><small>${days} day${days === 1 ? "" : "s"} remaining</small></div>`;
  }).join("");
  return eventCards || effectCards ? eventCards + effectCards : '<p class="muted">Log steps to invite discoveries.</p>';
}

function renderStepSourcePanel() {
  return `
    <div class="provider-panel">
      <div class="provider-current">
        <strong>${stepProviders.manual.label}</strong>
        <span>${stepProviders.manual.status}</span>
      </div>
      <p class="provider-status">${stepProviders.manual.description}</p>
      <div class="integration-roadmap">
        ${futureStepIntegrations.map((name) => `<span>${name} - Coming Later</span>`).join("")}
      </div>
    </div>
  `;
}

function renderStepSummary() {
  if (!state.lastStepSummary) return '<p class="muted">Today has not been logged yet.</p>';
  const summary = state.lastStepSummary;
  return `
    <div class="step-summary">
      <strong>${summary.tier}</strong>
      <p>${summary.steps.toLocaleString()} steps became ${summary.energy} energy, ${summary.pollination} pollination, and ${summary.tokens} token${summary.tokens === 1 ? "" : "s"}.</p>
      <div class="reward-tags">${summary.rewards.map((reward) => `<span>${reward}</span>`).join("")}</div>
    </div>
  `;
}

function renderDiscoveryActions() {
  return `
    <div class="panel">
      <h2>Discovery Tools</h2>
      <p class="tagline">Spend walking inspiration on clues and investigation. These never buy coins or skip farming.</p>
      <div class="discovery-actions">
        <button data-action="spend-energy-research" ${state.discoveryEnergy >= 3 ? "" : "disabled"}>Research Clue<br><small>3 energy</small></button>
        <button data-action="spend-energy-family" ${state.discoveryEnergy >= 4 ? "" : "disabled"}>Family Insight<br><small>4 energy</small></button>
        <button data-action="use-token-connection" ${state.discoveryTokens >= 1 ? "" : "disabled"}>Reveal Connection<br><small>1 token</small></button>
        <button data-action="use-token-hybrid" ${state.discoveryTokens >= 1 ? "" : "disabled"}>Focus Hybrid<br><small>1 token</small></button>
      </div>
    </div>
  `;
}

function renderExpeditions() {
  return `
    <div class="panel">
      <h2>Discovery Expeditions</h2>
      <p class="tagline">Use Discovery Energy for a short research outing. No extra minigame, just a useful lead.</p>
      <div class="expedition-list">
        ${expeditionOptions.map((expedition) => `
          <div class="expedition-card">
            <strong>${expedition.name}</strong>
            <p class="muted">${expedition.reward}</p>
            <button data-action="run-expedition" data-expedition="${expedition.id}" ${state.discoveryEnergy >= expedition.cost ? "" : "disabled"}>${expedition.cost} energy</button>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function handleClick(event) {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const { action } = target.dataset;
  if (action === "nav") setActive(target.dataset.target);
  if (action === "journal-tab") setJournalTab(target.dataset.tab);
  if (action === "new-game") confirmNewGame();
  if (action === "choose-species") chooseSpecies(target.dataset.species);
  if (action === "choose-gender") chooseGender(target.dataset.gender);
  if (action === "plant-selected") plantFirstEmpty(document.querySelector("#seed-select")?.value);
  if (action === "plant-starter-mix") plantStarterMix();
  if (action === "plant-plot") plantAt(Number(target.dataset.index), document.querySelector("#seed-select")?.value);
  if (action === "harvest") harvest(Number(target.dataset.index));
  if (action === "inspect-plot") toast("Still growing. End the day to let the garden rest.");
  if (action === "advance-phase") advancePhase();
  if (action === "next-day") nextDay();
  if (action === "wait-ready") waitUntilReady();
  if (action === "submit-steps") submitSteps();
  if (action === "spend-energy-research") spendEnergyResearch();
  if (action === "spend-energy-family") spendEnergyFamily();
  if (action === "use-token-connection") useTokenConnection();
  if (action === "use-token-hybrid") useTokenHybrid();
  if (action === "run-expedition") runExpedition(target.dataset.expedition);
  if (action === "fulfill-order") fulfillOrder(Number(target.dataset.index));
  if (action === "sell-flower") sellFlower(target.dataset.flower, target.dataset.quality);
  if (action === "buy-seed") buySeed(target.dataset.flower);
  if (action === "buy-plots") buyPlots();
  if (action === "switch-strategy") switchStrategy(target.dataset.strategy);
  if (action === "talk-resident") talkResident(target.dataset.resident);
  if (action === "gift-resident") giftResident(target.dataset.resident);
  if (action === "try-hybrid") tryHybrid();
  if (action === "confirm-new-game") newGame();
  if (action === "close-modal") closeModal();
}

function setActive(screen) {
  state.active = screen;
  saveAndRender();
}

function setJournalTab(tab) {
  if (!journalTabs.some((item) => item.id === tab)) return;
  ensureJournalState();
  state.journal.activeTab = tab;
  saveAndRender();
}

function chooseSpecies(name) {
  state.species = name;
  saveAndRender();
  toast(`${name} selected: ${species[name].passive}`);
}

function chooseGender(gender) {
  if (!["Male", "Female"].includes(gender)) return;
  state.gender = gender;
  saveAndRender();
  toast(`${gender} farmhand style selected.`);
}

function plantFirstEmpty(name) {
  const index = state.plots.findIndex((plot) => !plot);
  if (index === -1) return toast("All flower beds are full.");
  plantAt(index, name);
}

function plantStarterMix() {
  ["Daisy", "Cosmos", "Tulip"].forEach((name) => {
    const index = state.plots.findIndex((plot) => !plot);
    if (index !== -1 && state.seeds[name] > 0) plantAt(index, name, false);
  });
  saveAndRender();
  toast("Starter Mix planted: Daisy, Cosmos, and Tulip.");
}

function plantAt(index, name, shouldRender = true) {
  if (!name) return toast("You need seeds before planting.");
  if (!state.species) return toast("Choose an animal character first.");
  if (state.plots[index]) return;
  if (!state.seeds[name]) return toast(`No ${name} seeds available.`);
  const flower = flowerByName.get(name);
  const bonus = species[state.species]?.growthBonus || 0;
  state.seeds[name] -= 1;
  state.plots[index] = { name, daysLeft: Math.max(1, Math.ceil(flower.growthDays * (1 - bonus))) };
  state.stats.planted += 1;
  discover(name);
  if (shouldRender) saveAndRender();
}

function canPlantStarterMix() {
  return !!state.species && ["Daisy", "Cosmos", "Tulip"].every((name) => state.seeds[name] > 0) && state.plots.filter((plot) => !plot).length >= 3;
}

function harvest(index) {
  const plot = state.plots[index];
  if (!plot || plot.daysLeft > 0) return;
  const quality = rollQuality(plot.name);
  addInventory(plot.name, quality, 1);
  state.plots[index] = null;
  state.stats.harvested += 1;
  const isFirstHarvest = state.stats.harvested === 1;
  if (qualityRank(quality) >= qualityRank("Fine")) state.stats.fineHarvests += 1;
  state.restoration = clamp(state.restoration + 1, 0, 100);
  saveAndRender();
  if (isFirstHarvest) {
    openModal("First Harvest!", `
      <div class="celebration-flower" style="--bloom:${flowerByName.get(plot.name).color}"><span class="pixel-flower"></span></div>
      <p>You harvested a <span class="quality-badge quality-${quality}">${quality}</span> <strong>${plot.name}</strong>.</p>
      <p class="muted">Use it for a customer order, quick sell it, or save it for hybridizing.</p>
    `);
  } else {
    toast(`Harvested a ${quality} ${plot.name}.`);
  }
}

function advancePhase() {
  const phases = ["Morning", "Daytime", "Evening"];
  const current = phases.indexOf(state.phase);
  if (current === phases.length - 1) return nextDay();
  state.phase = phases[current + 1];
  saveAndRender();
}

function nextDay() {
  tickEventEffects();
  state.day += 1;
  state.dailyCoinsEarned = 0;
  state.phase = "Morning";
  state.weather = random(["Clear", "Drizzle", "Warm Breeze", "Cool Mist"]);
  state.plots.forEach((plot) => {
    if (!plot) return;
    const weatherBoost = state.weather === "Drizzle" || state.growthBoost || activeEffect("growth") ? 1 : 0;
    plot.daysLeft = Math.max(0, plot.daysLeft - 1 - weatherBoost);
  });
  state.growthBoost = false;
  state.stepToday = 0;
  state.events = [];
  state.orders = makeOrders(3);
  ensureEarlyOrder();
  saveAndRender();
  toast(`Day ${state.day}: ${state.weather}. Check your beds and step events.`);
}

function waitUntilReady() {
  if (!state.plots.some(Boolean)) return toast("Plant flowers first, then time can pass.");
  let daysPassed = 0;
  while (!state.plots.some((plot) => plot && plot.daysLeft <= 0) && daysPassed < 7) {
    tickEventEffects();
    state.day += 1;
    state.dailyCoinsEarned = 0;
    state.phase = "Morning";
    state.weather = random(["Clear", "Drizzle", "Warm Breeze", "Cool Mist"]);
    state.plots.forEach((plot) => {
      if (!plot) return;
      const weatherBoost = state.weather === "Drizzle" || state.growthBoost || activeEffect("growth") ? 1 : 0;
      plot.daysLeft = Math.max(0, plot.daysLeft - 1 - weatherBoost);
    });
    state.growthBoost = false;
    state.stepToday = 0;
    state.events = [];
    state.orders = makeOrders(3);
    ensureEarlyOrder();
    daysPassed += 1;
  }
  saveAndRender();
  toast(daysPassed ? `${daysPassed} day${daysPassed === 1 ? "" : "s"} passed. A flower is ready.` : "A flower is already ready.");
}

function submitSteps() {
  // Manual input is the current MVP data source. Future integrations should replace
  // getDailySteps(), then continue using processStepRewards() and generateStepEvents().
  const steps = getDailySteps();
  applyStepCount(steps, "Manual daily steps");
}

function getDailySteps() {
  // Prototype placeholder: read the player's manually entered daily step count.
  const input = document.querySelector("#step-input");
  return Math.max(0, Number(input?.value || 0));
}

function applyStepCount(steps, sourceLabel) {
  if (state.lastStepDay === state.day) return toast("Today's walk is already logged. New opportunities arrive tomorrow.");
  state.stepToday = steps;
  state.lastStepDay = state.day;
  state.lastProviderSync = sourceLabel;
  state.stats.stepsLogged += 1;
  const reward = processStepRewards(steps);
  state.discoveryEnergy += reward.energy;
  state.pollinationPoints += reward.pollination;
  state.discoveryTokens += reward.tokens;
  state.lastStepSummary = reward;
  reward.rewards.forEach((rewardName) => {
    if (rewardName === "Research clue") addNote(2);
    if (rewardName === "Journal page") addSpecificHybridNote();
    if (rewardName === "Discovery Network hint") addFamilyInsight();
  });
  state.events = generateStepEvents(steps);
  state.events.forEach(applyEventReward);
  saveAndRender();
  showEventModal(state.events, reward);
}

function generateStepEvents(steps) {
  const guaranteed = steps >= 12000 ? 3 : steps >= 8000 ? 2 : steps >= 5000 ? 2 : 1;
  return shuffle(natureEncounters.filter((event) => steps >= event.min)).slice(0, guaranteed);
}

function applyEventReward(event) {
  if (event.reward === "pollination") {
    state.pollinationBonus = true;
    state.pollinationPoints += 2;
    state.eventEffects.pollination = Math.max(state.eventEffects.pollination || 0, event.duration || 2);
  }
  if (event.reward === "seed") addSeed(random(starters.slice(7, 18)).name, 1);
  if (event.reward === "advanced-note") addNote(5);
  if (event.reward === "specific-note") addSpecificHybridNote();
  if (event.reward === "family-clue") {
    state.discoveryEnergy += 1;
    addFamilyInsight();
  }
  if (event.reward === "hybrid-focus") {
    state.nextHybridBoost = true;
    state.eventEffects.hybridFocus = Math.max(state.eventEffects.hybridFocus || 0, event.duration || 1);
  }
  if (event.reward === "journal-fragment") {
    addSpecificHybridNote();
    state.eventEffects.pollination = Math.max(state.eventEffects.pollination || 0, event.duration || 2);
  }
  if (event.reward === "growth") {
    state.growthBoost = true;
    state.eventEffects.growth = Math.max(state.eventEffects.growth || 0, event.duration || 1);
  }
}

function processStepRewards(steps) {
  const reward = { steps, tier: "Garden Stroll", energy: 1, pollination: 1, tokens: 0, rewards: ["Small pollination"] };
  if (steps >= 2000) {
    reward.tier = "Town Walk";
    reward.energy = 2;
    reward.pollination = 2;
    if (Math.random() < 0.55) reward.rewards.push("Research clue");
  }
  if (steps >= 5000) {
    reward.tier = "Nature Encounter";
    reward.energy = 3;
    reward.pollination = 3;
    reward.rewards.push("Nature encounter");
    if (Math.random() < 0.55) reward.rewards.push("Discovery Network hint");
  }
  if (steps >= 8000) {
    reward.tier = "Rare Encounter";
    reward.energy = 5;
    reward.pollination = 4;
    reward.rewards.push("Rare encounter");
    if (Math.random() < 0.45) reward.rewards.push("Journal page");
  }
  if (steps >= 12000) {
    reward.tier = "Legendary Trail";
    reward.energy = 7;
    reward.pollination = 5;
    reward.tokens = Math.random() < 0.65 ? 1 : 0;
    reward.rewards.push("Legendary encounter");
    if (reward.tokens) reward.rewards.push("Discovery Token");
  }
  return reward;
}

function spendEnergyResearch() {
  if (state.discoveryEnergy < 3) return;
  state.discoveryEnergy -= 3;
  addNote(Math.min(state.notes.length, researchNotes.length - 1));
  saveAndRender();
  toast("Discovery Energy became a stronger research clue.");
}

function spendEnergyFamily() {
  if (state.discoveryEnergy < 4) return;
  state.discoveryEnergy -= 4;
  addFamilyInsight();
  saveAndRender();
  toast("A flower family insight was added to the journal.");
}

function useTokenConnection() {
  if (state.discoveryTokens < 1) return;
  state.discoveryTokens -= 1;
  revealNetworkConnection();
  saveAndRender();
  toast("A hidden Discovery Network connection became clearer.");
}

function useTokenHybrid() {
  if (state.discoveryTokens < 1) return;
  state.discoveryTokens -= 1;
  state.nextHybridBoost = true;
  state.eventEffects.hybridFocus = Math.max(state.eventEffects.hybridFocus || 0, 1);
  saveAndRender();
  toast("The next hybrid attempt has a focused pollinator trail.");
}

function runExpedition(id) {
  const expedition = expeditionOptions.find((item) => item.id === id);
  if (!expedition || state.discoveryEnergy < expedition.cost) return;
  state.discoveryEnergy -= expedition.cost;
  expedition.action();
  state.journalPages += Math.random() < 0.25 ? 1 : 0;
  saveAndRender();
  openModal(expedition.name, `
    <p>${expedition.reward}</p>
    <p class="muted">Discovery Energy spent: ${expedition.cost}. The journal board has a new lead.</p>
  `);
}

function addFamilyInsight(id = null) {
  const family = id ? flowerFamilies.find((item) => item.id === id) : familyNeedingInsight();
  if (!family) return addNote(0);
  if (!state.notes.includes(family.note)) {
    state.notes.push(family.note);
    queueJournalUnlock(`${family.name} insight added`);
    return;
  }
  addNote(0);
}

function familyNeedingInsight() {
  return flowerFamilies.find((family) => !state.familyBreakthroughs?.includes(family.id)) || random(flowerFamilies);
}

function revealNetworkConnection() {
  const hiddenLink = discoveryLinks.find((link) => isDiscovered(link.from) && !isDiscovered(link.to));
  if (!hiddenLink) return addSpecificHybridNote();
  const note = `${hiddenLink.from} has a sketched line toward a ${flowerByName.get(hiddenLink.to).rarity.toLowerCase()} mystery in the Discovery Network. ${hiddenLink.hint[1]}`;
  if (!state.notes.includes(note)) state.notes.push(note);
}

function tryHybrid() {
  const a = document.querySelector("#hybrid-a")?.value;
  const b = document.querySelector("#hybrid-b")?.value;
  if (!a || !b) return toast("Harvest two flowers before hybridizing.");
  if (a === b && totalFlowerCount(a) < 2) return toast(`You need two ${a} blooms for that pairing.`);
  if (a !== b && (!totalFlowerCount(a) || !totalFlowerCount(b))) return toast("One of those flowers is missing.");

  const qa = consumeInventory(a, 1, "Common");
  const qb = consumeInventory(b, 1, "Common");
  state.hybridAttempts += 1;
  const match = hybrids.find((hybrid) => sameRecipe(hybrid.recipe, [a, b]));
  const chance = match && !isDiscovered(match.name) && state.stats.hybrids === 0 ? 1 : hybridChance(match);
  if (state.pollinationPoints > 0) state.pollinationPoints -= 1;
  state.pollinationBonus = false;
  state.nextHybridBoost = false;

  if (match && Math.random() <= chance) {
    const hybridQuality = promoteQuality(bestQuality([qa, qb]), match);
    addInventory(match.name, hybridQuality, 1);
    const isNew = discover(match.name);
    if (isNew) state.stats.hybrids += 1;
    state.restoration = clamp(state.restoration + (isNew ? 8 : 3), 0, 100);
    addNote();
    saveAndRender();
    showHybridModal(match, isNew, hybridQuality);
    return;
  }

  if (match) addSeed(match.name, 1);
  addResearchProgress(match, [a, b]);
  saveAndRender();
  openModal("Promising Pairing", `
    <p>The pollen shimmered, but no stable bloom formed yet.</p>
    <p class="muted">${match ? "This combination feels possible. A seed fragment and clue were saved." : failedPairHint(a, b)}</p>
  `);
}

function hybridChance(match) {
  const pointBonus = state.pollinationPoints > 0 ? 0.06 : 0;
  const tokenBonus = state.nextHybridBoost || activeEffect("hybridFocus") ? 0.14 : 0;
  if (!match) return clamp(0.12 + (state.pollinationBonus ? 0.12 : 0) + pointBonus + tokenBonus, 0, 0.45);
  return clamp(0.58 + (state.pollinationBonus ? 0.15 : 0) + (activeEffect("pollination") ? 0.15 : 0) + pointBonus + tokenBonus + (species[state.species]?.hybridBonus || 0), 0, 0.94);
}

function hybridChanceText() {
  const bonus = state.pollinationBonus ? "Bee Swarm active: improved odds." : "No pollination event active.";
  const lasting = activeEffect("pollination") ? ` Pollination lasts ${state.eventEffects.pollination} day${state.eventEffects.pollination === 1 ? "" : "s"}.` : "";
  const points = state.pollinationPoints > 0 ? ` ${state.pollinationPoints} Pollination Point${state.pollinationPoints === 1 ? "" : "s"} ready.` : "";
  const focus = state.nextHybridBoost || activeEffect("hybridFocus") ? " Focused pollinator trail active." : "";
  return `${bonus}${lasting}${points}${focus} Attempts: ${state.hybridAttempts}.`;
}

function fulfillOrder(index) {
  const order = normalizeOrder(state.orders[index]);
  if (!canFulfill(order)) return;
  order.items.forEach((item) => {
    consumeInventory(item.name, item.count, item.minQuality);
  });
  const bonus = species[state.species]?.revenueBonus || 0;
  const earned = Math.round(order.coins * (1 + bonus));
  state.coins += earned;
  trackCoins(earned);
  state.reputation += order.rep;
  state.restoration = clamp(state.restoration + order.rep * 2, 0, 100);
  if (order.residentId) {
    addFriendship(order.residentId, order.friendship || 8);
    unlockResidentStory(order.residentId);
  }
  state.orders.splice(index, 1);
  state.stats.orders += 1;
  if (order.type === "Premium" || order.items.some((item) => qualityRank(item.minQuality) >= qualityRank("Premium"))) state.stats.premiumOrders += 1;
  if (state.orders.length < 3) state.orders.push(...makeOrders(2));
  saveAndRender();
  openModal("Order Complete", `
    <p><strong>${order.customer}</strong> loved the ${order.type.toLowerCase()} order.</p>
    <p>${earned} coins - ${order.rep} reputation - Bloomhaven looks brighter.</p>
    <p class="muted">${order.type === "Simple" ? "Simple orders keep the shop moving. Quality orders pay better when you are ready." : "Higher standards mean better rewards."}</p>
  `);
}

function sellFlower(name, quality = "Common") {
  if (!inventoryCount(name, quality)) return;
  const flower = flowerByName.get(name);
  const bonus = species[state.species]?.revenueBonus || 0;
  consumeExactInventory(name, quality, 1);
  const earned = Math.max(1, Math.round(flower.value * 0.75 * qualityMultipliers[quality] * (1 + bonus)));
  state.coins += earned;
  trackCoins(earned);
  if (flower.recipe) state.stats.hybridSales += 1;
  saveAndRender();
  toast(`${quality} ${name} quick sold for ${earned} coins.`);
}

function switchStrategy(strategy) {
  if (!strategyOptions[strategy] || state.strategyChangedDay === state.day || state.shopStrategy === strategy) return;
  state.shopStrategy = strategy;
  state.strategyChangedDay = state.day;
  state.stats.strategySwitches += 1;
  state.orders = makeOrders(3);
  saveAndRender();
  toast(`Shop strategy set to ${strategyOptions[strategy].label}.`);
}

function buyPlots() {
  const nextSize = nextPlotSize();
  if (!nextSize) return;
  const cost = plotUpgradeCost();
  if (state.coins < cost) return;
  state.coins -= cost;
  while (state.plots.length < nextSize) state.plots.push(null);
  state.maxPlots = nextSize;
  state.restoration = clamp(state.restoration + 3, 0, 100);
  saveAndRender();
  toast(`Expanded to ${nextSize} flower beds.`);
}

function buySeed(name) {
  const flower = flowerByName.get(name);
  const cost = seedCost(flower);
  if (state.coins < cost) return;
  state.coins -= cost;
  addSeed(name, 1);
  discover(name);
  saveAndRender();
  toast(`${name} seed added to your pouch.`);
}

function seedCost(flower) {
  const discount = friendshipFor("ben") >= 50 ? 0.9 : 1;
  return Math.max(6, Math.round(flower.value * 0.65 * discount));
}

function plotUpgradeCost() {
  const base = plotUpgradeCosts[plotUpgradeSizes.indexOf(state.maxPlots)];
  const discount = friendshipFor("millie") >= 50 ? 0.9 : 1;
  return Math.round(base * discount);
}

function canFulfill(order) {
  const normalized = normalizeOrder(order);
  return normalized.items.every((item) => availableForQuality(item.name, item.minQuality) >= item.count);
}

function normalizeOrder(order) {
  if (Array.isArray(order.items)) return order;
  const items = Object.entries(order.items || {}).map(([name, count]) => ({ name, count, minQuality: "Common" }));
  return createOrder(order.type || "Simple", order.customer || "Customer", items, order.flavor || "A familiar order from town.", order.coins, order.rep);
}

function makeOrders(count = 3) {
  return Array.from({ length: count }, () => buildOrder());
}

function buildOrder() {
  const roll = Math.random();
  const strategy = state.shopStrategy || "Budget";
  let type = "Simple";
  if (strategy === "Budget") type = roll < 0.65 ? "Simple" : roll < 0.9 ? "Bouquet" : "Rush";
  if (strategy === "Boutique") type = roll < 0.25 ? "Simple" : roll < 0.55 ? "Bouquet" : roll < 0.85 ? "Premium" : "Rush";
  if (strategy === "Collector") type = roll < 0.25 ? "Bouquet" : roll < 0.5 ? "Premium" : roll < 0.82 ? "Collector" : "Rush";

  const customers = ["Mira", "Jun", "Clover Cafe", "Mayor Poppy", "Theo", "Nia", "General Store", "Botanical Society"];
  if (Math.random() < personalRequestChance()) return buildResidentRequest();
  const customer = random(customers);
  if (type === "Simple") {
    const flower = random(starters.slice(0, 7));
    return createOrder(type, customer, [{ name: flower.name, count: random([1, 2, 3]), minQuality: "Common" }], "A low-pressure order for everyday blooms.");
  }
  if (type === "Bouquet") {
    const first = random(starters.slice(0, 8));
    let second = random(starters.slice(0, 8));
    if (second.name === first.name) second = flowerByName.get("Lavender");
    return createOrder(type, customer, [
      { name: first.name, count: 2, minQuality: "Fine" },
      { name: second.name, count: 1, minQuality: "Fine" },
    ], "A coordinated bouquet where freshness matters.");
  }
  if (type === "Premium") {
    const flower = random(starters.slice(3, 13));
    return createOrder(type, customer, [{ name: flower.name, count: 1, minQuality: "Premium" }], "A customer wants one standout bloom for a special table.");
  }
  if (type === "Rush") {
    const flower = random(starters.slice(0, 10));
    return createOrder(type, customer, [{ name: flower.name, count: 1, minQuality: "Common" }], "Needed today. The pay is better, but the request changes tomorrow.", 1.55, 1);
  }
  const discoveredHybrids = state.discovered.map((name) => flowerByName.get(name)).filter((flower) => flower?.recipe);
  const flower = discoveredHybrids.length ? random(discoveredHybrids) : random(starters.slice(10, 18));
  return createOrder("Collector", "Botanical Society", [{ name: flower.name, count: 1, minQuality: "Common" }], "A collector wants something unusual for the society shelves.", 1.8, 2);
}

function personalRequestChance() {
  if (state.stats.orders < 1) return 0.25;
  if (state.shopStrategy === "Collector") return 0.55;
  if (state.restoration >= 25) return 0.45;
  return 0.35;
}

function buildResidentRequest() {
  const pool = state.stats.orders < 1
    ? residents.filter((resident) => ["wendy", "ben", "millie"].includes(resident.id))
    : residents.filter((resident) => resident.id !== "finch" || state.stats.hybrids > 0);
  const resident = random(pool);
  const favorite = flowerForResident(resident);
  const minQuality = state.shopStrategy === "Boutique" && state.stats.orders > 0 ? "Fine" : "Common";
  const type = resident.id === "finch" ? "Collector" : minQuality === "Fine" ? "Bouquet" : "Simple";
  const order = createOrder(type, resident.name, [{ name: favorite.name, count: 1, minQuality }], resident.request, 1.25, 1);
  order.residentId = resident.id;
  order.friendship = 10;
  return order;
}

function flowerForResident(resident) {
  const discoveredFlowers = flowers.filter((flower) => isDiscovered(flower.name));
  const candidates = discoveredFlowers.filter((flower) => residentLikesFlower(resident, flower));
  if (candidates.length) return random(candidates);
  const fallback = {
    wendy: "Rose",
    ben: "Lavender",
    finch: "Meadow Crown",
    rosewood: "Peony",
    millie: "Daisy",
  }[resident.id];
  return flowerByName.get(fallback) || flowerByName.get("Daisy");
}

function createOrder(type, customer, items, flavor, rewardBoost = 1, repBoost = 0) {
  const qualityBoost = Math.max(...items.map((item) => qualityMultipliers[item.minQuality] || 1));
  const value = items.reduce((sum, item) => sum + flowerByName.get(item.name).value * item.count * (qualityMultipliers[item.minQuality] || 1), 0);
  const typeBoost = { Simple: 1.15, Bouquet: 1.45, Premium: 1.8, Rush: 1.55, Collector: 2.1 }[type] || 1.2;
  return {
    type,
    customer,
    items,
    flavor,
    coins: Math.round(value * typeBoost * rewardBoost),
    rep: Math.max(1, Math.round(value / 34 + qualityBoost - 0.5 + repBoost)),
  };
}

function starterOrders() {
  return [
    createOrder("Simple", "Clover Cafe", [{ name: "Daisy", count: 1, minQuality: "Common" }], "A little vase for the breakfast counter."),
    createOrder("Simple", "Mira", [{ name: "Tulip", count: 2, minQuality: "Common" }], "Bright tulips for a windowsill."),
    ...makeOrders(1),
  ];
}

function ensureEarlyOrder() {
  if (state.stats.orders > 0) return;
  const hasEasyOrder = state.orders.some((order) => {
    const normalized = normalizeOrder(order);
    return normalized.type === "Simple" && normalized.items.some((item) => ["Daisy", "Tulip", "Cosmos"].includes(item.name) && item.minQuality === "Common");
  });
  if (!hasEasyOrder) {
    state.orders[0] = createOrder("Simple", "Clover Cafe", [{ name: "Daisy", count: 1, minQuality: "Common" }], "A little vase for the breakfast counter.");
  }
}

function confirmNewGame() {
  openModal("Start New Game?", `
    <p>This clears the local save and restarts at Grandfather's Farm.</p>
    <button data-action="confirm-new-game">Start New Game</button>
  `);
}

function newGame() {
  storageRemove(SAVE_KEY);
  state = createNewState();
  state.orders = starterOrders();
  state.hasSeenIntro = true;
  saveAndRender();
  showWelcome();
}

function showWelcome() {
  openModal("Grandfather's Farm", `
    <p>You inherited a quiet flower farm and a fading florist shop in Bloomhaven Town Square.</p>
    <p>Choose an animal farmhand, pick a male or female portrait style, plant seeds, harvest blooms, fill orders, log steps, and try hybrids to restore the town.</p>
  `);
}

function showEventModal(events, reward) {
  openModal("Discovery Walk", `
    <p><strong>${reward.steps.toLocaleString()} steps:</strong> ${reward.tier}</p>
    <div class="step-summary modal-step-summary">
      <p>${reward.energy} Discovery Energy - ${reward.pollination} Pollination Point${reward.pollination === 1 ? "" : "s"} - ${reward.tokens} Discovery Token${reward.tokens === 1 ? "" : "s"}</p>
      <div class="reward-tags">${reward.rewards.map((item) => `<span>${item}</span>`).join("")}</div>
    </div>
    ${events.map(renderEvent).join("")}
  `);
}

function showHybridModal(flower, isNew, quality = "Fine") {
  openModal(isNew ? "New Hybrid Discovered!" : "Hybrid Bloomed Again", `
    <div class="celebration-flower petal-burst" style="--bloom:${flower.color}"><span class="pixel-flower"></span></div>
    <p><strong>${flower.name}</strong> ${isNew ? "joined your journal" : "bloomed again"}.</p>
    <p><span class="quality-badge quality-${quality}">${quality}</span> <span class="rarity-chip">${flower.rarity}</span> ${Math.round(flower.value * qualityMultipliers[quality])} coin value</p>
    <div class="family-tags modal-family-tags">${renderFamilyTags(flower)}</div>
    <div class="parent-card-row">${flower.recipe.map((name) => renderParentCard(name)).join("")}</div>
    <p class="muted">Traits: ${flower.traits.join(", ")}</p>
    <p class="flavor">${hybridFlavor(flower)}</p>
    <p class="muted">Bloomhaven restoration increased. New hybrids point toward stranger pairings.</p>
  `, "Added to Journal");
}

function renderParentCard(name) {
  const flower = flowerByName.get(name);
  return `
    <div class="parent-card">
      <div class="card-bloom" style="--bloom:${flower.color}"><span class="pixel-flower"></span></div>
      <strong>${name}</strong>
      <div class="family-tags">${renderFamilyTags(flower)}</div>
    </div>
  `;
}

function openModal(title, body, closeLabel = "Close") {
  const modal = document.querySelector("#modal");
  if (!modal) return;
  modal.classList.remove("hidden");
  modal.innerHTML = `<div class="modal-card"><h2>${title}</h2>${body}<button data-action="close-modal">${closeLabel}</button></div>`;
}

function closeModal() {
  document.querySelector("#modal")?.classList.add("hidden");
}

function toast(message) {
  const stack = document.querySelector("#toasts");
  if (!stack) return;
  const item = document.createElement("div");
  item.className = "toast";
  item.textContent = message;
  stack.appendChild(item);
  setTimeout(() => item.remove(), 2600);
}

function addInventory(name, quality = "Common", count = 1) {
  ensureInventoryFlower(name);
  state.inventory[name][quality] = (state.inventory[name][quality] || 0) + count;
}

function addSeed(name, count) {
  state.seeds[name] = (state.seeds[name] || 0) + count;
}

function addNote(startIndex = 0) {
  const unknown = researchNotes.slice(startIndex).find((note) => !state.notes.includes(note));
  if (unknown) {
    state.notes.push(unknown);
    queueJournalUnlock("Research note added");
  }
}

function addSpecificHybridNote() {
  const hidden = hybrids.find((hybrid) => !isDiscovered(hybrid.name));
  if (!hidden) return addNote(0);
  const note = `${hidden.recipe[0]} and ${hidden.recipe[1]} may reveal ${hidden.traits[0]} petals.`;
  if (!state.notes.includes(note)) {
    state.notes.push(note);
    state.journalPages += 1;
    unlockJournalEntry("grandfather", "moon-garden-ledgers", "Grandfather's note recovered");
    queueJournalUnlock("Specific hybrid clue added");
  }
}

function addResearchProgress(match, pair) {
  if (match) {
    const note = `${pair[0]} + ${pair[1]} produced unstable pollen. Try again after a step event.`;
    if (!state.notes.includes(note)) {
      state.notes.push(note);
      queueJournalUnlock("Research note added");
    }
    return;
  }
  addNote(Math.min(state.notes.length, researchNotes.length - 1));
}

function ensureJournalState() {
  if (!state.journal || typeof state.journal !== "object") state.journal = createJournalState();
  if (!journalTabs.some((tab) => tab.id === state.journal.activeTab)) state.journal.activeTab = "flowers";
  ["grandfather", "facts", "townRecords"].forEach((section) => {
    if (!Array.isArray(state.journal[section])) state.journal[section] = [];
  });
}

function unlockJournalEntry(section, id, message = "Journal entry added") {
  ensureJournalState();
  if (state.journal[section].includes(id)) return false;
  state.journal[section].push(id);
  queueJournalUnlock(message);
  return true;
}

function queueJournalUnlock(message) {
  if (!pendingJournalUnlocks.includes(message)) pendingJournalUnlocks.push(message);
}

function flushJournalUnlocks() {
  if (!pendingJournalUnlocks.length) return;
  const messages = [...pendingJournalUnlocks];
  pendingJournalUnlocks = [];
  messages.slice(0, 2).forEach((message) => toast(message));
}

function syncJournalUnlocks() {
  ensureJournalState();
  syncFamilyBreakthroughs();
  if (state.stats.harvested >= 1) {
    unlockJournalEntry("grandfather", "morning-rain", "Grandfather's note recovered");
    unlockJournalEntry("facts", "deadheading", "Gardening fact added");
  }
  if (state.stats.orders >= 1) {
    unlockJournalEntry("grandfather", "seed-before-coins", "Grandfather's note recovered");
    unlockJournalEntry("facts", "florist-balance", "Gardening fact added");
  }
  if (state.stats.stepsLogged >= 1) {
    unlockJournalEntry("grandfather", "lavender-bees", "Grandfather's note recovered");
    unlockJournalEntry("facts", "native-support", "Gardening fact added");
  }
  if (state.stats.hybrids >= 1 || state.hybridAttempts >= 1) {
    unlockJournalEntry("grandfather", "right-neighbor", "Grandfather's note recovered");
    unlockJournalEntry("facts", "lavender-soil", "Gardening fact added");
  }
  if (state.journalPages >= 1 || state.restoration >= 40) {
    unlockJournalEntry("grandfather", "moon-garden-ledgers", "Grandfather's note recovered");
  }
  if (state.weather === "Cool Mist" || activeEffect("growth")) unlockJournalEntry("facts", "cold-germination", "Gardening fact added");
  townRecords.forEach((record) => {
    if (state.restoration >= record.value) unlockJournalEntry("townRecords", record.id, "Town record added");
  });
}

function isJournalUnlocked(section, id) {
  ensureJournalState();
  return state.journal[section]?.includes(id);
}

function unlockedCount(section, entries) {
  return entries.filter((entry) => isJournalUnlocked(section, entry.id)).length;
}

function journalEntryCount() {
  ensureJournalState();
  return (state.notes?.length || 0) + state.journal.grandfather.length + state.journal.facts.length + state.journal.townRecords.length + state.storyEntries.length;
}

function journalLockedHint(section, entry) {
  if (section === "grandfather") {
    if (entry.id === "moon-garden-ledgers") return "Find an old page or restore the Botanical Society.";
    if (entry.id === "right-neighbor") return "Attempt a hybrid pairing.";
    if (entry.id === "lavender-bees") return "Log a walk or discover a step event.";
    return "Keep farming, selling, and restoring Bloomhaven.";
  }
  if (section === "facts") return "Unlock by harvesting, filling orders, walking, or studying hybrids.";
  return "Keep exploring Bloomhaven.";
}

function residentLikesFlower(resident, flower) {
  const tags = [flower.rarity.toLowerCase(), ...flower.traits.map((trait) => trait.toLowerCase())];
  if (flower.recipe) tags.push("hybrid");
  return resident.likes.some((like) => tags.includes(like.toLowerCase()));
}

function friendshipFor(id) {
  ensureResident(id);
  return state.residents[id].friendship;
}

function ensureResident(id) {
  if (!state.residents) state.residents = createResidentState();
  if (!state.residents[id]) state.residents[id] = { friendship: 0, met: false };
}

function addFriendship(id, amount) {
  ensureResident(id);
  state.residents[id].met = true;
  state.residents[id].friendship = clamp(state.residents[id].friendship + amount, 0, 100);
  if (state.residents[id].friendship >= 20) unlockResidentStory(id);
  if (state.residents[id].friendship >= 50) addResidentClue(id);
}

function canGiftResident(resident) {
  return Object.keys(state.inventory).some((name) => {
    const flower = flowerByName.get(name);
    return flower && totalFlowerCount(name) > 0 && residentLikesFlower(resident, flower);
  });
}

function giftResident(id) {
  const resident = residents.find((item) => item.id === id);
  if (!resident) return;
  const giftName = Object.keys(state.inventory).find((name) => {
    const flower = flowerByName.get(name);
    return flower && totalFlowerCount(name) > 0 && residentLikesFlower(resident, flower);
  });
  if (!giftName) return toast(`${resident.name} would love a flower with ${resident.likes.join(" or ")} traits.`);
  const quality = consumeInventory(giftName, 1, "Common");
  const gained = 6 + qualityRank(quality) * 3 + (flowerByName.get(giftName).recipe ? 4 : 0);
  addFriendship(id, gained);
  state.restoration = clamp(state.restoration + 1, 0, 100);
  saveAndRender();
  openModal(`${resident.name} Smiles`, `
    <div class="dialogue-row">
      <div class="resident-portrait portrait-${resident.portrait}"></div>
      <p>"${giftDialogue(resident, giftName)}"</p>
    </div>
    <p class="muted">Friendship +${gained}. You delivered a ${quality} ${giftName}.</p>
  `);
}

function talkResident(id) {
  const resident = residents.find((item) => item.id === id);
  if (!resident) return;
  ensureResident(id);
  state.residents[id].met = true;
  const friendship = friendshipFor(id);
  const line = dialogueFor(resident, friendship);
  addFriendship(id, friendship ? 1 : 2);
  saveAndRender();
  openModal(resident.name, `
    <div class="dialogue-row">
      <div class="resident-portrait portrait-${resident.portrait}"></div>
      <div>
        <p><strong>${resident.occupation}</strong></p>
        <p>"${line}"</p>
      </div>
    </div>
  `);
}

function dialogueFor(resident, friendship) {
  if (friendship >= 50 || state.journalPages >= 2) return resident.dialogue.story;
  if (friendship >= 20 || state.restoration >= 25) return resident.dialogue.friend;
  if (resident.id === "finch" && state.stats.hybrids > 0) return "A living hybrid already? Your grandfather would have pretended not to be impressed, then written six pages.";
  if (state.restoration >= 40) return "The Botanical Society lights are on again. That alone changes the town's posture.";
  return resident.dialogue.early;
}

function giftDialogue(resident, flowerName) {
  const lines = {
    wendy: `This ${flowerName} has ceremony in it. I can already see the ribbon color.`,
    ben: `${flowerName} on the counter will make the whole cafe slow down for a breath.`,
    finch: `Excellent. I will study this ${flowerName} with entirely normal enthusiasm.`,
    rosewood: `${flowerName} has presence. The hotel lobby may survive another week.`,
    millie: `This ${flowerName} belongs in Bloomhaven soil. Thank you for noticing.`,
  };
  return lines[resident.id] || `This ${flowerName} feels like Bloomhaven waking up.`;
}

function unlockResidentStory(id) {
  const resident = residents.find((item) => item.id === id);
  if (!resident) return;
  const key = `${id}-story`;
  if (state.storyEntries.some((entry) => entry.id === key)) return;
  const friendship = friendshipFor(id);
  if (friendship < 20 && state.restoration < 25) return;
  state.storyEntries.push({
    id: key,
    title: `${resident.name}'s Memory`,
    text: resident.dialogue.friend,
  });
  if (friendship >= 50 || id === "finch") {
    state.journalPages += 1;
  }
}

function addResidentClue(id) {
  const clue = {
    wendy: "Wendy's note: Romantic and elegant flowers were once grown near the wedding arbor.",
    ben: "Ben's note: Fragrant blooms were pressed between missing cafe recipe pages.",
    finch: "Professor Finch's note: Hybrid specimens match your grandfather's coded journal marks.",
    rosewood: "Rosewood's note: Luxury blooms drew flower hunters to the old hotel.",
    millie: "Millie's note: Wild native flowers may know where the first garden slept.",
  }[id];
  if (clue && !state.notes.includes(clue)) {
    state.notes.push(clue);
    queueJournalUnlock("Resident clue added");
  }
}

function residentsMet() {
  return residents.filter((resident) => state.residents?.[resident.id]?.met).length;
}

function residentPerkText(resident) {
  const unlocked = friendshipFor(resident.id) >= 50;
  const perks = {
    wendy: "50 friendship: romantic hybrid clue.",
    ben: `50 friendship: seed prices ${unlocked ? "discounted" : "discount"}.`,
    finch: "50 friendship: rare hybrid research clue.",
    rosewood: "50 friendship: luxury customer rumor.",
    millie: `50 friendship: bed expansion ${unlocked ? "discounted" : "discount"}.`,
  };
  return perks[resident.id] || "Friendship unlocks clues and stories.";
}

function failedPairHint(a, b) {
  const first = flowerByName.get(a);
  const second = flowerByName.get(b);
  const shared = first.traits.find((trait) => second.traits.includes(trait));
  if (shared) return `Both flowers share ${shared}. Look for a third clue that names that trait.`;
  return "The traits did not quite align, but your journal gained research progress.";
}

function completeTasks() {
  let completed = false;
  let activeTask = taskDefinitions.find((task) => !state.completedTasks.includes(task.id));
  while (activeTask && activeTask.complete()) {
    state.completedTasks.push(activeTask.id);
    applyTaskReward(activeTask.reward);
    completed = true;
    activeTask = taskDefinitions.find((task) => !state.completedTasks.includes(task.id));
  }
  return completed;
}

function applyTaskReward(reward) {
  if (reward.coins) state.coins += reward.coins;
  if (reward.reputation) state.reputation += reward.reputation;
  if (reward.restoration) state.restoration = clamp(state.restoration + reward.restoration, 0, 100);
  if (reward.note) addNote();
  if (reward.seed) addSeed(reward.seed, 1);
}

function rewardText(reward) {
  const parts = [];
  if (reward.coins) parts.push(`${reward.coins} coins`);
  if (reward.reputation) parts.push(`${reward.reputation} rep`);
  if (reward.restoration) parts.push(`${reward.restoration}% restoration`);
  if (reward.note) parts.push("research clue");
  if (reward.seed) parts.push(`${reward.seed} seed`);
  return parts.join(", ");
}

function nextObjectiveHint() {
  if (!state.species || !state.gender) return "Choose one animal and a male or female portrait style to begin.";
  if (state.stats.planted < 3) return "Plant a starter mix so orders and hybrid clues line up.";
  if (state.stats.harvested < 1) return "Advance time until a bed is ready, then harvest.";
  if (state.stats.orders < 1) return "Open Florist and fill a Simple order.";
  if (state.stats.hybrids < 1) return "Try Daisy + Cosmos in Hybridize.";
  return "Keep collecting journal entries and restoration milestones.";
}

function tickEventEffects() {
  Object.keys(state.eventEffects).forEach((key) => {
    state.eventEffects[key] -= 1;
    if (state.eventEffects[key] <= 0) delete state.eventEffects[key];
  });
}

function activeEffect(key) {
  return (state.eventEffects[key] || 0) > 0;
}

function rollQuality(name) {
  const flower = flowerByName.get(name);
  let score = Math.random();
  if (flower.rarity === "Uncommon") score += 0.08;
  if (flower.rarity === "Rare") score += 0.16;
  if (flower.rarity === "Epic" || flower.rarity === "Hybrid") score += 0.22;
  if (state.pollinationBonus || activeEffect("pollination")) score += 0.12;
  if (state.weather === "Drizzle" || activeEffect("growth")) score += 0.05;
  if (state.species === "Rabbit") score += 0.04;
  if (state.species === "Fox" && flower.recipe) score += 0.05;
  if (score >= 0.96) return "Masterpiece";
  if (score >= 0.78) return "Premium";
  if (score >= 0.48) return "Fine";
  return "Common";
}

function qualityRank(quality) {
  return qualities.indexOf(quality);
}

function qualityRequirementText(quality) {
  return quality === "Common" ? "Any quality" : `${quality} or better`;
}

function ensureInventoryFlower(name) {
  if (!state.inventory[name] || typeof state.inventory[name] !== "object") {
    const oldCount = Number(state.inventory[name] || 0);
    state.inventory[name] = { Common: oldCount, Fine: 0, Premium: 0, Masterpiece: 0 };
  }
  qualities.forEach((quality) => {
    state.inventory[name][quality] = Number(state.inventory[name][quality] || 0);
  });
}

function inventoryCount(name, quality) {
  ensureInventoryFlower(name);
  return state.inventory[name][quality] || 0;
}

function totalFlowerCount(name) {
  ensureInventoryFlower(name);
  return qualities.reduce((sum, quality) => sum + inventoryCount(name, quality), 0);
}

function availableForQuality(name, minQuality = "Common") {
  ensureInventoryFlower(name);
  return qualities
    .filter((quality) => qualityRank(quality) >= qualityRank(minQuality))
    .reduce((sum, quality) => sum + inventoryCount(name, quality), 0);
}

function consumeInventory(name, count = 1, minQuality = "Common") {
  ensureInventoryFlower(name);
  let remaining = count;
  let lastQuality = minQuality;
  for (const quality of qualities) {
    if (qualityRank(quality) < qualityRank(minQuality)) continue;
    const take = Math.min(remaining, inventoryCount(name, quality));
    if (take > 0) {
      state.inventory[name][quality] -= take;
      remaining -= take;
      lastQuality = quality;
    }
    if (!remaining) return lastQuality;
  }
  return lastQuality;
}

function consumeExactInventory(name, quality, count = 1) {
  ensureInventoryFlower(name);
  state.inventory[name][quality] = Math.max(0, state.inventory[name][quality] - count);
}

function bestQuality(list) {
  return list.sort((a, b) => qualityRank(b) - qualityRank(a))[0] || "Common";
}

function promoteQuality(quality, flower) {
  let rank = qualityRank(quality);
  if (flower.rarity === "Hybrid" || flower.rarity === "Epic") rank += 1;
  if (state.pollinationBonus || activeEffect("pollination")) rank += 1;
  return qualities[clamp(rank, 0, qualities.length - 1)];
}

function nextPlotSize() {
  return plotUpgradeSizes.find((size) => size > state.maxPlots) || null;
}

function filledPlots() {
  return state.plots.filter(Boolean).length;
}

function currentMilestoneText() {
  const current = [...restorationMilestones].reverse().find((milestone) => state.restoration >= milestone.value);
  if (current) return `${current.title}: ${current.text}`;
  return "Next: Town flower beds cleaned at 10%.";
}

function targetFamilies(flower) {
  return flowerFamilies.filter((family) => family.flowers.includes(flower.name));
}

function renderFamilyTags(flower) {
  const families = targetFamilies(flower);
  if (!families.length) return "";
  return families.map((family) => `<span class="family-badge">${family.name}</span>`).join("");
}

function connectedDiscoveries(name) {
  return discoveryLinks.filter((link) => link.from === name && (isDiscovered(link.from) || isDiscovered(link.to)));
}

function progressiveHint(link, sourceName) {
  if (isDiscovered(link.to)) return `${sourceName} helped reveal ${link.to}.`;
  const target = flowerByName.get(link.to);
  const parentsKnown = target.recipe?.every((name) => isDiscovered(name));
  const hasSpecific = state.notes.some((note) => note.includes(link.from) && note.includes(link.to));
  const familyUnlocked = targetFamilies(target).some((family) => state.familyBreakthroughs?.includes(family.id));
  const level = parentsKnown && (hasSpecific || familyUnlocked || state.notes.length >= 7) ? 2 : parentsKnown || familyUnlocked || state.notes.length >= 4 ? 1 : 0;
  return link.hint[level];
}

function nextFamilyHint(family, count) {
  const needed = familyBreakthroughRequirement(family);
  if (count >= needed) return "Breakthrough ready.";
  const remaining = Math.max(needed - count, 0);
  return `${remaining} more ${remaining === 1 ? "discovery" : "discoveries"} for a breakthrough.`;
}

function familyBreakthroughRequirement(family) {
  return Math.min(3, Math.max(2, Math.ceil(family.flowers.length * 0.45)));
}

function syncFamilyBreakthroughs() {
  if (!Array.isArray(state.familyBreakthroughs)) state.familyBreakthroughs = [];
  flowerFamilies.forEach((family) => {
    const count = family.flowers.filter((name) => isDiscovered(name)).length;
    if (count < familyBreakthroughRequirement(family) || state.familyBreakthroughs.includes(family.id)) return;
    state.familyBreakthroughs.push(family.id);
    if (!state.notes.includes(family.note)) state.notes.push(family.note);
    if (family.id === "water") unlockJournalEntry("facts", "cold-germination", "Water Studies added a gardening fact");
    if (family.id === "exotic") unlockJournalEntry("grandfather", "moon-garden-ledgers", "Exotic Studies recovered a note");
    queueJournalUnlock(`${family.breakthrough} unlocked`);
  });
}

function hybridFlavor(flower) {
  const lines = {
    "Lavender Rose": "The bloom smells like a quiet evening after rain.",
    "Royal Iris": "Its petals open like a tiny banner for the Botanical Society.",
    "Sunset Bloom": "Warm colors ripple across each petal as daylight fades.",
    "Golden Star": "Pollinators orbit it like a little sun.",
    "Meadow Crown": "It looks like something a child would crown a spring statue with.",
    "Woodland Bell": "The bell-shaped petals seem to ring when bees pass.",
    "Velvet Peony": "A plush bloom that makes the florist counter feel expensive.",
    "Crystal Lily": "Its pale petals catch water and light like glass.",
    "Starlight Orchid": "Tiny specks glow along the orchid's moonlit edges.",
    "Moon Blossom": "The whole farm pauses around this quiet, impossible flower.",
  };
  return lines[flower.name] || "A new shape of beauty has entered Bloomhaven.";
}

function discover(name) {
  if (state.discovered.includes(name)) return false;
  state.discovered.push(name);
  const flower = flowerByName.get(name);
  applyDiscoveryReward(flower);
  residents.forEach((resident) => {
    if (flower && residentLikesFlower(resident, flower)) addFriendship(resident.id, flower.recipe ? 4 : 2);
  });
  syncFamilyBreakthroughs();
  return true;
}

function applyDiscoveryReward(flower) {
  if (!flower) return;
  const rarityCoins = { Common: 3, Uncommon: 6, Rare: 10, Epic: 16, Hybrid: 18 };
  const earned = rarityCoins[flower.rarity] || 5;
  state.coins += earned;
  state.restoration = clamp(state.restoration + (flower.recipe ? 2 : 1), 0, 100);
  queueJournalUnlock(`${flower.name} added to the discovery network`);
  const linked = discoveryLinks.find((link) => link.from === flower.name || link.to === flower.name);
  if (flower.recipe || linked) addNote(Math.max(0, Math.min(state.notes.length, researchNotes.length - 1)));
  if (Math.random() < (flower.recipe ? 0.45 : 0.25)) unlockDiscoveryJournalChance(flower);
  if (flower.rarity === "Rare" || flower.rarity === "Epic") unlockJournalEntry("grandfather", "right-neighbor", "Grandfather's note recovered");
}

function unlockDiscoveryJournalChance(flower) {
  const lockedGrandfather = grandfatherNotes.find((entry) => !isJournalUnlocked("grandfather", entry.id));
  const lockedFact = gardeningFacts.find((entry) => !isJournalUnlocked("facts", entry.id));
  if (flower.recipe && lockedGrandfather) {
    unlockJournalEntry("grandfather", lockedGrandfather.id, "Grandfather's note recovered");
    return;
  }
  if (lockedFact) unlockJournalEntry("facts", lockedFact.id, "Gardening fact added");
}

function isDiscovered(name) {
  return state.discovered.includes(name);
}

function clueFor(flower) {
  if (!flower.recipe) return "Unknown seed source.";
  if (flower.name === "Meadow Crown" && !isDiscovered("Meadow Crown")) return "First clue: Daisy + Cosmos can create a meadow hybrid.";
  const [a, b] = flower.recipe;
  const traitClue = flower.traits.slice(0, 2).join(" and ");
  return `Clue: ${traitClue} traits may matter. ${state.notes.length > 3 ? `${a} + ${b}?` : "Recipe hidden."}`;
}

function nextJournalTease() {
  const nextHybrid = hybrids.find((flower) => !isDiscovered(flower.name));
  if (!nextHybrid) return "All hybrids found";
  return `Next mystery: ${nextHybrid.traits[0]} traits`;
}

function sameRecipe(recipe, pair) {
  return recipe.every((name) => pair.includes(name)) && pair.every((name) => recipe.includes(name));
}

function inventoryFlowerCount() {
  return Object.keys(state.inventory).reduce((sum, name) => sum + totalFlowerCount(name), 0);
}

function trackCoins(amount) {
  state.dailyCoinsEarned += amount;
  state.stats.bestDailyCoins = Math.max(state.stats.bestDailyCoins, state.dailyCoinsEarned);
}

function hasSeeds() {
  return Object.values(state.seeds).some((count) => count > 0);
}

function isActive(screen) {
  return state.active === screen ? "active" : "";
}

function saveAndRender() {
  const completed = completeTasks();
  syncJournalUnlocks();
  saveState();
  render();
  if (completed) toast("Task complete. Reward added.");
  flushJournalUnlocks();
}

function saveState() {
  storageSet(SAVE_KEY, JSON.stringify(state));
}

function loadState() {
  try {
    const raw = storageGet(SAVE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    const migrated = { ...createNewState(), ...parsed };
    if (!Array.isArray(migrated.discovered)) migrated.discovered = createNewState().discovered;
    if (!Array.isArray(migrated.notes)) migrated.notes = createNewState().notes;
    if (!Array.isArray(migrated.events)) migrated.events = [];
    if (!Array.isArray(migrated.orders)) migrated.orders = starterOrders();
    if (!Array.isArray(migrated.plots)) migrated.plots = createNewState().plots;
    migrated.residents = migrateResidents(parsed.residents);
    migrated.gender = ["Male", "Female"].includes(parsed.gender) ? parsed.gender : "";
    migrated.storyEntries = Array.isArray(parsed.storyEntries) ? parsed.storyEntries : [];
    migrated.journalPages = Number(parsed.journalPages || 0);
    migrated.journal = migrateJournal(parsed.journal);
    migrated.familyBreakthroughs = Array.isArray(parsed.familyBreakthroughs) ? parsed.familyBreakthroughs : [];
    migrated.stats = { ...createNewState().stats, ...(parsed.stats || {}) };
    migrated.eventEffects = { ...(parsed.eventEffects || {}) };
    migrated.completedTasks = parsed.completedTasks || [];
    migrated.shopStrategy = strategyOptions[parsed.shopStrategy] ? parsed.shopStrategy : "Budget";
    migrated.strategyChangedDay = parsed.strategyChangedDay || 0;
    migrated.dailyCoinsEarned = parsed.dailyCoinsEarned || 0;
    migrated.lastProviderSync = parsed.lastProviderSync || null;
    migrated.discoveryEnergy = Number(parsed.discoveryEnergy || 0);
    migrated.pollinationPoints = Number(parsed.pollinationPoints || 0);
    migrated.discoveryTokens = Number(parsed.discoveryTokens || 0);
    migrated.nextHybridBoost = !!parsed.nextHybridBoost;
    migrated.lastStepSummary = parsed.lastStepSummary || null;
    migrated.lastStepDay = Number(parsed.lastStepDay || 0);
    migrated.maxPlots = parsed.maxPlots || Math.max(12, parsed.plots?.length || 12);
    while (migrated.plots.length < migrated.maxPlots) migrated.plots.push(null);
    migrated.inventory = migrateInventory(parsed.inventory || {});
    migrated.orders = migrated.orders.map(normalizeSavedOrder);
    syncJournalUnlocksFor(migrated);
    return migrated;
  } catch {
    return null;
  }
}

function migrateJournal(saved) {
  const base = createJournalState();
  const migrated = { ...base, ...(saved || {}) };
  if (!journalTabs.some((tab) => tab.id === migrated.activeTab)) migrated.activeTab = "flowers";
  ["grandfather", "facts", "townRecords"].forEach((section) => {
    migrated[section] = Array.isArray(migrated[section]) ? [...new Set(migrated[section])] : base[section];
  });
  return migrated;
}

function syncJournalUnlocksFor(targetState) {
  const previousState = state;
  const previousPending = pendingJournalUnlocks;
  state = targetState;
  pendingJournalUnlocks = [];
  syncJournalUnlocks();
  pendingJournalUnlocks = previousPending;
  state = previousState;
}

function migrateInventory(inventory) {
  const migrated = {};
  Object.entries(inventory).forEach(([name, value]) => {
    if (typeof value === "number") {
      migrated[name] = { Common: value, Fine: 0, Premium: 0, Masterpiece: 0 };
      return;
    }
    migrated[name] = {};
    qualities.forEach((quality) => {
      migrated[name][quality] = Number(value?.[quality] || 0);
    });
  });
  return migrated;
}

function migrateResidents(saved) {
  const migrated = createResidentState();
  if (!saved) return migrated;
  residents.forEach((resident) => {
    const value = saved[resident.id];
    if (typeof value === "number") {
      migrated[resident.id] = { friendship: value, met: value > 0 };
      return;
    }
    migrated[resident.id] = {
      friendship: clamp(Number(value?.friendship || 0), 0, 100),
      met: !!value?.met,
    };
  });
  return migrated;
}

function normalizeSavedOrder(order) {
  if (Array.isArray(order.items)) return order;
  return normalizeOrder(order);
}

function storageGet(key) {
  try {
    if (window.localStorage) return window.localStorage.getItem(key);
  } catch {
    return memoryStorage[key] || null;
  }
  return memoryStorage[key] || null;
}

function storageSet(key, value) {
  try {
    if (window.localStorage) {
      window.localStorage.setItem(key, value);
      return;
    }
  } catch {
    memoryStorage[key] = value;
    return;
  }
  memoryStorage[key] = value;
}

function storageRemove(key) {
  try {
    if (window.localStorage) {
      window.localStorage.removeItem(key);
      return;
    }
  } catch {
    delete memoryStorage[key];
    return;
  }
  delete memoryStorage[key];
}

function random(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function shuffle(list) {
  return [...list].sort(() => Math.random() - 0.5);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

init();
