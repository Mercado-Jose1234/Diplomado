<template>
  <div
    id="paso-2"
    class="seccion bg-gradient-to-b from-white to-[#f3f3f3] max-w-[800px] mx-auto py-5 px-10 border rounded-lg"
  >
    <h2 class="text-[30px] font-bold mb-2 text-center text-[#1a1833]">Tus datos y Cita</h2>
    <p class="text-[20px] font-bold mb-2 text-center text-[#1a1833]">
      Agrega tus datos y la fecha de la cita
    </p>
    <hr />

    <form class="formulario">
      <div class="flex flex-col mb-3 mt-1">
        <label for="nombre" class="text-lg font-semibold mb-2" >Nombre completo</label>
        <input
        :value="nombreUsuario"
          id="nombre"
          type="text"
          placeholder="Ingresa tu nombre"
          class="border-2 border-gray-300 p-2 rounded-lg text-sm"
          readonly
        />
      </div>
      <div class="flex flex-col mb-6 mt-6">
      <label for="nombre" class="text-lg font-semibold mb-2">Elige un barbero</label>
      <select class="py-3" name="opciones" id="opciones" onchange="mostrarSeleccion()">
        <option value="">Selecciona una opción</option>
        
      </select>
      </div> 
      
      <div class="lg:grid gap-6 mb-2 md:grid-cols-2">
        <div class="flex flex-col mb-4">
          <label for="fecha" class="text-lg font-semibold mb-2">Fecha de la cita</label>
          <input id="fecha" type="date" class="border-2 border-gray-300 p-2 rounded-lg text-sm" />
        </div>
        <div class="flex flex-col mb-2">
          <label for="hora" class="text-lg font-semibold mb-2">Hora de la cita</label>
          <input id="hora" type="time" class="border-2 border-gray-300 p-2 rounded-lg text-sm" />
        </div>
      </div>
      <div class="flex flex-col mb-4">
        <label for="observacion" class="text-lg font-semibold mb-2">Observacion</label>
        <input
          id="observacion"
          type="text"
          class="border-2 border-gray-300 p-2 rounded-lg h-20 text-sm"
        />
      </div>

      <!-- <button
                  onclick="alert('Los datos de tu cita han sido guardados'); location.reload();"
                  type="button"
                  class="mx-auto text-gray-200 px-6 py-2 bg-gray-600 sm:my-8 sm:w-auto my-2 w-full rounded hover:text-white"
                >
                  Crear Cita
                </button> -->
    </form>
  </div>
</template>


<script>
  async function cargarBarberos() {
    const response = await fetch('https://apigenerator.dronahq.com/api/0CgNso0C/usuarios');
    const usuarios = await response.json();
    const select = document.getElementById('opciones');

    usuarios.forEach(usuario => {
      if (usuario.rol==='barbero') {
        const option = document.createElement('option');
      option.value = usuario.id;
      option.text = usuario.nombres;
      select.appendChild(option);
      }
     
    });
  }


  cargarBarberos();

  export default {
  data() {
    return {
      nombreUsuario: localStorage.getItem('nombre')
    };
  }
};

</script>

