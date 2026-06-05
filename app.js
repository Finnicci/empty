const SAVE_KEY = "bloomhaven-save-v2";

const flowers = [
  f("Daisy", "Common", 7, 1, 2, 3, 4, ["cheerful", "meadow", "simple"], "#fff176"),
  f("Tulip", "Common", 9, 1, 2, 5, 3, ["spring", "cup", "bright"], "#ff6f61"),
  f("Sunflower", "Common", 13, 2, 1, 6, 5, ["sunny", "tall", "seeded"], "#ffc928"),
  f("Lavender", "Common", 11, 2, 6, 3, 6, ["fragrant", "herb", "calming"], "#9b7ad9"),
  f("Marigold", "Common", 10, 2, 3, 4, 5, ["golden", "hardy", "warm"], "#f28f33"),
  f("Zinnia", "Common", 14, 2, 2, 6, 4, ["colorful", "sturdy", "summer"], "#ff5c9a"),
  f("Cosmos", "Common", 13, 2, 2, 5, 5, ["airy", "meadow", "delicate"], "#f799c4"),
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

const eventPool = [
  { name: "Bee Swarm", rarity: "Common", min: 0, duration: 2, note: "A gentle swarm settles near fragrant blooms.", effect: "+15% hybrid success for 2 days.", reward: "pollination" },
  { name: "Weather Forecast", rarity: "Common", min: 0, duration: 1, note: "A cool drizzle is expected overnight.", effect: "Growing flowers rest faster tomorrow.", reward: "growth" },
  { name: "Rare Butterfly", rarity: "Uncommon", min: 5000, duration: 0, note: "A blue butterfly lands on the journal ribbon.", effect: "Unlocks an advanced research clue.", reward: "advanced-note" },
  { name: "Traveling Botanist", rarity: "Rare", min: 8000, duration: 0, note: "A botanist offers a seed from a roadside pouch.", effect: "Adds one uncommon or rare seed.", reward: "seed" },
  { name: "Ancient Journal Page", rarity: "Epic", min: 12000, duration: 0, note: "A loose page names a forgotten pairing.", effect: "Adds a specific hybrid clue.", reward: "specific-note" },
];

const startingSeeds = { Daisy: 4, Tulip: 3, Sunflower: 2, Lavender: 2, Marigold: 2, Rose: 1, Cosmos: 1 };
const plotUpgradeSizes = [12, 16, 20, 24];
const plotUpgradeCosts = [90, 180, 320];
const qualities = ["Common", "Fine", "Premium", "Masterpiece"];
const qualityMultipliers = { Common: 1, Fine: 1.35, Premium: 1.8, Masterpiece: 2.5 };
const strategyOptions = {
  Budget: { label: "Budget Blooms", description: "More simple orders, lower rewards, easier completion." },
  Boutique: { label: "Boutique Florist", description: "More premium orders, higher rewards, quality matters more." },
  Collector: { label: "Collector's Corner", description: "More hybrid and rare flower requests." },
};
const restorationMilestones = [
  { value: 10, title: "Town flower beds cleaned", text: "The first public beds are weeded and ready for color." },
  { value: 25, title: "Clover Cafe rumors", text: "Cafe regulars begin sharing flower pairing gossip." },
  { value: 40, title: "Botanical Society unlocks", text: "The society doors open to promising growers." },
  { value: 60, title: "Town Square market opens", text: "Market stalls return with ribbons and seed crates." },
  { value: 80, title: "Flower festival announced", text: "A festival flyer appears on the square notice board." },
  { value: 100, title: "District 1 restored", text: "Bloomhaven Town Square is blooming again." },
];
const taskDefinitions = [
  { id: "choose-animal", title: "Meet the Farmhand", objective: "Choose an animal character.", reward: { coins: 8 }, complete: () => !!state.species },
  { id: "plant-3", title: "Wake the Beds", objective: "Plant 3 flowers.", reward: { coins: 12, restoration: 2 }, complete: () => state.stats.planted >= 3 },
  { id: "harvest-1", title: "First Bloom", objective: "Harvest your first flower.", reward: { coins: 10, note: true }, complete: () => state.stats.harvested >= 1 },
  { id: "fill-order-1", title: "First Customer", objective: "Fill 1 florist order.", reward: { reputation: 2, restoration: 4 }, complete: () => state.stats.orders >= 1 },
  { id: "log-steps", title: "A Walk Through Town", objective: "Enter today's steps.", reward: { note: true, seed: "Black-Eyed Susan" }, complete: () => state.stats.stepsLogged >= 1 },
  { id: "attempt-hybrid", title: "Try a Cross", objective: "Attempt your first hybrid.", reward: { coins: 15, note: true }, complete: () => state.hybridAttempts >= 1 },
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
    active: "farm",
    plots: Array.from({ length: 12 }, () => null),
    maxPlots: 12,
    seeds: { ...startingSeeds },
    inventory: {},
    discovered: ["Daisy", "Tulip", "Sunflower", "Lavender", "Marigold", "Rose", "Cosmos"],
    notes: [researchNotes[0]],
    events: [],
    orders: [],
    shopStrategy: "Budget",
    strategyChangedDay: 0,
    dailyCoinsEarned: 0,
    stepToday: 0,
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

function init() {
  state = loadState() || createNewState();
  if (!state.orders.length) state.orders = starterOrders();
  render();
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
        <small>Reward: ${rewardText(activeTask.reward)}</small>
      </div>
      <span>${state.completedTasks.length + 1}/${taskDefinitions.length}</span>
    </section>
  `;
}

function renderTopbar() {
  const passive = species[state.species]?.passive || "Choose an animal to begin";
  return `
    <header class="topbar">
      <div class="brand">
        <div class="logo" aria-hidden="true"></div>
        <div>
          <h1>Bloomhaven</h1>
          <small>${state.species || "New farmhand"} - ${passive}</small>
        </div>
      </div>
      <div class="stats">
        <span class="pill">Day ${state.day}</span>
        <span class="pill">${state.phase}</span>
        <span class="pill">${state.coins} coins</span>
        <span class="pill">${state.reputation} rep</span>
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
            </div>
          </div>
          ${renderPlotExpansion()}
          <div class="panel">
            <h2>Today's Walk</h2>
            <p class="tagline">Steps unlock clues, visitors, weather, and better hybrid chances.</p>
            <div class="grid">
              <input id="step-input" aria-label="Today's steps" type="number" min="0" step="100" value="${state.stepToday}" />
              <button data-action="submit-steps">Log Steps</button>
            </div>
          </div>
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
  const label = state.species || "?";
  return `<div class="character species-${state.species || "none"}" title="${label}"></div>`;
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
    return `<button class="plot" data-action="plant-plot" data-index="${index}"><span class="plot-name">Empty Bed</span><span class="plot-meta">Tap to plant</span></button>`;
  }
  const flower = flowerByName.get(plot.name);
  const ready = plot.daysLeft <= 0;
  return `
    <button class="plot ${ready ? "ready" : ""}" data-action="${ready ? "harvest" : "inspect-plot"}" data-index="${index}">
      <span class="plot-name">${plot.name}</span>
      <span class="plot-meta">${ready ? "Ready to harvest" : `${plot.daysLeft} day${plot.daysLeft === 1 ? "" : "s"} left`}</span>
      <span class="pixel-flower" style="--bloom:${flower.color};transform:translateX(-50%) scale(${ready ? 1 : 0.68})"></span>
    </button>
  `;
}

function renderSpeciesPicker() {
  if (state.species) {
    return `
      <div class="panel player-panel">
        <div class="animal-badge portrait-${state.species}"></div>
        <div><h2>${state.species} Farmhand</h2><p class="tagline">${species[state.species].passive}</p></div>
      </div>
    `;
  }
  return `
    <div class="panel">
      <h2>Choose Animal</h2>
      <div class="species-grid">
        ${Object.entries(species).map(([name, data]) => `
          <button class="species-card" data-action="choose-species" data-species="${name}">
            <span class="animal-badge portrait-${name}"></span>
            <strong>${name}</strong>
            <span class="muted">${data.passive}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `;
}

function renderPlotExpansion() {
  const nextSize = nextPlotSize();
  if (!nextSize) {
    return `<div class="panel"><h2>Farm Expansion</h2><p class="tagline">All 24 beds are unlocked.</p></div>`;
  }
  const cost = plotUpgradeCosts[plotUpgradeSizes.indexOf(state.maxPlots)];
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
        <span>${normalized.type}</span>
      </div>
      <p>${normalized.flavor}</p>
      <div class="order-items">
        ${normalized.items.map((item) => `<span>${item.count} ${item.name}<small>${qualityRequirementText(item.minQuality)}</small></span>`).join("")}
      </div>
      <p class="muted">${normalized.coins} coins - ${normalized.rep} reputation</p>
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
  return `
    <section class="screen ${isActive("journal")}" data-screen="journal">
      <div class="panel">
        <h2>Flower Journal</h2>
        <p><strong>Discovered: ${discoveredCount} / ${flowers.length}</strong></p>
        <div class="progress"><span style="width:${(discoveredCount / flowers.length) * 100}%"></span></div>
      </div>
      <div class="panel">
        <h3>Research Notes</h3>
        <div class="event-list">${state.notes.map((note) => `<div class="event-card">${note}</div>`).join("")}</div>
      </div>
      <div class="journal-grid">${flowers.map(renderFlowerCard).join("")}</div>
    </section>
  `;
}

function renderFlowerCard(flower) {
  const known = isDiscovered(flower.name);
  if (!known) {
    return `
      <div class="flower-card unknown">
        <div class="silhouette"></div>
        <strong>Undiscovered</strong>
        <p class="muted">${flower.recipe ? clueFor(flower) : "A seed has not reached your farm yet."}</p>
      </div>
    `;
  }
  return `
    <div class="flower-card">
      <strong>${flower.name}</strong>
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
    const label = key === "pollination" ? "Bee Swarm Lingering" : "Helpful Weather";
    const effect = key === "pollination" ? "+15% hybrid success and better quality odds." : "Flowers grow faster overnight.";
    return `<div class="event-card rarity-Common"><strong>${label}</strong><p>${effect}</p><small>${days} day${days === 1 ? "" : "s"} remaining</small></div>`;
  }).join("");
  return eventCards || effectCards ? eventCards + effectCards : '<p class="muted">Log steps to invite discoveries.</p>';
}

function handleClick(event) {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const { action } = target.dataset;
  if (action === "nav") setActive(target.dataset.target);
  if (action === "new-game") confirmNewGame();
  if (action === "choose-species") chooseSpecies(target.dataset.species);
  if (action === "plant-selected") plantFirstEmpty(document.querySelector("#seed-select")?.value);
  if (action === "plant-plot") plantAt(Number(target.dataset.index), document.querySelector("#seed-select")?.value);
  if (action === "harvest") harvest(Number(target.dataset.index));
  if (action === "inspect-plot") toast("Still growing. End the day to let the garden rest.");
  if (action === "advance-phase") advancePhase();
  if (action === "next-day") nextDay();
  if (action === "submit-steps") submitSteps();
  if (action === "fulfill-order") fulfillOrder(Number(target.dataset.index));
  if (action === "sell-flower") sellFlower(target.dataset.flower, target.dataset.quality);
  if (action === "buy-seed") buySeed(target.dataset.flower);
  if (action === "buy-plots") buyPlots();
  if (action === "switch-strategy") switchStrategy(target.dataset.strategy);
  if (action === "try-hybrid") tryHybrid();
  if (action === "confirm-new-game") newGame();
  if (action === "close-modal") closeModal();
}

function setActive(screen) {
  state.active = screen;
  saveAndRender();
}

function chooseSpecies(name) {
  state.species = name;
  saveAndRender();
  toast(`${name} selected: ${species[name].passive}`);
}

function plantFirstEmpty(name) {
  const index = state.plots.findIndex((plot) => !plot);
  if (index === -1) return toast("All flower beds are full.");
  plantAt(index, name);
}

function plantAt(index, name) {
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
  saveAndRender();
}

function harvest(index) {
  const plot = state.plots[index];
  if (!plot || plot.daysLeft > 0) return;
  const quality = rollQuality(plot.name);
  addInventory(plot.name, quality, 1);
  state.plots[index] = null;
  state.stats.harvested += 1;
  if (qualityRank(quality) >= qualityRank("Fine")) state.stats.fineHarvests += 1;
  state.restoration = clamp(state.restoration + 1, 0, 100);
  saveAndRender();
  toast(`Harvested a ${quality} ${plot.name}.`);
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
  saveAndRender();
  toast(`Day ${state.day}: ${state.weather}. Check your beds and step events.`);
}

function submitSteps() {
  const input = document.querySelector("#step-input");
  const steps = Math.max(0, Number(input?.value || 0));
  state.stepToday = steps;
  state.stats.stepsLogged += 1;
  state.events = generateEvents(steps);
  state.events.forEach(applyEventReward);
  saveAndRender();
  showEventModal(state.events, steps);
}

function generateEvents(steps) {
  const guaranteed = steps >= 12000 ? 3 : steps >= 8000 ? 2 : 1;
  return shuffle(eventPool.filter((event) => steps >= event.min)).slice(0, guaranteed);
}

function applyEventReward(event) {
  if (event.reward === "pollination") {
    state.pollinationBonus = true;
    state.eventEffects.pollination = Math.max(state.eventEffects.pollination || 0, event.duration || 2);
  }
  if (event.reward === "seed") addSeed(random(starters.slice(7, 18)).name, 1);
  if (event.reward === "advanced-note") addNote(5);
  if (event.reward === "specific-note") addSpecificHybridNote();
  if (event.reward === "growth") {
    state.growthBoost = true;
    state.eventEffects.growth = Math.max(state.eventEffects.growth || 0, event.duration || 1);
  }
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
  const chance = hybridChance(match);
  state.pollinationBonus = false;

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
  if (!match) return 0.12 + (state.pollinationBonus ? 0.12 : 0);
  return clamp(0.58 + (state.pollinationBonus ? 0.15 : 0) + (activeEffect("pollination") ? 0.15 : 0) + (species[state.species]?.hybridBonus || 0), 0, 0.92);
}

function hybridChanceText() {
  const bonus = state.pollinationBonus ? "Bee Swarm active: improved odds." : "No pollination event active.";
  const lasting = activeEffect("pollination") ? ` Pollination lasts ${state.eventEffects.pollination} day${state.eventEffects.pollination === 1 ? "" : "s"}.` : "";
  return `${bonus}${lasting} Attempts: ${state.hybridAttempts}.`;
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
  state.orders.splice(index, 1);
  state.stats.orders += 1;
  if (order.type === "Premium" || order.items.some((item) => qualityRank(item.minQuality) >= qualityRank("Premium"))) state.stats.premiumOrders += 1;
  if (state.orders.length < 3) state.orders.push(...makeOrders(2));
  saveAndRender();
  toast(`${order.type} order filled. Reputation and restoration increased.`);
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
  const cost = plotUpgradeCosts[plotUpgradeSizes.indexOf(state.maxPlots)];
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
  return Math.max(6, Math.round(flower.value * 0.65));
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
    <p>Choose an animal, plant seeds, harvest blooms, fill orders, log steps, and try hybrids to restore the town.</p>
  `);
}

function showEventModal(events, steps) {
  const tier = steps >= 12000 ? "Legendary discovery chance" : steps >= 8000 ? "Traveling botanist chance" : steps >= 5000 ? "Rare butterfly chance" : steps >= 2000 ? "Pollination bonus chance" : "Basic rewards";
  openModal("Discovery Walk", `<p><strong>${steps.toLocaleString()} steps:</strong> ${tier}</p>${events.map(renderEvent).join("")}`);
}

function showHybridModal(flower, isNew, quality = "Fine") {
  openModal(isNew ? "New Hybrid Discovered!" : "Hybrid Bloomed Again", `
    <div class="celebration-flower" style="--bloom:${flower.color}"><span class="pixel-flower"></span></div>
    <p><strong>${flower.name}</strong> ${isNew ? "joined your journal" : "bloomed again"}.</p>
    <p><span class="quality-badge quality-${quality}">${quality}</span> <strong>${flower.rarity}</strong> - ${Math.round(flower.value * qualityMultipliers[quality])} coin value - ${flower.traits.join(", ")}</p>
    <p>Parents: ${flower.recipe.join(" + ")}</p>
    <p class="flavor">${hybridFlavor(flower)}</p>
    <p class="muted">Bloomhaven restoration increased. New hybrids point toward stranger pairings.</p>
  `);
}

function openModal(title, body) {
  const modal = document.querySelector("#modal");
  if (!modal) return;
  modal.classList.remove("hidden");
  modal.innerHTML = `<div class="modal-card"><h2>${title}</h2>${body}<button data-action="close-modal">Close</button></div>`;
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
  if (unknown) state.notes.push(unknown);
}

function addSpecificHybridNote() {
  const hidden = hybrids.find((hybrid) => !isDiscovered(hybrid.name));
  if (!hidden) return addNote(0);
  const note = `${hidden.recipe[0]} and ${hidden.recipe[1]} may reveal ${hidden.traits[0]} petals.`;
  if (!state.notes.includes(note)) state.notes.push(note);
}

function addResearchProgress(match, pair) {
  if (match) {
    const note = `${pair[0]} + ${pair[1]} produced unstable pollen. Try again after a step event.`;
    if (!state.notes.includes(note)) state.notes.push(note);
    return;
  }
  addNote(Math.min(state.notes.length, researchNotes.length - 1));
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
  return true;
}

function isDiscovered(name) {
  return state.discovered.includes(name);
}

function clueFor(flower) {
  if (!flower.recipe) return "Unknown seed source.";
  const [a, b] = flower.recipe;
  const traitClue = flower.traits.slice(0, 2).join(" and ");
  return `Clue: ${traitClue} traits may matter. ${state.notes.length > 3 ? `${a} + ${b}?` : "Recipe hidden."}`;
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
  saveState();
  render();
  if (completed) toast("Task complete. Reward added.");
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
    migrated.stats = { ...createNewState().stats, ...(parsed.stats || {}) };
    migrated.eventEffects = { ...(parsed.eventEffects || {}) };
    migrated.completedTasks = parsed.completedTasks || [];
    migrated.shopStrategy = strategyOptions[parsed.shopStrategy] ? parsed.shopStrategy : "Budget";
    migrated.strategyChangedDay = parsed.strategyChangedDay || 0;
    migrated.dailyCoinsEarned = parsed.dailyCoinsEarned || 0;
    migrated.maxPlots = parsed.maxPlots || Math.max(12, parsed.plots?.length || 12);
    while (migrated.plots.length < migrated.maxPlots) migrated.plots.push(null);
    migrated.inventory = migrateInventory(parsed.inventory || {});
    migrated.orders = migrated.orders.map(normalizeSavedOrder);
    return migrated;
  } catch {
    return null;
  }
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
