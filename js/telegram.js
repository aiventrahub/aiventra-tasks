const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

if (tg.initDataUnsafe?.user) {
    window.USER_ID = tg.initDataUnsafe.user.id;
    window.USERNAME = tg.initDataUnsafe.user.username || "";

    console.log("User ID:", window.USER_ID);
    console.log("Username:", window.USERNAME);
}
