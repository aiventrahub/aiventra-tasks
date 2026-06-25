const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

if (tg.initDataUnsafe && tg.initDataUnsafe.user) {

  window.USER_ID = tg.initDataUnsafe.user.id;
  window.USERNAME = tg.initDataUnsafe.user.username || "";

  alert(
    "Telegram User Found\n\nID: " +
    window.USER_ID +
    "\nUsername: " +
    window.USERNAME
  );

} else {

  alert("Telegram User NOT Found");

}
