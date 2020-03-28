import signForm from '@/components/SignForm';
import { mapActions } from 'vuex';
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
          el-button(type="primary" round @click.native.prevent="loginUser") Acceder
</template>
<script>
import { mapActions } from 'vuex'
const axios = require('axios').default
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
    ...mapActions(['setUser']),
    closeDialog () {
      this.$emit('closeDialog')
    },
    async loginUser () {
      try {
        const user = await axios({
          method: 'POST',
          url: 'http://localhost:3000/login',
          data: {
            email: this.form.email,
            password: this.form.password
          }
        })
        this.setUser(user.data)
        this.closeDialog()
        this.loading = false
        this.$router.push('/')
      } catch (error) {
        this.closeDialog()
        this.$swal({
          icon: 'error',
          title: 'Oh No!',
          text: 'los campos son incorrectos',
          timer: 3000
        })
        console.log(error)
      }
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
