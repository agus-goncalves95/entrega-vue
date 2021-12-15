<template>
    <div>
        <Banner></Banner>
        <v-container class="pt-12">
            <v-btn @click="obtenerProductos()">Obtener datos</v-btn>
            <v-row>
                <v-col class="col-4" v-for="producto in productos" :key="producto.id">
                    <v-card class="pa-4">
                        <img :src="producto.imagen" style="width: 100%">
                        <v-card-title>
                            {{ producto.nombre }}
                        </v-card-title>
                        <v-card-text>
                            <h5> ${{ producto.precio }}</h5>
                            <p> Cantidad: {{ producto.cantidad }}</p>
                        </v-card-text>

                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import Banner from '../components/Banner'
    export default {
        data() {
            return {
                productos: []
            }
        },
        components: {
            Banner
        },
        methods: {
            obtenerProductos() {
                fetch("https://61b8fad438f69a0017ce5e53.mockapi.io/productos")
                    .then(res => res.json())
                    .then(data => {
                        this.productos = data
                    })
            }
        }
    }
</script>

<style scoped>

</style>