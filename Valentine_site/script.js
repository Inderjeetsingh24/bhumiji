// Hide loading screen
window.addEventListener("load", function() {
  document.getElementById("loading").classList.add("hide");
});

// Confetti for "Yes" button
document.getElementById("yesBtn").addEventListener("click", function() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
  document.getElementById("response").innerHTML = 
    "<h2>Lessgooo! 🚀<br>DM Me jado tusi free ho for a date!</h2>";
});

// Panic for "No" button hover
document.getElementById("noBtn").addEventListener("mouseenter", function() {
  alert("Arre bhai, ek baar fir sochlo!! 😭");
});

// Sadness for "No" button click
document.getElementById("noBtn").addEventListener("click", function() {
  document.getElementById("response").innerHTML = 
    "<h2>Zindagi barbaad... but momos? 🥟</h2>";
  window.location.href = "https://www.youtube.com/shorts/rDmSb-_Ggvw"; // Replace with your meme URL
});

// Easter egg: Right-click message
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  alert("Padh toh le phele");
});

// Hidden Easter egg: Click background 3 times
let clickCount = 0;
document.body.addEventListener("click", function() {
  clickCount++;
  if (clickCount === 3) {
    alert("Gaddamnnn girl waitttttt XD");
    clickCount = 0; // Reset counter
  }
});