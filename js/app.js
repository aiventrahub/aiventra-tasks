let coins = 0;
const USER_ID = "123456"; // পরে Telegram ID হবে

document.addEventListener("DOMContentLoaded", async () => {
  await loadUser();
});

async function loadUser() {
  const { data, error } = await window.supabaseClient
    .from("users")
    .select("*")
    .eq("telegram_id", USER_ID)
    .single();

  if (data) {
    coins = data.coins || 0;
    document.getElementById("coins").innerText = coins;
  } else {
    const { data: newUser } = await window.supabaseClient
      .from("users")
      .insert([
        {
          telegram_id: USER_ID,
          username: "testuser",
          coins: 250,
          referrals: 0
        }
      ])
      .select()
      .single();

    coins = 250;
    document.getElementById("coins").innerText = coins;
  }
}

async function updateCoins() {
  document.getElementById("coins").innerText = coins;

  await window.supabaseClient
    .from("users")
    .update({ coins: coins })
    .eq("telegram_id", USER_ID);
}

async function claimReward() {

  let lastClaim = localStorage.getItem("lastClaim");
  let now = Date.now();

  if (!lastClaim || (now - parseInt(lastClaim)) >= 86400000) {

    coins += 50;

    localStorage.setItem("lastClaim", now);

    await updateCoins();

    alert("🎉 Daily Reward Claimed! +50 Coins");

  } else {

    alert("⏳ Daily reward already claimed. Come back tomorrow.");

  }
}
