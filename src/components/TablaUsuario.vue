<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
 
        <tr>
          <th class="text-left">Nombre completo</th>
          <th class="text-left">Dirección</th>
          <th class="text-left">Correo Electrónico</th>
          <th class="text-left">Telefóno</th>
          <th class="text-left">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in usuarios" :key="index">
          <td>{{ item.nombre }} {{item.paterno}} {{item.materno}}</td>
          <td>Calle {{ item.calle }}, No.{{item.numero}}, Col. {{item.colonia}}, {{item.ciudad}}, {{item.pais}}, C.P. {{item.postal}}</td>
          <td>{{ item.correo }}</td>
          <td>{{ item.telefono }}</td>
          <v-btn :to="{name: 'Editar', params: {id: item.id}}"><v-icon dark>mdi-lead-pencil</v-icon></v-btn>
          <v-btn @click="eliminarUsuario(item.id)"><v-icon dark>mdi-delete</v-icon></v-btn>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'TablaUsuario',
     created(){
      this.getUsuarios()
    },
    methods:{
        ...mapActions(['getUsuarios', 'eliminarUsuario'])
    },
    computed:{
        ...mapState(['usuarios'])
    }
}
</script>

<style>

</style>