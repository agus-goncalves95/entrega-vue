<template>
    <div>
          <h3> {{ producto.nombre }}</h3>
    </div>
</template>

<script>
export default{
        props: {
            producto: Object
        },
        filters: {
            // Recibe un parametro y computed no
            // 2- Al recibir/retornar un valor le aplica el filtro de dos decimales
            dosDecimales(value) {
                return value.toFixed(2);
            }
        }
    
}

</script>

<style  scoped>

</style>