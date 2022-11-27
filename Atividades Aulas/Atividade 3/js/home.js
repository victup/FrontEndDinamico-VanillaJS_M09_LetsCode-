(() => {
  const homeStyle = document.createElement("script");
  homeStyle.setAttribute("src", "js/styles/homeStyle.js");
})();

for (const files of [
  "./js/common/functions.js",
  "./js/style.js",
  "./js/apis.js",
  "./js/header.js",
  "./js/livros.js",
]) {
  const script = document.createElement("script");
  script.setAttribute("src", `${files}`);
  document.head.appendChild(script);
}