<template lang="pug">
  section.signUp-form
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
  &__title {
    @include title1($--white);
    margin-bottom: $--standart-content;
  }
}

</style>
