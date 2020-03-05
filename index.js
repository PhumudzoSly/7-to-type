window.addEventListener("load", init);

let time = 5;
let score = 0;

const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");
const bg = document.querySelector("#main");

const words = [
  "indigenous",
  "procrastinating",
  "obstetrics",
  "horrendous",
  "establishment",
  "aberration",
  "abnegation",
  "adumbrate",
  "aggrandize",
  "ambivalent",
  "amorphous",
  "anachronistic",
  "antiseptic",
  "apathetic",
  "antithesis",
  "apocryphal",
  "approbation",
  "arbitrary",
  "arrogate",
  "blandishment",
  "bombastic",
  "camaraderie",
  "capitulate",
  "circumlocution",
  "circumvent",
  "commensurate",
  "complement",
  "conflagration",
  "constituent",
  "contentious",
  "contravene",
  "corpulence",
  "cupidity",
  "demagogue",
  "derivative",
  "diaphanous",
  "didactic",
  "discomfit",
  "disparate",
  "disrepute",
  "dogmatic",
  "duplicity",
  "egregious",
  "embezzlement",
  "emollient",
  "empirical",
  "enervate",
  "enfranchise",
  "engender",
  "ephemeral",
  "epistolary",
  "equanimity",
  "equivocal",
  "espouse",
  "evanescent",
  "exacerbate",
  "execrable",
  "expedient",
  "extraneous",
  "expurgate",
  "fallacious",
  "flagrant",
  "forbearance",
  "fractious",
  "gratuitous",
  "hegemony",
  "idiosyncratic",
  "impetuous",
  "incumbent",
  "inexorable",
  "injunction",
  "inoculate",
  "insidious",
  "inveterate",
  "irreverence",
  "largesse",
  "maverick",
  "mendacious",
  "multifarious",
  "negligent",
  "noxious",
  "obdurate",
  "neophyte",
  "officious",
  "onerous",
  "ostracism",
  "palliate",
  "panacea",
  "paradigm",
  "partisan",
  "paucity",
  "pejorative",
  "penurious",
  "pernicious",
  "pertinacious",
  "phlegmatic",
  "plenitude",
  "plethora",
  "potentate",
  "predilection",
  "proclivity",
  "profligate",
  "promulgate",
  "proscribe",
  "pugnacious",
  "pulchritude",
  "punctilious",
  "quixotic",
  "quandary",
  "redoubtable",
  "recalcitrant",
  "reprobate",
  "requisition",
  "sanguine",
  "scurrilous",
  "semaphore",
  "serendipity",
  "sobriety",
  "solicitous",
  "solipsism",
  "spurious",
  "subjugate",
  "surfeit",
  "swarthy",
  "tirade",
  "zephyr",
  "winsome",
  "wanton",
  "vociferous",
  "vituperate",
  "virtuoso",
  "vitriolic",
  "vicissitude",
  "vestige",
  "veracity",
  "utilitarian",
  "upbraid",
  "umbrage",
  "ubiquitous",
  "turpitude",
  "truculent",
  "trenchant",
  "travesty",
  "tangential",
  "subsequencial"
];

function init() {
  showWord(words);
  wordInput.addEventListener("input", startMatch);
  setInterval(countdown, 1000);
  // Check if the game is playing
  setInterval(checkstatus, 50);
}

function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = 8;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct...!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
}

function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}

function checkstatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over, Try Again";
    score = -1;
  }
}
