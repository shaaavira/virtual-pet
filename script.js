let pet = JSON.parse(localStorage.getItem("chick")) || {
    hunger: 40,
    thirst: 40,
    mood: 80,
    xp: 0,
    level: 1,
    sleeping: false
};

const chick = document.getElementById("chick");

function save() {
    localStorage.setItem("chick", JSON.stringify(pet));
}

function msg(t) {
    document.getElementById("msg").innerText = t;
}

function update() {
    document.getElementById("hungerBar").style.width = pet.hunger + "%";
    document.getElementById("thirstBar").style.width = pet.thirst + "%";
    document.getElementById("moodBar").style.width = pet.mood + "%";

    document.getElementById("level").innerText = pet.level;
    document.getElementById("xp").innerText = pet.xp;

    chick.className = "chick-body idle";

    if (pet.sleeping) chick.classList.add("sleep");
    else if (pet.mood > 70) chick.classList.add("happy");
    else if (pet.mood < 40) chick.classList.add("sad");

    if (pet.mood < 20) chick.classList.add("angry");

    save();
}

/* ================= ACTION ================= */
function action(type) {
    if (type === "feed") {
        pet.hunger -= 15;
        pet.mood += 5;
        pet.xp++;
        msg("Nyam! 🍗");
    }

    if (type === "drink") {
        pet.thirst -= 15;
        pet.mood += 5;
        pet.xp++;
        msg("Segar 💧");
    }

    if (type === "play") {
        pet.mood += 10;
        pet.hunger += 5;
        pet.thirst += 5;
        pet.xp += 2;
        msg("Senang main! 🎾");
    }

    if (type === "sleep") {
        pet.sleeping = !pet.sleeping;
        msg(pet.sleeping ? "Zzz..." : "Bangun!");
    }

    levelSystem();
    update();
}

/* ================= LEVEL SYSTEM ================= */
function levelSystem() {
    if (pet.xp >= 5) {
        pet.level++;
        pet.xp = 0;
        msg("Naik Level! ⭐");
    }

    // reset kalau diabaikan
    if (pet.hunger > 100 || pet.thirst > 100) {
        pet.level = 1;
        pet.xp = 0;
        msg("Aku sakit karena diabaikan 😢 Reset level...");
    }
}

/* ================= AUTO SYSTEM ================= */
setInterval(() => {
    if (!pet.sleeping) {
        pet.hunger += 2;
        pet.thirst += 2;
        pet.mood -= 1;

        if (pet.hunger > 80) msg("Aku lapar 😢");
        if (pet.thirst > 80) msg("Aku haus 😢");
    }

    pet.hunger = Math.min(Math.max(pet.hunger, 0), 100);
    pet.thirst = Math.min(Math.max(pet.thirst, 0), 100);
    pet.mood = Math.min(Math.max(pet.mood, 0), 100);

    update();
}, 3000);

update();
