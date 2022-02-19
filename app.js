document.getElementById('formulario').addEventListener('submit', aggform) 

 function aggform(e) {
    let texto = document.getElementById('texto').value
    let descripcion = document.getElementById('descripcion').value

    const tarea = {
        texto,
        descripcion
    }


    if (localStorage.getItem('tareas') == null) {
        let tareas = [];
        tareas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareas))
    }else {
        let tareas = JSON.parse(localStorage.getItem('tareas'))
        tareas.push(tarea)
        localStorage.setItem('tareas', JSON.stringify(tareas))
    }
    obtenertareas();
    document.getElementById('formulario').reset();
    e.preventDefault();
}


function obtenertareas() {
    let tareas = JSON.parse(localStorage.getItem('tareas'))
    let vertareas = document.getElementById('tareas')

    vertareas.innerHTML = '';

    for (let i = 0; i < tareas.length; i++) {
        let texto = tareas[i].texto
        let descripcion = tareas[i].descripcion
         vertareas.innerHTML += `<div class="card mb-4">
         <div class="card-body">
        <p>${texto} - ${descripcion}</p>
        <a class="btn btn-danger" onclick=" borrartodo('${texto}')">borrar</a>
         </div>
         </div>` 
    }
}

obtenertareas();


function borrartodo(texto) {
    let tareas = JSON.parse(localStorage.getItem('tareas'))
    for (let index = 0; index < tareas.length; index++) {
        if (tareas[index].texto == texto) {
            tareas.splice(index,1)
        }
        localStorage.setItem('tareas', JSON.stringify(tareas))
    }
    obtenertareas();
}

