<template>
    <div>
        <Navbar/>
        <SideBar/>
        <div class="mt-5 w-50 m-auto new-user-component">
            <div>
                <label><b>
                     Link Ảnh
                </b>
                </label>
                <b-form-input v-model="profile.avata" class="w-100 m-auto"></b-form-input>
            </div>

          <div class="mt-3">
            <label><b>Name</b></label>
            <b-form-input v-model="profile.name"  class="w-100 m-auto input-newUser" value=""></b-form-input>
          </div>
       <div class="mt-3">
           <label><b>Projects</b></label>
          <b-form-input v-model="profile.Projects"   class="w-100 m-auto input-newUser" value=""></b-form-input>
       </div>
       <div class="mt-3">
           <label><b>Revenus</b>
           </label>
           <b-form-input v-model="profile.Revenus"   class="w-100 m-auto input-newUser" value=""></b-form-input>
       </div>
       <div class="mt-3">
           <label><b>Position</b>
           </label>
           <b-form-input v-model="profile.position"  class="w-100 m-auto input-newUser" value=""></b-form-input>
       </div>
       <div class="mt-3">
           <label><b>Lương</b>
           </label>
           <b-form-input v-model="profile.wage"  class="w-100 m-auto input-newUser" value=""></b-form-input>
       </div>
      <div class="mt-3">
        <label><b>Introduce</b>
        </label>
        <b-form-input v-model="profile.introduce"   class="w-100 m-auto input-newUser" value=""></b-form-input>
      </div>
       <b-button @click="handleClick" class="btn-update-newUser">UPDATE</b-button>
        </div>
    </div>
</template>
<script>
import Navbar from './Navbar.vue'
import SideBar from './SideBar.vue'
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
  components: {
    Navbar, SideBar
  },
  data () {
    return {
      profile: {
        name: '',
        Projects: '',
        Revenus: '',
        position: '',
        avata: '',
        wage: '',
        introduce: ''
      }
    }
  },
  methods: {
    handleClick () {
      axios.post('http://localhost:3000/user', this.profile)
        .then(data => {
          Swal.fire({
            title: ' SUCCESS!',
            text: 'successfully added new members.',
            icon: 'success',
            confirmButtonText: 'OK'
          })
          this.$router.push('/home')
        })
        .catch(err => console.log(err))
    }
  }
}
</script>
<style>
body{
  background-color: #E4E4E4;
}
.new-user-component{
  background-color: white;
    border-radius: 20px;
    padding: 20px;
    box-shadow: rgba(20, 20, 34, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    margin-top: 100px !important;

}
.btn-update-newUser{
  width: 200px;
  margin-top: 30px;
  border-radius: 20px;
  border: none;
  color: white;
  background-color:#0000FF
}
</style>
