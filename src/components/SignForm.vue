<template lang="pug">
  .form
    el-form(:model="form" ref="form" :rules="rules")
      el-form-item( prop="name" label="Nombre")
        el-input(v-model="form.name")
      el-form-item( prop="surname" label="Apellido")
        el-input(v-model="form.surname")
      el-form-item( prop="email" label="Email")
        el-input(v-model="form.email")
      el-form-item( prop="password" label="Contraseña")
        el-input(type="password" v-model="form.password" )
      el-form-item( prop="password2" label="Repita contraseña")
        el-input(type="password" v-model="form.password2")
      .form__buttons
        el-button(type="text" @click.native.prevent="signIn") Iniciar sesión
        el-button(type="primary" round @click="submitForm") Registrarse

</template>
<script>
export default {
  name: 'singForm',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('La contraseña es obligatoria'))
      } else {
        if (this.form.password !== '') {
          this.$refs.form.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Porfavor, repita la contraseña'))
      } else if (value !== this.form.password) {
        callback(new Error('Las contraseñas no coinciden'))
      } else {
        callback()
      }
    }
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
        ],
        surname: [
          { required: true, message: 'Al menos un apellido es obligatorio', trigger: 'blur' },
          { min: 3, message: 'El apellido es demasiado corto', trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'El correo electrónico es obligatorio', trigger: 'blur' },
          { type: 'email', message: 'El formato de email no es correcto', trigger: ['blur', 'change'] }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        password2: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          return false
        }
      })
    },
    signIn () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__buttons {
    display: flex;
    justify-content: space-between;
    margin-top: $--standart-separator;
  }
}

/deep/.el-form-item__label {
  color: $--white;
}
</style>
