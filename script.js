function selectApp(appName) {
  Telegram.WebApp.sendData(`This app activated: ${appName}`);
  Telegram.WebApp.close();
}
