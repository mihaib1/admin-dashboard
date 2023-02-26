favBtn = document.querySelectorAll(".favourite");
followBtn = document.querySelectorAll(".follow");
shareBtn = document.querySelectorAll(".share");
img = document.getElementsByTagName("img");

favBtn.forEach(btn => btn.textContent = "Favourite");
followBtn.forEach(btn => btn.textContent = "Follow");
shareBtn.forEach(btn => btn.textContent = "Share");

