<template lang="pug">
section
  router-view
  nav-bar.navbar
</template>
<script>
import NavBar from '@/components/shared/NavBar'
export default {
  components: {
    NavBar
  }
}
</script>
<style lang="scss" scoped>
.navbar{
  position: fixed;
  bottom: 0;
}
</style>
