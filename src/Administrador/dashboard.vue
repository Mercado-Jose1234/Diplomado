<script>
import axios from 'axios';

export default {
  data() {
    return {
      listado: {}
    };
  },
  mounted() {
    this.getListado();
  },
  methods: {
    async getListado() {
      try {
        const response = await axios.get('https://apigenerator.dronahq.com/api/1FopSa0v/balanceCitas');
        this.listado = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  }
}

</script>

<template>
  <!--Container -->
  <div class=" mx-20 bg-grey-400">
    <!--Screen-->
    <div class="min-h-screen flex flex-col">
      <div class="flex flex-1">
        
        <!--Main-->

        <main class="bg-white-300 flex-1 p-3 overflow-hidden">
          <div class="flex flex-col">
            <!-- Stats Row Starts Here -->
            <div class="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
              <div
                class="shadow-lg bg-blue-500 border-l-8 hover:bg-red-vibrant-dark border-red-vibrant-dark mb-2 p-2 md:w-1/4 mx-2"
              >
                <div class="p-4 flex flex-col">
                  <a href="#" class="no-underline text-black text-2xl"> 432 </a>
                  <a href="#" class="no-underline text-white text-lg">
                    Total de citas asignadas en el ultimo mes
                  </a>
                </div>
              </div>

              <div
                class="shadow bg-orange-500 border-l-8 hover:bg-info-dark border-info-dark mb-2 p-2 md:w-1/4 mx-2"
              >
                <div class="p-4 flex flex-col">
                  <a href="#" class="no-underline text-black text-2xl"> 1.423 </a>
                  <a href="#" class="no-underline text-white text-lg"> Total de usuarias </a>
                </div>
              </div>

              <div
                class="shadow bg-red-500 border-l-8 hover:bg-warning-dark border-warning-dark mb-2 p-2 md:w-1/4 mx-2"
              >
                <div class="p-4 flex flex-col">
                  <a href="#" class="no-underline text-black text-2xl"> 900 </a>
                  <a href="#" class="no-underline text-white text-lg"> Total Barberos </a>
                </div>
              </div>

              <div
                class="shadow bg-green-500 border-l-8 hover:bg-success-dark border-success-dark mb-2 p-2 md:w-1/4 mx-2"
              >
                <div class="p-4 flex flex-col">
                  <a href="#" class="no-underline text-white text-2xl"> 500 </a>
                  <a href="#" class="no-underline text-white text-lg"> Total Products </a>
                </div>
              </div>
            </div>

            <!-- /Stats Row Ends Here -->

            <!-- Card Sextion Starts Here -->

            <div class="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
              <!-- card -->

              <div class="rounded overflow-hidden shadow bg-white mx-2 w-full">
                <div class="px-6 py-2 border-b border-light-grey">
                  <div class="font-bold text-xl">Balance de citas</div>
                </div>
                <div class="table-responsive">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead
                      class="text-xs text-black uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400"
                    >
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Dias</th>
                        <th scope="col">Citas citas atendidas</th>
                        <th scope="col">Citas apartadas</th>
                        <th scope="col">Porcenytaje</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="servicios in listado"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {{ servicios.id }}
                        </th>
                        <td class="px-6 py-4">
                          {{ servicios.dia }}
                        </td>
                        <td class="px-6 py-4">
                          {{ servicios.citas_apartadas }}
                        </td>
                        <td class="px-6 py-4">
                          {{ servicios.citas_atendidas }}
                        </td>
                        <td class="px-6 py-4">
                          {{ servicios.porcentaje }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <!-- /card -->
            </div>
            <!-- /Cards Section Ends Here -->

            <!-- Progress Bar -->
            <div class="flex flex-1 flex-col md:flex-row lg:flex-row mx-2 mt-2">
              <div class="rounded overflow-hidden shadow bg-white mx-2 w-full pt-2">
                <div class="px-6 py-2 border-b border-light-grey">
                  <div class="font-bold text-xl">Progress Among Projects</div>
                </div>
                <div class="">
                  <div class="w-full">
                    <div class="shadow w-full bg-grey-light">
                      <div
                        class="bg-blue-500 text-xs leading-none py-1 text-center text-white"
                        style="width: 45%"
                      >
                        45%
                      </div>
                    </div>

                    <div class="shadow w-full bg-grey-light mt-2">
                      <div
                        class="bg-teal-500 text-xs leading-none py-1 text-center text-white"
                        style="width: 55%"
                      >
                        55%
                      </div>
                    </div>

                    <div class="shadow w-full bg-grey-light mt-2">
                      <div
                        class="bg-orange-500 text-xs leading-none py-1 text-center text-white"
                        style="width: 65%"
                      >
                        65%
                      </div>
                    </div>

                    <div class="shadow w-full bg-grey-300 mt-2">
                      <div
                        class="bg-red-800 text-xs leading-none py-1 text-center text-white"
                        style="width: 75%"
                      >
                        75%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <!--/Main-->
      </div>
    </div>
  </div>
</template>
