var quill = new Quill("#editor", {
  modules: {
    toolbar: "#toolbar",
  },
  theme: "snow",
});

function criarTopico() {
  const { classList } = document.getElementById("formulario");
  const topico = document.getElementById("criar-topico");
  const topicoEnviado = document.getElementById("criar-topico-enviado");

  if (classList.contains("hide")) {
    classList.remove("hide");
    classList.add("show");
    topico.classList.add("hide");
  } else {
    topico.classList.remove("hide");
    classList.remove("show");
    classList.add("hide");
  }

  if (!topicoEnviado.classList.contains("hide")) {
    topicoEnviado.classList.add("hide");
  }
}

function enviar() {
  const { classList } = document.getElementById("formulario");
  const topicoEnviado = document.getElementById("criar-topico-enviado");

  if (classList.contains("show")) {
    classList.add("hide");
    classList.remove("show");
    topicoEnviado.classList.remove("hide");
  }

  const assunto = document.getElementById("assunto");
  const conteudo = quill.getContents();

  var texto = null;
  conteudo.ops.map((item) => {
    if (item?.attributes) {
      if (item?.attributes.italic) {
        texto += `<i>${item.insert}</i>`;
      }
      if (item?.attributes.bold) {
        texto += `<strong>${item.insert}</strong>`;
      }
    } else {
      texto += item.insert;
    }
  });

  addNovoTopico(texto, assunto.value);
}

function addNovoTopico(texto, assunto) {
  const $respostas = document.getElementById("respostas");

  const createElemRespostaCard = document.createElement("div");
  createElemRespostaCard.className = "resposta-card card shadow mt-3 ";
  createElemRespostaCard.setAttribute("id", "resposta-card");

  const createElemAssunto = document.createElement("h2");
  createElemAssunto.className = "blur pt-3 px-3";

  let createtextNodeAssunto;
  if (assunto) {
    createtextNodeAssunto = document.createTextNode(assunto);
  } else {
    createtextNodeAssunto = document.createTextNode(
      "Assunto da pergunta aparece aqui"
    );
  }

  createElemAssunto.appendChild(createtextNodeAssunto);

  const createElemAutor = document.createElement("p");
  createElemAutor.className = "autor blur px-3";

  const createTextNodeAutor = document.createTextNode("Carlos Henrique Santos");
  createElemAutor.appendChild(createTextNodeAutor);

  const createElemTexto = document.createElement("p");
  createElemTexto.className = "blur px-3";

  if (texto.trim() !== 'null') {
    createElemTexto.innerHTML = texto;
  } else {
    createElemTexto.innerHTML =
      "Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo?";
  }

  const createElemMask = document.createElement("div");
  createElemMask.className =
    "d-flex flex-column justify-content-center align-items-center";
  createElemMask.setAttribute("id", "mask");

  const createElemImg = document.createElement("img");
  createElemImg.src = "/public/img/certinho_black.svg";
  createElemImg.setAttribute("alt", "certinho");
  createElemMask.appendChild(createElemImg);

  const createElementPMask = document.createElement("p");
  const createTextNodePMask = document.createTextNode(
    "Aguardando feedback dos autores"
  );
  createElementPMask.appendChild(createTextNodePMask);
  createElemMask.appendChild(createElementPMask);

  const createElembutton = document.createElement("button");
  createElembutton.innerHTML = "Editar tópico";
  createElemMask.appendChild(createElembutton);

  createElemRespostaCard.appendChild(createElemAssunto);
  createElemRespostaCard.appendChild(createElemAutor);
  createElemRespostaCard.appendChild(createElemTexto);
  createElemRespostaCard.appendChild(createElemMask);

  $respostas.appendChild(createElemRespostaCard);
  $respostas.insertBefore(createElemRespostaCard, $respostas.firstChild);
}
