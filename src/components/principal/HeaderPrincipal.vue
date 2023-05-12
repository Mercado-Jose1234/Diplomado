<template >
    <nav class="bg-gray-900 fixed inset-x-0 top-0 z-50 w-full">
  <div class="mx-auto px-4 py-6">
    <div class="flex flex-wrap items-center justify-between">
      <div class="flex items-center">
        <a class="text-white text-2xl font-semibold" href="/">Urban Style Barber Shop</a>
      </div>

        <div class="flex">
          <button class="lg:hidden  rounded-lg ml-4 py-2 px-3 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" id="menu-toggle" aria-label="Toggle menu" @click="toggleMenu">
          <svg viewBox="0 0 20 20" fill="currentColor" class="menu w-6 h-6">
            <path fill-rule="evenodd" d="M2 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM19 9a1 1 0 010 2H3a1 1 0 110-2h16zM6 15a1 1 0 100-2h8a1 1 0 100 2H6z" />
          </svg>
        </button>
                <ul class="menu-list lg:flex items-center space-x-8 mx-3">
        <li class="usuarios inicio hidden">
            <a href="/" class="text-white hover:text-gray-300">Inicio</a>
        </li>


        <li id="reservarCita" class=" usuarios hidden" >
          <a href="/reservaciones" class="text-white hover:text-gray-300">Reservar cita</a>
        </li>
        <li id="reservarCitaL" class="hidden">
          <a href="/login" class="text-white hover:text-gray-300">Reservar cita</a>
        </li>
        <li class="usuarios inicio hidden">
        <a href="/nosotros" class="text-white hover:text-gray-300">Acerca de nosotros</a>
        </li>
        <li class="usuarios hidden" >
        <RouterLink id="misCitas" to="/misCitas" class="text-white hover:text-gray-300">Mis Citas</RouterLink>
        </li>
        <li class="administrador hidden" >
        <RouterLink id="dashboard" to="/dashboard" class="text-white hover:text-gray-300">Dashboard</RouterLink>
        </li>
        <li class="administrador hidden" >
        <RouterLink id="reporteCitas" to="/reporteCitas" class="text-white hover:text-gray-300">Reporte de Citas</RouterLink>
        </li>
        <li class="administrador hidden">
        <RouterLink id="listServicios" to="/listServicios" class="text-white hover:text-gray-300">Listado de Servicios</RouterLink>
        </li>
        <li class="barbero hidden">
        <RouterLink id="dashboardBarbero" to="/dashboardBarbero" class="text-white hover:text-gray-300">Home Empleados</RouterLink>
        </li>
      </ul>

      <ul>
        <li class="hidden " id="logaut">
          <a class="text-white hover:text-gray-300" href="/login" @click="confirmLogout">Cerrar sesión</a>

        </li>
        <li class="hidden inicio" id="iniciarSesion">
                  <a  href="/login" class="session text-white hover:text-gray-300">Iniciar sesión</a>

        </li>
      </ul>
    </div>

    </div>
  </div>
  
</nav>

</template>

<script>
import { RouterLink} from 'vue-router'

document.addEventListener('DOMContentLoaded', function () {
  roles()
})


function roles() {
  // const rolAdmin = document.querySelector('#administrador')
  const rolAdmin = document.querySelectorAll('.administrador')
  const rolusuarios = document.querySelectorAll('.usuarios')
  const inicio = document.querySelectorAll('.inicio') 
  const rolBarbero = document.querySelectorAll('.barbero') 
  const reservarCitaL=document.querySelector('#reservarCitaL')  
  const iniciarSesion=document.querySelector('#iniciarSesion')
  const logaut=document.querySelector('#logaut')
  const sessionUser=localStorage.getItem('isLoggedIn')


  const a= localStorage.getItem('admin');
  const b=localStorage.getItem('barbero');
  const c =localStorage.getItem('usuario');

  if (sessionUser==='true') {
    logaut.classList.remove('hidden')
    
  } else if (sessionUser==='false') {
    iniciarSesion.classList.remove('hidden')
  };

  if (sessionUser!== 'true') {
    reservarCitaL.classList.remove('hidden')

  }
  
  if (a==='true' && b==='false' && c==='false') {

    rolAdmin.forEach(admin => {
      admin.classList.remove('hidden')
    });
  }
  else if (a==='false' && b==='true' && c==='false') {
    rolBarbero.forEach(barbero => {
      barbero.classList.remove('hidden')
    }); 
  }
  else if (a === 'false' && b === 'false' && c === 'true') {
  rolusuarios.forEach(usuario => {
    usuario.classList.remove('hidden');
  });  
  }
  else{ 
    inicio.forEach(i => {
      i.classList.remove('hidden')
    });

  }
}

export default {

data() {
  return {
    isLoggedIn: false,
  };
},

methods: {
  
  confirmLogout() {
      if (confirm('¿Está seguro de que desea cerrar sesión?')) {
        this.logout()
      }
      else
      this.$router.push('/');

    },
    logout() {
      localStorage.setItem('loggedIn',false);
      this.$router.push('/login');

    },


  toggleMenu() {
    const menuList = document.querySelector('.menu-list')
    menuList.classList.toggle('active')
  }
}
}

</script>


// export default {

//    data() {
//     return {

//     };

//   },

//   methods: {

//     confirmLogout() {
//       if (confirm('¿Está seguro de que desea cerrar sesión?')) {
//         this.logout()
//       }
//       else
//       this.$router.push('/');

//     },
//     logout() {
//       this.isLoggedIn = false;
//       localStorage.removeItem('loggedIn');
//       this.$router.push('/');

//     },
//     toggleMenu() {
//       const menuList = document.querySelector('.menu-list')
//       menuList.classList.toggle('active')

//     }

//   }
// }

