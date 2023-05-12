<script setup>
import subMenu from '../components/principal/subMenu.vue'
import serviciosDisponibles from '../components/Reservaciones/serviciosDisponibles.vue'
import datosCita from '../components/Reservaciones/datosCita.vue'
import resumenCita from '../components/Reservaciones/resumenCita.vue'


let paso = 1
let pasoInicial = 1
let pasoFinal = 3
const cita = {
  nombre: '',
  fecha: '',
  hora: '',
  servicios: []
}

document.addEventListener('DOMContentLoaded', function () {
  iniciarApp()
})

function iniciarApp() {
  mostrarSeccion()
  tabs()
  botonesPaginador()
  paginaSiguiente()
  paginaAnterior()
  consultarAPI()
  idCliente()
  nombreCliente()
  seleccionarFecha() // Añade la fecha de la cita en el objeto
  seleccionarHora() // Añade la hora de la cita en el objeto
  mostrarResumen()
}

function mostrarSeccion() {
  // ocultar la seccion que tenga la clase mostrar
  const seccionAnterior = document.querySelector('.mostrar')
  if (seccionAnterior) {
    seccionAnterior.classList.remove('mostrar')
  }

  //seleccionar la seccion con el paso
  const pasoSelector = `#paso-${paso}`
  const seccion = document.querySelector(pasoSelector)
  seccion.classList.add('mostrar')

  const tabAnterior = document.querySelector('.bg-gray-800')
  if (tabAnterior) {
    tabAnterior.classList.remove('bg-gray-800')
  }
  // resalta el tab actual
  const tab = document.querySelector(`[data-paso="${paso}"]`)
  tab.classList.add('bg-gray-800')
}
function tabs() {
  const botones = document.querySelectorAll('.tabs button')
  botones.forEach((boton) => {
    boton.addEventListener('click', function (e) {
      paso = parseInt(e.target.dataset.paso)
      mostrarSeccion()
      botonesPaginador()
    })
  })
}

function botonesPaginador() {
  const paginaAnterior = document.querySelector('#anterior')
  const paginaSiguiente = document.querySelector('#siguiente')

  if (paso === 1) {
    paginaAnterior.classList.add('ocultar')
    paginaSiguiente.classList.remove('ocultar')
  } else if (paso === 3) {
    paginaAnterior.classList.remove('ocultar')
    paginaSiguiente.classList.add('ocultar')

  } else {
    paginaAnterior.classList.remove('ocultar')
    paginaSiguiente.classList.remove('ocultar')
  }

  mostrarSeccion()
}

function paginaAnterior() {
  const paginaAnterior = document.querySelector('#anterior')
  paginaAnterior.addEventListener('click', function () {
    if (paso <= pasoInicial) return
    paso--

    botonesPaginador()
  })
}
function paginaSiguiente() {
  const paginaSiguiente = document.querySelector('#siguiente')
  paginaSiguiente.addEventListener('click', function () {
    if (paso >= pasoFinal) return
    paso++

    botonesPaginador()
  })
}

async function consultarAPI() {
  try {
    const url = 'https://apigenerator.dronahq.com/api/PCt4_saW/servicios'
    const resultado = await fetch(url)
    const servicios = await resultado.json()
    mostrarServicios(servicios)
  } catch (error) {
    console.log(error)
  }

}

function mostrarServicios(servicios) {
  servicios.forEach((servicio) => {
    const { id, nombre, descripcion, costo, imagen } = servicio

console.log(servicio)
    const nombreServicio = document.createElement('P')
    nombreServicio.classList.add('nombre-servicio')
    nombreServicio.textContent = nombre

    const descripcionServicio = document.createElement('P')
    descripcionServicio.classList.add('descripcion-servicio')
    descripcionServicio.textContent = descripcion

    const precioServicio = document.createElement('P')
    precioServicio.classList.add('precio-servicio')
    precioServicio.textContent = `$${costo}`

    const imagenServicio = document.createElement('P')
    imagenServicio.classList.add('imagen-servicio')
    imagenServicio.textContent = imagen

    const servicioDiv = document.createElement('DIV')
    servicioDiv.classList.add('servicio')
    servicioDiv.dataset.idServicio = id

    servicioDiv.onclick = function () {
      seleccionarServicio(servicio)
    }

    servicioDiv.appendChild(nombreServicio)
    servicioDiv.appendChild(precioServicio)
    // servicioDiv.appendChild(imagenServicio);

    document.querySelector('#servicios').appendChild(servicioDiv)
  })
}
function seleccionarServicio(servicio) {
  const { id } = servicio
  const { servicios } = cita

  // Identificar el elemento al que se le da click
  const divServicio = document.querySelector(`[data-id-servicio="${id}"]`)

  // Comprobar si un servicio ya fue agregado
  if (servicios.some((agregado) => agregado.id === id)) {
    // Eliminarlo
    cita.servicios = servicios.filter((agregado) => agregado.id !== id)
    divServicio.classList.remove('seleccionado')
  } else {
    // Agregarlo
    cita.servicios = [...servicios, servicio]
    divServicio.classList.add('seleccionado')
  }
  console.log(cita)
}

function idCliente() {
  // cita.id = document.querySelector('#id').value;
}
function nombreCliente() {
  // cita.nombre = document.querySelector('#nombre').value;
}
function seleccionarFecha() {
  const inputFecha = document.querySelector('#fecha')
  inputFecha.addEventListener('input', function (e) {
    const dia = new Date(e.target.value).getUTCDay()

    if ([0].includes(dia)) {
      e.target.value = ''
      mostrarAlerta('Los dias domingo, no trabajamos', 'error', '.formulario')
    } else {
      cita.fecha = e.target.value
    }
  })
}

function seleccionarHora() {
  const inputHora = document.querySelector('#hora')
  inputHora.addEventListener('input', function (e) {
    const horaCita = e.target.value
    const hora = horaCita.split(':')[0]
    if (hora < 8 || hora > 18) {
      e.target.value = ''
      // mostrarAlerta('Hora No Válida', 'error', '.formulario');
    } else {
      cita.hora = e.target.value

      // console.log(cita);
    }
  })
}

function mostrarAlerta(mensaje, tipo, elemento, desaparece = true) {
  // Previene que se generen más de 1 alerta
  const alertaPrevia = document.querySelector('.alerta')
  if (alertaPrevia) {
    alertaPrevia.remove()
  }

  // Scripting para crear la alerta
  const alerta = document.createElement('DIV')
  alerta.textContent = mensaje
  alerta.classList.add('alerta')
  alerta.classList.add(tipo)

  const referencia = document.querySelector(elemento)
  referencia.appendChild(alerta)

  if (desaparece) {
    // Eliminar la alerta
    setTimeout(() => {
      alerta.remove()
    }, 3000)
  }
}

</script>

<style>
.seccion {
  display: none;
}

.mostrar {
  display: block;
}

.ocultar {
  visibility: hidden;
}

.btn:hover {
  cursor: pointer;
  background-color: #2196f3;
  width: 100%;
}

.actual {
  width: 10rem;
}
.servicio {
  padding: 1rem;
  margin: 1rem;
  background-color: #e2e2e2;
  border-radius: 0.5rem;
  transition-property: transform;
  transition-duration: 400ms;
  text-align: center;
  font-size: 20px;
}

.servicio:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.nombre-servicio {
  margin-bottom: 1rem;
  font-weight: 700;
}

.precio-servicio {
  color: blue;
  font-weight: 700;
}

.seleccionado {
  background-color: #bdb5f6;
  color: white;
}
.menu-list {
  display: none;
}

.menu-list.active {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #1f2937;
  z-index: 10;
}
</style>

<template>
  <div
    class="content-section pb-10 bg-cover bg-no-repeat bg-[url('https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
    <br/>
    <div style="max-width: 65rem" class="mx-auto bg-cover bg-no-repeat bg-[url('https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] border-2 border-gray-200 rounded-md shadow-lg">
      <subMenu />
      <div style="max-height: 1000px" class="flex h-screen">
        <div class="flex-1 flex flex-col w-11/12 overflow-hidden">
          <div class="flex-1 overflow-y-auto px-4">
            <!-- Componentes de Servicios Disponibles, Datos de la cita y el resumen de la cita -->
            <serviciosDisponibles/>
            <datosCita/>
            <resumenCita/>
            <!--.Componentes de Servicios Disponibles, Datos de la cita y el resumen de la cita -->
          </div>
          <div class="flex flex-col sm:flex-row w-full px-4 justify-between items-center">
            <button id="anterior" type="button" data-paso="1" class="text-gray-200 px-6 py-2 dark:bg-[#124b5c] sm:my-8 sm:w-auto my-2 w-full rounded hover:text-white">
              Anterior
            </button>

            <button id="siguiente" type="button" data-paso="2" class="text-gray-200 px-6 py-2 dark:bg-[#124b5c] sm:my-8 sm:w-auto w-full rounded hover:text-white">
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
