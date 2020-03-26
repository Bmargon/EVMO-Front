<template lang="pug">
  section
    article.signUp-form
      .signUp-form__logo
        img(src="../../assets/img/logo-text.png")
      h1.signUp-form__title Crear cuenta
      sign-form

</template>

<script>
import signForm from '@/components/SignForm'
export default {
  components: { signForm }
}
</script>

<style scoped lang="scss">
.signUp-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: $--standart-separator;
  background-image: url('../../assets/img/party-smoke.jpg');
  height: 100%;
  &__logo {
    display: flex;
    justify-content: flex-end;
    margin-bottom: $--standart-separator;
    img{
      width: 10rem;
    }
  }
  &__title {
    @include title1($--white);
    margin-bottom: $--standart-content;
  }
}

</style>
