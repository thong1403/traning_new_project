<template>
    <div>
        <Navbar/>
        <SideBar/>
        <div>
            <b-card no-body class="overflow-hidden" style="max-width: 540px;">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img :src="avata" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body :title="name" >
                    <div class="d-flex">
                        <b-card-text class="m-2">
                        <span><b>Projects:</b></span>
                        {{ Projects }}
                    </b-card-text>
                    <b-card-text class="m-2">
                        <span><b>Revenus:</b>
                        </span>
                        {{ Revenus }}
                    </b-card-text>
                    </div>
                    <div class="d-flex">
                         <b-card-text class="m-2">
                        <h5>Position:</h5>
                        <p>{{ position}}</p>
                    </b-card-text>
                    <b-card-text class="m-2">
                        <h5>Lương:</h5>
                        <p>{{ wage}}</p>
                    </b-card-text>
                    </div>
                    <b-button>
                        <router-link to="/">
                            HOME

                        </router-link>
                    </b-button>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>
    </div>
</template>

<script>
import axios from 'axios'
import Navbar from './Navbar.vue'
import SideBar from './SideBar.vue'

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
      wage: ''
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
        .catch(err => {
          console.log(err)
        })
    }

  }

}
</script>
