 <template>
    <div class="mt-5 bg-white p-2 pb-2 rounded-custom">
        <b-row v-for="bar in bars" :key="bar.id" class="mb-1 mt-3">
            <b-col md="12" >
                {{ bar.variant }}:
            </b-col>
            <b-col class="pt-1">
                <b-progress :value="bar.value" :variant="bar.variant" :key="bar.variant"></b-progress>

            </b-col>
        </b-row>
      </div>
  </template>

<script>
export default {
  data () {
    return {
      bars: [
        { variant: 'success', value: 75 },
        { variant: 'info', value: 75 },
        { variant: 'warning', value: 75 },
        { variant: 'danger', value: 75 },
        { variant: 'primary', value: 75 },
        { variant: 'secondary', value: 75 },
        { variant: 'dark', value: 75 }
      ],
      timer: null
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.bars.forEach(bar => (bar.value = 25 + Math.random() * 75))
    }, 2000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
    this.timer = null
  }
}
</script>
