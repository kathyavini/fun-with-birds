const container = document.querySelector(".container");
const animation = document.querySelector(".animation");

container.addEventListener("pointerdown", (ev) => {
  animation.style.setProperty("--targetX", `${ev.clientX - 240 / 2}px`);
  animation.style.setProperty("--targetY", `${ev.clientY - 314 / 2}px`);

  if (animation.offsetLeft < ev.clientX - 240 / 2) {
    animation.classList.add("flipped");
  } else {
    animation.classList.remove("flipped");
  }

  let travelDist = getDistance(
    animation.offsetLeft,
    animation.offsetTop,
    ev.clientX - 240 / 2,
    ev.clientY - 314 / 2
  );


animation.style.setProperty(
    "--speed",
    `${Math.min(8 * travelDist, 3000)}ms`
    );

//   console.log(travelDist);
//   console.log(animation.style.getPropertyValue("--speed"));

  animation.classList.add("clicked");
});

animation.addEventListener("transitionend", () => {
  animation.classList.remove("clicked");

  if (animation.offsetLeft < 0) {
    animation.classList.add("flipped");
  } else {
    animation.classList.remove("flipped");
  }

});

function getDistance(x1, y1, x2, y2) {
  let xDiff = x1 - x2;
  let yDiff = y1 - y2;

  return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}
