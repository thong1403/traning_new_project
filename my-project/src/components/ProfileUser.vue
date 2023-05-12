<template>
    <div>
        <Navbar/>
        <SideBar/>
    <div>
    <div>
    <div class="w-50 m-auto mt-5 container-edit-user">
        <img :src="avata" alt="" class=" img-user" >
      <div>
        <div class="d-flex mt-3" >
          <h5 class="mt-3" >Name </h5>
          <b-form-input v-model="profile.name" placeholder="Enter your name" class="w-100"></b-form-input>
        </div>
         <div class="d-flex mt-3" >
          <h5 class="mt-3">Position </h5>
          <b-form-input v-model="profile.position" placeholder="Enter your name" class="w-100"></b-form-input>
        </div>
         <div class="d-flex mt-3" >
          <h5 class="mt-3">Project </h5>
          <b-form-input v-model="profile.Projects" placeholder="Enter your name" class="w-100"></b-form-input>
        </div>
         <div class="d-flex mt-3" >
          <h5 class="mt-3">avata </h5>
          <b-form-input v-model="profile.avata" placeholder="Enter your name" class="w-100"></b-form-input>
        </div>
         <div class="d-flex mt-3" >
          <h5 class="mt-3">Revenus </h5>
          <b-form-input v-model="profile.Revenus" placeholder="Enter your name" class="w-100"></b-form-input>
        </div>
          <div class="d-flex mt-3" >
          <h5 class="mt-3">introduce </h5>
          <b-form-input v-model="profile.introduce" placeholder="Enter your name" class="w-100"></b-form-input>
        </div>
         <div class="d-flex mt-3">
          <h5 class="mt-3">Wage </h5>
          <b-form-input v-model="profile.wage" placeholder="Enter your name" class="w-100"></b-form-input>
        </div>
        <button @click="handleClick" class="btn-update">
        UPDATE</button>
        <button @click="clickHome" class="btn-update">HOME</button>
      </div>
    </div>

    </div>
</div>
    </div>
</template>

<script>
import axios from 'axios'
import Navbar from './Navbar.vue'
import SideBar from './SideBar.vue'
import Swal from 'sweetalert2'

export default {
  components: {
    Navbar,
    SideBar
  },
  data () {
    return {
      users: [],
      id: '',
      name: '',
      Projects: '',
      Revenus: '',
      position: '',
      avata: '',
      wage: '',
      text: '',
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
  created () {
    this.id = this.$route.params.id
    console.log(this.id)
    this.getData()
  },
  methods: {
    getData () {
      axios.get(`http://localhost:3000/user/${this.$route.params.id}`)
        .then(data => {
          this.name = data.data.name
          this.Projects = data.data.Projects
          this.Revenus = data.data.Revenus
          this.avata = data.data.avata
          this.wage = data.data.wage
          this.position = data.data.position
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleClick () {
      axios.put(`http://localhost:3000/user/${this.id}`, this.profile)
        .then(data => {
          Swal.fire({
            title: ' SUCCESS!',
            text: 'successfully added update members.',
            icon: 'success',
            confirmButtonText: 'OK'
          })
          this.$router.push('/home')
        })
        .catch(err => console.log(err))
    },
    clickHome () {
      this.$router.push('/home')
    }
  }

}
</script>
<style>
body{
  background-color: #E4E4E4;
}
.w-100{
  margin-left: 20px;
}
.img-user{
  border-radius: 100%;
  width: 200px

}
.container-edit-user{
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  box-shadow: rgba(20, 20, 34, 0.25) 0px 13px 27px -5px,
  rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
.btn-update{
  width: 200px;
  margin-top: 30px;
  border-radius: 20px;
  border: none;
  color: white;
  background-color:#0000FF
}
</style>
