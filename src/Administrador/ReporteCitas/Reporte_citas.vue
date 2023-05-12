<template>
  <body>
    <div>
      <div>
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center mb-4">
            <h1 class="text-2xl font-bold text-gray-700">Reporte de citas</h1>
          </div>

          <div class="flex items-center justify-between bg-gray-100 p-4">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              @click="imprimirReporte"
            >
              Imprimir
            </button>
            <label class="font-bold">Desde</label>
            <input
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 py-2 px-2"
              type="date"
              v-model="fechaInicio"
            />
            <label class="font-bold">Hata</label>
            <input
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 py-2 px-2"
              type="date"
              v-model="fechaFin"
            />
            <button
              class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"
              @click="FiltrarReporte"
            >
              Filtrar Por Fecha
            </button>
          </div>

          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th class="px-4 py-2">#</th>
                  <th class="px-4 py-2">Fecha</th>
                  <th class="px-4 py-2">Servicio</th>
                  <th class="px-4 py-2">Cliente</th>
                  <th class="px-4 py-2">Estado</th>
                  <th class="px-4 py-2">Precio</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(cita, index) in reporteGenerado ? citasFiltradas : citas"
                  :key="cita.id"
                  class="hover:bg-gray-200"
                >
                  <td class="border px-4 py-2">{{ index + 1 }}</td>
                  <td class="border px-4 py-2">{{ cita.fecha }}</td>
                  <td class="border px-4 py-2">{{ cita.observacion }}</td>
                  <td class="border px-4 py-2">{{ cita.id_usuario }}</td>
                  <td class="border px-4 py-2">{{ cita.id_estado }}</td>
                  <td class="border px-4 py-2">{{ cita.valor_total }}</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2 font-bold" colspan="5">Total</td>
                  <td class="border px-4 py-2 font-bold">{{ sumarColumnaPrecio() }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      citas: [],
      fechaInicio: '',
      fechaFin: '',
      citasFiltradas: [], // Para almacenar las citas filtradas
      reporteGenerado: false
    }
  },
  methods: {
    ...mapActions(['mostrarAlerta']),

    FiltrarReporte() {
      // Verificar que se hayan seleccionado las fechas de filtro
      if (!this.fechaInicio || !this.fechaFin) {
        this.mostrarAlerta('Debe seleccionar las fechas de filtro')
        return
      }

      // Filtrar las citas según las fechas seleccionadas
      this.citasFiltradas = this.citas.filter((cita) => {
        const fechaCita = new Date(cita.fecha)
        const fechaInicio = new Date(this.fechaInicio)
        const fechaFin = new Date(this.fechaFin)
        return fechaCita >= fechaInicio && fechaCita <= fechaFin
      })

      // Marcar el reporte como generado
      this.reporteGenerado = true

      // Lógica para imprimir el reporte con las citas filtradas
      // ...
    },
    imprimirReporte() {
      window.print()
    },

    sumarColumnaPrecio() {
      let citasFiltradas = this.reporteGenerado ? this.citasFiltradas : this.citas

      if (this.fechaInicio && this.fechaFin) {
        citasFiltradas = citasFiltradas.filter((cita) => {
          const fechaCita = new Date(cita.fecha)
          const fechaInicio = new Date(this.fechaInicio)
          const fechaFin = new Date(this.fechaFin)
          return fechaCita >= fechaInicio && fechaCita <= fechaFin
        })
      }

      const valoresColumnaPrecio = citasFiltradas.map((cita) => parseFloat(cita.valor_total))
      const suma = valoresColumnaPrecio.reduce((total, valor) => total + valor, 0)

      return suma.toFixed(3) // Ajusta el número de decimales según sea necesario
    },

    obtenerCitas() {
      axios
        // .get('https://apigenerator.dronahq.com/api/66pRfSac/citas')
        .get('https://apigenerator.dronahq.com/api/6e-cwUxK/Citas')
        .then((response) => {
          this.citas = response.data
        })
        .catch((error) => {
          console.log(error)
          this.mostrarAlerta('Error al obtener las citas', 'error')
        })
    }
  },
  mounted() {
    this.obtenerCitas()
  }
}
</script>
