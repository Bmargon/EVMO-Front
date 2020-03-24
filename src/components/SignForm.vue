<template lang="pug">
  div.form
    el-form(:model="form.form" :rules="rules" ref="form" )
      el-form-item(prop="name")
        el-input(v-model="form.name" placeholder="Nombre")
      el-form-item(prop="surname")
        el-input(v-model="form.surname" placeholder="Apellidos")
      el-form-item(prop="email")
        el-input( v-model="form.email" placeholder="Email")
      el-form-item(prop="password")
        el-input(type="password" v-model="form.password" placeholder="Contraseña")
      el-form-item(prop="password2")
        el-input(type="password" v-model="form.password2"  placeholder="Repita contraseña")
      el-form-item(prop="ageVerification" label="Soy mayor de dieciocho años")
        el-switch(v-model="form.ageVerification" )
      el-button(type="primary" @click="submitForm('form')") Registrarse
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
      } else if (value !== this.form.password2) {
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
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
