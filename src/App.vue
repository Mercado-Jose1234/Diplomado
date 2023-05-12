<script setup>
import HeaderPincipal from './components/principal/HeaderPrincipal.vue'
import footerPrincipal from './components/principal/footer.vue'

</script>

<template>


<div v-if="!$route.path.includes('/login')" class="mb-20">
<HeaderPincipal/>
</div>
<div style="min-height: 550px;">
  <RouterView />
</div>
  <div v-if="!$route.path.includes('/reservaciones') && !$route.path.includes('/login')">

  <footerPrincipal/>
</div>
</template>