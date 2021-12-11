<template>
    <div>
        <div class="row">
            <div class="col-lg-6 col-sm-1">
                <img class="img-login"
                    src="https://images.unsplash.com/photo-1632935254449-e777adc9addf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" />
            </div>
            <div class="col container-form">
                <h3>Register</h3>
                <p>Complete los campos para registrarte</p>
                <template>
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field v-model="name" :counter="20" :rules="nameRules" label="Nombre"
                            required>
                        </v-text-field>

                     <v-text-field v-model="apellido" :counter="20" :rules="nameRules" label="Apellido"
                            required>
                        </v-text-field>

                        <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                        ></v-text-field>

                        <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1"
                            label="Contraseña" hint="At least 8 characters" counter @click:append="show1 = !show1">
                        </v-text-field>
                  
                  <div class="pt-4">
                        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
                            Registrarme
                        </v-btn>
                        </div>
                    </v-form>
                </template>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            show1: false,
            password: '',
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => (`The email and password you entered don't match`),
            },
            valid: true,
            name: '',
            apellido: '',
                  email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 20) || 'Name must be less than 20 characters',
            ],
            
        }),

        methods: {
            validate() {
                this.$refs.form.validate()
            },
            
        },
    }
</script>

<style scoped>
    .img-login {
        width: 100%;
    }

    .container-form {
        padding: 150px 100px;
        text-align: left;
    }
</style>