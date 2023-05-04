<template>
  <div v-if="user">
    <Home />
  </div>
  <div v-else>
    <Login/>
  </div>
</template>
<script>
import Home from "./Home.vue";
import Login from "./Login.vue"
export default {
  components: {Home,Login},
  data () {
    return {
        user: false,
    };
  },
  mounted() {
    if(localStorage.getItem('user')){
        this.user = true
        this.$router.push('/home');
    }else{
         this.$router.push('/login');
    }
  },
};
</script>
