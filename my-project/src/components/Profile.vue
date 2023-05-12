<template>
  <!-- <div>
  <b-card no-body class="overflow-hidden p-2" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="avata" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <h3>{{ name }}</h3>
        <p>{{ position }}</p>
        <b-card-body >
          <b-card-text class="d-flex" >
            <b-col md="6">
                <h6>Projects</h6>
                <p>{{ Projects }}</p>
            </b-col>
            <b-col md="6">
                <h6>Revenus</h6>
                <p>{{ Revenus }}</p>
            </b-col>
          </b-card-text>
        </b-card-body>
        <b-button variant="primary" class="mb-2">View Profile</b-button>
      </b-col>
    </b-row>
  </b-card>
</div> -->
  <div class="Members-list">
    <h3 class="mt-5">DANH SÁCH NHÂN VIÊN</h3>
    <div class="mt-5">
      <input v-model="searchTerm" type="text" placeholder="Enter employee name" class="w-50 input-search">
      <button @click="search" class="btn-search">SEARCH</button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">NAME</th>
          <th scope="col">POSITION</th>
          <th scope="col">Projects</th>
          <th scope="col">Revenus</th>
          <th scope="col">WAGE</th>
          <th scope="col">EDIT/DELETE</th>
        </tr>
      </thead>
      <tbody v-if= "searchTerm">
        <tr>
          <th scope="row">{{ results.id }}</th>
          <td>{{ results.name }}</td>
          <td>{{ results.position }}</td>
          <td>{{ results.Projects }}</td>
          <td>{{ results.Revenus }}</td>
          <td>{{ results.wage }}</td>
          <td>
            <button class="btn-edit" @click="showDetail(results.id)">EDIT</button>
            <button class="btn-delete" @click="deleteUser(results.id)">DELETE</button>
          </td>
        </tr>
      </tbody>
      <tbody v-for="user in users" :key="user.id" v-else>
        <tr>
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.name }}</td>
          <td>{{ user.position }}</td>
          <td>{{ user.Projects }}</td>
          <td>{{ user.Revenus }}</td>
          <td>{{ user.wage }}</td>
          <td>
            <button class="btn-edit" @click="showDetail(user.id)">EDIT</button>
            <button class="btn-delete" @click="deleteUser(user.id)">DELETE</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button class="w-25 btn-newUser pt-2 pb-2" @click="clickNewUser">NEWUSER</button>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapState } from 'vuex'
import Swal from 'sweetalert2'

console.log(this.user)
export default {
  data () {
    return {
      searchTerm: '',
      results: [],
      profile: {
        name: '',
        Projects: '',
        Revenus: '',
        position: '',
        avata: '',
        wage: '',
        id: ''
      },
      users: [],
      name: '',
      avata: '',
      Projects: 0,
      Revenus: 0,
      firstName: '',
      lastName: '',
      position: '',
      id: 0
    }
  },
  computed: {
    ...mapState(['users'])
  },
  created () {
    axios
      .get('http://localhost:3000/user')
      .then(data => {
        this.users = data.data
        console.log(this.users)
        this.avata = data.data[0].avata
        this.name = data.data[0].firstName + data.data[0].lastName
        this.Projects = data.data[0].Projects
        this.Revenus = data.data[0].Revenus
        this.position = data.data[0].position
      })
      .catch(err => console.log(err))
  },

  methods: {
    showDetail (id) {
      this.$router.push(`/${id}`)
    },
    deleteUser (id) {
      axios.delete(`http://localhost:3000/user/${id}`)
        .then(data => {
          Swal.fire({
            title: 'DELETE SUCCESS!',
            text: 'Member successfully deleted.',
            icon: 'success',
            confirmButtonText: 'OK'
          })
          this.$router.push('/')
        }

        )
        .catch(err => console.log(err))
    },
    search () {
      axios.get(`http://localhost:3000/user/?name=${this.searchTerm}`)
        .then(response => {
          this.results = response.data[0]
          console.log(this.results)
        })
        .catch(error => {
          console.error(error)
        })
    },
    clickNewUser () {
      this.$router.push('/newuser')
    },
    ...mapActions(['api'])
  }
}
</script>
<style>
.overflow-hidden {
  background-color: white;

}
.btn-edit {
  width: 70px;
  color: white;
  background-color: rgb(33, 172, 207);
  border: none;
  border-radius: 20px;

}
.btn-delete {
  width: 70px;
  color: black;
  background-color: red;
  border: none;
  border-radius: 20px;

}
.table {
  margin-top: 100px;
  background-color: white;
  border-radius: 20px;
  box-shadow: rgba(20, 20, 34, 0.25) 0px 13px 27px -5px,
  rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
.btn-newUser{
  color: white;
  background-color: rgb(47, 133, 231);
  border: none;
  border-radius: 20px;
  box-shadow: rgba(20, 20, 34, 0.25) 0px 13px 27px -5px,
  rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
.btn-search{
  padding-left: 10px;
  padding-right: 10px;
  border: none;
  color: white;
  padding: 7px;
  background-color: rgb(34, 115, 207);
  border-radius: 20px;
  box-shadow: rgba(20, 20, 34, 0.25) 0px 13px 27px -5px,
  rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
.input-search{
  height: 40px;
  padding-left: 20px;
  border: none;
  outline: none;
  border-radius: 20px;
  box-shadow: rgba(20, 20, 34, 0.25) 0px 13px 27px -5px,
  rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
.Members-list{
  margin-top: 100px;
}
</style>
