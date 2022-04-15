function leiaMais() {
  const pontos = document.getElementById("pontos");
  const mais = document.getElementById("mais");

  if (pontos.style.display === "none") {
    pontos.style.display = "inline";
    mais.style.display = "none";
  } else {
    pontos.style.display = "none";
    mais.style.display = "inline";
  }
}

document
  .querySelectorAll("#resposta-card")
  .forEach((el) => el.addEventListener("click", verAResposta));

function verAResposta() {
  const collecton = this.children;

  for (let index = 0; index < collecton.length; index++) {
    const element = collecton[index];

    if (element.classList.contains("resposta-texto")) {
      if (element.children[0].style.display === "none") {
        element.children[1].style.display = "none";
        element.children[0].style.display = "inline";
      } else {
        element.children[0].style.display = "none";
        element.children[1].style.display = "inline";
      }
    }

    if (element.classList.contains("resposta-resposta")) {
      if (element.classList.contains("hide")) {
        element.classList.remove("hide");
        element.classList.add("show");
      } else {
        element.classList.remove("show");
        element.classList.add("hide");
      }
    }

  }
}
