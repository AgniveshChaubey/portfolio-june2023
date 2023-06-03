import { orangeThemeDark, orangeThemeLight } from "../theme/theme";

// const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const toggleButton = document.getElementById("sliding-mode-toggle");
console.log(toggleButton)
// toggleButton.addEventListener("click", () => {
//   isDark = !isDark;
// });

export const themeData = {
  themeArray: [orangeThemeDark, orangeThemeLight]
};
