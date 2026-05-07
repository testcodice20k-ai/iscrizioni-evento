const MAX = 50;
const EVENTO = "Evento Partecipanti";

let dati = JSON.parse(localStorage.getItem("iscritti") || "[]");

function aggiornaUI() {

  if (document.getElementById("eventName"))
    document.getElementById("eventName").innerText = EVENTO;

  if (document.getElementById("counter"))
    document.getElementById("counter").innerText =
      dati.length + " / " + MAX;

  if (document.getElementById("bar"))
    document.getElementById("bar").style.width =
      (dati.length / MAX * 100) + "%";

  if (document.getElementById("lista")) {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    dati.forEach(p => {
      let li = document.createElement("li");
      li.innerText = p.nome + " " + p.cognome;
      lista.appendChild(li);
    });
  }
}

function invia() {

  if (dati.length >= MAX) {
    alert("Posti esauriti");
    return;
  }

  let nome = document.getElementById("nome").value;
  let cognome = document.getElementById("cognome").value;

  dati.push({ nome, cognome });

  localStorage.setItem("iscritti", JSON.stringify(dati));

  document.getElementById("msg").innerText =
    "Iscrizione completata";

  aggiornaUI();
}

aggiornaUI();
