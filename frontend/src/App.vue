<template>
  <img alt="Vue logo" src="/static/emailfront/img/logo.png">
  <MailApp msg="Welcome to Your Vue.js App"/>
</template>

<script>
import MailApp from './components/MailApp.vue'

export default {
  name: 'App',
  components: {
    MailApp
  }
}
</script>

<style>
</style>
