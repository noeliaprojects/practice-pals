const STORAGE_KEY = "speakingFriendsProgressV11";
const ACTIVITY_KEYS = ["word-bank", "conversation", "match", "missing", "role-play", "reflection"];
const PET_PAGE_SIZE = 24;

// velocidad del audio, 1.00 = normal. si algun dia queda muy rapido bajar a 0.95
const AUDIO_PLAYBACK_RATE = 1.00;

// pausa (ms) entre lineas de audio en Conversation/Missing words/Role-play
// 650 va bien para clase, si veo que los peques necesitan mas tiempo subir a 800-1000
const AUDIO_LINE_PAUSE_MS = 650;

const STARTER_PET = {
  id: "starter-chick",
  emoji: "🐥",
  name: "Chick",
  species: "Chick",
  cost: 0
};

const PET_SPECIES = [
  { id: "cat", emoji: "🐱", name: "Cat", species: "Cat", cost: 2 },
  { id: "dog", emoji: "🐶", name: "Dog", species: "Dog", cost: 2 },
  { id: "rabbit", emoji: "🐰", name: "Rabbit", species: "Rabbit", cost: 2 },
  { id: "hamster", emoji: "🐹", name: "Hamster", species: "Hamster", cost: 2 },
  { id: "mouse", emoji: "🐭", name: "Mouse", species: "Mouse", cost: 2 },
  { id: "fox", emoji: "🦊", name: "Fox", species: "Fox", cost: 3 },
  { id: "panda", emoji: "🐼", name: "Panda", species: "Panda", cost: 3 },
  { id: "koala", emoji: "🐨", name: "Koala", species: "Koala", cost: 3 },
  { id: "frog", emoji: "🐸", name: "Frog", species: "Frog", cost: 3 },
  { id: "penguin", emoji: "🐧", name: "Penguin", species: "Penguin", cost: 3 },
  { id: "owl", emoji: "🦉", name: "Owl", species: "Owl", cost: 4 },
  { id: "turtle", emoji: "🐢", name: "Turtle", species: "Turtle", cost: 4 },
  { id: "duck", emoji: "🦆", name: "Duck", species: "Duck", cost: 4 },
  { id: "seal", emoji: "🦭", name: "Seal", species: "Seal", cost: 4 },
  { id: "otter", emoji: "🦦", name: "Otter", species: "Otter", cost: 4 },
  { id: "hedgehog", emoji: "🦔", name: "Hedgehog", species: "Hedgehog", cost: 4 },
  { id: "bee", emoji: "🐝", name: "Bee", species: "Bee", cost: 4 },
  { id: "ladybug", emoji: "🐞", name: "Ladybug", species: "Ladybug", cost: 4 },
  { id: "snail", emoji: "🐌", name: "Snail", species: "Snail", cost: 4 },
  { id: "lion", emoji: "🦁", name: "Lion", species: "Lion", cost: 5 },
  { id: "tiger", emoji: "🐯", name: "Tiger", species: "Tiger", cost: 5 },
  { id: "monkey", emoji: "🐵", name: "Monkey", species: "Monkey", cost: 5 },
  { id: "elephant", emoji: "🐘", name: "Elephant", species: "Elephant", cost: 5 },
  { id: "giraffe", emoji: "🦒", name: "Giraffe", species: "Giraffe", cost: 5 },
  { id: "zebra", emoji: "🦓", name: "Zebra", species: "Zebra", cost: 5 },
  { id: "raccoon", emoji: "🦝", name: "Raccoon", species: "Raccoon", cost: 5 },
  { id: "sloth", emoji: "🦥", name: "Sloth", species: "Sloth", cost: 5 },
  { id: "bat", emoji: "🦇", name: "Bat", species: "Bat", cost: 5 },
  { id: "parrot", emoji: "🦜", name: "Parrot", species: "Parrot", cost: 5 },
  { id: "butterfly", emoji: "🦋", name: "Butterfly", species: "Butterfly", cost: 5 },
  { id: "crab", emoji: "🦀", name: "Crab", species: "Crab", cost: 5 },
  { id: "kangaroo", emoji: "🦘", name: "Kangaroo", species: "Kangaroo", cost: 5 },
  { id: "llama", emoji: "🦙", name: "Llama", species: "Llama", cost: 5 },
  { id: "deer", emoji: "🦌", name: "Deer", species: "Deer", cost: 5 },
  { id: "horse", emoji: "🐴", name: "Horse", species: "Horse", cost: 5 },
  { id: "cow", emoji: "🐮", name: "Cow", species: "Cow", cost: 5 },
  { id: "pig", emoji: "🐷", name: "Pig", species: "Pig", cost: 5 },
  { id: "sheep", emoji: "🐑", name: "Sheep", species: "Sheep", cost: 5 },
  { id: "goat", emoji: "🐐", name: "Goat", species: "Goat", cost: 5 },
  { id: "chicken", emoji: "🐔", name: "Chicken", species: "Chicken", cost: 5 },
  { id: "eagle", emoji: "🦅", name: "Eagle", species: "Eagle", cost: 6 },
  { id: "swan", emoji: "🦢", name: "Swan", species: "Swan", cost: 6 },
  { id: "flamingo", emoji: "🦩", name: "Flamingo", species: "Flamingo", cost: 6 },
  { id: "peacock", emoji: "🦚", name: "Peacock", species: "Peacock", cost: 6 },
  { id: "whale", emoji: "🐳", name: "Whale", species: "Whale", cost: 6 },
  { id: "dolphin", emoji: "🐬", name: "Dolphin", species: "Dolphin", cost: 6 },
  { id: "octopus", emoji: "🐙", name: "Octopus", species: "Octopus", cost: 6 },
  { id: "jellyfish", emoji: "🪼", name: "Jellyfish", species: "Jellyfish", cost: 6 },
  { id: "squid", emoji: "🦑", name: "Squid", species: "Squid", cost: 6 },
  { id: "fish", emoji: "🐟", name: "Fish", species: "Fish", cost: 6 },
  { id: "tropical-fish", emoji: "🐠", name: "Tropical Fish", species: "Tropical Fish", cost: 6 },
  { id: "blowfish", emoji: "🐡", name: "Blowfish", species: "Blowfish", cost: 6 },
  { id: "shark", emoji: "🦈", name: "Shark", species: "Shark", cost: 6 },
  { id: "lobster", emoji: "🦞", name: "Lobster", species: "Lobster", cost: 6 },
  { id: "shrimp", emoji: "🦐", name: "Shrimp", species: "Shrimp", cost: 6 },
  { id: "oyster", emoji: "🦪", name: "Oyster", species: "Oyster", cost: 6 },
  { id: "crocodile", emoji: "🐊", name: "Crocodile", species: "Crocodile", cost: 7 },
  { id: "snake", emoji: "🐍", name: "Snake", species: "Snake", cost: 7 },
  { id: "lizard", emoji: "🦎", name: "Lizard", species: "Lizard", cost: 7 },
  { id: "gorilla", emoji: "🦍", name: "Gorilla", species: "Gorilla", cost: 7 },
  { id: "orangutan", emoji: "🦧", name: "Orangutan", species: "Orangutan", cost: 7 },
  { id: "leopard", emoji: "🐆", name: "Leopard", species: "Leopard", cost: 7 },
  { id: "rhinoceros", emoji: "🦏", name: "Rhinoceros", species: "Rhinoceros", cost: 7 },
  { id: "hippopotamus", emoji: "🦛", name: "Hippopotamus", species: "Hippopotamus", cost: 7 },
  { id: "bison", emoji: "🦬", name: "Bison", species: "Bison", cost: 7 },
  { id: "camel", emoji: "🐪", name: "Camel", species: "Camel", cost: 7 },
  { id: "wolf", emoji: "🐺", name: "Wolf", species: "Wolf", cost: 7 },
  { id: "bear", emoji: "🐻", name: "Bear", species: "Bear", cost: 7 },
  { id: "polar-bear", emoji: "🐻‍❄️", name: "Polar Bear", species: "Polar Bear", cost: 8 },
  { id: "dragon", emoji: "🐲", name: "Dragon", species: "Dragon", cost: 8 },
  { id: "unicorn", emoji: "🦄", name: "Unicorn", species: "Unicorn", cost: 8 },
  { id: "dinosaur", emoji: "🦖", name: "Dinosaur", species: "Dinosaur", cost: 8 },
  { id: "long-neck-dino", emoji: "🦕", name: "Long-neck Dino", species: "Long-neck Dino", cost: 8 }
];

const PET_STYLES = [
  { id: "tiny", label: "Tiny", cost: 1 },
  { id: "sleepy", label: "Sleepy", cost: 1 },
  { id: "happy", label: "Happy", cost: 1 },
  { id: "fluffy", label: "Fluffy", cost: 2 },
  { id: "sparkly", label: "Sparkly", cost: 2 },
  { id: "rainbow", label: "Rainbow", cost: 3 },
  { id: "cloud", label: "Cloud", cost: 3 },
  { id: "star", label: "Star", cost: 3 },
  { id: "moon", label: "Moon", cost: 3 },
  { id: "candy", label: "Candy", cost: 4 },
  { id: "forest", label: "Forest", cost: 4 },
  { id: "ocean", label: "Ocean", cost: 4 },
  { id: "winter", label: "Winter", cost: 4 },
  { id: "summer", label: "Summer", cost: 4 },
  { id: "royal", label: "Royal", cost: 5 },
  { id: "magic", label: "Magic", cost: 5 },
  { id: "cosmic", label: "Cosmic", cost: 6 },
  { id: "golden", label: "Golden", cost: 6 },
  { id: "crystal", label: "Crystal", cost: 7 },
  { id: "legendary", label: "Legendary", cost: 8 }
];

const PET_CATALOG = [
  STARTER_PET,
  ...PET_SPECIES
];


const SIMON_ACTIONS = [
  { id: "jump", label: "jump", emoji: "🦘", petText: "jumps!" },
  { id: "run", label: "run", emoji: "🏃", petText: "runs!" },
  { id: "walk", label: "walk", emoji: "🚶", petText: "walks!" },
  { id: "hop", label: "hop", emoji: "🐇", petText: "hops!" },
  { id: "dance", label: "dance", emoji: "🎵", petText: "dances!" },
  { id: "sleep", label: "sleep", emoji: "💤", petText: "goes to sleep." },
  { id: "eat", label: "eat", emoji: "🍎", petText: "eats a snack." },
  { id: "drink", label: "drink", emoji: "💧", petText: "drinks water." },
  { id: "clap", label: "clap", emoji: "👏", petText: "claps!" },
  { id: "wave", label: "wave", emoji: "👋", petText: "waves!" },
  { id: "sit-down", label: "sit down", emoji: "🪑", petText: "sits down." },
  { id: "stand-up", label: "stand up", emoji: "🙋", petText: "stands up." },
  { id: "turn-around", label: "turn around", emoji: "🔄", petText: "turns around." },
  { id: "swim", label: "swim", emoji: "🏊", petText: "swims!" },
  { id: "fly", label: "fly", emoji: "🪽", petText: "flies!" },
  { id: "sing", label: "sing", emoji: "🎤", petText: "sings!" },
  { id: "read", label: "read", emoji: "📖", petText: "reads a book." },
  { id: "write", label: "write", emoji: "✏️", petText: "writes!" },
  { id: "draw", label: "draw", emoji: "🎨", petText: "draws!" },
  { id: "smile", label: "smile", emoji: "😊", petText: "smiles!" },
  { id: "laugh", label: "laugh", emoji: "😂", petText: "laughs!" },
  { id: "cry", label: "cry", emoji: "💧", petText: "cries softly." },
  { id: "look", label: "look", emoji: "👀", petText: "looks carefully." },
  { id: "listen", label: "listen", emoji: "👂", petText: "listens." },
  { id: "stop", label: "stop", emoji: "✋", petText: "stops." },
  { id: "open", label: "open", emoji: "📂", petText: "opens it." },
  { id: "close", label: "close", emoji: "📕", petText: "closes it." },
  { id: "wash", label: "wash", emoji: "🧼", petText: "washes." },
  { id: "brush", label: "brush", emoji: "🪥", petText: "brushes." },
  { id: "cook", label: "cook", emoji: "🍳", petText: "cooks!" },
  { id: "kick", label: "kick", emoji: "⚽", petText: "kicks!" },
  { id: "catch", label: "catch", emoji: "🧤", petText: "catches it!" },
  { id: "throw", label: "throw", emoji: "🎾", petText: "throws it!" },
  { id: "stretch", label: "stretch", emoji: "🧘", petText: "stretches!" }
];

const SIMON_TARGET_SCORE = 5;

// iconos para las tarjetas de situations y el menu de actividades. 
// uso Tabler Icons (licencia MIT, de Paweł Kuna) - 
// dejo el link de cada icono

const UI_ICONS = {
  // https://tabler.io/icons/icon/stethoscope
  doctor: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h-1a2 2 0 0 0 -2 2v3.5a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1"/><path d="M8 15a6 6 0 1 0 12 0v-3"/><path d="M11 3v2"/><path d="M6 3v2"/><path d="M18 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/></svg>`,
  // https://tabler.io/icons/icon/tools-kitchen-2
  canteen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12m0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3"/></svg>`,
  // https://tabler.io/icons/icon/table
  table: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14"/><path d="M3 10h18"/><path d="M10 3v18"/></svg>`,
  // https://tabler.io/icons/icon/chef-hat
  cooking: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c1.918 0 3.52 1.35 3.91 3.151a4 4 0 0 1 2.09 7.723l0 7.126h-12v-7.126a4 4 0 1 1 2.092 -7.723a4 4 0 0 1 3.908 -3.151"/><path d="M6.161 17.009l11.839 -.009"/></svg>`,
  // https://tabler.io/icons/icon/paw
  animals: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 13.5c-1.1 -2 -1.441 -2.5 -2.7 -2.5c-1.259 0 -1.736 .755 -2.836 2.747c-.942 1.703 -2.846 1.845 -3.321 3.291c-.097 .265 -.145 .677 -.143 .962c0 1.176 .787 2 1.8 2c1.259 0 3 -1 4.5 -1s3.241 1 4.5 1c1.013 0 1.8 -.823 1.8 -2c0 -.285 -.049 -.697 -.146 -.962c-.475 -1.451 -2.512 -1.835 -3.454 -3.538"/><path d="M20.188 8.082a1.039 1.039 0 0 0 -.406 -.082h-.015c-.735 .012 -1.56 .75 -1.993 1.866c-.519 1.335 -.28 2.7 .538 3.052c.129 .055 .267 .082 .406 .082c.739 0 1.575 -.742 2.011 -1.866c.516 -1.335 .273 -2.7 -.54 -3.052l-.001 0"/><path d="M9.474 9c.055 0 .109 0 .163 -.011c.944 -.128 1.533 -1.346 1.32 -2.722c-.203 -1.297 -1.047 -2.267 -1.932 -2.267c-.055 0 -.109 0 -.163 .011c-.944 .128 -1.533 1.346 -1.32 2.722c.204 1.293 1.048 2.267 1.933 2.267"/><path d="M16.456 6.733c.214 -1.376 -.375 -2.594 -1.32 -2.722a1.164 1.164 0 0 0 -.162 -.011c-.885 0 -1.728 .97 -1.93 2.267c-.214 1.376 .375 2.594 1.32 2.722c.054 .007 .108 .011 .162 .011c.885 0 1.73 -.974 1.93 -2.267"/><path d="M5.69 12.918c.816 -.352 1.054 -1.719 .536 -3.052c-.436 -1.124 -1.271 -1.866 -2.009 -1.866c-.14 0 -.277 .027 -.407 .082c-.816 .352 -1.054 1.719 -.536 3.052c.436 1.124 1.271 1.866 2.009 1.866c.14 0 .277 -.027 .407 -.082"/></svg>`,
  // https://tabler.io/icons/icon/compass
  directions: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 16l2 -6l6 -2l-2 6l-6 2"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 3l0 2"/><path d="M12 19l0 2"/><path d="M3 12l2 0"/><path d="M19 12l2 0"/></svg>`,
  // https://tabler.io/icons/icon/beach
  holiday: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0"/><path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196"/><path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196"/><path d="M15 9l-3 5.196"/><path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25"/></svg>`,
  // https://tabler.io/icons/icon/backpack
  "school-help": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 18v-6a6 6 0 0 1 6 -6h2a6 6 0 0 1 6 6v6a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3"/><path d="M10 6v-1a2 2 0 1 1 4 0v1"/><path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"/><path d="M11 10h2"/></svg>`,

  // https://tabler.io/icons/icon/photo
  "word-bank": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 8h.01"/><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"/></svg>`,
  // https://tabler.io/icons/icon/message-circle
  conversation: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1"/></svg>`,
  // https://tabler.io/icons/icon/puzzle
  match: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"/></svg>`,
  // https://tabler.io/icons/icon/pencil
  missing: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/></svg>`,
  // https://tabler.io/icons/icon/arrows-exchange
  "role-play": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10h14l-4 -4"/><path d="M17 14h-14l4 4"/></svg>`,
  // https://tabler.io/icons/icon/trophy
  "optional-challenge": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21l8 0"/><path d="M12 17l0 4"/><path d="M7 4l10 0"/><path d="M17 4v8a5 5 0 0 1 -10 0v-8"/><path d="M3 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M17 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/></svg>`,
  // https://tabler.io/icons/icon/notebook
  reflection: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18"/><path d="M13 8l2 0"/><path d="M13 12l2 0"/></svg>`,

  // https://tabler.io/icons/icon/microphone-2
  logo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 12.9a5 5 0 1 0 -3.902 -3.9"/><path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515"/></svg>`,
  // https://tabler.io/icons/icon/star (filled style)
  star: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"/></svg>`,
  // https://tabler.io/icons/icon/check
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10"/></svg>`,
  // https://tabler.io/icons/icon/lock
  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6"/><path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/><path d="M8 11v-4a4 4 0 1 1 8 0v4"/></svg>`
};

function uiIcon(key, fallbackEmoji) {
  return UI_ICONS[key] || fallbackEmoji || "";
}

const app = document.querySelector("#app");

let progress = loadProgress();
let matchGame = null;
let missingGame = null;
let wordBankGame = null;
let conversationState = {};
let lastRenderedRoute = null;
let rolePlayState = {};
let optionalChallengeState = {};
let speechToken = 0;
let activeAudio = null;
let activeAudioTimer = null;
let audioManifest = null;
let availableSpeechVoices = [];
let petShopPage = 0;
let simonGame = null;

let recordingState = {
  mediaRecorder: null,
  chunks: [],
  stream: null,
  maxTimer: null,
  countdownTimer: null
};

// progress y estrellas (guardado con localStorage) 
// recupera lo guardado la ultima vez, o empieza de 0 si no hay nada
// (localStorage docs: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
//https://blog.logrocket.com/storing-retrieving-javascript-objects-localstorage/
function loadProgress() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return normalizeProgress({ completedActivities: {} });
  }

  try {
    return normalizeProgress(JSON.parse(saved));
  } catch {
    return normalizeProgress({ completedActivities: {} });
  }
}

function normalizeProgress(data) {
  if (!data.completedActivities) {
    data.completedActivities = {};
  }

  if (!data.reflections) {
    data.reflections = {};
  }

  if (!data.finalReflection) {
    data.finalReflection = {};
  }

  if (!data.shop) {
    data.shop = {};
  }

  if (typeof data.bonusStars !== "number") {
    data.bonusStars = 0;
  }

  if (!Array.isArray(data.shop.ownedPets)) {
    data.shop.ownedPets = [
      {
        catalogId: STARTER_PET.id,
        customName: "Buddy"
      }
    ];
  }

  if (!data.shop.activePetId) {
    data.shop.activePetId = data.shop.ownedPets[0]?.catalogId || STARTER_PET.id;
  }

  if (typeof data.shop.spentStars !== "number") {
    data.shop.spentStars = 0;
  }

  if (!data.shop.simonRewards) {
    data.shop.simonRewards = {};
  }

  return data;
}

// guarda el progreso en localStorage cada vez que cambia algo
function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function completedActivities(id) {
  return progress.completedActivities[id] || [];
}

function isActivityCompleted(id, activity) {
  return completedActivities(id).includes(activity);
}

function completeActivity(id, activity) {
  if (!progress.completedActivities[id]) {
    progress.completedActivities[id] = [];
  }

  if (!progress.completedActivities[id].includes(activity)) {
    progress.completedActivities[id].push(activity);
    saveProgress();
    updateStarPill();
    return true;
  }

  return false;
}

function earnedStars() {
  const activityStars = Object.values(progress.completedActivities)
    .reduce((total, activities) => total + activities.length, 0);

  return activityStars + (progress.bonusStars || 0);
}

function spentStars() {
  return progress.shop?.spentStars || 0;
}

function availableStars() {
  return Math.max(0, earnedStars() - spentStars());
}


function situationProgress(id) {
  const count = ACTIVITY_KEYS.filter(key => isActivityCompleted(id, key)).length;
  return { count, total: ACTIVITY_KEYS.length };
}

function updateStarPill() {
  const pill = document.querySelector("#starPill");
  if (pill) pill.innerHTML = `${uiIcon("star")} ${availableStars()}`;
}



function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


// audio: reproducir las conversaciones grabadas, con speech-synthesis de backup 
// audio-map.json le dice a la app que archivo grabado va con cada linea de dialogo
async function loadAudioManifest() {
  try {
    const response = await fetch("audio/audio-map.json", { cache: "no-cache" });

    if (!response.ok) {
      audioManifest = null;
      return;
    }

    audioManifest = await response.json();
  } catch {
    audioManifest = null;
  }
}

loadAudioManifest();

function normaliseAudioText(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[.,!?;:]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function audioKeyForLine(situation, line) {
  return `${situation.id}|${line.role}|${normaliseAudioText(line.text)}`;
}

function audioSourceForLine(situation, line) {
  if (!audioManifest) return null;

  return audioManifest[audioKeyForLine(situation, line)] || null;
}

function clearActiveAudio() {
  clearTimeout(activeAudioTimer);
  activeAudioTimer = null;

  if (activeAudio) {
    try {
      activeAudio.pause();
      activeAudio.currentTime = 0;
      activeAudio.src = "";
      activeAudio.load();
    } catch {}

    activeAudio = null;
  }
}

// si no hay audio grabado para esta linea, lo lee en voz alta con el
// text-to-speech del navegador (Web Speech API / SpeechSynthesis)
// (https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
function fallbackSpeechLine(situation, line, token, onEnd) {
  const silentPause = () => {
    activeAudioTimer = setTimeout(onEnd, Math.min(5200, Math.max(1800, line.text.length * 90)));
  };

  if (!("speechSynthesis" in window)) {
    silentPause();
    return;
  }

  // si el dispositivo no tiene ninguna voz de ingles de verdad, mejor lo silencio
  // que leerlo con la voz default del sistema
  // queda horrible la voz en castellano leyendo en ingles, HORRIBLE
  if (!bestEnglishVoice(line.role)) {
    silentPause();
    return;
  }

  const voice = roleVoice(situation, line.role);
  const utterance = new SpeechSynthesisUtterance(line.text);

  applyBestVoice(utterance, line.role);
  utterance.rate = voice.rate;
  utterance.pitch = voice.pitch;
  utterance.onend = () => {
    if (token !== speechToken) return;
    activeAudioTimer = setTimeout(onEnd, AUDIO_LINE_PAUSE_MS);
  };

  window.speechSynthesis.speak(utterance);
}

function playAudioOrFallback(situation, line, token, onEnd) {
  const source = audioSourceForLine(situation, line);

  if (!source) {
    // no hay archivo grabado para esta linea (sin conexion o aun sin subir):
    // uso el text-to-speech del movil en vez de dejarlo en silencio
    fallbackSpeechLine(situation, line, token, onEnd);
    return;
  }

  const audio = new Audio(source);
  audio.playbackRate = AUDIO_PLAYBACK_RATE;

  // mantener el pitch original 
  if ("preservesPitch" in audio) audio.preservesPitch = true;
  if ("mozPreservesPitch" in audio) audio.mozPreservesPitch = true;
  if ("webkitPreservesPitch" in audio) audio.webkitPreservesPitch = true;

  activeAudio = audio;

  audio.onended = () => {
    if (token !== speechToken) return;
    activeAudio = null;
    activeAudioTimer = setTimeout(onEnd, AUDIO_LINE_PAUSE_MS);
  };

  audio.onerror = () => {
    // el audio esta en el manifest pero no ha cargado bien
    // (sin conexion, archivo perdido, va lento...) asi que uso speech igualmente
    if (token !== speechToken) return;
    activeAudio = null;
    fallbackSpeechLine(situation, line, token, onEnd);
  };

  audio.play().catch(() => {
    if (token !== speechToken) return;
    activeAudio = null;
    fallbackSpeechLine(situation, line, token, onEnd);
  });
}

function speakSituationLine(situation, line) {
  stopSpeech();

  const token = speechToken;
  playAudioOrFallback(situation, line, token, () => {});
}

function stopSpeech() {
  speechToken += 1;
  clearActiveAudio();

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function roleVoice(situation, role) {
  const defaults = {
    doctor: { pitch: 0.82, rate: 0.82 },
    patient: { pitch: 1.18, rate: 0.88 }
  };

  return situation.voiceProfiles?.[role] || defaults[role] || { pitch: 1, rate: 0.86 };
}


// getVoices() a veces devuelve vacio la primera vez (las voces cargan async
// en segundo plano), asi que tb escucho "voiceschanged" y refresco cuando ya estan
// (https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/voiceschanged_event)
function refreshSpeechVoices() {
  if (!("speechSynthesis" in window)) return;

  availableSpeechVoices = window.speechSynthesis.getVoices() || [];
}

if ("speechSynthesis" in window) {
  refreshSpeechVoices();
  window.speechSynthesis.onvoiceschanged = refreshSpeechVoices;
}

function voiceScore(voice, role = "") {
  const name = `${voice.name || ""} ${voice.voiceURI || ""}`.toLowerCase();
  const lang = (voice.lang || "").toLowerCase();

  let score = 0;

  if (lang.startsWith("en-gb")) score += 120;
  else if (lang.startsWith("en-us")) score += 95;
  else if (lang.startsWith("en-au") || lang.startsWith("en-ca") || lang.startsWith("en-ie")) score += 80;
  else if (lang.startsWith("en")) score += 60;
  else score -= 200;

  if (name.includes("natural")) score += 160;
  if (name.includes("online")) score += 130;
  if (name.includes("premium")) score += 100;
  if (name.includes("neural")) score += 100;

  if (name.includes("microsoft")) score += 80;
  if (name.includes("sonia")) score += 80;
  if (name.includes("libby")) score += 70;
  if (name.includes("ryan")) score += 70;
  if (name.includes("aria")) score += 60;
  if (name.includes("jenny")) score += 60;
  if (name.includes("guy")) score += 50;

  if (name.includes("google")) score += 45;
  if (name.includes("uk english")) score += 35;
  if (name.includes("us english")) score += 25;

  if (name.includes("default")) score -= 10;

  const lowerRole = String(role || "").toLowerCase();

  if (["doctor", "teacher", "assistant", "helper", "person_a", "friend_a"].includes(lowerRole)) {
    if (name.includes("sonia") || name.includes("libby") || name.includes("aria") || name.includes("jenny")) {
      score += 20;
    }
  }

  if (["patient", "student", "visitor", "person_b", "friend_b"].includes(lowerRole)) {
    if (name.includes("ryan") || name.includes("guy")) {
      score += 20;
    }
  }

  return score;
}

function bestEnglishVoice(role = "") {
  refreshSpeechVoices();

  const englishVoices = availableSpeechVoices.filter(voice =>
    String(voice.lang || "").toLowerCase().startsWith("en")
  );

  if (!englishVoices.length) return null;

  return englishVoices
    .slice()
    .sort((a, b) => voiceScore(b, role) - voiceScore(a, role))[0];
}


function applyBestVoice(utterance, role = "") {
  const voice = bestEnglishVoice(role);

  if (voice) {
    utterance.voice = voice;
    utterance.lang = voice.lang || "en-GB";
  } else {
    utterance.lang = "en-GB";
  }
}


function speakText(text, rate = 0.86, pitch = 1) {
  if (!("speechSynthesis" in window)) return;
  if (!bestEnglishVoice()) return; // sin voz de ingles real, mejor que no diga nada

  stopSpeech();
  const token = speechToken;

  setTimeout(() => {
    if (token !== speechToken) return;

    const utterance = new SpeechSynthesisUtterance(text);
    applyBestVoice(utterance);
    utterance.rate = rate;
    utterance.pitch = pitch;

    window.speechSynthesis.speak(utterance);
  }, 80);
}

function speakConversationLines(situation, studentRole = null, lines = situation.conversation, callbacks = {}) {
  stopSpeech();

  const token = speechToken;

  function next(index) {
    if (token !== speechToken || index >= lines.length) {
      callbacks.onEnd?.();
      return;
    }

    const line = lines[index];
    const isStudentLine = studentRole && line.role === studentRole;

    callbacks.onLine?.(index, line, isStudentLine);

    if (isStudentLine) {
      const pause = Math.min(5200, Math.max(2600, line.text.length * 120));
      activeAudioTimer = setTimeout(() => next(index + 1), pause);
      return;
    }

    playAudioOrFallback(situation, line, token, () => next(index + 1));
  }

  next(0);
}

function stopActiveRecording() {
  clearTimeout(recordingState.maxTimer);
  clearInterval(recordingState.countdownTimer);

  if (recordingState.mediaRecorder && recordingState.mediaRecorder.state === "recording") {
    recordingState.mediaRecorder.stop();
  }

  if (recordingState.stream) {
    recordingState.stream.getTracks().forEach(track => track.stop());
    recordingState.stream = null;
  }
}

//  Router simple: el hash de la URL decide que pantalla se ve 
function goTo(route) {
  stopSpeech();
  window.location.hash = route;
}

function getRoute() {
  return window.location.hash.replace("#", "") || "/";
}

function getCurrentSituation() {
  const route = getRoute();
  lastRenderedRoute = route;
  const situationId = route.split("/").filter(Boolean)[0];
  return situations.find(item => item.id === situationId);
}

function getConversationLines(situation) {
  // el camino principal usa una sola conversacion modelo fija
  // asi el audio grabado, Conversation, Missing words y Role-play van todos a la par
  return Array.isArray(situation?.conversation) ? situation.conversation : [];
}

function lineSideClass(situation, line) {
  const roles = [];

  situation.conversation.forEach(item => {
    if (!roles.includes(item.role)) roles.push(item.role);
  });

  return line.role === roles[0] ? "left-side" : "right-side";
}

function activityRoute(activity, situationId) {
  return `/${situationId}/${activity === "word-bank" ? "word-bank" : activity}`;
}

function openSituation(situationId) {
  const status = situationProgress(situationId);

  if (status.count === status.total) {
    goTo(`/${situationId}/menu`);
    return;
  }

  const next = ACTIVITY_KEYS.find(activity => !isActivityCompleted(situationId, activity));
  goTo(activityRoute(next || "word-bank", situationId));
}

// VIRTUAL PETS: comprar, poner nombre, elegir cual esta activa 
function catalogPet(id) {
  return PET_CATALOG.find(pet => pet.id === id) || STARTER_PET;
}

function ownedPet(id) {
  return progress.shop.ownedPets.find(pet => pet.catalogId === id);
}

function activePetInfo() {
  const owned = ownedPet(progress.shop.activePetId) || progress.shop.ownedPets[0];
  const pet = catalogPet(owned.catalogId);

  return {
    ...pet,
    customName: owned.customName || pet.species || pet.name
  };
}

function petReactionText(earned) {
  const pet = activePetInfo();
  return earned ? `${pet.customName} is super happy!` : `${pet.customName} loves practising with you!`;
}

function petStyleKey(pet) {
  if (pet.id === STARTER_PET.id) return "starter";

  let hash = 0;

  for (let i = 0; i < pet.id.length; i++) {
    hash = pet.id.charCodeAt(i) + ((hash << 5) - hash);
  }

  const index = Math.abs(hash) % PET_STYLES.length;
  return PET_STYLES[index].id;
}

function petPalette(styleKey) {
  const palettes = {
    starter:   { body: "#FFD96B", inner: "#FFEAA6", accent: "#FFB84C", cheek: "#FFB3C7" },
    tiny:      { body: "#FFD7E8", inner: "#FFF1F7", accent: "#FF96B7", cheek: "#FFB8CC" },
    sleepy:    { body: "#D8D9FF", inner: "#F1F2FF", accent: "#9EA7FF", cheek: "#C5C9FF" },
    happy:     { body: "#FFE08A", inner: "#FFF1BE", accent: "#FFB84C", cheek: "#FFB3C7" },
    fluffy:    { body: "#F4E6FF", inner: "#FCF7FF", accent: "#C48DFF", cheek: "#E7C9FF" },
    sparkly:   { body: "#D9FFF5", inner: "#F3FFFB", accent: "#5ED6BE", cheek: "#AFEEDC" },
    rainbow:   { body: "#FFDDE1", inner: "#FFF5F6", accent: "#7C8CF8", cheek: "#FFC2D3" },
    cloud:     { body: "#E8F1FF", inner: "#FFFFFF", accent: "#8BC5FF", cheek: "#C6E2FF" },
    star:      { body: "#FFF0A8", inner: "#FFF7D1", accent: "#F7BE2C", cheek: "#FFD89A" },
    moon:      { body: "#DDE2FF", inner: "#F4F6FF", accent: "#8894F7", cheek: "#C8D0FF" },
    candy:     { body: "#FFD6F2", inner: "#FFF0FA", accent: "#FF7BC3", cheek: "#FFC2E8" },
    forest:    { body: "#D7F1D8", inner: "#F3FFF3", accent: "#70C173", cheek: "#B7E6B9" },
    ocean:     { body: "#D6F2FF", inner: "#F2FCFF", accent: "#58BFD5", cheek: "#BFE9F7" },
    winter:    { body: "#EAF6FF", inner: "#FFFFFF", accent: "#8EC5FF", cheek: "#D5EEFF" },
    summer:    { body: "#FFE7B8", inner: "#FFF5DA", accent: "#FFB84C", cheek: "#FFD8A0" },
    royal:     { body: "#E3D7FF", inner: "#F6F0FF", accent: "#9A6BFF", cheek: "#D0B8FF" },
    magic:     { body: "#EAD8FF", inner: "#FBF4FF", accent: "#B07CFF", cheek: "#E3CCFF" },
    cosmic:    { body: "#1F2446", inner: "#30376B", accent: "#7C8CF8", cheek: "#6575D6" },
    golden:    { body: "#FFD66E", inner: "#FFF0B8", accent: "#E6A900", cheek: "#F6C85D" },
    crystal:   { body: "#D8FBFF", inner: "#F6FEFF", accent: "#74D7E8", cheek: "#BDF4FC" },
    legendary: { body: "#FFE2A8", inner: "#FFF4D6", accent: "#FF8A5B", cheek: "#FFD1AB" }
  };

  return palettes[styleKey] || palettes.happy;
}

function renderPetArt(pet, size = "card") {
  const styleKey = petStyleKey(pet);
  const palette = petPalette(styleKey);

  return `
    <div class="pet-art pet-art-${size}">
      <div class="pet-sticker" style="
        --pet-bg: ${palette.body};
        --pet-inner: ${palette.inner};
        --pet-accent: ${palette.accent};
        --pet-cheek: ${palette.cheek};
      ">
        <div class="pet-sticker-glow"></div>
        <div class="pet-sticker-emoji">${pet.emoji}</div>
      </div>
    </div>
  `;
}

function showPetNameModal(petId, mode = "buy") {
  const pet = catalogPet(petId);
  const existing = ownedPet(petId);

  document.querySelectorAll(".pet-modal-overlay").forEach(item => item.remove());

  const overlay = document.createElement("div");
  overlay.className = "pet-modal-overlay";

  overlay.innerHTML = `
    <div class="pet-modal-card">
      <button class="pet-modal-close" aria-label="Close">×</button>

      <div class="pet-modal-art">
        ${renderPetArt(pet, "modal")}
      </div>

      <h3>${mode === "buy" ? "Name your new pet" : "Rename your pet"}</h3>
      <p>${escapeHtml(pet.name)}</p>

      <input
        id="petNameInput"
        class="pet-modal-input"
        type="text"
        value="${escapeHtml(existing?.customName || pet.species || pet.name)}"
        placeholder="Type a name"
        maxlength="24"
      />

      <div class="pet-modal-actions">
        <button class="secondary-btn" data-action="cancel">Cancel</button>
        <button class="primary-btn" data-action="save">${mode === "buy" ? "Unlock pet" : "Save name"}</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const input = overlay.querySelector("#petNameInput");
  const closeModal = () => overlay.remove();

  overlay.querySelector(".pet-modal-close").addEventListener("click", closeModal);
  overlay.querySelector('[data-action="cancel"]').addEventListener("click", closeModal);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal();
  });

  overlay.querySelector('[data-action="save"]').addEventListener("click", () => {
    const customName = input.value.trim() || pet.species || pet.name;

    if (mode === "buy") {
      if (!ownedPet(petId)) {
        if (availableStars() < pet.cost) {
          alert(`You need ${pet.cost} stars to unlock this pet.`);
          return;
        }

        progress.shop.ownedPets.push({
          catalogId: pet.id,
          customName
        });

        progress.shop.activePetId = pet.id;
        progress.shop.spentStars += pet.cost;
      } else {
        const owned = ownedPet(petId);
        owned.customName = customName;
        progress.shop.activePetId = pet.id;
      }
    } else {
      const owned = ownedPet(petId);
      if (owned) owned.customName = customName;
    }

    saveProgress();
    closeModal();
    renderPetShop();
  });

  setTimeout(() => {
    input.focus();
    input.select();
  }, 50);
}

function buyPet(petId) {
  const pet = catalogPet(petId);

  if (ownedPet(petId)) {
    setActivePet(petId);
    return;
  }

  if (availableStars() < pet.cost) {
    alert(`You need ${pet.cost} stars to unlock this pet.`);
    return;
  }

  showPetNameModal(petId, "buy");
}

function setActivePet(petId) {
  if (!ownedPet(petId)) return;
  progress.shop.activePetId = petId;
  saveProgress();
  renderPetShop();
}

function renamePet(petId) {
  if (!ownedPet(petId)) return;
  showPetNameModal(petId, "rename");
}

function nextPetPage() {
  const maxPage = Math.ceil(PET_CATALOG.length / PET_PAGE_SIZE) - 1;
  petShopPage = Math.min(maxPage, petShopPage + 1);
  renderPetShop();
}

function previousPetPage() {
  petShopPage = Math.max(0, petShopPage - 1);
  renderPetShop();
}

//cuando se completa una actividad: dar la estrella, mostrar el popup 
function finishActivity(situationId, activity, nextRoute, replayRoute) {
  stopSpeech();

  const situation = situations.find(item => item.id === situationId);
  if (!situation) return;

  const earned = completeActivity(situationId, activity);

  showStarPopup({
    situation,
    activity,
    earned,
    nextRoute,
    replayRoute
  });
}


function finishRolePlayAndGoReflection(situationId) {
  stopSpeech();
  stopActiveRecording();

  const situation = situations.find(item => item.id === situationId);
  if (!situation) return;

  completeActivity(situationId, "role-play");
  saveProgress();
  updateStarPill();

  goTo(`/${situationId}/reflection`);
}

function showStarPopup({ situation, activity, earned, nextRoute, replayRoute }) {
  document.querySelectorAll(".star-overlay").forEach(item => item.remove());

  const pet = activePetInfo();
  const overlay = document.createElement("div");
  overlay.className = "star-overlay";

  overlay.innerHTML = `
    <div class="star-pop">
      <div class="big-star">${uiIcon("star")}</div>

      <h2>${earned ? "Congratulations!" : "Great practice!"}</h2>

      <p class="star-popup-main">
        ${earned ? "You have earned a star!" : "You already have this star."}
      </p>

      <div class="star-pet-reaction">
        ${renderPetArt(pet, "popup")}
        <strong>${escapeHtml(petReactionText(earned))}</strong>
      </div>

      <p class="star-popup-sub">
        ${earned ? "Amazing work. Keep going!" : "You can practise again or continue."}
      </p>

      <div class="star-popup-actions">
        <button class="secondary-btn" data-action="again">Play again</button>
        <button class="primary-btn" data-action="continue">
          ${nextRoute === "/" ? "Back home" : "Continue"}
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  overlay.querySelector('[data-action="again"]').addEventListener("click", () => {
    overlay.remove();
    replayActivity(situation.id, activity, replayRoute);
  });

  overlay.querySelector('[data-action="continue"]').addEventListener("click", () => {
    overlay.remove();
    goTo(nextRoute);
  });
}

function replayActivity(situationId, activity, route) {
  stopSpeech();

  if (activity === "word-bank") {
    wordBankGame = { situationId, viewed: [] };
  }

  if (activity === "conversation") {
    conversationState[situationId] = false;
  }

  if (activity === "match") {
    matchGame = null;
  }

  if (activity === "missing") {
    missingGame = null;
  }

  if (activity === "role-play") {
    rolePlayState[situationId] = {
      selectedRole: null,
      audioBlob: null,
      audioUrl: null,
      recording: false,
      message: "",
      studentName: "",
      studentClass: "",
      timeLeft: 60,
      activeLineIndex: null,
      playingPartner: false
    };
  }

  if (getRoute() === route) {
    render();
    return;
  }

  window.location.hash = route;
}

// Render de las pantallas (shell/footer, home, modal de accion con la mascota) 
function renderCreatorFooter() {
  return `
    <footer class="creator-footer">
      <div class="creator-footer-inner">
        <div class="creator-footer-brand">
          <strong>Made by Noelia</strong>
        </div>

        <div class="creator-footer-contact">
          <span>Questions or feedback? Email me at</span>
          <a class="creator-footer-email" href="mailto:noelia.projects@gmail.com">noelia.projects <span aria-hidden="true">@</span> gmail.com</a>
        </div>

        <div class="creator-footer-links">
          <a class="creator-footer-link" href="https://github.com/noeliaprojects" target="_blank" rel="noopener">My GitHub page ↗</a>
          <a class="creator-footer-link" href="https://play.google.com/store/apps/developer?id=noelia.projects&hl=es_419" target="_blank" rel="noopener">My Google Play apps ↗</a>
        </div>
      </div>
    </footer>
  `;
}

function renderShell(content) {
  app.innerHTML = `
    <main class="app-shell">
      <header class="topbar">
        <button class="brand brand-button" onclick="goTo('/')" aria-label="Go to situations">
          <div class="logo">${uiIcon("logo")}</div>
          <div>
            <h1 class="brand-title">Practice Pals</h1>
            <p class="brand-subtitle">Listen and speak English</p>
          </div>
        </button>

        <button class="star-pet-pill" onclick="goTo('/pets')" aria-label="Open Pet Shop">
          <span id="starPill" class="star-pet-stars">${uiIcon("star")} ${availableStars()}</span>
          <span class="star-pet-divider"></span>
          <span class="star-pet-pets">🐾 Pets</span>
        </button>
      </header>

      ${content}
    </main>

    ${renderCreatorFooter()}
  `;
}

function renderHome() {
  const cards = situations.map(situation => {
    const status = situationProgress(situation.id);
    const done = status.count === status.total;

    return `
      <button class="situation-card" onclick="openSituation('${situation.id}')">
        <div class="card-top">
          <div class="card-icon">${uiIcon(situation.id, situation.emoji)}</div>
          <div class="card-progress">${done ? `${uiIcon("star")} Done` : `${uiIcon("star")} ${status.count}/${status.total}`}</div>
        </div>

        <h3>${escapeHtml(situation.title)}</h3>
        <p>${escapeHtml(situation.description)}</p>

        <div class="card-action">
          ${done ? "Choose activity" : "Start practice"}
          <span>→</span>
        </div>
      </button>
    `;
  }).join("");

  const finalUnlocked = isFinalReflectionUnlocked();
  const finalSent = Boolean(progress.finalReflection?.sentAt);

  const finalCard = `
    <button class="situation-card final-reflection-card ${finalUnlocked ? "" : "locked-card"}" onclick="${finalUnlocked ? "goTo('/final-reflection')" : "showFinalLockedNotice()"}">
      <div class="card-top">
        <div class="card-icon">${uiIcon("reflection", "📝")}</div>
      <div class="card-progress">${finalUnlocked ? (finalSent ? `${uiIcon("check")} Sent` : "Unlocked") : `${uiIcon("lock")} Locked`}</div>
      </div>

      <h3>Final Reflection</h3>
      <p>Think about your favourite situations, your progress and what you can say now.</p>

      <div class="card-action">
        ${finalUnlocked ? "Open reflection" : "Complete all situations"}
        <span>→</span>
      </div>
    </button>
  `;

  renderShell(`
    <section class="screen">
      <div class="hero">
        <h2>Pick a situation and start talking.</h2>
        <p>Listen to conversations and practise them.</p>
      </div>

      <h2 class="section-title">Your situations</h2>

      <div class="situation-grid">
        ${cards}
        ${finalCard}
      </div>
    </section>
  `);
}

function openPetActionModal(petId) {
  const owned = ownedPet(petId);
  const pet = catalogPet(petId);

  if (!owned) return;

  document.querySelectorAll(".pet-modal-overlay").forEach(item => item.remove());

  const overlay = document.createElement("div");
  overlay.className = "pet-modal-overlay";

  overlay.innerHTML = `
    <div class="pet-modal-card pet-action-modal">
      <button class="pet-modal-close" aria-label="Close">×</button>

      <div class="pet-modal-art">
        ${renderPetArt(pet, "modal")}
      </div>

      <h3>${escapeHtml(owned.customName || pet.species)}</h3>
      <p>${escapeHtml(pet.name)}</p>

      <div class="pet-modal-actions pet-action-buttons">
        <button class="primary-btn" data-action="play">Play Simon Says</button>
        <button class="secondary-btn" data-action="active">${progress.shop.activePetId === petId ? "Using now" : "Set active"}</button>
        <button class="secondary-btn" data-action="rename">Rename</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const closeModal = () => overlay.remove();

  overlay.querySelector(".pet-modal-close").addEventListener("click", closeModal);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal();
  });

  overlay.querySelector('[data-action="play"]').addEventListener("click", () => {
    closeModal();
    startSimonGame(petId);
    goTo(`/simon/${petId}`);
  });

  overlay.querySelector('[data-action="active"]').addEventListener("click", () => {
    if (progress.shop.activePetId !== petId) {
      progress.shop.activePetId = petId;
      saveProgress();
    }

    closeModal();
    renderPetShop();
  });

  overlay.querySelector('[data-action="rename"]').addEventListener("click", () => {
    closeModal();
    renamePet(petId);
  });
}

//  Simon Says se desbloquea con la mascota 
function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function simonRewardAvailable() {
  return !progress.shop.simonRewards?.[todayKey()];
}

function normaliseSpeech(text) {
  return String(text)
    .toLowerCase()
    .replace(/[.,!?;:]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function startSimonGame(petId) {
  const pet = catalogPet(petId);
  const owned = ownedPet(petId);

  simonGame = {
    petId,
    pet,
    customName: owned?.customName || pet.species || pet.name,
    score: 0,
    attempts: 0,
    transcript: "",
    typedText: "",
    feedback: "Choose an action. Say or type: Simon says jump.",
    petMood: "idle",
    lastAction: "",
    listening: false,
    micSupported: Boolean(window.SpeechRecognition || window.webkitSpeechRecognition),
    rewardEarned: false,
    lastEffect: ""
  };
}

function ensureSimonGame(petId) {
  if (!simonGame || simonGame.petId !== petId) {
    startSimonGame(petId);
  }

  return simonGame;
}

function resetSimonRound() {
  if (!simonGame) return;

  simonGame.transcript = "";
  simonGame.typedText = "";
  simonGame.feedback = "Choose any action and say it with Simon says.";
  simonGame.petMood = "idle";
  simonGame.lastAction = "";
  simonGame.lastEffect = "";

  renderSimonSays(simonGame.petId);
}

function updateSimonTyped(value) {
  if (!simonGame) return;
  simonGame.typedText = value;
}

function findSimonAction(answer) {
  const actionsByLength = [...SIMON_ACTIONS].sort((a, b) => b.label.length - a.label.length);
  return actionsByLength.find(action => answer.includes(action.label));
}

function evaluateSimonAnswer(rawAnswer) {
  if (!simonGame) return;

  const answer = normaliseSpeech(rawAnswer);
  const heardSimon = answer.startsWith("simon says") || answer.includes("simon says");
  const action = findSimonAction(answer);

  simonGame.transcript = rawAnswer;
  simonGame.attempts += 1;

  if (!answer) {
    simonGame.petMood = "idle";
    simonGame.lastEffect = "";
    simonGame.feedback = "Try again. Say it or type it.";
    renderSimonSays(simonGame.petId);
    return;
  }

  if (!action) {
    simonGame.petMood = "still";
    simonGame.lastEffect = "❓";
    simonGame.lastAction = `${simonGame.customName} does not understand the action.`;
    simonGame.feedback = `I heard "${rawAnswer}", but I could not find an action.`;
    renderSimonSays(simonGame.petId);
    return;
  }

  if (heardSimon) {
    simonGame.petMood = action.id;
    simonGame.lastEffect = action.emoji;
    simonGame.lastAction = `${simonGame.customName} ${action.petText}`;
    simonGame.score += 1;
    simonGame.feedback = `Great! ${simonGame.lastAction}`;
  } else {
    simonGame.petMood = "still";
    simonGame.lastEffect = "✋";
    simonGame.lastAction = `${simonGame.customName} stays still.`;
    simonGame.feedback = `Good action, but you did not say "Simon says". ${simonGame.customName} stays still.`;
  }

  if (simonGame.score >= SIMON_TARGET_SCORE && !simonGame.rewardEarned) {
    awardSimonStar();
  }

  renderSimonSays(simonGame.petId);
}

function checkTypedSimonAnswer() {
  if (!simonGame) return;
  evaluateSimonAnswer(simonGame.typedText);
}

function awardSimonStar() {
  if (!simonGame) return;

  if (simonRewardAvailable()) {
    progress.bonusStars = (progress.bonusStars || 0) + 1;
    progress.shop.simonRewards[todayKey()] = true;
    saveProgress();

    simonGame.rewardEarned = true;
    simonGame.feedback = `${simonGame.customName} is proud of you! You earned 1 bonus star.`;
    return;
  }

  simonGame.rewardEarned = true;
  simonGame.feedback = `Great work! You already earned today's Simon Says star.`;
}

// escucha el comando hablado con SpeechRecognition. algunos navegadores solo
// lo tienen como webkitSpeechRecognition, asi que compruebo los dos nombres
// (https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
// https://www.assemblyai.com/blog/speech-recognition-javascript-web-speech-api

function startSimonListening() {
  if (!simonGame) return;

  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!Recognition) {
    simonGame.feedback = "Microphone recognition is not available here. Type your command instead.";
    renderSimonSays(simonGame.petId);
    return;
  }

  const recognition = new Recognition();
  recognition.lang = "en-GB";
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;

  simonGame.listening = true;
  simonGame.transcript = "";
  simonGame.feedback = "Listening...";
  renderSimonSays(simonGame.petId);

  recognition.onresult = (event) => {
    let text = "";

    for (let i = event.resultIndex; i < event.results.length; i++) {
      text += event.results[i][0].transcript;
    }

    simonGame.transcript = text;

    const transcriptBox = document.querySelector("#simonTranscript");
    if (transcriptBox) transcriptBox.textContent = text || "Listening...";

    if (event.results[event.results.length - 1].isFinal) {
      simonGame.listening = false;
      evaluateSimonAnswer(text);
    }
  };

  recognition.onerror = () => {
    simonGame.listening = false;
    simonGame.feedback = "The microphone did not understand. Try again or type it.";
    renderSimonSays(simonGame.petId);
  };

  recognition.onend = () => {
    if (!simonGame) return;

    if (simonGame.listening) {
      simonGame.listening = false;

      if (simonGame.transcript) {
        evaluateSimonAnswer(simonGame.transcript);
      } else {
        simonGame.feedback = "I did not hear anything. Try again or type it.";
        renderSimonSays(simonGame.petId);
      }
    }
  };

  recognition.start();
}

function renderSimonActionCards() {
  return SIMON_ACTIONS.map(action => `
    <button class="simon-action-card" onclick="chooseSimonAction('${action.id}')">
      <span>${action.emoji}</span>
      <strong>${escapeHtml(action.label)}</strong>
    </button>
  `).join("");
}

function chooseSimonAction(actionId) {
  if (!simonGame) return;

  const action = SIMON_ACTIONS.find(item => item.id === actionId);
  if (!action) return;

  simonGame.typedText = `Simon says ${action.label}`;
  simonGame.feedback = `Now say or check: Simon says ${action.label}`;

  const input = document.querySelector("#simonTypedInput");
  if (input) input.value = simonGame.typedText;

  speakText(action.label, 0.78, 1);
}

function simonPetClass() {
  if (!simonGame) return "";

  if (simonGame.petMood === "jump" || simonGame.petMood === "hop") return "simon-pet-jump";
  if (simonGame.petMood === "run" || simonGame.petMood === "walk") return "simon-pet-run";
  if (simonGame.petMood === "dance" || simonGame.petMood === "sing") return "simon-pet-dance";
  if (simonGame.petMood === "sleep") return "simon-pet-sleep";
  if (simonGame.petMood === "clap" || simonGame.petMood === "wave") return "simon-pet-clap";
  if (simonGame.petMood === "turn-around") return "simon-pet-turn";
  if (["eat", "drink", "smile", "laugh", "cry", "look", "listen", "open", "close", "wash", "brush", "cook", "kick", "catch", "throw", "stretch", "swim", "fly"].includes(simonGame.petMood)) return "simon-pet-bounce";
  if (simonGame.petMood === "sit-down") return "simon-pet-sit";
  if (simonGame.petMood === "stand-up") return "simon-pet-stand";

  return "";
}

function simonEffect() {
  if (!simonGame || !simonGame.lastEffect) return "";

  return `
    <div class="simon-effect ${simonGame.petMood === "still" ? "simon-effect-stop" : ""}">
      ${escapeHtml(simonGame.lastEffect)}
    </div>
  `;
}

function renderSimonSays(petId) {
  const game = ensureSimonGame(petId);
  const pet = catalogPet(petId);
  const rewardText = simonRewardAvailable()
    ? "Get 5 correct Simon commands to earn 1 bonus star today."
    : "You already earned today's bonus star.";

  renderShell(`
    <section class="screen">
      ${renderPageHead("Simon Says", `Play with ${game.customName}`, "/pets")}

      <div class="panel simon-panel">
        <div class="simon-freeplay-card">
          <div class="simon-pet-stage">
            <div class="simon-pet-wrap">
              ${simonEffect()}
              <div class="simon-pet ${simonPetClass()}">
                ${renderPetArt(pet, "hero")}
              </div>
            </div>

            <div class="simon-pet-caption">
              <strong>${escapeHtml(game.customName)}</strong>
              <span>${escapeHtml(game.lastAction || "is waiting for your command.")}</span>
            </div>

            <div class="simon-score-row">
              <span>Score ${game.score}/${SIMON_TARGET_SCORE}</span>
              <span>${escapeHtml(rewardText)}</span>
            </div>
          </div>

          <div class="simon-input-card">
            <h3>Say your own command</h3>
            <p>Choose any action. If you say <strong>Simon says</strong>, your pet will do it. If not, your pet stays still.</p>

            <div id="simonTranscript" class="simon-transcript">
              ${escapeHtml(game.transcript || "The microphone transcript will appear here...")}
            </div>

            <div class="simon-actions-row">
              <button class="primary-btn" onclick="startSimonListening()" ${game.listening ? "disabled" : ""}>
                🎤 ${game.listening ? "Listening..." : "Start microphone"}
              </button>

              <button class="secondary-btn" onclick="resetSimonRound()">
                Clear
              </button>
            </div>

            <div class="simon-type-row">
              <input
                id="simonTypedInput"
                type="text"
                value="${escapeHtml(game.typedText)}"
                placeholder="Type: Simon says jump"
                oninput="updateSimonTyped(this.value)"
              />

              <button class="primary-btn" onclick="checkTypedSimonAnswer()">
                Check
              </button>
            </div>

            <div class="simon-feedback">
              ${escapeHtml(game.feedback)}
            </div>
          </div>
        </div>

        <div class="simon-scaffold-card">
          <h3>Action cards</h3>
          <p>Tap a card to hear the word and choose the action.</p>

          <div class="simon-action-grid">
            ${renderSimonActionCards()}
          </div>
        </div>
      </div>
    </section>
  `);
}



//PANTALLAS DE REFLECTION
function isSituationFullyCompleted(situationId) {
  return ACTIVITY_KEYS.every(key => isActivityCompleted(situationId, key));
}

function isFinalReflectionUnlocked() {
  return situations.every(situation => isSituationFullyCompleted(situation.id));
}

function showFinalLockedNotice() {
  document.querySelectorAll(".star-overlay").forEach(item => item.remove());

  const overlay = document.createElement("div");
  overlay.className = "star-overlay";

  overlay.innerHTML = `
    <div class="star-pop reflection-locked-pop">
      <div class="big-star">${uiIcon("lock")}</div>
      <h2>Final Reflection is locked</h2>
      <p class="star-popup-main">Complete all situations and their reflections first.</p>
      <div class="star-popup-actions">
        <button class="primary-btn" data-action="close">Okay</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  overlay.querySelector('[data-action="close"]').addEventListener("click", () => overlay.remove());
}

function reflectionData(situationId) {
  if (!progress.reflections) progress.reflections = {};

  if (!progress.reflections[situationId]) {
    progress.reflections[situationId] = {
      understand: "",
      speak: "",
      easiest: "",
      difficult: "",
      word: "",
      sentence: "",
      comment: ""
    };
  }

  return progress.reflections[situationId];
}

function updateReflectionField(situationId, field, value) {
  const data = reflectionData(situationId);
  data[field] = value;
  saveProgress();
}

function reflectionRadio(name, situationId, field, value, label, currentValue) {
  const checked = currentValue === value ? "checked" : "";

  return `
    <label class="reflection-choice">
      <input type="radio" name="${name}" value="${escapeHtml(value)}" ${checked} onchange="updateReflectionField('${situationId}', '${field}', this.value)">
      <span>${escapeHtml(label)}</span>
    </label>
  `;
}

function activityOptions(selectedValue) {
  const options = [
    ["", "Choose one"],
    ["Word Bank", "Word Bank"],
    ["Conversation", "Conversation"],
    ["Match expressions", "Match expressions"],
    ["Missing words", "Missing words"],
    ["Role-play", "Role-play"]
  ];

  return options.map(([value, label]) => `
    <option value="${escapeHtml(value)}" ${selectedValue === value ? "selected" : ""}>
      ${escapeHtml(label)}
    </option>
  `).join("");
}

function renderReflection(situation) {
  const data = reflectionData(situation.id);
  const done = isActivityCompleted(situation.id, "reflection");

  renderShell(`
    <section class="screen">
      ${renderPageHead(situation.title, "Reflection", `/${situation.id}/role-play`)}

      <div class="panel reflection-panel">
        <div class="reflection-hero">
          <div>
            <span class="reflection-kicker">Think about your learning</span>
            <h3>How did this situation go?</h3>
            <p>Answer these questions after practising the situation.</p>
          </div>
          <div class="reflection-emoji">${uiIcon(situation.id, situation.emoji)}</div>
        </div>

        <div class="reflection-form">
          <div class="reflection-question">
            <h4>I can understand the conversation.</h4>
            <div class="reflection-choice-row">
              ${reflectionRadio(`understand-${situation.id}`, situation.id, "understand", "Yes", "🙂 Yes", data.understand)}
              ${reflectionRadio(`understand-${situation.id}`, situation.id, "understand", "A little", "😐 A little", data.understand)}
              ${reflectionRadio(`understand-${situation.id}`, situation.id, "understand", "Not yet", "🙁 Not yet", data.understand)}
            </div>
          </div>

          <div class="reflection-question">
            <h4>I can say useful expressions from this situation.</h4>
            <div class="reflection-choice-row">
              ${reflectionRadio(`speak-${situation.id}`, situation.id, "speak", "Yes", "🙂 Yes", data.speak)}
              ${reflectionRadio(`speak-${situation.id}`, situation.id, "speak", "A little", "😐 A little", data.speak)}
              ${reflectionRadio(`speak-${situation.id}`, situation.id, "speak", "Not yet", "🙁 Not yet", data.speak)}
            </div>
          </div>

          <div class="reflection-grid-2">
            <label class="reflection-field">
              <span>The easiest activity was...</span>
              <select onchange="updateReflectionField('${situation.id}', 'easiest', this.value)">
                ${activityOptions(data.easiest)}
              </select>
            </label>

            <label class="reflection-field">
              <span>The most difficult activity was...</span>
              <select onchange="updateReflectionField('${situation.id}', 'difficult', this.value)">
                ${activityOptions(data.difficult)}
              </select>
            </label>
          </div>

          <label class="reflection-field">
            <span>One word I remember is...</span>
            <input type="text" value="${escapeHtml(data.word)}" placeholder="Example: headache" oninput="updateReflectionField('${situation.id}', 'word', this.value)">
          </label>

          <label class="reflection-field">
            <span>One sentence I can say is...</span>
            <input type="text" value="${escapeHtml(data.sentence)}" placeholder="Example: Can I help you?" oninput="updateReflectionField('${situation.id}', 'sentence', this.value)">
          </label>

          <label class="reflection-field">
            <span>Something I want to practise more...</span>
            <textarea rows="3" placeholder="Write a short comment" oninput="updateReflectionField('${situation.id}', 'comment', this.value)">${escapeHtml(data.comment)}</textarea>
          </label>
        </div>

        <div class="actions">
          <button class="secondary-btn" onclick="goTo('/${situation.id}/menu')">Back to activities</button>
          <button class="primary-btn" onclick="finishReflection('${situation.id}')">
            ${done ? "Save reflection" : "Finish reflection"}
          </button>
        </div>
      </div>
    </section>
  `);
}

function finishReflection(situationId) {
  const situation = situations.find(item => item.id === situationId);
  if (!situation) return;

  saveProgress();
  finishActivity(situationId, "reflection", "/", `/${situationId}/reflection`);
}

function finalReflectionData() {
  if (!progress.finalReflection) progress.finalReflection = {};

  const defaults = {
    studentName: "",
    studentGroup: "",
    favouriteSituation: "",
    easiestSituation: "",
    mostDifficultSituation: "",
    favouriteActivity: "",
    wordsRemember: "",
    sentenceCanSay: "",
    opinion: "",
    helped: "",
    sentAt: ""
  };

  progress.finalReflection = {
    ...defaults,
    ...progress.finalReflection
  };

  return progress.finalReflection;
}

function updateFinalReflectionField(field, value) {
  const data = finalReflectionData();
  data[field] = value;
  saveProgress();
}

function situationOptions(selectedValue) {
  const options = [
    `<option value="" ${selectedValue ? "" : "selected"}>Choose one</option>`,
    ...situations.map(situation => `
      <option value="${escapeHtml(situation.title)}" ${selectedValue === situation.title ? "selected" : ""}>
        ${escapeHtml(situation.title)}
      </option>
    `)
  ];

  return options.join("");
}

function finalReflectionBody() {
  const data = finalReflectionData();

  const situationBlocks = situations.map(situation => {
    const reflection = reflectionData(situation.id);

    return `
${situation.title}
- I can understand the conversation: ${reflection.understand || "-"}
- I can say useful expressions: ${reflection.speak || "-"}
- Easiest activity: ${reflection.easiest || "-"}
- Most difficult activity: ${reflection.difficult || "-"}
- One word I remember: ${reflection.word || "-"}
- One sentence I can say: ${reflection.sentence || "-"}
- I want to practise: ${reflection.comment || "-"}
    `.trim();
  }).join("\n\n");

  return `
Hello,

Here is my Practice Pals final reflection.

Student: ${data.studentName || "Student"}
Class / group: ${data.studentGroup || "Class"}

FINAL REFLECTION
Favourite situation: ${data.favouriteSituation || "-"}
Easiest situation: ${data.easiestSituation || "-"}
Most difficult situation: ${data.mostDifficultSituation || "-"}
Favourite activity: ${data.favouriteActivity || "-"}
Words I remember: ${data.wordsRemember || "-"}
One sentence I can say now: ${data.sentenceCanSay || "-"}
My opinion about my English practice: ${data.opinion || "-"}
How Practice Pals helped me: ${data.helped || "-"}

SITUATION REFLECTIONS

${situationBlocks}

Thank you.
  `.trim();
}

// abre una ventana de Gmail ya rellena en vez de montar un envio de email de
// verdad (eso necesitaria backend, demasiada faena). esto salia en un
// foro de developers, no hay doc oficial de google, funciona porq
// gmail lee esos parametros (su = subject, body = body) al abrir el link
// de compose
function openFinalReflectionGmailDraft() {
  const data = finalReflectionData();

  const subject = `Practice Pals final reflection - ${data.studentName || "Student"} - ${data.studentGroup || "Class"}`;
  const body = finalReflectionBody();

  const gmailUrl =
    `https://mail.google.com/mail/?view=cm&fs=1` +
    `&su=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  data.sentAt = new Date().toISOString();
  saveProgress();

  window.open(gmailUrl, "_blank");
  renderFinalReflection();
}

function renderFinalReflection() {
  const unlocked = isFinalReflectionUnlocked();
  const data = finalReflectionData();

  if (!unlocked) {
    renderShell(`
      <section class="screen">
        ${renderPageHead("Final Reflection", "Locked", "/")}

        <div class="panel reflection-panel">
          <div class="reflection-hero">
            <div>
              <span class="reflection-kicker">Locked</span>
              <h3>Complete all situations first.</h3>
              <p>The final reflection will unlock when all speaking situations and reflections are complete.</p>
            </div>
            <div class="reflection-emoji">${uiIcon("lock")}</div>
          </div>

          <div class="actions">
            <button class="primary-btn" onclick="goTo('/')">Back to situations</button>
          </div>
        </div>
      </section>
    `);
    return;
  }

  renderShell(`
    <section class="screen">
      ${renderPageHead("Final Reflection", "Send your learning reflection", "/")}

      <div class="panel reflection-panel final-reflection-panel">
        <div class="reflection-hero">
          <div>
            <span class="reflection-kicker">Final task</span>
            <h3>What did you learn with Practice Pals?</h3>
            <p>Your answers will be prepared as a Gmail draft. Add your teacher's email before sending.</p>
          </div>
          <div class="reflection-emoji">${uiIcon("reflection")}</div>
        </div>

        ${data.sentAt ? `<p class="reflection-sent-note">Gmail draft opened. You can open it again if you need to.</p>` : ""}

        <div class="reflection-form">
          <div class="reflection-grid-2">
            <label class="reflection-field">
              <span>Your name</span>
              <input type="text" value="${escapeHtml(data.studentName)}" placeholder="Student name" oninput="updateFinalReflectionField('studentName', this.value)">
            </label>

            <label class="reflection-field">
              <span>Class / group</span>
              <input type="text" value="${escapeHtml(data.studentGroup)}" placeholder="Class or group" oninput="updateFinalReflectionField('studentGroup', this.value)">
            </label>
          </div>

          <div class="reflection-grid-2">
            <label class="reflection-field">
              <span>My favourite situation was...</span>
              <select onchange="updateFinalReflectionField('favouriteSituation', this.value)">
                ${situationOptions(data.favouriteSituation)}
              </select>
            </label>

            <label class="reflection-field">
              <span>The easiest situation was...</span>
              <select onchange="updateFinalReflectionField('easiestSituation', this.value)">
                ${situationOptions(data.easiestSituation)}
              </select>
            </label>
          </div>

          <label class="reflection-field">
            <span>The most difficult situation was...</span>
            <select onchange="updateFinalReflectionField('mostDifficultSituation', this.value)">
              ${situationOptions(data.mostDifficultSituation)}
            </select>
          </label>

          <label class="reflection-field">
            <span>My favourite activity was...</span>
            <select onchange="updateFinalReflectionField('favouriteActivity', this.value)">
              ${activityOptions(data.favouriteActivity)}
            </select>
          </label>

          <label class="reflection-field">
            <span>Words I remember...</span>
            <textarea rows="3" placeholder="Write some words you remember" oninput="updateFinalReflectionField('wordsRemember', this.value)">${escapeHtml(data.wordsRemember)}</textarea>
          </label>

          <label class="reflection-field">
            <span>One sentence I can say now...</span>
            <input type="text" value="${escapeHtml(data.sentenceCanSay)}" placeholder="Example: Can I have a sandwich, please?" oninput="updateFinalReflectionField('sentenceCanSay', this.value)">
          </label>

          <label class="reflection-field">
            <span>My opinion about my English practice...</span>
            <textarea rows="3" placeholder="What did you learn? What was useful?" oninput="updateFinalReflectionField('opinion', this.value)">${escapeHtml(data.opinion)}</textarea>
          </label>

          <label class="reflection-field">
            <span>How did Practice Pals help you practise English?</span>
            <textarea rows="3" placeholder="Write your answer" oninput="updateFinalReflectionField('helped', this.value)">${escapeHtml(data.helped)}</textarea>
          </label>
        </div>

        <div class="actions">
          <button class="secondary-btn" onclick="goTo('/')">Back to situations</button>
          <button class="primary-btn" onclick="openFinalReflectionGmailDraft()">Open Gmail draft</button>
        </div>

        <p class="small-note">
          Gmail will open with the reflection text. The student only needs to add the teacher's email and send it.
        </p>
      </div>
    </section>
  `);
}

// pantallas PET SHOP y ACTIVITY MENU
function renderPetShop() {
  const sortedCatalog = [...PET_CATALOG].sort((a, b) => {
    const aActive = progress.shop.activePetId === a.id ? 1 : 0;
    const bActive = progress.shop.activePetId === b.id ? 1 : 0;
    if (aActive !== bActive) return bActive - aActive;

    const aOwned = ownedPet(a.id) ? 1 : 0;
    const bOwned = ownedPet(b.id) ? 1 : 0;
    if (aOwned !== bOwned) return bOwned - aOwned;

    return a.cost - b.cost;
  });

  const start = petShopPage * PET_PAGE_SIZE;
  const end = start + PET_PAGE_SIZE;
  const pets = sortedCatalog.slice(start, end);
  const maxPage = Math.ceil(sortedCatalog.length / PET_PAGE_SIZE);
  const activePet = activePetInfo();

  const cards = pets.map(pet => {
    const owned = ownedPet(pet.id);
    const isActive = progress.shop.activePetId === pet.id;
    const canBuy = availableStars() >= pet.cost;
    const cardClick = owned ? `onclick="openPetActionModal('${pet.id}')"` : "";

    return `
      <article class="pet-card ${owned ? "owned-pet-card-item" : ""} ${isActive ? "active-pet-card-item" : ""} ${owned ? "owned-clickable" : ""}" ${cardClick}>
        <div class="pet-card-art">
          ${renderPetArt(pet, "card")}
        </div>

        <div class="pet-card-content">
          <h3>${escapeHtml(owned?.customName || pet.name)}</h3>
          <p class="pet-subtitle">${escapeHtml(pet.name)}</p>

          <div class="pet-chip-row">
            <span class="pet-cost-chip">${pet.cost === 0 ? "Free" : `${uiIcon("star")} ${pet.cost}`}</span>
            ${owned ? `<span class="pet-state-chip">${isActive ? "Active" : "Owned"}</span>` : ``}
          </div>

          ${
            owned
              ? `
                <div class="pet-actions">
                  <button class="secondary-btn" onclick="event.stopPropagation(); renamePet('${pet.id}')">Rename</button>
                  <button class="primary-btn" onclick="event.stopPropagation(); setActivePet('${pet.id}')" ${isActive ? "disabled" : ""}>
                    ${isActive ? "Using now" : "Set active"}
                  </button>
                </div>
              `
              : `
                <div class="pet-actions">
                  <button class="primary-btn" onclick="buyPet('${pet.id}')" ${canBuy ? "" : "disabled"}>
                    Unlock
                  </button>
                </div>
              `
          }
        </div>
      </article>
    `;
  }).join("");

  renderShell(`
    <section class="screen">
      ${renderPageHead("Pet Shop", "Unlock and name your pets", "/")}

      <div class="panel">
        <div class="pet-shop-top">
          <div class="pet-shop-focus-card">
            <div class="pet-shop-focus-art">
              ${renderPetArt(activePet, "hero")}
            </div>

            <div class="pet-shop-focus-text">
              <span>Active pet</span>
              <strong>${escapeHtml(activePet.customName)}</strong>
              <p>${escapeHtml(activePet.name)}</p>
            </div>
          </div>

          <div class="pet-shop-stars-card">
            <span>Available stars</span>
            <strong>${uiIcon("star")} ${availableStars()}</strong>
            <p>Complete activities to earn more stars.</p>
          </div>
        </div>

        <div class="pet-shop-pages">
          <button class="secondary-btn" onclick="previousPetPage()" ${petShopPage === 0 ? "disabled" : ""}>
            ← Previous
          </button>

          <span>Page ${petShopPage + 1} / ${maxPage}</span>

          <button class="secondary-btn" onclick="nextPetPage()" ${petShopPage + 1 >= maxPage ? "disabled" : ""}>
            Next →
          </button>
        </div>

        <div class="pet-grid">
          ${cards}
        </div>
      </div>
    </section>
  `);
}

function renderActivityMenu(situation) {
  const items = [
    { key: "word-bank", title: "Word Bank" },
    { key: "conversation", title: "Conversation" },
    { key: "match", title: "Match expressions" },
    { key: "missing", title: "Missing words" },
    { key: "role-play", title: "Role-play" },
    { key: "optional-challenge", title: "Optional Challenge", optional: true, note: "Create your dialogue" },
    { key: "reflection", title: "Reflection" }
  ];

  const cards = items.map(item => {
    const done = !item.optional && isActivityCompleted(situation.id, item.key);
    const menuClass = item.optional ? "activity-menu-card optional-menu-card" : "activity-menu-card";
    const note = item.optional ? item.note : (done ? `${uiIcon("star")} Completed` : "Practice");

    return `
      <button class="${menuClass}" onclick="goTo('${activityRoute(item.key, situation.id)}')">
        <span class="activity-menu-icon">${uiIcon(item.key)}</span>
        <strong>${item.title}</strong>
        <small>${note}</small>
      </button>
    `;
  }).join("");

  renderShell(`
    <section class="screen">
      ${renderPageHead(situation.title, "Choose an activity", "/")}

      <div class="panel">
        <div class="activity-menu-grid">
          ${cards}
        </div>
      </div>
    </section>
  `);
}

function renderPageHead(title, subtitle, backRoute) {
  const titleSituation = typeof situations !== "undefined"
    ? situations.find(item => item.title === title)
    : null;

  const titleContent = titleSituation
    ? `
      <button
        class="page-title-link"
        onclick="goTo('/${titleSituation.id}/menu')"
        aria-label="Go to ${escapeHtml(title)} activities"
      >
        <h2>${escapeHtml(title)}</h2>
      </button>
    `
    : `<h2>${escapeHtml(title)}</h2>`;

  return `
    <div class="page-head">
      <button class="back-btn" onclick="goTo('${backRoute}')" aria-label="Go back">←</button>

      <div class="page-title">
        ${titleContent}
        <p>${escapeHtml(subtitle)}</p>
      </div>

      <div></div>
    </div>
  `;
}

//  WORD BANK
function startWordBank(situation) {
  if (!wordBankGame || wordBankGame.situationId !== situation.id) {
    wordBankGame = {
      situationId: situation.id,
      viewed: isActivityCompleted(situation.id, "word-bank")
        ? situation.wordBank.map(item => item.id)
        : []
    };
  }
}

function renderWordBank(situation) {
  startWordBank(situation);

  const cards = situation.wordBank.map(item => {
    const viewed = wordBankGame.viewed.includes(item.id) ? "is-flipped" : "";

    return `
      <button class="flip-card ${viewed}" data-word-id="${item.id}" onclick="flipWordCard('${situation.id}', '${item.id}')">
        <span class="flip-card-inner">
          <span class="flip-card-face flip-card-front">
            <strong>${escapeHtml(item.word)}</strong>
            <small>Tap to listen</small>
          </span>

          <span class="flip-card-face flip-card-back">
            ${renderWordImage(item.imageKey)}
            <strong>${escapeHtml(item.word)}</strong>
          </span>
        </span>
      </button>
    `;
  }).join("");

  const count = wordBankGame.viewed.length;
  const total = situation.wordBank.length;
  const ready = count === total;
  const width = (count / total) * 100;

  const nextRoute = situationProgress(situation.id).count === ACTIVITY_KEYS.length
    ? `/${situation.id}/menu`
    : `/${situation.id}/conversation`;

  renderShell(`
    <section class="screen">
      ${renderPageHead(situation.title, "Word Bank", "/")}

      <div class="panel">
        <div class="activity-progress">
          <span id="wordBankStatus">
            ${ready ? `Word Bank ready ${uiIcon("star")}` : `Words listened ${count}/${total}`}
          </span>

          <div class="progress-track">
            <div id="wordBankProgress" class="progress-fill" style="width: ${width}%"></div>
          </div>
        </div>

        <div class="word-grid">
          ${cards}
        </div>

        <div class="actions">
          <button
            id="wordBankContinue"
            class="primary-btn"
            onclick="finishActivity('${situation.id}', 'word-bank', '${nextRoute}', '/${situation.id}/word-bank')"
            ${ready ? "" : "disabled"}
          >
            Continue
          </button>
        </div>

        <p class="small-note">Tap every card to hear the words.</p>
      </div>
    </section>
  `);
}

function flipWordCard(situationId, wordId) {
  const situation = situations.find(item => item.id === situationId);
  if (!situation) return;

  const item = situation.wordBank.find(word => word.id === wordId);
  if (!item) return;

  const card = document.querySelector(`[data-word-id="${wordId}"]`);
  if (card) card.classList.add("is-flipped");

  if (!wordBankGame.viewed.includes(wordId)) {
    wordBankGame.viewed.push(wordId);
  }

  speakText(item.word, 0.78, 1);
  updateWordBankUI(situation);
}

function updateWordBankUI(situation) {
  const count = wordBankGame.viewed.length;
  const total = situation.wordBank.length;
  const ready = count === total;

  const status = document.querySelector("#wordBankStatus");
  const progressFill = document.querySelector("#wordBankProgress");
  const continueButton = document.querySelector("#wordBankContinue");

  if (progressFill) progressFill.style.width = `${(count / total) * 100}%`;

  if (ready) {
    if (status) status.innerHTML = `Word Bank ready ${uiIcon("star")}`;
    if (continueButton) continueButton.disabled = false;
  } else {
    if (status) status.textContent = `Words listened ${count}/${total}`;
  }
}

// CONVERSATION
function hasListenedConversation(id) {
  if (Object.prototype.hasOwnProperty.call(conversationState, id)) {
    return conversationState[id];
  }

  return isActivityCompleted(id, "conversation");
}

function renderConversation(situation) {
  const listened = hasListenedConversation(situation.id);
  const listenText = listened ? "▶ Listen again" : "▶ Listen";
  const conversationLines = getConversationLines(situation, "conversation");

  const messages = conversationLines.map(line => `
    <div class="message-row ${lineSideClass(situation, line)} ${line.role}">
      <div class="bubble-wrap">
        <p class="speaker">${escapeHtml(line.speaker)}</p>
        <div class="bubble">${escapeHtml(line.text)}</div>
      </div>
    </div>
  `).join("");

  const nextRoute = situationProgress(situation.id).count === ACTIVITY_KEYS.length
    ? `/${situation.id}/menu`
    : `/${situation.id}/match`;

  renderShell(`
    <section class="screen">
      ${renderPageHead(situation.title, "Conversation", `/${situation.id}/word-bank`)}

      <div class="panel">
        <div class="listen-bar">
          <button id="listenConversationBtn" class="primary-btn" onclick="playConversation('${situation.id}')">
            ${listenText}
          </button>
          <button class="secondary-btn" onclick="stopSpeech()">■ Stop</button>
        </div>

        <div class="chat">
          ${messages}
        </div>

        <div class="actions">
          <button class="secondary-btn" onclick="goTo('/${situation.id}/word-bank')">
            Word Bank
          </button>

          <button
            id="conversationContinue"
            class="primary-btn"
            onclick="finishActivity('${situation.id}', 'conversation', '${nextRoute}', '/${situation.id}/conversation')"
            ${listened ? "" : "disabled"}
          >
            Continue
          </button>
        </div>

        <p id="conversationStatus" class="small-note">
          ${listened ? `Conversation ready ${uiIcon("star")}` : "Listen to the conversation first."}
        </p>
      </div>
    </section>
  `);
}

function playConversation(id) {
  const situation = situations.find(item => item.id === id);
  if (!situation) return;

  conversationState[id] = true;

  const continueButton = document.querySelector("#conversationContinue");
  const status = document.querySelector("#conversationStatus");
  const listenButton = document.querySelector("#listenConversationBtn");

  if (continueButton) continueButton.disabled = false;
  if (status) status.innerHTML = `Conversation ready ${uiIcon("star")}`;
  if (listenButton) listenButton.textContent = "▶ Listen again";

  speakConversationLines(situation, null, getConversationLines(situation, "conversation"));
}

//MATCH EXPRESSIONS
function createMatchGame(situation) {
  const selected = (situation.fixedExpressions || []).slice(0, 5);

  return {
    situationId: situation.id,
    items: selected,
    leftParts: selected,
    rightParts: [...selected].reverse(),
    selectedLeft: null,
    matchedLeft: [],
    matchedRight: [],
    wrongLeft: null,
    wrongRight: null
  };
}

function normaliseMatchText(text) {
  return String(text)
    .toLowerCase()
    .replace(/[.,!?;:]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isAlternativeMatch(leftItem, rightItem) {
  if (!leftItem || !rightItem) return false;

  if (leftItem.id === rightItem.id) return true;

  if (Array.isArray(leftItem.acceptedRightIds) && leftItem.acceptedRightIds.includes(rightItem.id)) {
    return true;
  }

  if (Array.isArray(rightItem.acceptedLeftIds) && rightItem.acceptedLeftIds.includes(leftItem.id)) {
    return true;
  }

  return normaliseMatchText(leftItem.left) === normaliseMatchText(rightItem.left);
}

function renderMatch(situation) {
  if (!matchGame || matchGame.situationId !== situation.id || (matchGame.matchedLeft || []).length === matchGame.items.length) {
    matchGame = createMatchGame(situation);
  }

  const progressText = `${(matchGame.matchedLeft || []).length}/${matchGame.items.length}`;
  const progressWidth = ((matchGame.matchedLeft || []).length / matchGame.items.length) * 100;

  const leftCards = matchGame.leftParts.map(item => {
    const selected = matchGame.selectedLeft === item.id ? "selected-piece" : "";
    const matched = (matchGame.matchedLeft || []).includes(item.id) ? "matched-piece" : "";
    const wrong = matchGame.wrongLeft === item.id ? "wrong-piece" : "";
    const disabled = (matchGame.matchedLeft || []).includes(item.id) ? "disabled" : "";

    return `
      <button class="piece-card ${selected} ${matched} ${wrong}" onclick="selectLeftPiece('${item.id}')" ${disabled}>
        ${escapeHtml(item.left)}
      </button>
    `;
  }).join("");

  const rightCards = matchGame.rightParts.map(item => {
    const matched = (matchGame.matchedRight || []).includes(item.id) ? "matched-piece" : "";
    const wrong = matchGame.wrongRight === item.id ? "wrong-piece" : "";
    const disabled = (matchGame.matchedRight || []).includes(item.id) ? "disabled" : "";

    return `
      <button class="piece-card ${matched} ${wrong}" onclick="selectRightPiece('${item.id}')" ${disabled}>
        ${escapeHtml(item.right)}
      </button>
    `;
  }).join("");

  renderShell(`
    <section class="screen">
      ${renderPageHead(situation.title, "Match fixed expressions", `/${situation.id}/conversation`)}

      <div class="panel">
        <div class="activity-progress">
          <span>Matched ${progressText}</span>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${progressWidth}%"></div>
          </div>
        </div>

        <div class="match-intro-card">
          <strong>Build the expressions</strong>
          <span>Tap a beginning, then tap its ending.</span>
        </div>

        <div class="pieces-layout">
          <div class="pieces-column">
            <h3>Beginning</h3>
            ${leftCards}
          </div>

          <div class="pieces-column">
            <h3>Ending</h3>
            ${rightCards}
          </div>
        </div>
      </div>
    </section>
  `);
}

function selectLeftPiece(id) {
  if (!matchGame || (matchGame.matchedLeft || []).includes(id)) return;

  matchGame.selectedLeft = id;
  matchGame.wrongLeft = null;
  matchGame.wrongRight = null;

  renderMatch(getCurrentSituation());
}

function selectRightPiece(id) {
  if (!matchGame || !matchGame.selectedLeft || (matchGame.matchedRight || []).includes(id)) return;

  const situation = getCurrentSituation();
  const leftItem = matchGame.items.find(item => item.id === matchGame.selectedLeft);
  const rightItem = matchGame.items.find(item => item.id === id);
  const correct = isAlternativeMatch(leftItem, rightItem);

  if (correct) {
    if (!matchGame.matchedLeft) matchGame.matchedLeft = [];
    if (!matchGame.matchedRight) matchGame.matchedRight = [];

    matchGame.matchedLeft.push(matchGame.selectedLeft);
    matchGame.matchedRight.push(id);
    matchGame.selectedLeft = null;
    matchGame.wrongLeft = null;
    matchGame.wrongRight = null;

    if (matchGame.matchedLeft.length === matchGame.items.length) {
      const nextRoute = situationProgress(situation.id).count === ACTIVITY_KEYS.length
        ? `/${situation.id}/menu`
        : `/${situation.id}/missing`;

      finishActivity(situation.id, "match", nextRoute, `/${situation.id}/match`);
      return;
    }

    renderMatch(situation);
    return;
  }

  matchGame.wrongLeft = matchGame.selectedLeft;
  matchGame.wrongRight = id;
  renderMatch(situation);

  setTimeout(() => {
    if (!matchGame) return;
    matchGame.wrongLeft = null;
    matchGame.wrongRight = null;
    renderMatch(situation);
  }, 500);
}

//MISSING WORDS
function createMissingGame(situation) {
  const scenario = (situation.missingScenarios || [])[0] || {
    id: "model-conversation",
    conversation: situation.conversation || [],
    gaps: []
  };

  const selectedGaps = (scenario.gaps || []).slice(0, 5);

  const selectedByLine = new Map(
    selectedGaps.map(item => [item.lineIndex, item])
  );

  const lines = (scenario.conversation || situation.conversation || []).map((line, index) => {
    const gap = selectedByLine.get(index);

    if (!gap) {
      return {
        id: `line-${index}`,
        lineIndex: index,
        speaker: line.speaker,
        role: line.role,
        text: line.text,
        hasGap: false
      };
    }

    return {
      ...gap,
      speaker: line.speaker,
      role: line.role,
      hasGap: true
    };
  });

  return {
    situationId: situation.id,
    scenario,
    lines,
    gaps: selectedGaps,
    words: selectedGaps,
    current: 0,
    answers: {},
    wrongId: null
  };
}

function renderMissing(situation) {
  if (!missingGame || missingGame.situationId !== situation.id || missingGame.current >= missingGame.gaps.length) {
    missingGame = createMissingGame(situation);
  }

  const progressText = `${missingGame.current}/${missingGame.gaps.length}`;
  const progressWidth = (missingGame.current / missingGame.gaps.length) * 100;
  const currentGap = missingGame.gaps[missingGame.current];

  const wordChips = missingGame.words.map(item => {
    const used = Boolean(missingGame.answers[item.id]);
    const wrong = missingGame.wrongId === item.id ? "wrong-chip" : "";

    return `
      <button class="word-chip ${wrong}" onclick="chooseMissingWord('${item.id}')" ${used ? "disabled" : ""}>
        <span class="chip-plus">＋</span>
        <span>${escapeHtml(item.answer)}</span>
      </button>
    `;
  }).join("");

  const lines = missingGame.lines.map(item => {
    const side = lineSideClass(situation, item);

    if (!item.hasGap) {
      return `
        <div class="message-row ${side} ${item.role}">
          <div class="bubble-wrap">
            <p class="speaker">${escapeHtml(item.speaker)}</p>
            <div class="bubble">${escapeHtml(item.text)}</div>
          </div>
        </div>
      `;
    }

    const active = currentGap && item.id === currentGap.id ? "active-gap-line" : "";
    const filled = missingGame.answers[item.id];

    return `
      <div class="message-row ${side} ${item.role}">
        <div class="bubble-wrap">
          <p class="speaker">${escapeHtml(item.speaker)}</p>
          <div class="bubble gap-bubble ${active}">
            ${escapeHtml(item.before)}
            <span class="blank-space">${filled ? escapeHtml(item.answer) : "_____"}</span>
            ${escapeHtml(item.after)}
          </div>
        </div>
      </div>
    `;
  }).join("");

  renderShell(`
    <section class="screen">
      ${renderPageHead(situation.title, "Missing words", `/${situation.id}/match`)}

      <div class="panel">
        <div class="activity-progress">
          <span>Completed ${progressText}</span>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${progressWidth}%"></div>
          </div>
        </div>

        <div class="listen-bar">
          <button class="secondary-btn" onclick="listenMissingWords('${situation.id}')">
            ▶ Listen again
          </button>
          <button class="secondary-btn" onclick="stopSpeech()">■ Stop</button>
        </div>

        <div class="missing-bank">
          ${wordChips}
        </div>

        <div class="chat missing-chat">
          ${lines}
        </div>

        <p class="small-note">Tap the words in the order you hear them.</p>
      </div>
    </section>
  `);
}

function missingAudioLines() {
  if (!missingGame) return [];

  return missingGame.lines.map(item => {
    if (!item.hasGap) {
      return {
        speaker: item.speaker,
        role: item.role,
        text: item.text
      };
    }

    const text = `${item.before} ${item.answer} ${item.after}`
      .replace(/\s+([.,!?;:])/g, "$1")
      .replace(/\s+/g, " ")
      .trim();

    return {
      speaker: item.speaker,
      role: item.role,
      text
    };
  });
}

function listenMissingWords(situationId) {
  const situation = situations.find(item => item.id === situationId);
  if (!situation || !missingGame) return;

  speakConversationLines(situation, null, missingAudioLines());
}

function chooseMissingWord(id) {
  if (!missingGame) return;

  const situation = getCurrentSituation();
  const expected = missingGame.gaps[missingGame.current];

  if (id === expected.id) {
    missingGame.answers[id] = true;
    missingGame.current += 1;
    missingGame.wrongId = null;

    if (missingGame.current >= missingGame.gaps.length) {
      const nextRoute = situationProgress(situation.id).count === ACTIVITY_KEYS.length
        ? `/${situation.id}/menu`
        : `/${situation.id}/role-play`;

      finishActivity(situation.id, "missing", nextRoute, `/${situation.id}/missing`);
      return;
    }

    renderMissing(situation);
    return;
  }

  missingGame.wrongId = id;
  renderMissing(situation);

  setTimeout(() => {
    if (!missingGame) return;
    missingGame.wrongId = null;
    renderMissing(situation);
  }, 450);
}

// ROLE PLAY
function ensureRolePlayState(id) {
  if (!rolePlayState[id]) {
    rolePlayState[id] = {
      selectedRole: null,
      audioBlob: null,
      audioUrl: null,
      recording: false,
      message: "",
      studentName: "",
      studentClass: "",
      timeLeft: 60,
      activeLineIndex: null,
      playingPartner: false
    };
  }

  return rolePlayState[id];
}

function getRoles(situation, lines = getConversationLines(situation, "role-play")) {
  const roles = [];

  lines.forEach(line => {
    if (!roles.some(item => item.role === line.role)) {
      roles.push({
        role: line.role,
        speaker: line.speaker
      });
    }
  });

  return roles;
}

function renderRolePlay(situation) {
  const state = ensureRolePlayState(situation.id);
  const conversationLines = getConversationLines(situation, "role-play");
  const roles = getRoles(situation, conversationLines);

  const roleButtons = roles.map(item => {
    const active = state.selectedRole === item.role ? "selected-role" : "";

    return `
      <button class="role-choice ${active}" onclick="chooseRole('${situation.id}', '${item.role}')">
        ${escapeHtml(item.speaker)}
      </button>
    `;
  }).join("");

  const chatLines = conversationLines.map((line, index) => {
    const isStudentLine = state.selectedRole === line.role;
    const isActive = state.activeLineIndex === index;
    const badge = isStudentLine ? `<span class="your-line-badge">Your line</span>` : "";
    const side = lineSideClass(situation, line);
    const activeClass = isActive ? "active-role-line" : "";
    const karaokeClass = isStudentLine && isActive ? "karaoke-line" : "";

    return `
      <div class="message-row ${side} ${line.role}">
        <div class="bubble-wrap">
          <p class="speaker">${escapeHtml(line.speaker)} ${badge}</p>
          <div class="bubble role-bubble ${activeClass} ${karaokeClass}">
            <span>${escapeHtml(line.text)}</span>
            <button class="line-listen-btn" onclick="listenRoleLine('${situation.id}', ${index})">▶</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  const selectedRoleLabel = roles.find(item => item.role === state.selectedRole)?.speaker || "";
  const canRecord = Boolean(state.selectedRole);
  const hasAudio = Boolean(state.audioUrl);

  renderShell(`
    <section class="screen">
      ${renderPageHead(situation.title, "Role-play", `/${situation.id}/missing`)}

      <div class="panel role-play-panel">
        <div class="role-card">
          <h3>Choose your role</h3>

          <div class="role-choice-row">
            ${roleButtons}
          </div>

          <div class="actions">
            <button class="secondary-btn" onclick="playPartnerOnly('${situation.id}')" ${canRecord && !state.playingPartner ? "" : "disabled"}>
              ▶ Partner only
            </button>

            <button class="secondary-btn" onclick="stopPartnerOnly('${situation.id}')" ${state.playingPartner ? "" : "disabled"}>
              Stop partner
            </button>
          </div>
        </div>

        <div class="chat role-chat">
          ${chatLines}
        </div>

        <div class="record-card">
          <h3>${canRecord ? `You are the ${escapeHtml(selectedRoleLabel)}` : "Choose a role to start"}</h3>
          <p>Press start. The app will play your partner's lines and leave space for you to speak.</p>

          <div class="student-fields">
            <input
              id="studentName"
              type="text"
              placeholder="Student name"
              value="${escapeHtml(state.studentName)}"
              oninput="updateStudentField('${situation.id}', 'studentName', this.value)"
            />

            <input
              id="studentClass"
              type="text"
              placeholder="Class / group"
              value="${escapeHtml(state.studentClass)}"
              oninput="updateStudentField('${situation.id}', 'studentClass', this.value)"
            />
          </div>

          <div class="record-timer">
            <span>Recording time left</span>
            <strong id="recordCountdown">${formatTime(state.timeLeft)}</strong>
          </div>

          <div class="record-actions">
            <button class="primary-btn" onclick="startRecording('${situation.id}')" ${canRecord && !state.recording ? "" : "disabled"}>
              ● Start guided recording
            </button>

            <button class="secondary-btn" onclick="stopRecording('${situation.id}')" ${state.recording ? "" : "disabled"}>
              Stop recording
            </button>
          </div>

          ${state.recording ? `<p class="record-status recording-now">Recording...</p>` : ""}

          <div class="upload-row">
            <label class="upload-audio-label">
              Upload audio
              <input type="file" accept="audio/*" onchange="uploadRolePlayAudio('${situation.id}', this)" />
            </label>
          </div>

          ${hasAudio ? `
            <div class="audio-result">
              <audio controls src="${state.audioUrl}"></audio>

              <div class="actions">
                <button class="secondary-btn" onclick="downloadRolePlayAudio('${situation.id}')">
                  Download audio
                </button>

                <button class="secondary-btn" onclick="openGmailDraft('${situation.id}')">
                  Open Gmail draft
                </button>

                <button class="primary-btn" onclick="shareRolePlayAudio('${situation.id}')">
                  Share / Send audio
                </button>
              </div>
            </div>
          ` : ""}

          ${state.message ? `<p class="small-note">${escapeHtml(state.message)}</p>` : ""}

          <div class="actions">
            <button class="secondary-btn" onclick="goTo('/${situation.id}/optional-challenge')">
              Optional Challenge
            </button>

            <button class="primary-btn" onclick="finishRolePlayAndGoReflection(\'${situation.id}\')" ${hasAudio ? "" : "disabled"}>
              Finish role-play
            </button>
          </div>
        </div>
      </div>
    </section>
  `);
}

function updateStudentField(situationId, field, value) {
  const state = ensureRolePlayState(situationId);
  state[field] = value;
}

function chooseRole(situationId, role) {
  const state = ensureRolePlayState(situationId);
  state.selectedRole = role;
  renderRolePlay(situations.find(item => item.id === situationId));
}

function listenRoleLine(situationId, index) {
  const situation = situations.find(item => item.id === situationId);
  if (!situation) return;

  const lines = getConversationLines(situation, "role-play");
  const line = lines[index];
  if (!line) return;

  speakSituationLine(situation, line);
}

function playPartnerOnly(situationId) {
  const situation = situations.find(item => item.id === situationId);
  const state = ensureRolePlayState(situationId);

  if (!situation || !state.selectedRole) return;

  const lines = getConversationLines(situation, "role-play");

  state.playingPartner = true;
  state.activeLineIndex = null;
  renderRolePlay(situation);

  speakConversationLines(situation, state.selectedRole, lines, {
    onLine: (index) => {
      state.activeLineIndex = index;
      renderRolePlay(situation);
    },
    onEnd: () => {
      state.playingPartner = false;
      state.activeLineIndex = null;
      renderRolePlay(situation);
    }
  });
}

function stopPartnerOnly(situationId) {
  const situation = situations.find(item => item.id === situationId);
  const state = ensureRolePlayState(situationId);

  stopSpeech();

  state.playingPartner = false;
  state.activeLineIndex = null;

  renderRolePlay(situation);
}

function formatTime(seconds) {
  const safe = Math.max(0, seconds);
  const mins = String(Math.floor(safe / 60)).padStart(2, "0");
  const secs = String(safe % 60).padStart(2, "0");

  return `${mins}:${secs}`;
}

async function startRecording(situationId) {
  const situation = situations.find(item => item.id === situationId);
  const state = ensureRolePlayState(situationId);

  if (!situation || !state.selectedRole) return;

  // compruebo que el micro + MediaRecorder existan antes de intentar grabar,
  // asi en navegadores viejos sale el mensaje de subir audio en vez de petarse
  // (https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder)
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder) {
    state.message = "Recording is not available in this browser. You can upload an audio recorded outside the app.";
    renderRolePlay(situation);
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    recordingState.stream = stream;
    recordingState.chunks = [];

    const mediaRecorder = new MediaRecorder(stream);
    recordingState.mediaRecorder = mediaRecorder;

    mediaRecorder.ondataavailable = event => {
      if (event.data.size > 0) {
        recordingState.chunks.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      clearTimeout(recordingState.maxTimer);
      clearInterval(recordingState.countdownTimer);

      const blob = new Blob(recordingState.chunks, { type: "audio/webm" });

      if (state.audioUrl) {
        URL.revokeObjectURL(state.audioUrl);
      }

      state.audioBlob = blob;
      state.audioUrl = URL.createObjectURL(blob);
      state.recording = false;
      state.playingPartner = false;
      state.activeLineIndex = null;
      state.message = "Recording saved. You can listen, download it, open Gmail, or share it.";

      if (recordingState.stream) {
        recordingState.stream.getTracks().forEach(track => track.stop());
        recordingState.stream = null;
      }

      renderRolePlay(situation);
    };

    state.recording = true;
    state.timeLeft = 60;
    state.message = "";

    mediaRecorder.start();
    renderRolePlay(situation);

    recordingState.countdownTimer = setInterval(() => {
      state.timeLeft -= 1;

      const countdown = document.querySelector("#recordCountdown");
      if (countdown) countdown.textContent = formatTime(state.timeLeft);

      if (state.timeLeft <= 0) {
        stopRecording(situationId);
      }
    }, 1000);

    recordingState.maxTimer = setTimeout(() => {
      stopRecording(situationId);
    }, 60000);

    setTimeout(() => {
      playPartnerOnly(situationId);
    }, 500);
  } catch {
    state.message = "Microphone permission was blocked. You can upload an audio recorded outside the app.";
    renderRolePlay(situation);
  }
}

function stopRecording(situationId) {
  const state = ensureRolePlayState(situationId);

  if (recordingState.mediaRecorder && recordingState.mediaRecorder.state === "recording") {
    recordingState.mediaRecorder.stop();
    state.message = "Saving recording...";
  }

  stopSpeech();

  const situation = situations.find(item => item.id === situationId);
  if (situation) renderRolePlay(situation);
}

function uploadRolePlayAudio(situationId, input) {
  const file = input.files?.[0];
  const state = ensureRolePlayState(situationId);

  if (!file) return;

  if (state.audioUrl) {
    URL.revokeObjectURL(state.audioUrl);
  }

  state.audioBlob = file;
  state.audioUrl = URL.createObjectURL(file);
  state.message = "Audio uploaded. You can listen, download it, open Gmail, or share it.";

  renderRolePlay(situations.find(item => item.id === situationId));
}

function getStudentInfo(situationId) {
  const state = ensureRolePlayState(situationId);

  return {
    name: state.studentName.trim() || "Student",
    group: state.studentClass.trim() || "Class"
  };
}

function safeFileName(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function audioExtension(blob) {
  const type = blob?.type || "";

  if (type.includes("mpeg")) return "mp3";
  if (type.includes("mp4")) return "m4a";
  if (type.includes("wav")) return "wav";
  if (type.includes("ogg")) return "ogg";

  return "webm";
}

function rolePlayFileName(situationId) {
  const situation = situations.find(item => item.id === situationId);
  const state = ensureRolePlayState(situationId);
  const student = getStudentInfo(situationId);
  const ext = audioExtension(state.audioBlob);

  return `speaking-friends-${safeFileName(student.name)}-${safeFileName(student.group)}-${safeFileName(situation.title)}.${ext}`;
}

function downloadRolePlayAudio(situationId) {
  const state = ensureRolePlayState(situationId);

  if (!state.audioBlob) return;

  const link = document.createElement("a");
  link.href = URL.createObjectURL(state.audioBlob);
  link.download = rolePlayFileName(situationId);
  link.click();
}

async function shareRolePlayAudio(situationId) {
  const situation = situations.find(item => item.id === situationId);
  const state = ensureRolePlayState(situationId);

  if (!situation || !state.audioBlob) return;

  const student = getStudentInfo(situationId);
  const roles = getRoles(situation, getConversationLines(situation, "role-play"));
  const roleName = roles.find(item => item.role === state.selectedRole)?.speaker || "Not selected";

  const filename = rolePlayFileName(situationId);
  const file = new File([state.audioBlob], filename, { type: state.audioBlob.type || "audio/webm" });

  const text = `
Practice Pals role-play audio

Student: ${student.name}
Class / group: ${student.group}
Situation: ${situation.title}
Role: ${roleName}
  `.trim();

  // en movil esto abre el share sheet nativo (WhatsApp, Gmail, etc) con el
  // audio ya adjunto. canShare() comprueba antes porq no todos los
  // navegadores io dispositivos dejan compartir archivos, algunos solo texto o links
  // (https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        title: `Practice Pals - ${student.name}`,
        text,
        files: [file]
      });

      state.message = "Audio shared. Choose Gmail and send it to your teacher.";
      renderRolePlay(situation);
      return;
    } catch {
      state.message = "Sharing was cancelled.";
      renderRolePlay(situation);
      return;
    }
  }

  downloadRolePlayAudio(situationId);
  openGmailDraft(situationId);
}

// mismo truco de gmail que en la pantalla de final reflection, solo cambia
// el texto para lo del role-play audio
function openGmailDraft(situationId) {
  const situation = situations.find(item => item.id === situationId);
  const state = ensureRolePlayState(situationId);

  if (!situation) return;

  const student = getStudentInfo(situationId);
  const roles = getRoles(situation, getConversationLines(situation, "role-play"));
  const roleName = roles.find(item => item.role === state.selectedRole)?.speaker || "Not selected";

  const subject = `Practice Pals audio - ${student.name} - ${student.group} - ${situation.title}`;

  const body = `
Hello,

Here is my Practice Pals role-play audio.

Student: ${student.name}
Class / group: ${student.group}
Situation: ${situation.title}
Role: ${roleName}

I will attach the audio file to this email.

Thank you.
  `.trim();

  const gmailUrl =
    `https://mail.google.com/mail/?view=cm&fs=1` +
    `&su=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  state.message = "Gmail has opened. Attach the downloaded audio file before sending.";
  window.open(gmailUrl, "_blank");

  renderRolePlay(situation);
}


// OPTIONAL CHALLENGE
function ensureOptionalChallengeState(id) {
  if (!optionalChallengeState[id]) {
    optionalChallengeState[id] = {
      selectedGapId: null,
      answers: {},
      wrongOptionId: null,
      message: "",
      studentName: "",
      studentClass: "",
      audioBlob: null,
      audioUrl: null,
      recording: false,
      timeLeft: 90
    };
  }

  return optionalChallengeState[id];
}

function optionalChallengeConfig(situation) {
  return situation.optionalChallenge || {
    title: "Optional Challenge",
    subtitle: "Create your dialogue",
    intro: "Change the model conversation and record your own version.",
    conversation: situation.conversation || [],
    gaps: []
  };
}

function optionId(text) {
  return safeFileName(text) || "option";
}

function optionalChallengeGapGroups(challenge) {
  const groups = new Map();

  (challenge.gaps || []).forEach((gap, index) => {
    if (!groups.has(gap.id)) {
      groups.set(gap.id, {
        id: gap.id,
        label: gap.label || `Gap ${groups.size + 1}`,
        colorIndex: (groups.size % 6) + 1,
        options: [],
        firstGapIndex: index
      });
    }

    const group = groups.get(gap.id);
    (gap.options || []).forEach(text => {
      if (!group.options.includes(text)) {
        group.options.push(text);
      }
    });
  });

  return [...groups.values()];
}


function challengeGapColorClass(challenge, gapId) {
  const group = optionalChallengeGapGroups(challenge).find(item => item.id === gapId);
  return group ? `challenge-color-${group.colorIndex}` : "challenge-color-1";
}

function optionalChallengeIsComplete(challenge, state) {
  return (challenge.gaps || []).every(gap => Boolean(state.answers[gap.id]));
}

function challengeLineText(line, index, challenge, state, editable = false) {
  const gaps = (challenge.gaps || [])
    .filter(item => item.lineIndex === index)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  if (!gaps.length) {
    return escapeHtml(line.text);
  }

  return gaps.map(gap => {
    const colorClass = challengeGapColorClass(challenge, gap.id);
    const value = state.answers[gap.id] || "";

    if (!editable) {
      return `${escapeHtml(gap.before)}<span class="model-gap-word ${colorClass}">${escapeHtml(gap.answer)}</span>${escapeHtml(gap.after)}`;
    }

    const options = (gap.options || []).map(text => `
      <option value="${escapeHtml(text)}" ${value === text ? "selected" : ""}>${escapeHtml(text)}</option>
    `).join("");

    return `${escapeHtml(gap.before)}<select class="challenge-gap-select ${colorClass}" onchange="chooseChallengeSelect('${challenge.situationId}', '${gap.id}', this.value)">
      <option value="">_____</option>
      ${options}
    </select>${escapeHtml(gap.after)}`;
  }).join("");
}

function renderOptionalChallenge(situation) {
  const challenge = optionalChallengeConfig(situation);
  challenge.situationId = situation.id;

  const state = ensureOptionalChallengeState(situation.id);
  const lines = challenge.conversation || situation.conversation || [];
  const complete = optionalChallengeIsComplete(challenge, state);
  const hasAudio = Boolean(state.audioUrl);

  const modelMessages = lines.map((line, index) => `
    <div class="message-row ${lineSideClass(situation, line)} ${line.role}">
      <div class="bubble-wrap">
        <p class="speaker">${escapeHtml(line.speaker)}</p>
        <div class="bubble">${challengeLineText(line, index, challenge, state, false)}</div>
      </div>
    </div>
  `).join("");

  const challengeMessages = lines.map((line, index) => `
    <div class="message-row ${lineSideClass(situation, line)} ${line.role}">
      <div class="bubble-wrap">
        <p class="speaker">${escapeHtml(line.speaker)}</p>
        <div class="bubble challenge-bubble">${challengeLineText(line, index, challenge, state, true)}</div>
      </div>
    </div>
  `).join("");

  renderShell(`
    <section class="screen">
      ${renderPageHead(situation.title, "Optional Challenge · Create your dialogue", `/${situation.id}/menu`)}

      <div class="panel optional-challenge-panel">
        <div class="challenge-layout">
          <div class="challenge-card">
            <h3>Model conversation</h3>
            <div class="chat challenge-chat">
              ${modelMessages}
            </div>
          </div>

          <div class="challenge-card your-dialogue-card">
            <h3>Your dialogue</h3>
            <div class="chat challenge-chat your-dialogue-chat">
              ${challengeMessages}
            </div>
          </div>
        </div>

        <div class="actions">
          ${complete ? `<span class="ready-pill">${uiIcon("check")} Ready to record</span>` : ""}
          <button class="secondary-btn" onclick="resetOptionalChallenge('${situation.id}')">Clear choices</button>
          <button class="secondary-btn" onclick="goTo('/${situation.id}/role-play')">Back to role-play</button>
        </div>

        <div class="record-card optional-record-card">
          <h3>Record your dialogue</h3>

          <div class="student-fields">
            <input
              type="text"
              placeholder="Student name"
              value="${escapeHtml(state.studentName)}"
              oninput="updateOptionalChallengeField('${situation.id}', 'studentName', this.value)"
            />

            <input
              type="text"
              placeholder="Class / group"
              value="${escapeHtml(state.studentClass)}"
              oninput="updateOptionalChallengeField('${situation.id}', 'studentClass', this.value)"
            />
          </div>

          <div class="record-timer">
            <span>Recording time left</span>
            <strong id="challengeRecordCountdown">${formatTime(state.timeLeft)}</strong>
          </div>

          <div class="record-actions">
            <button class="primary-btn" onclick="startOptionalChallengeRecording('${situation.id}')" ${complete && !state.recording ? "" : "disabled"}>
              ● Start recording
            </button>

            <button class="secondary-btn" onclick="stopOptionalChallengeRecording('${situation.id}')" ${state.recording ? "" : "disabled"}>
              Stop recording
            </button>
          </div>

          ${state.recording ? `<p class="record-status recording-now">Recording...</p>` : ""}

          <div class="upload-row">
            <label class="upload-audio-label">
              Upload audio
              <input type="file" accept="audio/*" onchange="uploadOptionalChallengeAudio('${situation.id}', this)" />
            </label>
          </div>

          ${hasAudio ? `
            <div class="audio-result">
              <audio controls src="${state.audioUrl}"></audio>

              <div class="actions">
                <button class="secondary-btn" onclick="downloadOptionalChallengeAudio('${situation.id}')">
                  Download audio
                </button>

                <button class="secondary-btn" onclick="openOptionalChallengeGmailDraft('${situation.id}')">
                  Open Gmail draft
                </button>

                <button class="primary-btn" onclick="shareOptionalChallengeAudio('${situation.id}')">
                  Share / Send audio
                </button>
              </div>
            </div>
          ` : ""}
        </div>
      </div>
    </section>
  `);
}


function chooseChallengeSelect(situationId, gapId, value) {
  const situation = situations.find(item => item.id === situationId);
  if (!situation || !value) return;

  const challenge = optionalChallengeConfig(situation);
  const state = ensureOptionalChallengeState(situationId);
  const gap = (challenge.gaps || []).find(item => item.id === gapId);

  if (!gap || !(gap.options || []).includes(value)) return;

  state.answers[gap.id] = value;
  state.selectedGapId = null;
  state.wrongOptionId = null;
  state.message = "";

  renderOptionalChallenge(situation);
}


function resetOptionalChallenge(situationId) {
  const state = ensureOptionalChallengeState(situationId);
  state.selectedGapId = null;
  state.answers = {};
  state.wrongOptionId = null;
  state.message = "Choices cleared.";

  const situation = situations.find(item => item.id === situationId);
  if (situation) renderOptionalChallenge(situation);
}

function updateOptionalChallengeField(situationId, field, value) {
  const state = ensureOptionalChallengeState(situationId);
  state[field] = value;
}

function optionalChallengeFinalLines(situation) {
  const challenge = optionalChallengeConfig(situation);
  const state = ensureOptionalChallengeState(situation.id);
  const lines = challenge.conversation || situation.conversation || [];

  return lines.map((line, index) => {
    const gaps = (challenge.gaps || [])
      .filter(item => item.lineIndex === index)
      .sort((a, b) => (a.order || 0) - (b.order || 0));

    if (!gaps.length) {
      return `${line.speaker}: ${line.text}`;
    }

    if (gaps.length === 1) {
      const gap = gaps[0];
      const answer = state.answers[gap.id] || gap.answer;
      const text = `${gap.before} ${answer} ${gap.after}`
        .replace(/\s+([.,!?;:])/g, "$1")
        .replace(/\s+/g, " ")
        .trim();

      return `${line.speaker}: ${text}`;
    }

    const text = gaps.map(gap => {
      const answer = state.answers[gap.id] || gap.answer || "";
      return `${gap.before || ""}${answer}${gap.after || ""}`;
    }).join("")
      .replace(/\s+([.,!?;:])/g, "$1")
      .replace(/\s+/g, " ")
      .trim();

    return `${line.speaker}: ${text}`;
  });
}

function optionalChallengeStudentInfo(situationId) {
  const state = ensureOptionalChallengeState(situationId);

  return {
    name: state.studentName.trim() || "Student",
    group: state.studentClass.trim() || "Class"
  };
}

function optionalChallengeFileName(situationId) {
  const situation = situations.find(item => item.id === situationId);
  const state = ensureOptionalChallengeState(situationId);
  const student = optionalChallengeStudentInfo(situationId);
  const ext = audioExtension(state.audioBlob);

  return `speaking-friends-optional-challenge-${safeFileName(student.name)}-${safeFileName(student.group)}-${safeFileName(situation.title)}.${ext}`;
}

async function startOptionalChallengeRecording(situationId) {
  const situation = situations.find(item => item.id === situationId);
  const state = ensureOptionalChallengeState(situationId);

  if (!situation) return;

  const challenge = optionalChallengeConfig(situation);
  if (!optionalChallengeIsComplete(challenge, state)) {
    state.message = "Complete your dialogue before recording.";
    renderOptionalChallenge(situation);
    return;
  }

  // mismo check de arriba (role-play recording)
  // (https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder)
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder) {
    state.message = "Recording is not available in this browser. You can upload an audio recorded outside the app.";
    renderOptionalChallenge(situation);
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    recordingState.stream = stream;
    recordingState.chunks = [];

    const mediaRecorder = new MediaRecorder(stream);
    recordingState.mediaRecorder = mediaRecorder;

    mediaRecorder.ondataavailable = event => {
      if (event.data.size > 0) {
        recordingState.chunks.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      clearTimeout(recordingState.maxTimer);
      clearInterval(recordingState.countdownTimer);

      const blob = new Blob(recordingState.chunks, { type: "audio/webm" });

      if (state.audioUrl) {
        URL.revokeObjectURL(state.audioUrl);
      }

      state.audioBlob = blob;
      state.audioUrl = URL.createObjectURL(blob);
      state.recording = false;
      state.message = "Recording saved. You can listen, download it, open Gmail, or share it.";

      if (recordingState.stream) {
        recordingState.stream.getTracks().forEach(track => track.stop());
        recordingState.stream = null;
      }

      renderOptionalChallenge(situation);
    };

    state.recording = true;
    state.timeLeft = 90;
    state.message = "";

    mediaRecorder.start();
    renderOptionalChallenge(situation);

    recordingState.countdownTimer = setInterval(() => {
      state.timeLeft -= 1;

      const countdown = document.querySelector("#challengeRecordCountdown");
      if (countdown) countdown.textContent = formatTime(state.timeLeft);

      if (state.timeLeft <= 0) {
        stopOptionalChallengeRecording(situationId);
      }
    }, 1000);

    recordingState.maxTimer = setTimeout(() => {
      stopOptionalChallengeRecording(situationId);
    }, 90000);
  } catch {
    state.message = "Microphone permission was blocked. You can upload an audio recorded outside the app.";
    renderOptionalChallenge(situation);
  }
}

function stopOptionalChallengeRecording(situationId) {
  const state = ensureOptionalChallengeState(situationId);

  if (recordingState.mediaRecorder && recordingState.mediaRecorder.state === "recording") {
    recordingState.mediaRecorder.stop();
    state.message = "Saving recording...";
  }

  const situation = situations.find(item => item.id === situationId);
  if (situation) renderOptionalChallenge(situation);
}

function uploadOptionalChallengeAudio(situationId, input) {
  const file = input.files?.[0];
  const state = ensureOptionalChallengeState(situationId);

  if (!file) return;

  if (state.audioUrl) {
    URL.revokeObjectURL(state.audioUrl);
  }

  state.audioBlob = file;
  state.audioUrl = URL.createObjectURL(file);
  state.message = "Audio uploaded. You can listen, download it, open Gmail, or share it.";

  const situation = situations.find(item => item.id === situationId);
  if (situation) renderOptionalChallenge(situation);
}

function downloadOptionalChallengeAudio(situationId) {
  const state = ensureOptionalChallengeState(situationId);

  if (!state.audioBlob) return;

  const link = document.createElement("a");
  link.href = URL.createObjectURL(state.audioBlob);
  link.download = optionalChallengeFileName(situationId);
  link.click();
}

async function shareOptionalChallengeAudio(situationId) {
  const situation = situations.find(item => item.id === situationId);
  const state = ensureOptionalChallengeState(situationId);

  if (!situation || !state.audioBlob) return;

  const student = optionalChallengeStudentInfo(situationId);
  const filename = optionalChallengeFileName(situationId);
  const file = new File([state.audioBlob], filename, { type: state.audioBlob.type || "audio/webm" });
  const dialogue = optionalChallengeFinalLines(situation).join("\n");

  const text = `
Practice Pals optional challenge audio

Student: ${student.name}
Class / group: ${student.group}
Situation: ${situation.title}
Activity: Create your dialogue

Dialogue:\n${dialogue}
  `.trim();

  // mismo share sheet que en el audio del role-play
  // (https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        title: `Practice Pals - ${student.name}`,
        text,
        files: [file]
      });

      state.message = "Audio shared. Choose Gmail and send it to your teacher.";
      renderOptionalChallenge(situation);
      return;
    } catch {
      state.message = "Sharing was cancelled.";
      renderOptionalChallenge(situation);
      return;
    }
  }

  downloadOptionalChallengeAudio(situationId);
  openOptionalChallengeGmailDraft(situationId);
}

// otra vez lo mismo de gmail, con el texto del optional challenge
function openOptionalChallengeGmailDraft(situationId) {
  const situation = situations.find(item => item.id === situationId);
  const state = ensureOptionalChallengeState(situationId);

  if (!situation) return;

  const student = optionalChallengeStudentInfo(situationId);
  const dialogue = optionalChallengeFinalLines(situation).join("\n");
  const subject = `Practice Pals optional challenge - ${student.name} - ${student.group} - ${situation.title}`;

  const body = `
Hello,

Here is my Practice Pals optional challenge audio.

Student: ${student.name}
Class / group: ${student.group}
Situation: ${situation.title}
Activity: Create your dialogue

My dialogue:
${dialogue}

I will attach the audio file to this email.

Thank you.
  `.trim();

  const gmailUrl =
    `https://mail.google.com/mail/?view=cm&fs=1` +
    `&su=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  state.message = "Gmail has opened. Attach the downloaded audio file before sending.";
  window.open(gmailUrl, "_blank");

  renderOptionalChallenge(situation);
}

function renderWordImage(key) {
  // las imagenes de vocabulario con emojis
  const emojiImages = {
    "canteen": "🍽️",
    "menu": "📋",
    "sandwich": "🥪",
    "pasta": "🍝",
    "salad": "🥗",
    "juice": "🧃",
    "shop": "🛍️",
    "notebook": "📓",
    "pencil": "✏️",
    "bag": "🎒",
    "price": "🏷️",
    "money": "💰",
    "library": "📚",
    "book": "📘",
    "playground": "🛝",
    "slide": "🛝",
    "swing": "🌳",
    "turn": "🔁",
    "play": "▶️",
    "lost": "🔎",
    "pencilCase": "🖍️",
    "jacket": "🧥",
    "red": "🔴",
    "blue": "🔵",
    "classroom": "🏫",
    "teacher": "👩‍🏫",
    "student": "🧒",
    "flu": "🤒",
    "headache": "🤕",
    "soreThroat": "🤒",
    "dizzy": "😵‍💫",
    "temperature": "🌡️",
    "sick": "🤢",
    "stomachAche": "😖",
    "cold": "🤧",
    "earache": "👂",
    "cough": "😷",
    "cut": "🩹",
    "brokenArm": "🦴",
    "doctor": "🩺",
    "patient": "🧍",
    "water": "💧",
    "rest": "🛏️",
    "help": "🤝",
    "pancakes": "🥞",
    "tuna": "🐟",
    "strawberries": "🍓",
    "rice": "🍚",
    "mushrooms": "🍄",
    "tomatoSauce": "🍅",
    "chocolate": "🍫",
    "cheese": "🧀",
    "sandwiches": "🥪",
    "bread": "🍞",
    "lettuce": "🥬",
    "toast": "🍞",
    "jam": "🍓",
    "appleJuice": "🧃",
    "cereal": "🥣",
    "milk": "🥛",
    "plate": "🍽️",
    "pass": "🤲",
    "full": "😌",
    "butter": "🧈",
    "spoon": "🥄",
    "potatoes": "🥔",
    "add": "➕",
    "mix": "🥣",
    "boil": "♨️",
    "weigh": "⚖️",
    "taste": "😋",
    "fry": "🍳",
    "peel": "🥕",
    "chop": "🔪",
    "burn": "🔥",
    "stir": "🥄",
    "pour": "🫗",
    "rollOut": "🍕",
    "hippo": "🦛",
    "whale": "🐳",
    "kangaroo": "🦘",
    "parrot": "🦜",
    "lion": "🦁",
    "dolphin": "🐬",
    "shark": "🦈",
    "jellyfish": "🪼",
    "tiger": "🐯",
    "panda": "🐼",
    "polarBear": "🐻‍❄️",
    "penguin": "🐧",
    "dangerous": "⚠️",
    "colourful": "🌈",
    "intelligent": "🧠",
    "frightening": "😱",
    "pretty": "✨",
    "ugly": "🙈",
    "road": "🛣️",
    "bridge": "🌉",
    "village": "🏘️",
    "harbour": "⚓",
    "building": "🏢",
    "farm": "🚜",
    "field": "🌾",
    "hospital": "🏥",
    "cafe": "☕",
    "cinema": "🎬",
    "supermarket": "🛒",
    "goStraightOn": "⬆️",
    "turnLeft": "↩️",
    "turnRight": "↪️",
    "goPast": "🚶",
    "near": "📍",
    "far": "🗺️",
    "nextTo": "↔️",
    "touristInformation": "ℹ️",
    "waterPark": "🛝",
    "funfair": "🎡",
    "museum": "🏛️",
    "hotel": "🏨",
    "surf": "🏄",
    "bowling": "🎳",
    "golf": "⛳",
    "safariPark": "🦒",
    "aquarium": "🐠",
    "castle": "🏰",
    "barbecue": "🍖",
    "flipFlops": "🩴",
    "suitcase": "🧳",
    "swimsuit": "🩱",
    "sunHat": "👒",
    "page": "📄",
    "instructions": "📋",
    "repeat": "🔁",
    "understand": "💡",
    "spell": "🔤",
    "word": "💬",
    "listen": "👂",
    "example": "📝",
    "write": "✏️",
    "answer": "✅",
    "cup": "☕",
    "mountain": "⛰️",
  };

  return `<span class="word-illustration word-emoji-illustration"><span>${emojiImages[key] || "❓"}</span></span>`;
}

// Render principal: mira la ruta actual (hash de la URL) y pinta la
// pantalla que toca. Se llama cada vez que cambia el hash, ver goTo() arriba
function render() {
  stopSpeech();
  stopActiveRecording();

  const route = getRoute();
  const routeChanged = route !== lastRenderedRoute;
  lastRenderedRoute = route;

  if (typeof situations === "undefined") {
    renderShell(`
      <section class="screen">
        <div class="panel">
          <h2>Content not found</h2>
          <p class="small-note">Check that data.js is loaded before app.js.</p>
        </div>
      </section>
    `);
    return;
  }

  if (route === "/") {
    renderHome();
    return;
  }

  if (route === "/pets") {
    renderPetShop();
    return;
  }

  if (route === "/final-reflection") {
    renderFinalReflection();
    return;
  }

  if (route.startsWith("/simon/")) {
    const petId = route.split("/").filter(Boolean)[1];

    if (!ownedPet(petId)) {
      goTo("/pets");
      return;
    }

    renderSimonSays(petId);
    return;
  }

  const parts = route.split("/").filter(Boolean);
  const situation = situations.find(item => item.id === parts[0]);
  const page = parts[1];

  if (!situation) {
    goTo("/");
    return;
  }

  if (page === "menu") {
    renderActivityMenu(situation);
    return;
  }

  if (page === "word-bank") {
    renderWordBank(situation);
    return;
  }

  if (page === "conversation") {
    renderConversation(situation);
    return;
  }

  if (page === "match") {
    renderMatch(situation);
    return;
  }

  if (page === "missing") {
    renderMissing(situation);
    return;
  }

  if (page === "role-play") {
    if (routeChanged) {
      const state = ensureRolePlayState(situation.id);
      state.activeLineIndex = null;
      state.playingPartner = false;
    }

    renderRolePlay(situation);
    return;
  }

  if (page === "optional-challenge") {
    renderOptionalChallenge(situation);
    return;
  }

  if (page === "reflection") {
    renderReflection(situation);
    return;
  }

  goTo("/");
}

window.addEventListener("hashchange", render);
render();
