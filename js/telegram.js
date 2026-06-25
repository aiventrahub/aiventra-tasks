const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

console.log("Telegram Object:", tg);
console.log("initData:", tg.initData);
console.log("User:", tg.initDataUnsafe?.user);

if (tg.initDataUnsafe?.user) {
    window.USER_ID = tg.initDataUnsafe.user.id;
    window.USERNAME = tg.initDataUnsafe.user.username || "";

    console.log("User ID:", window.USER_ID);
    console.log("Username:", window.USERNAME);
}
