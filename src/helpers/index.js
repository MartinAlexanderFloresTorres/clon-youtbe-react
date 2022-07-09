export function getBusquedad(q) {
  const body = document.querySelector("body");
  let url = `https://www.youtube.com/results?search_query=${q}`;
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.style.display = "none";
  a.classList.add("linkBusquedad");
  body.appendChild(a);
  const link = document.querySelector(".linkBusquedad");
  if (link) {
    link.click();
    link.remove();
  }
}
