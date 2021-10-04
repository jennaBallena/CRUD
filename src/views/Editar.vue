<template>
 <v-card-text>
    <v-form @submit.prevent="editarUsuario(usuario)">
      <v-card-title>
      <span class="text-h6">Actualización de información</span>
    </v-card-title>
    <v-col cols="6">
      <v-card-subtitle>Nombre Completo</v-card-subtitle>
    </v-col>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="usuario.nombre"
            :rules="Rules"
            label="Nombre(s)"
            required>
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="usuario.paterno"
            :rules="Rules"
            label="Apellido Paterno"
            required>
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="usuario.materno"
            :rules="Rules"
            label="Apellido Materno"
            required>
          </v-text-field>
        </v-col>
      </v-row>
    </v-container>
 
 <v-col cols="6">
      <v-card-subtitle>Dirección</v-card-subtitle>
    </v-col>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="usuario.calle"
            :rules="Rules"
            label="Calle"
            required>
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="usuario.numero"
            :rules="Rules"
            label="No. Exterior/Interior"
            required>
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="usuario.colonia"
            :rules="Rules"
            label="Colonia"
            required>
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="usuario.ciudad"
            :rules="Rules"
            label="Ciudad"
            required>
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
           <v-select
           v-model="usuario.pais"
            :items="country"
            item-text="name"
            item-value="name"
            label="País">
          </v-select>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="usuario.postal"
            :rules="Rules"
            label="Código Postal"
            required>
          </v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <v-col cols="6">
      <v-card-subtitle>Contacto</v-card-subtitle>
    </v-col>
    <v-container>
      <v-row>
        <v-col cols="6" sm="6" md="4">
          <v-text-field
            v-model="usuario.correo"
            :rules="emailRules"
            label="Correo Electrónico"
            required>
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="usuario.telefono"
            :rules="Rules"
            label="Teléfono"
            required>
          </v-text-field>
        </v-col>
    
      </v-row>
    </v-container>


    <v-btn color="success" class="mr-4" type="submit"> Guardar </v-btn>
  </v-form>
</v-card-text>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import axios from 'axios'
export default {
    name: 'Editar',
    data() {
      return {
        id: this.$route.params.id,
        nombre: '',
        paterno: '',
        materno: '',
        calle: '',
        numero: '',
        colonia: '',
        ciudad: '',
        pais: '',
        country: [{name: ''}],
        postal: '',
        Rules: [ v => !!v || 'Este campo es requerido'],
        correo: '',
        telefono: '',
        emailRules: [
          v => !!v || 'El correo es requerido',
          v => /.+@.+\..+/.test(v) || 'Ingrese un correo válido']
      }
    },
    created() {
      this.getUsuario(this.id),
      this.p()
    },
    methods: {
      ...mapActions(['getUsuario', 'editarUsuario']),
      ...mapActions(['agregarUsuario']),
      async p (){
          let datos = await axios.get('https://countriesnow.space/api/v0.1/countries/iso')
          //console.log(datos.data.data[0].name)
          .then(res => {
            this.country = res.data.data
           // console.log(res.data.data)
          })
          .catch(error => {
            console.log(error);
          })
      }
    },
    computed:{
      ...mapState(['usuario'])
    }
}
</script>

<style>

</style>