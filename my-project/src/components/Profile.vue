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
  <div>
    <div>
      <h1 class="mt-5 mb-5">Danh Sách Nhân Viên Có Mức Lương Cao Nhất</h1>
      <b-container>
        <b-row no-gutters class="m-auto">
          <b-col md="4" v-for="user in users" :key="user.id">
            <b-card no-body class=" m-2 p-2 " style="max-width: 540px;">
              <b-row>
                <b-col md="6" class="h-100">
                  <b-card-img :src="user.avata" alt="Image" class="rounded-0 h-100"></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body>
                    <h3>{{ user.name }}</h3>
                    <b-card-text class="d-flex">
                      <b-col md="6">
                        <h6>Projects</h6>
                        <p>{{ user.Projects }}</p>
                      </b-col>
                      <b-col md="6">
                        <h6>Revenus</h6>
                        <p>{{ user.Revenus }}</p>
                      </b-col>
                    </b-card-text>
                  </b-card-body>
                  <div>
                    <span><b>Wage</b></span>
                    <span>{{ user.wage }}</span>
                  </div>
                  <b-button variant="primary" class="mb-2" @click="showDetail(user.id)">View Profile</b-button>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
          <b-button class="w-100">
            <router-link to="/newuser" >
            Thêm thành viên
            </router-link>
          </b-button>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

console.log(this.user)
export default {
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
    }
  }
}
</script>
<style>
.overflow-hidden {
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
</style>
