let coins = parseInt(localStorage.getItem("coins")) || 250;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("coins").innerText = coins;
});

function updateCoins() {
    document.getElementById("coins").innerText = coins;
    localStorage.setItem("coins", coins);
}

function claimReward() {

    let lastClaim = localStorage.getItem("lastClaim");
    let now = Date.now();

    if (!lastClaim || (now - parseInt(lastClaim)) >= 86400000) {

        coins += 50;

        localStorage.setItem("lastClaim", now);

        updateCoins();

        alert("🎉 Daily Reward Claimed! +50 Coins");

    } else {

        alert("⏳ Daily reward already claimed. Come back tomorrow.");

    }
}
