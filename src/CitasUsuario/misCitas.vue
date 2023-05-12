<script>
import axios from 'axios';

async function fetchData() {
  try {
    const response = await axios.get('https://apigenerator.dronahq.com/api/wcp6Q_U4/micita');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }

}

export default {
  data() {
    return {
      listados: {}
    };
  },
  async mounted() {
    try {
      const data = await fetchData();
      this.listados = data;

    } catch (error) {
      // Manejar el error al obtener los datos
    }
  },
  methods: {
   
  }
};
</script>

<template>
  <div class="flex flex-1">

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex items-center justify-center bg-gray-100 p-4">
          <h1 class="mb-5 text-4xl ">Mis Citas</h1>
      </div>

      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                #
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Fecha
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                descripcion
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Estado
              </th>

              <th
                scope="col"
                class="px-6 mx-auto py-3 text-center  text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Opciones
              </th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="servicio in listados" :key="servicio.id"
              class="hover:bg-gray-200 bg-white border-b  dark:border-gray-700"
            >
              <td class="px-6 py-4">
                {{ servicio.id }}
              </td>
              <td class="px-6 py-4">
                {{ servicio.fecha}}
              </td>
              <td class="px-6 py-4">
                {{ servicio.observacion }}
              </td>
              <td class="px-6 py-4">
                {{ servicio.id_estado }}
              </td>

              <td>
                <div class="flex justify-center">
                  <button
                    @click="editar(servicio.id)"
                    class="bg-blue-500 text-white py-2 px-2 rounded-md mt-4 inline-block hover:bg-gray-800 mx-2"
                  >
                    <svg class="inline-block w-4 h-4 mr-2 fill-current" viewBox="0 0 20 20">
                      <path
                        d="M14.098 2.636a.999.999 0 00-1.414 0l-8.485 8.485a.999.999 0 000 1.414l4.243 4.243a.999.999 0 001.414 0l8.485-8.485a.999.999 0 000-1.414l-4.243-4.243zm-2.828 2.828L3.05 13.152v2.828h2.828L13.12 7.292l-2.828-2.828z"
                      />
                    </svg>
                    Editar
                  </button>
            
                  <button
                    @click="cancelar(servicio)"
                    :disabled="servicio.id_estado === 3"
                    class="bg-green-500 text-white py-2 px-2 rounded-md mt-4 inline-block hover:bg-gray-800 mx-2"
                  >
                    <svg class="inline-block w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M16 5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v1H3a1 1 0 0 0 0 2h1v9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8h1a1 1 0 0 0 0-2h-1V5zM8 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H8V5zm7 12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8h10v9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Cancelar
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
