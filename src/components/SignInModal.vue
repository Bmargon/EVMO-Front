import signForm from '@/components/SignForm';
<template lang="pug">
  el-dialog.modal(
    :visible="openDialog"
    width="90%"
    v-loading="loading"
    @close="closeDialog")
    h1.modal__title Inicia sesión
    .modal__form
      el-form(:model="form" ref="form" :rules="rules")
        el-form-item( prop="email" label="Email")
          el-input(v-model="form.email")
        el-form-item(prop="password" label="Contraseña")
          el-input(type="password" v-model="form.password")
        .modal__buttons
          el-button(type="text") Cancelar
          el-button(type="primary" round @click="signIn") Acceder
</template>
<script>
export default {
  name: 'SignInModal',
  props: ['openDialog'],
  data () {
    return {
      loading: false,
      form: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          { required: true, message: 'El correo electrónico es obligatorio', trigger: 'blur' },
          { type: 'email', message: 'El formato de email no es correcto', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: 'la contraseña es obligatoria', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    closeDialog () {
      this.$emit('closeDialog')
      console.log('cerrado')
    },
    signIn () {
      this.loading = true
      console.log(this.form)
    }
  }
}
</script>
<style lang="scss" scoped>
/deep/ .el-dialog__header{
  display: none;
}
.modal {
  &__title {
    @include title1($--black);
    margin-bottom: $--small-content;
  }
  &__buttons {
    display: flex;
    justify-content: space-between;
  }
}
</style>
