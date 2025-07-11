function selectApp(appName) {
  if (window.Telegram && Telegram.WebApp) {
    Telegram.WebApp.sendData(appName);
    Telegram.WebApp.close();
  } else {
    alert("Telegram WebApp not available.");
  }
}
