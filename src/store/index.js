import Vue from 'vue'
import Vuex from 'vuex'
// import axios from '@/axios.js'
// import axios from 'axios'

import salons from '@/db/salons.json'
import workers from '@/db/workers.json'
import timetable from '@/db/timetable.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    salons: salons.salons,
    workers: workers.workers,
    timetable: timetable.timetable,
    submitted: false,
    count: 1,
    max: 4,
    countPage: false,
    // userValue: { idSalon: '', idMaster: '', userTime: '', userName: '', userPhone: '' }
    idSalon: null,
    idMaster: null,
    userDate: null,
    userTime: null,
    userName: null,
    userPhone: null,
    allForm: ''
  },
  getters: {
    SALONS: s => s.salons,
    WORKERS: s => s.workers,
    TIMETABLE: s => s.timetable,
    ALLFORM: s => s.allForm,
    SUBMITTED: s => s.submitted,
    COUNT: s => s.count,
    COUNTPAGE: s => s.countPage,
    IDSALON: s => s.idSalon,
    IDMASTER: s => s.idMaster,
    USERDATE: s => s.userDate,
    USERTIME: s => s.userTime,
    USERNAME: s => s.userName,
    USERPHONE: s => s.userPhone,
    FILTER_MASTER: state => {
      return state.workers.filter(master => {
        return master.idsalon === state.idSalon
      })
    },
    FILTER_TIMETABLE: state => {
      return state.timetable.filter(time => {
        return time.disable
      })
    },
    MAX: s => s.max
    // MAX: state => {
    //   return Object.keys(state.userValue).length
    // }
  },
  mutations: {
    SET_SALON: (state, salons) => (state.salons = salons),
    SET_WORKERS: (state, workers) => (state.workers = workers),
    SET_TIMETABLE: (state, timetable) => (state.timetable = timetable),
    // SET_PAGE: (state, item) => (state.count = item),
    SET_SUBMITTED(state) {
      state.allForm = [
        { idSalon: state.idSalon },
        { idMaster: state.idMaster },
        { userDate: state.userDate },
        { userTime: state.userTime },
        { userName: state.userName },
        { userPhone: state.userPhone }
      ]
    },
    SET_COUNTPAGE(state, val) {
      state.countPage = val
    },
    SET_NEXT(state) {
      state.count++
      state.countPage = false
    },
    SET_PREV(state) {
      state.count--
      // (state.countPage = false)
    },
    SET_IDSALON: (state, value) => (state.idSalon = value),
    SET_IDMASTER: (state, idMaster) => (state.idMaster = idMaster),
    SET_USERDATE: (state, val) => (state.userDate = val),
    SET_USERTIME: (state, val) => (state.userTime = val),
    SET_USERNAME: (state, name) => (state.userName = name),
    SET_USERPHONE: (state, phone) => (state.userPhone = phone)
  },
  // если через api
  actions: {
    getNext: ({ commit }) => commit('SET_NEXT'),
    getPrev: ({ commit }) => commit('SET_PREV')
    // getCountPage: ({ commit }) => commit('SET_COUNTPAGE')

    // async getSalon({ commit }) {
    // axios
    //   .get('http://localhost:3000/salons')
    //   .then(response => commit('SET_SALON', response.data))
    //   .catch(error => console.error(error))
    // },
    // async getWorkers({ commit }) {
    // axios
    //   .get('http://localhost:3004/workers')
    //   .then(response => commit('SET_WORKERS', response.data))
    //   .catch(error => console.error(error))
    // },
    // async getTimetable({ commit }) {
    //   axios
    //     .get('http://localhost:3008/timetable')
    //     .then(response => commit('SET_TIMETABLE', response.data))
    //     .catch(error => console.error(error))
    // }
  },
  modules: {}
})
