<template>
    <div class="flex flex-1">
    <!--Sidebar-->
    <!-- <aside
      id="sidebar"
      class="bg-side-nav w-1/2 md:w-1/6 lg:w-1/6 border-r border-side-nav hidden md:block lg:block"
    >
      <ul class="list-reset flex flex-col">
        <li class="w-full h-full py-3 px-2 border-b border-light-border bg-white">
          <a
            href="/"
            class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline"
          >
            Dashboard
          </a>
        </li>

        <li class="w-full h-full py-3 px-2 border-b border-light-border bg-white">
          <a
            href="/barbero"
            class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline"
          >
            Barbero
          </a>
        </li>

        <li class="w-full h-full py-3 px-2 border-b border-light-border bg-white">
          <a
            href="/"
            class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline"
          >
            Citas
          </a>
        </li>

        <li class="w-full h-full py-3 px-2 border-b border-light-border bg-white">
          <a
            href="/usuarios"
            class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline"
          >
            Servicios
          </a>
        </li>
      </ul>
    </aside> -->
    <!--/Sidebar-->
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-center text-4xl font-bold my-7">Listado de servicios</h1>

    <div class="flex items-center justify-between bg-gray-100 p-4">
      <a href="/crearservicios" class="px-4 py-2 rounded bg-green-500 text-white font-bold"
        >Crear servicio</a
      >

      <div class="relative">
        <input
          type="text"
          class="border border-gray-400 rounded-full py-2 pl-10 pr-4 w-full"
          placeholder="Buscar..."
        />
        <div class="absolute top-0 left-0 pl-3 pt-2">
          <svg
            class="fill-current h-4 w-4 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M19.707,18.293l-4.572-4.572C15.592,12.847,16,11.486,16,10c0-4.411-3.589-8-8-8S0,5.589,0,10s3.589,8,8,8c1.486,0,2.847-0.408,4.021-1.135l4.572,4.572c0.586,0.586,1.535,0.586,2.121,0C20.293,19.828,20.293,18.879,19.707,18.293z M2,10c0-3.309,2.691-6,6-6s6,2.691,6,6s-2.691,6-6,6S2,13.309,2,10z"
            />
          </svg>
        </div>
      </div>
    </div>

    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              id
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Nombre
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
              costo
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              imagen
            </th>

            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Opciones
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="servicio in listados"
            class="hover:bg-gray-200 bg-white border-b  dark:border-gray-700"
          >
            <td class="px-6 py-4">
              {{ servicio.id }}
            </td>
            <td class="px-6 py-4">
              {{ servicio.nombre }}
            </td>
            <td class="px-6 py-4">
              {{ servicio.descripcion }}
            </td>
            <td class="px-6 py-4">
              {{ servicio.costo }}
            </td>
            <td class="px-6 py-4">
              {{ servicio.imagen }}
            </td>

            <td>
              <div style="display: flex; justify-content: space-between">
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
                  @click="eliminar(servicio.id)"
                  class="bg-red-500 text-white py-0 px-2 rounded-md mt-4 inline-block hover:bg-gray-800 mx-2"
                >
                  <svg class="inline-block w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M16 5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v1H3a1 1 0 0 0 0 2h1v9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8h1a1 1 0 0 0 0-2h-1V5zM8 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H8V5zm7 12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8h10v9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Eliminar
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
<script>
import axios from 'axios'
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      listados: Object,
    }
  },
  mounted() {
    axios
      .get('https://apigenerator.dronahq.com/api/PCt4_saW/servicios')
      .then((response) => {
        this.listados = response.data
      })
      .catch((e) => {
        console.error(e)
      })
  },
  methods: {
    async eliminar(id) {
      try {
        if (window.confirm('Realmente desea eliminar este servicio?')) {
          const response = await axios.delete(
            'https://apigenerator.dronahq.com/api/PCt4_saW/servicios/' + id
          )
          console.log(response.data)
          window.location.reload()
        }
      } catch (error) {
        console.error(error)
      }
    },
    editar(id) {
      this.$router.push({ path: `/editarservicios/${id}`, params: { id } })
    },
  },
})



</script>
