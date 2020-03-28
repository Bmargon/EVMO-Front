<template lang="pug">
  section.navbar
    .navbar__item
      router-link(:to="'/'")
        img.navbar__item-img(src="@/assets/img/m.png", alt="alt")
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 100%;
  height: 80px;
  @include gradienBlueBackground;
  &__item {
    &-img {
      height: 20px;
      margin: 0;
      padding: 0;
    }
  }
}
.el-icon-s-ticket,
.el-icon-user-solid {
  color: white;
  margin-left: -2px;
  transform: scale(2);
}
</style>
