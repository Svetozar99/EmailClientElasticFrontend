<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Email client</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="navbar-nav">
            <a href="/" class="nav-link">Users</a>
        </li>
        <li class="navbar-nav">
            <a href="/my-contacts" class="nav-link">My contacts</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
// import axios from '../axiosConfig'

// export default {
//   created(){
//     let token = localStorage.getItem('token');
//     axios.defaults.headers['Authorization'] = `${token}`
//   },
//   name:'TheNavigation',
//   data(){
//     return {
//       tokenn: localStorage.getItem('token'),
//     }
//   }
// }
</script>