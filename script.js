function selectApp(appName) {
  const message = `This app activated: ${appName}`;
  Telegram.WebApp.sendData(message);  // Send to bot
  Telegram.WebApp.close();            // Close web app
}
