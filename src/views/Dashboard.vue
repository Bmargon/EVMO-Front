<template lang="pug">
  section.main-section
    article.main-section__logo
      img(src="../assets/img/logo-text.png")
    article.main-section__content
        h1.main-section__title Organiza tus eventos privados. Donde y con quien quieras
        .main-section__buttons
          el-button.main-section__buttons-second(type="text")
            router-link(:to="{name: 'signin'}") Iniciar sesión
          el-button(type="primary" round)
            router-link(:to="{name: 'signup'}") Crear una cuenta
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.main-section {
  height: 100vh;
  background-image: url('../assets/img/party-smoke.jpg');
  background-position: 80% 50%;
  background-attachment: fixed;
  padding: $--standart-separator;
  background-repeat: no-repeat;
  &__logo img{
    width: 10rem;
  }
  &__content {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__title {
    @include title1($--black);
    margin-bottom: $--standart-content;
  }
  &__buttons {
    display: flex;
    justify-content: space-around;
    align-content: center;
    a {
      color: $--white;
      text-decoration: none;
    }
    &-second {
      a {color: $--black;}
    }
  }
}
</style>
