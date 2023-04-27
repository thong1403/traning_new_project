<template>
    <div>
        <b-card class="w-25 m-auto">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show" value="" >
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          class="pl-0"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            value = ""
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="You Passworld" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.passworld"
            type="password"
            value = ""
            placeholder="Enter PassWorld"
            required
          ></b-form-input>
        </b-form-group>
    <div class="mt-3">
            <b-button type="submit" variant="primary">Submit</b-button>
        <b-button >
             <RouterLink to="/" >Home</RouterLink>
        </b-button>
    </div>

      </b-form>
    </b-card>

    </div>
  </template>

<script>
import { RouterLink } from 'vue-router'
import router from '../router'
import axios from 'axios'

export default {
  data () {
    return {
      form: {
        email: '',
        passworld: '',
        food: null,
        checked: [],
        emailUser: [],
        passUser: []
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true

    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      const acction = this.passUser.find(action => action.email === this.form.email && action.passworld === this.form.passworld)

      if (acction) {
        alert('Dang nhap thanh cong')
        router.push('/')
        localStorage.setItem('user', acction.email)
      } else {
        alert('that bai')
      }
    },
    onReset (event) {
      event.preventDefault()
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }

  },

  mounted () {
    axios.get('http://localhost:3000/user')
      .then(data => {
        this.emailUser = data.data
        console.log(this.emailUser)
        this.passUser = data.data
        console.log(this.passUser)
      })
      .catch(err => { console.log(err) })
  },

  components: { RouterLink }
}
</script>
<style>

</style>
