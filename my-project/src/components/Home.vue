<template>
    <div class="d-flex">

    <SideBar />
    <Navbar class="w-100"/>
</div></template>
<script>
import { RouterLink } from 'vue-router'
import Navbar from './Navbar.vue'
import SideBar from './SideBar.vue'
export default{
  components: { RouterLink,
    Navbar,
    SideBar}

}
</script>
