const messi = document.getElementById("messi");
const keysPressed = {};

document.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  keysPressed[event.key] = true;
  handleKeys();
});

document.addEventListener("keyup", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  keysPressed[event.key] = false;
  handleKeys();
});

function handleKeys() {
  const currentTop = parseInt(messi.style.top) || 300;
  const currentLeft = parseInt(messi.style.left) || 40;

  if (keysPressed["ArrowDown"]) {
    messi.style.top = currentTop + 10 + "px";
  }

  if (keysPressed["ArrowUp"]) {

    messi.style.top = currentTop - 10 + "px";
  }

  if (keysPressed["ArrowRight"]) {
    messi.classList.remove("mirror");
    messi.style.left = currentLeft + 10 + "px";
  } else if (keysPressed["ArrowLeft"]) {

    messi.classList.add("mirror");
    messi.style.left = currentLeft - 10 + "px";
  }
}
