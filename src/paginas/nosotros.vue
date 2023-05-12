<script setup>


</script>

<template>

  <div class="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    
    <h2 class="text-2xl font-bold mb-4 text-center">Acerca de nosotros</h2>
    <p class="text-gray-700 leading-7 m-10  p-4 text-justify">{{ descripcion }}</p>

    <div class="m-10  p-4 border">
    <h2 class="text-2xl font-bold mb-4 text-center">Contacto e información de ubicación</h2>
    <div class="flex flex-col md:flex-row justify-between">
      <div class="mb-4 md:mr-4 md:mb-0">
        <h3 class="text-md font-bold mb-2 text-center">Dirección</h3>
        <p class="text-gray-700 mb-2">Calle 55 1G-112, Sahagun-Cordoba </p>
      </div>
      <div class="mb-4 md:mr-4 md:mb-0">
        <h3 class="text-md font-bold mb-2 text-center">Teléfono</h3>
        <p class="text-gray-700 mb-2">+57 3008839311 - 3141889211</p>
      </div>
      <div class="mb-4 md:mr-4 md:mb-0">
        <h3 class="text-md font-bold mb-2 text-center">Correo electrónico</h3>
        <p class="text-gray-700 mb-2">Urbanstylebarbershop@gmail.com</p>
      </div>
    </div>
   </div>
    <h3 class="text-xl font-bold mb-4 text-center">Nuestro equipo</h3>

    <div class="grid grid-cols-3 gap-4">
      <div v-for="miembro in equipo" :key="miembro.id">
        <img :src="miembro.foto" alt=""  class="w-48 h-48 mb-2 mx-auto">
        <h4 class="font-bold text-center">{{ miembro.nombre }}</h4>
        <p class="text-gray-700 w-60 mx-auto">{{ miembro.descripcion }}</p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      descripcion: "Somos una barbería con una sólida trayectoria de más de 10 años en el mercado, donde nos hemos enfocado en ofrecer un servicio de calidad y atención personalizada a nuestros clientes. En nuestra barbería contamos con profesionales altamente capacitados y un ambiente acogedor que te harán sentir como en casa. Nuestro compromiso es brindarte la mejor experiencia de cuidado y estilo personal, para que salgas luciendo y sintiéndote genial. ¡Te esperamos!",
      equipo: [
        {
          id: 1,
          nombre: "Marcos Goez",
          foto: "https://tiendalobo.com/wp-content/uploads/2021/12/barbero_kit_incial.jpg",
          descripcion: "Barbero con más de 5 años de experiencia en el mercado. Especialista en cortes de cabello y cuidado de la barba."
        },
        {
          id: 2,
          nombre: "Yolinda Gorreo",
          foto: "https://cdn.euroinnova.edu.es/img/subidasEditor/estilista%201-1617162322.webp",
          descripcion: "Estilista profesional con más de 8 años de experiencia. Especialista en peinados y tratamientos capilares."
        },
        {
          id: 3,
          nombre: "Jhon Atencio",
          foto: "https://i.pinimg.com/474x/88/c2/99/88c2994b956487775701ca198d17d9d4--beard-styles-salamanca.jpg",
          descripcion: "Barbero y estilista con más de 10 años de experiencia. Especialista en cortes de cabello para niños y jóvenes."
        }
      ]
    }
  }
}
</script>
