const ficha1 = document.getElementById('Ficha1')
const cuadro = document.querySelectorAll('.cuadro')
const pInfo = document.getElementById('info')

let FichaMolde1

cuadro.forEach(cuadro => {
    cuadro.addEventListener('dragover', dragOver)
    cuadro.addEventListener('dragenter', dragEnter)
    cuadro.addEventListener('dragleave', dragLeave)
    cuadro.addEventListener('drop',dragDrop)
})


//Eventos
ficha1.addEventListener('drag', dragging)
ficha1.addEventListener('dragstart', dragStart)
ficha1.addEventListener('dragend', dragEnd)

//Funciones
function dragging(){
    pInfo.textContent = "Ficha siendo arrastrado"
}

function dragStart(e){
    FichaMolde1 = e.target
    console.log(`Ficha ${FichaMolde1.id} comenzo a arrastrarse`)
}

function dragEnd(){
    pInfo.textContent = "Ficha ha sido soltado"
}

function dragOver(e){
    e.preventDefault()
    // console.log(`Ficha esta siendo arrastrado sobre ${e.target.classList}`)
}

function dragEnter(e){
    e.target.classList.add('highlight')
    // console.log(`Ficha esta entrando en ${e.target.classList}`)
}

function dragLeave(e){
    // console.log(`Ficha ha salido de ${e.target.classList} dl`)
    e.target.classList.remove('highlight')
}

function dragDrop(e){
    console.log(`Ficha ha sido soltado en ${e.target.classList}`)
    e.target.appendChild(FichaMolde1)
    e.target.classList.remove('highlight')
<<<<<<< HEAD
}
=======
}

let zonaLanzamientoActual = null;

  document.getElementById("Ficha1").addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", "elemento");
  });

  document.querySelectorAll(".cuadro").forEach((zone) => {
    zone.addEventListener("dragover", (e) => e.preventDefault());

    zone.addEventListener("drop", (e) => {
      e.preventDefault();
      zonaLanzamientoActual = zone;
      document.getElementById("modal").style.display = "block";
      document.getElementById("overlay").style.display = "block";
    });
  });

   function confirmarDrop() {
    const color = document.getElementById("colorSelect").value;
    const name = document.getElementById("nameInput").value;

    if (name.trim() !== "") {
      zonaLanzamientoActual.innerHTML = `<div font-size: 100%; border: 2px solid black; width: 120px; height: 100px; padding: 10px; style="background-color:${color}; color:white;">${name}</div>`;
      closeModal();
    }
  }

    function cancelarDrop() {
    closeModal();
  }

    function cerrarModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("nameInput").value = "";
  }
>>>>>>> 459d973 (Prototipo v1 c)
