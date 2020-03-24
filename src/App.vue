<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    withScreenVerification () {
      if (screen.width < 480) {
        return true
      } else return false
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/style/main';
</style>
