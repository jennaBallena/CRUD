import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase/firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios: [],
    usuario: {
      id:'', nombre: '', paterno: '', materno: '', 
      calle: '', numero: '', 
      colonia:'', ciudad:'', pais:'', 
      postal: '', correo: '', telefono: ''}
  },
  mutations: {
    setUsuarios(state, payload){
      state.usuarios = payload
    },
    setUsuario(state, payload){
      state.usuario = payload
    },
    setEliminar(state, payload){
      state.usuarios = state.usuarios.filter(item => item.id !== payload)
  }
  },
  actions: {
    getUsuarios({commit}){
      const usuarios = []
      db.collection('usuarios').get()
      .then(res => {
        res.forEach(doc => {
         // console.log(doc.id)
         // console.log(doc.data)
          let usuario = doc.data()
          usuario.id = doc.id
          usuarios.push (usuario)
        });
        commit('setUsuarios',  usuarios)
      })
    },
    getUsuario({commit}, idUsuario){
      db.collection('usuarios').doc(idUsuario).get()
      .then(doc => {
        console.log(doc.id)
        console.log(doc.data())
        let usuario = doc.data()
        usuario.id = doc.id
        commit('setUsuario', usuario)
      })
    },
    editarUsuario({commit}, usuario){
      db.collection('usuarios').doc(usuario.id).update({
        nombre: usuario.nombre, 
        paterno: usuario.paterno, 
        materno: usuario.materno,
        calle: usuario.calle, numero: usuario.numero, colonia: usuario.colonia,
        ciudad: usuario.ciudad, pais: usuario.pais, postal: usuario.postal,
        correo: usuario.correo, telefono: usuario.telefono
      })
      .then(() =>{
        console.log('Usuario actualizado');
        router.push('/')
        //router.push({name: 'Home'})
      })
    },
    agregarUsuario({commit}, usuario){
      db.collection('usuarios').add({
        nombre: usuario.nombre, 
        paterno: usuario.paterno, 
        materno: usuario.materno,
        calle: usuario.calle, numero: usuario.numero, colonia: usuario.colonia,
        ciudad: usuario.ciudad, pais: usuario.country, postal: usuario.postal,
        correo: usuario.correo, telefono: usuario.telefono
      })
      .then(doc => {
        //console.log(doc.id)
        router.push({name: 'Home'})
      })
    },
  eliminarUsuario({commit, dispatch}, id){
      db.collection('usuarios').doc(id).delete()
      .then(() => {
          commit('setEliminar', id)
      })
  }
  },
  modules: {
  }
})
