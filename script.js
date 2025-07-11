function selectApp(appName) {
  if (window.Telegram && Telegram.WebApp) {
    Telegram.WebApp.sendData(appName);  // send selected app name to bot
    Telegram.WebApp.close();            // close the web app
  } else {
    alert("Telegram WebApp not available.");
  }
}
