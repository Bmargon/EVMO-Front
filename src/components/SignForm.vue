<template lang="pug">
  div
    el-form(ref="form" :rules="rules" :model="form.form").form
      el-form-item(prop="name")
        el-input(v-model="form.name" placeholder="Nombre")
      el-form-item(prop="surname")
        el-input(v-model="form.surname" placeholder="Apellidos")
      el-form-item(prop="email")
        el-input(type="email" v-model="form.email" placeholder="Email")
      el-form-item(prop="password")
        el-input(type="password" v-model="form.password" placeholder="Contraseña")
      el-form-item(prop="password2")
        el-input(type="password" v-model="form.password2"  placeholder="Repita contraseña")
      el-form-item(label="soy mayor de dieciocho años")
        el-switch(v-model="form.ageVerification" )
      el-button(type="primary" ) Registrarse
</template>
<script>
export default {
  name: 'singForm',
  data () {
    return {
      form: {
        name: '',
        surname: '',
        email: '',
        password: '',
        password2: '',
        ageVerification: true
      },
      rules: {
        name: [
          { required: true, message: 'El nombre es obligatorio', trigger: 'blur' },
          { min: 3, max: 10, message: 'El nombre es demasiado corto', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form {

}
</style>
