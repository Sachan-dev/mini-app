function selectApp(appName) {
  Telegram.WebApp.sendData(appName); // Ye sirf app name send karega
  Telegram.WebApp.close();
}
