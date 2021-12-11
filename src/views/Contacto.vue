<template>
 <div class="row">
     <div class="col p-4">
    <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="name" :rules="nameRules" label="Nombre" required></v-text-field>

            <v-text-field v-model="lastname" :rules="lastNameRules" label="Apellido" required></v-text-field>

            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

            <v-text-field v-model="phoneNumber" :rules="phoneNumerRules" label="Telefono" required></v-text-field>

            <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
                Agregar
            </v-btn>
            <v-btn color="error" class="mr-4" @click="reset"> Resetear </v-btn>
        </v-form>
    </v-container>
     </div>
     <div class="col">
     <Table :datosTabla="datos" class="my-6"> </Table>
     </div>
 </div>
</template>

<script>
    import Table from "../components/table.vue";
    export default {
        data: () => ({
            valid: true,
            name: "",
            lastname: "",
            email: "",
            phoneNumber: "",
            nameRules: [
                (v) => !!v || "El nombre es requerido",
                (v) =>
                (v && v.length <= 10) || "El nombre no debe superar los 10 caracteres",
            ],
            lastNameRules: [
                (v) => !!v || "El apellido es requerido",
                (v) =>
                (v && v.length <= 10) ||
                "El apellido no debe superar los 10 caracteres",
            ],
            emailRules: [
                (v) => !!v || "El e-mail es requerido",
                (v) => /.+@.+\..+/.test(v) || "El e-mail tiene que ser valido",
            ],
            phoneNumerRules: [
                (v) => !!v || "El telefono es requerido",
                (v) =>
                /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(
                    v
                ) || "El telefono tiene que ser valido",
            ],
            datos: [],
        }),
        components: {
            Table,
        },
        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    let dataForm = {
                        name: this.name,
                        lastname: this.lastname,
                        email: this.email,
                        phone: this.phoneNumber,
                    };
                    this.datos.push(dataForm);
                }
            },
            reset() {
                this.$refs.form.reset();
            },
        },
    };
</script>

<style>
</style>