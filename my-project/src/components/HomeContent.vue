<template>
    <div>
        <ProFlie/>
        <EmailSent/>
    </div>
</template>
<script>
import ProFlie from './Profile.vue'
import EmailSent from './EmailSent.vue'
export default {
  components: {
    ProFlie,
    EmailSent
  }
}
</script>
<style>
body{
    background-color: rgb(228, 228, 228);
}
</style>
