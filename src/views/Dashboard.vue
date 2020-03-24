<template lang="pug">
  section
    article.main
      h1 Organiza tus eventos privados. Donde y con quien quieras
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.main {
  height: 100vh;
  background: rgb(0,160,227);
  padding: 1rem;
  background: linear-gradient(0deg, rgba(0,160,227,1) 0%, rgba(130,210,234,1) 100%);
  h1 {
    @include title1($--white)
  }
}
</style>
