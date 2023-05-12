<template>
 
    <body>
      <div
        class="bg-cover bg-center h-screen"
        style="
          background-image: url('https://media.istockphoto.com/id/1292922269/es/foto/poste-de-barbero-poste-de-barber%C3%ADa-sobre-un-fondo-de-madera-con-espacio-de-copia.jpg?s=612x612&w=0&k=20&c=8OYAtHxGDFmr94iZ6MnQdj90T0tAbh2lfOu9Y5SKPAo=');
        "
      >
        <div class="container mx-auto py-8">
          <h1 class="text-4xl text-white font-bold mb-8">Barberos</h1>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              class="bg-white p-8 rounded-lg shadow-md relative transform transition duration-500 ease-in-out hover:scale-110 cursor-pointer"
              onclick="bringToFront(this)"
            >
              <h2 class="text-xl font-bold mb-4">Horarios y condiciones laborales</h2>
              <p class="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur urna
                ut semper fermentum.
              </p>
            </div>
            <div
              class="bg-white p-8 rounded-lg shadow-md relative transform transition duration-500 ease-in-out hover:scale-110 cursor-pointer"
              onclick="bringToFront(this)"
            >
              <h2 class="text-xl font-bold mb-4">Equipo y cultura de trabajo</h2>
              <p class="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur urna
                ut semper fermentum.
              </p>
            </div>
            <div
              class="bg-white p-8 rounded-lg shadow-md relative transform transition duration-500 ease-in-out hover:scale-110 cursor-pointer"
              onclick="bringToFront(this)"
            >
              <h2 class="text-xl font-bold mb-4">Mensaje de bienvenida 3</h2>
              <p class="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur urna
                ut semper fermentum.
              </p>
            </div>
          </div>
          <div class="container mx-auto px-4">
            <div class="bg-white p-8 rounded-lg shadow-md mt-8">
              <h2 class="text-xl font-bold mb-4 text-center">Tabla de citas</h2>
              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th class="px-4 py-2">Fecha</th>
                      <th class="px-4 py-2">Hora</th>
                      <th class="px-4 py-2">Cliente</th>
                      <th class="px-4 py-2">Servicio</th>
                    </tr>
                  </thead>
                  <tbody class="hover:bg-gray-200">
                    <tr>
                      <td class="px-4 py-2">Fecha 1</td>
                      <td class="px-4 py-2">Hora 1</td>
                      <td class="px-4 py-2">Cliente 1</td>
                      <td class="px-4 py-2">Servicio 1</td>
                    </tr>
                    <tr>
                      <td class="px-4 py-2">Fecha 2</td>
                      <td class="px-4 py-2">Hora 2</td>
                      <td class="px-4 py-2">Cliente 2</td>
                      <td class="px-4 py-2">Servicio 2</td>
                    </tr>
                    <tr>
                      <td class="px-4 py-2">Fecha 3</td>
                      <td class="px-4 py-2">Hora 3</td>
                      <td class="px-4 py-2">Cliente 3</td>
                      <td class="px-4 py-2">Servicio 3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="text-right mt-4">
                <a href="ruta-de-otra-pagina.html" class="text-blue-500 underline">Ver más</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  
</template>

<script>
function bringToFront(card) {
  card.style.zIndex = '9999'
}
</script>
