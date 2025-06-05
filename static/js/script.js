console.log("Script caricato"); // <-- controlla che lo vedi nella console

function activateMatrix() {
  console.log("Funzione activateMatrix attivata"); // debug

  document.querySelectorAll('.text-block p').forEach(p => {
    if (!p.classList.contains('matrix')) {
      p.classList.add('hidden');
    }
  });
}

