<template lang="pug">
  section.navbar
    .navbar__item
      router-link(:to="'/'")
        i.el-icon-orange
    .navbar__item
      router-link(:to="'/'")
        i.el-icon-s-ticket
    .navbar__item
      router-link(:to="'/'")
        i.el-icon-user-solid
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="scss">
.navbar{
  width: 100%;
  height: 80px;
  @include gradienBlueBackground;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.el-icon-s-ticket,
.el-icon-user-solid,
.el-icon-orange {
  color: white;
  transform: scale(2);
}
</style>
