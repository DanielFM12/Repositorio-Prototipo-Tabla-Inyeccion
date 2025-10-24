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
}