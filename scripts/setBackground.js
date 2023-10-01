const body = document.querySelector("body");

export function setBackground(targetHref) {
  const universe = JSON.stringify(targetHref).includes("universe");
  const explorer = JSON.stringify(targetHref).includes("explorer");

  if (universe) {
    body.style.background =
      "url('./assets/mountains-universe-2.jpg') no-repeat center center / cover fixed";
  } else if (explorer) {
    body.style.background =
      "url('./assets/mountains-universe-3.jpg') no-repeat center center / cover fixed";
  } else {
    body.style.background =
      "url('./assets/mountains-universe-1.jpg') no-repeat center center / cover fixed";
  }
}
