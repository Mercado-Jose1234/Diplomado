<template>
<br>
<br>
  <div class="bg-gradient-to-b from-white to-[#f3f3f3] max-w-[800px] mx-auto py-5 px-10 border rounded-lg ">
    <h2 class="text-center text-4xl font-bold my-7"><strong>¡Añade nuevos servicios a la lista!</strong></h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label for="nombre" class="block mb-1 font-medium">Nombre:</label>
        <input id="nombre" type="text" v-model="nombre" class="border rounded-lg p-2 w-full">
      </div>
      <div>
        <label for="costo" class="block mb-1 font-medium">Costo:</label>
        <input id="costo" type="text" v-model="costo" class="border rounded-lg p-2 w-full">
      </div>
    </div>

      <div>
        <label for="descripcion" class="block mb-1 font-medium">Descripción:</label>
        <input id="descripcion" type="text" v-model="descripcion" class=" border rounded-lg p-2 w-full h-20">
      </div>
     
      <div>
        <label for="imagen" class="block mb-1 font-medium">Imagen:</label>
        <input id="imagen" type="file"  class="border rounded-lg p-2 w-full">
      </div>
    <button @click="sendData" class="mt-4 bg-blue-500 text-white rounded-lg px-4 py-2">Enviar</button>
  </div>
</template> 

<style>
@media (min-width: 640px) {
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style> 

<script>
import axios from 'axios';

export default {
  data() {
    return {
      nombre: '',
      descripcion: '',
      costo: '',
      imagen: 'Null',
    };
  },
  methods: {
    async sendData() {
      const response = await axios.post('https://apigenerator.dronahq.com/api/PCt4_saW/servicios', {
        nombre: this.nombre, descripcion:this.descripcion, costo:this.costo, imagen:this.imagen,
      });
      this.$router.push('/listServicios') 
    },
  },
};
</script>
