let pet = JSON.parse(localStorage.getItem("chickPet")) || {
    hunger: 40,
    thirst: 40,
    mood: 80,
    affection: 50,
    level: 1,
    sleeping: false
};

const chick = document.getElementById("chick");

function save() {
    localStorage.setItem("chickPet", JSON.stringify(pet));
}

function msg(t) {
    document.getElementById("msg").innerText = t;
}

function update() {
    document.getElementById("hungerBar").style.width = pet.hunger + "%";
    document.getElementById("thirstBar").style.width = pet.thirst + "%";
    document.getElementById("moodBar").style.width = pet.mood + "%";
    document.getElementById("affection").innerText = pet.affection;
    document.getElementById("level").innerText = pet.level;

    chick.className = "chick";

    if (pet.sleeping) chick.classList.add("sleep");
    else if (pet.mood > 70) chick.classList.add("happy");
    else if (pet.mood < 40) chick.classList.add("sad");

    save();
}

/* aksi */
function feed() {
    if (pet.sleeping) return msg("Dia lagi tidur 😴");
    pet.hunger -= 15;
    pet.mood += 5;
    pet.affection += 3;
    msg("Nyam! 🍗");
    update();
}

function drink() {
    if (pet.sleeping) return msg("Dia lagi tidur 😴");
    pet.thirst -= 15;
    pet.mood += 5;
    msg("Segar! 💧");
    update();
}

function play() {
    if (pet.sleeping) return msg("Dia lagi tidur 😴");
    pet.mood += 10;
    pet.hunger += 5;
    pet.thirst += 5;
    pet.affection += 5;
    msg("Main seru! 🎾");
    update();
}

function sleep() {
    pet.sleeping = !pet.sleeping;
    msg(pet.sleeping ? "Zzz..." : "Bangun! 🐥");
    update();
}

function sound() {
    document.getElementById("sound").play();
    msg("Piu piu! 🐥");
}

/* greeting */
function greet() {
    let hour = new Date().getHours();
    if (hour < 12) msg("Selamat pagi! 🐥");
    else if (hour < 18) msg("Selamat siang! ☀️");
    else msg("Selamat malam! 🌙");
}

/* chat random */
const talks = [
    "Aku di sini 🐥",
    "Temenin aku ya",
    "Hehe 🐥",
    "Kamu lagi apa?",
    "Aku kangen 😢"
];

setInterval(() => {
    if (!pet.sleeping && Math.random() < 0.3) {
        msg(talks[Math.floor(Math.random() * talks.length)]);
    }
}, 5000);

/* idle system */
setInterval(() => {
    if (!pet.sleeping) {
        pet.hunger += 2;
        pet.thirst += 2;
        pet.mood -= 1;

        if (pet.hunger > 80) msg("Aku lapar 😢");
        if (pet.thirst > 80) msg("Aku haus 😢");

        if (Math.random() < 0.1) msg("💩 Ups...");

        if (pet.mood > 100) {
            pet.level++;
            pet.mood = 80;
            msg("Naik level! ⭐");
        }
    }

    pet.hunger = Math.min(Math.max(pet.hunger, 0), 100);
    pet.thirst = Math.min(Math.max(pet.thirst, 0), 100);
    pet.mood = Math.min(Math.max(pet.mood, 0), 100);

    update();
}, 3000);

/* first load */
greet();
update();
