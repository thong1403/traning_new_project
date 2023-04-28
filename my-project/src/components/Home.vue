<template>
<div>
  <Navbar/>
  <b-container>
    <b-row>
      <b-col>
        <SideBar/>
        <HomeContent/>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>
<script>
import { RouterLink } from 'vue-router'
import Navbar from './Navbar.vue'
import SideBar from './SideBar.vue'
import HomeContent from './HomeContent.vue'
export default{
  components: { RouterLink,
    Navbar,
    SideBar,
    HomeContent
  }

}
</script>
