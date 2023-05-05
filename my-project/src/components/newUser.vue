<template>
    <div>
        <Navbar/>
        <SideBar/>
        <div>
            <div>
                <label><b>
                     Link Ảnh
                </b>
                </label>
       <b-form-input v-model="profile.avata" class="w-25 m-auto"></b-form-input>
       </div>

       <div>
        <label><b>Name</b></label>
       <b-form-input v-model="profile.name"  class="w-25 m-auto" value=""></b-form-input>
       <h1>{{text}}</h1>
       </div>
       <div>
           <label><b>Projects</b></label>
       <b-form-input v-model="profile.Projects"   class="w-25 m-auto" value=""></b-form-input>
       </div>
       <div>
           <label><b>Revenus</b>
           </label>
           <b-form-input v-model="profile.Revenus"   class="w-25 m-auto" value=""></b-form-input>
       </div>
       <div>
           <label><b>Position</b>
           </label>
           <b-form-input v-model="profile.position"  class="w-25 m-auto" value=""></b-form-input>
       </div>
       <div>
           <label><b>Lương</b>
           </label>
           <b-form-input v-model="profile.wage"  class="w-25 m-auto" value=""></b-form-input>
       </div>
       <div>
        <label><b>Email</b>
        </label>
        <b-form-input v-model="profile.email"   class="w-25 m-auto" value=""></b-form-input>
    </div>
       <b-button @click="handleClick">UPDATE</b-button>
        </div>
    </div>
</template>
<script>
import Navbar from './Navbar.vue'
import SideBar from './SideBar.vue'
import axios from 'axios'
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
        email: ''
      }
    }
  },
  methods: {
    handleClick () {
      axios.post('http://localhost:3000/user', this.profile)
        .then(data => {
          alert('thành công')
          this.$router.push('/home')
        })
        .catch(err => console.log(err))
    }
  }
}
</script>
