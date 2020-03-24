<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
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
