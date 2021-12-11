<template>
  <v-data-table 
    :headers="headers"
    :items="datosTabla"
    :items-per-page="5"
    class="pa-2"
    hide-default-footer
  ></v-data-table>
</template>

<script>
export default {
  props: {
    datosTabla: Array,
  },
  data() {
    return {
      headers: [
        {
          text: "Nombre",
          align: "start",
          value: "name",
        },
        { text: "Apellido", value: "lastname" },
        { text: "Email", value: "email" },
        { text: "Telefono", value: "phone" },
      ],
      
    };
  },
};
</script>

<style>
</style>