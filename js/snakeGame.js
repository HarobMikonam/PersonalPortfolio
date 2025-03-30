const gameStartButton = document.querySelector(".start-game");
const gameSettingsButton = document.querySelector(".settings");
const heroText = document.querySelector(".textcontent");
const gameSettingsModal = document.querySelector(".gamesettings");
const gameLogo = document.querySelector(".thnakelogo");

//opening modal for settings
gameSettingsButton.addEventListener("click", (e) => {
  gameSettings();
});

// making the hero text and modal go away once player presses gameStart
gameStartButton.addEventListener("click", (e) => {
  gameStart();
});

const gameStart = () => {
  gameSettingsModal.classList.add("fade-out");
  heroText.classList.add("fade-out");
};

const gameSettings = () => {
  gameLogo.classList.add("fade-out");
};
