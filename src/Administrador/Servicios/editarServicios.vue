<template>
<div class="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
  <h1 class="text-2xl font-bold mb-4">Editar usuario</h1>
  <form @submit.prevent="guardar" class="space-y-4">
    <div>
      <label class="block font-bold mb-2" for="nombre">Nombre</label>
      <input
        v-model="servicio.nombre"
        class="block w-full border border-gray-400 rounded-lg py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        id="nombre"
        type="text"
        placeholder="Ingrese su nombre"
      />
    </div>
    <div>
      <label class="block font-bold mb-2" for="descripcion">Descripción</label>
      <input
        v-model="servicio.descripcion"
        class="block w-full border border-gray-400 rounded-lg py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        id="descripcion"
        type="text"
        placeholder="Ingrese su descripción"
      />
    </div>
    <div>
      <label class="block font-bold mb-2" for="costo">Costo</label>
      <input
        v-model="servicio.costo"
        class="block w-full border border-gray-400 rounded-lg py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        id="costo"
        type="text"
        placeholder="Ingrese su costo"
      />
    </div>
    <div>
      <label class="block font-bold mb-2" for="imagen">Imagen</label>
      <input
        v-model="servicio.imagen"
        class="block w-full border border-gray-400 rounded-lg py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        id="imagen"
        type="text"
        placeholder="Ingrese su imagen"
      />
    </div>
    <div class="flex justify-end">
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
      >
        Guardar
      </button>
    </div>
  </form>
</div>
</template>
<style scoped>
input:focus {
  border-color: #63b3ed;
  outline: 0;
  box-shadow: 0 0 0 2px rgba(99, 179, 237, 0.5);
}
</style>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      servicio: {
        nombre: '',
        descripcion: '',
        costo: '',
        imagen: ''
      },
      error: ''
    }
  },
  created() {
    this.cargarDatos()
  },
  methods: {
    async cargarDatos() {
      try {
        const response = await axios.get(
          'https://apigenerator.dronahq.com/api/PCt4_saW/servicios/' +this.$route.params.id
        )
        this.servicio = response.data
      } catch (error) {
        console.error(error)
      }
    },

    async guardar() {
      try {
        await axios.put(
          'https://apigenerator.dronahq.com/api/PCt4_saW/servicios/' + this.$route.params.id,
          {
            nombre: this.servicio.nombre,
            descripcion: this.servicio.descripcion,
            costo: this.servicio.costo,
            imagen: this.servicio.imagen
          }
        )
        this.$router.push('/listServicios')
      } catch (error) {
        console.error(error)
      }

    }


  }
}
</script>
