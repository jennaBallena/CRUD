<template>
  <div>
    <v-app-bar dark color="#346473" >
        <router-link to="/">
          <v-img alt="Vue-Logo" src="../assets/logo.svg" max-height="38" max-width="38"></v-img>
        </router-link>
        <v-spacer></v-spacer>
              <v-toolbar-title>Libro de usuarios</v-toolbar-title>

      <v-spacer></v-spacer>
       <v-btn to="/agregar" color="#25A55F">
          <v-icon dark left> mdi-plus-circle</v-icon>Nuevo usuario
        </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>

</style>