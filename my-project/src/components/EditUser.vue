<template>
    <div>
        <Navbar/>
        <SideBar/>
        <div >
            <img :src="avata" alt="" class="img-user-edit mt-5 mb-5">
            <div>
                     <label><b>
                Link Ảnh
            </b>
            </label>
            <b-form-input v-model="profile.avata" class="w-25 m-auto"></b-form-input>
            </div>

            <div>
             <label><b>Name</b></label>
            <b-form-input v-model="profile.name" :placeholder="name" class="w-25 m-auto" value=""></b-form-input>
            <h1>{{text}}</h1>
            </div>
            <div>
                <label><b>Projects</b></label>
            <b-form-input v-model="profile.Projects"  :placeholder="Projects" class="w-25 m-auto" value=""></b-form-input>
            </div>
            <div>
                <label><b>Revenus</b>
                </label>
                <b-form-input v-model="profile.Revenus"  :placeholder="Revenus" class="w-25 m-auto" value=""></b-form-input>
            </div>
            <div>
                <label><b>Position</b>
                </label>
                <b-form-input v-model="profile.position"  :placeholder="position" class="w-25 m-auto" value=""></b-form-input>
            </div>
            <div>
                <label><b>Lương</b>
                </label>
                <b-form-input v-model="profile.wage"  :placeholder="wage" class="w-25 m-auto" value=""></b-form-input>
            </div>
            <b-button @click="handleClick">
                Edit
            </b-button>
        </div>
    </div>
</template>
<script>
import Navbar from './Navbar.vue'
import SideBar from './SideBar.vue'
import axios from 'axios'
export default {
  components: {
    Navbar,
    SideBar
  },
  data () {
    return {
      profile: {
        name: '',
        Projects: '',
        Revenus: '',
        position: '',
        avata: '',
        wage: ''
      },
      users: []
    }
  },
  created () {
    this.id = this.$route.params.id
    console.log(this.id)
    this.getData()
  },
  methods: {
    getData () {
      axios.get(`http://localhost:3000/user/${this.id}`)
        .then(data => {
          this.name = data.data.name
          this.Projects = data.data.Projects
          this.Revenus = data.data.Revenus
          this.avata = data.data.avata
          this.wage = data.data.wage
          this.position = data.data.position
        })
        .catch(err => { console.log(err) })
    },
    handleClick () {
      axios.put(`http://localhost:3000/user/${this.id}`, this.profile)
        .then(data => {
          alert('Edit thành công')
          this.$router.push('/home')
        })
        .catch(err => console.log(err))
    }
  }
}
</script>
<style>
.img-user-edit{
    width: 150px;
    height: 150px;
    border-radius: 100%;
}
</style>
