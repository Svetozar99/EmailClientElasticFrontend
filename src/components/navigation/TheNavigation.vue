<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Email client</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li v-if="!tokenn" class="navbar-nav">
            <a href="/login" class="nav-link">Log In</a>
        </li>
        <li v-if="tokenn" class="navbar-nav">
            <a href="/" class="nav-link">Users</a>
        </li>
        <li v-if="tokenn" class="navbar-nav">
            <a href="/my-contacts" class="nav-link">My contacts</a>
        </li>
        <li v-if="tokenn" class="navbar-nav">
            <a href="/my-messages" class="nav-link">My messages</a>
        </li>
        
        <li v-if="!tokenn" class="navbar-nav">
            <a href="/register" class="nav-link">Register</a>
        </li>
        <li v-if="tokenn" class="navbar-nav">
            <a href="/indexing" class="nav-link">Indexing</a>
        </li>
        <li v-if="tokenn" class="navbar-nav">
            <a href="/messages-search" class="nav-link">Messages Search</a>
        </li>
        <li v-if="tokenn" class="navbar-nav">
            <a href="/contacts-search" class="nav-link">Contacts Search</a>
        </li>
        <br>
        <li v-if="tokenn" class="navbar-nav">
            <a href="/logout" class="nav-link">Log out</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import axios from '../../axiosConfig'

export default {
  created(){
    let token = localStorage.getItem('token');
    axios.defaults.headers['Authorization'] = `${token}`
  },
  name:'TheNavigation',
  data(){
    return {
      tokenn: localStorage.getItem('token'),
    }
  }
}
</script>