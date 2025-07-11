function toggleBox(id) {
  const el = document.getElementById(id);
  const allBoxes = document.querySelectorAll('.card-body');
  allBoxes.forEach(box => {
    if (box.id !== id) box.classList.remove('show');
  });
  el.classList.toggle('show');
}

function sendToBot(fileInputId) {
  const fileInput = document.getElementById(fileInputId);
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select a file first!");
    return;
  }

  console.log("File selected:", file.name);

  // Close Telegram WebApp
  if (window.Telegram && Telegram.WebApp) {
    Telegram.WebApp.close();
  } else {
    alert("Not inside Telegram WebApp");
  }
}
