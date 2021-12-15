<template>
    <div>
        <v-container class="pt-12">
            <v-row>
                <v-col class="col-4" v-for="producto in productos" :key="producto.id">
                    <v-card class="pa-4">
                        <img :src="producto.imagen"  style="width: 100%">
                        <h4>{{ producto.nombre }}</h4>
                        <h5> ${{ producto.precio }}</h5>
                        <p> Cantidad: {{ producto.cantidad }}</p>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                productos: []
            }
        },
        // Llamo a mi endpoint cuando se carga el componente con el mountend
        // fecheo con un get y obtengo la data
        // y lo tengo que transformar a un Json
        // Y igualo el endoipnt y transformo en mi array de productos
        mounted(){
            fetch("https://61b8fad438f69a0017ce5e53.mockapi.io/productos")
            .then(res => res.json())
            .then(data => {
             this.productos = data
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>