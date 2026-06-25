async function joinChannelReward() {

    window.open(
        "https://t.me/aiventrahub",
        "_blank"
    );

    if (localStorage.getItem("channelJoined")) {

        alert("✅ Reward already claimed");

        return;
    }

    coins += 50;

    localStorage.setItem(
        "channelJoined",
        "true"
    );

    await updateCoins();

    alert("🎉 Telegram Task Completed! +50 Coins");
}
