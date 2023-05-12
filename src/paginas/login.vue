<template>
  <div class="flex flex-col h-screen">
    <div class="bg-gray-100 flex-1 flex justify-center items-center">
      <div class="w-full max-w-sm">
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <h2 class="text-xl text-center font-bold text-gray-700 mb-6">Iniciar sesión</h2>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 font-bold mb-2" for="username">
              Nombre de usuario
            </label>
            <input
              v-model="usuario"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Ingrese su nombre de usuario"
            />
          </div>
          <div class="mt-6 mb-6">
            <label class="block text-gray-700 font-bold mb-2" for="password"> Contraseña </label>
            <input
              v-model="contrasena"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Ingrese su contraseña"
            />
          </div>
          <p v-if="error" class="text-center my-3 text-red-500">Usuario o contraseña incorrectos</p>

          <div class="flex items-center flex-wrap justify-between">
            <button id="login"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
             
            >
              Iniciar sesión
            </button>

            <RouterLink
              to="/nosotros"
              class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              
              >Registrarme</RouterLink
            >
            <RouterLink
              to="/nosotros"
              class="inline-block mx-auto mt-6 align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >Olvidé mi contraseña</RouterLink
            >
          </div>
          <!-- <button @click="crear()" id="crear" class=" mx-4 bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " > Crear</button>

          <button @click="mostrar()" id="mostrar" class=" bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " > Mostrar</button> -->

        </div>
      </div>
    </div>
    <div class="bg-gray-900 flex-none h-40 bg-cover bg-center">
      <p class="text-center mt-10 text-gray-500 text-xs">

        &copy;2023 Urban Style Barber Shop. Todos los derechos reservados.
      </p>
    </div>
  </div>


</template>

<script>
import { useRouter } from 'vue-router';

document.addEventListener('DOMContentLoaded', function () {
  consultarAPI()
  login()
})

async function consultarAPI() {
  try {
    const url = 'https://apigenerator.dronahq.com/api/0CgNso0C/usuarios'
    const resultado = await fetch(url)
    const usuarios = await resultado.json()
    login(usuarios)

  } catch (error) {
    console.log(error)
  }

}

function login(usuarios){
  
  const btnlogin = document.querySelector('#login');
 btnlogin.addEventListener('click', function() {
  usuarios.forEach(usu => {
    const email=document.querySelector('#username').value;
  const pwd=document.querySelector('#password').value;
      const { id, nombres, correos, usuario, contrasena, rol } = usu
      if (email===usuario && pwd===contrasena ) {

        session(rol,nombres)

      }

    })
  })
}

function session(rol,nombres) {

  if (rol==='Adminitrador') {
    localStorage.setItem('admin', true); 
    localStorage.setItem('barbero', false); 
    localStorage.setItem('usuario',false)
    window.location.href = '/dashboard';

  }
  else if (rol==='barbero') {
    localStorage.setItem('barbero', true); 
    localStorage.setItem('admin', false); 
    localStorage.setItem('usuario',false)
    window.location.href = '/dashboardBarbero';

  }
  else if (rol==='usuario'){
    localStorage.setItem('usuario',true);
    localStorage.setItem('barbero', false); 
    localStorage.setItem('admin', false); 
    localStorage.setItem('nombre',nombres)
    window.location.href = '/';

  }

  // localStorage.setItem(rol, 'admin'); 
  localStorage.setItem('isLoggedIn', true); 

  // alert(localStorage.getItem('isLoggedIn'))


  
}



// function validar_datos(){
//   const email=document.querySelector('#username').value;
//   const pwd=document.querySelector('#password').value;
//   const encontrado=false;
//   const btnlogin = document.querySelector('#login');
//   const usuarios = [{ user: 'Jmercado', pwd: '123',rol:'admin' },
//           { user: 'Ymendoza', pwd: '1234',rol:'barbero'},
//           { user: 'Favila', pwd: '1234',rol:'usuario'}];

// btnlogin.addEventListener('click', function() {
  
//     usuarios.forEach((usuario) => {
   
//   //  if (email === usuario.user && pwd === usuario.pwd ) {
//   //     login(usuario.rol, usuario.rol)
//   //     encontrado = true;
//   //  }
  
//      alert (email)
//   })
//   // if (encontrado===true) {
//   //   window.location.href = '/';
//   // } else {


//   // }
      

// //           this.$router.push('/')
// //         } 
// //         else  {
// //           this.error = true
//    }


// )

// function login(rol,valor){
  
  
//   localStorage.setItem(rol, valor); 
//   localStorage.setItem('isLoggedIn', 'true'); 


//   // alert(localStorage.getItem(valor))
//   // if (localStorage.getItem('barbero')) {
//   //   alert(localStorage.getItem('barbero'))
//   // } 
//   // else if (localStorage.getItem('admin')) {
//   //   alert('Es el Admin')

//   // }

// }

// }




// export default {
//   data() {
//     return {
//       usuario: '',
//       contrasena: '',
//       error: false,
//       // isLoggedIn: false,
//       // isAdmin:false,
//       // isBarbero:false,
//     }
//   },
//   methods: {
    
   
//     // mostrar(){
//     //   alert(sessionStorage.getItem("isAdmin"))
//     // },

//     login() {
//       const usuarios = [
//         { user: 'Jmercado', pwd: '123',rol:'Admin' },
//         { user: 'Ymendoza', pwd: '1234',rol:'barbero'},
//         { user: 'Favila', pwd: '1234',rol:'usuario'}
//       ]

//       usuarios.forEach((usuario) => {
//         if (this.usuario === usuario.user && this.contrasena === usuario.pwd ) {

//           // switch(usuario.rol){
//           //   case 'Admin':
//           //   localStorage.setItem('isAdmin','true');
//           //   localStorage.setItem('isBarbero','false');
//           //   break;
//           //   case 'barbero':
//           //   localStorage.setItem('isAdmin','false');
//           //   localStorage.setItem('isBarbero','true');
//           //   break;
//           // }
//           crear()

//           // localStorage.setItem('isAdmin', 'true');          
//           localStorage.setItem('isLoggedIn', 'true');
//           this.$router.push('/')
//         } 
//         else  {
//           this.error = true
//         }
//       })
//     }
//   }
// }
</script>
