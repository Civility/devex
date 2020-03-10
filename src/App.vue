<template>
  <div id="app">
    <div class="container">
      <form @submit.prevent="OnSubmit">
        <v-salons v-show="COUNT === 1" :count="COUNT" title="Салоны" />
        <v-workers v-show="COUNT === 2" :count="COUNT" title="Работники" />
        <!-- <v-timetable v-show="COUNT == 3" :count="COUNT"/> -->
        <v-flatpickr v-show="COUNT == 3" :count="COUNT" title="Дата" />
        <v-userinput v-show="COUNT == 4" :count="COUNT" title="Имя / Телефон" />
        <button :disabled="COUNT != 4" v-show="COUNT === 4" type="submit" class="btn btn-primary">
          Отправить
        </button>
      </form>
    </div>
    <div class="container ">
      <div class="row">
        <div class="col my-3">
          <p>{{ ALLFORM }}</p>
        </div>
      </div>
    </div>

    <v-block :count="COUNT" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'App',
  components: {
    'v-salons': () => import('@/components/v-salons.vue'),
    'v-workers': () => import('@/components/v-workers.vue'),
    'v-flatpickr': () => import('@/components/v-flatpickr.vue'),
    'v-userinput': () => import('@/components/v-userinput.vue'),
    'v-block': () => import('@/components/v-block.vue')
  },
  computed: {
    ...mapGetters(['COUNT', 'ALLFORM', 'SUBMITTED'])
  },
  methods: {
    ...mapMutations(['SET_SUBMITTED']),
    OnSubmit() {
      // На проверку и вывода окна с успехом небыло времени
      if (
        this.COUNT == 4 &&
        this.$store.getters.USERNAME != null &&
        this.$store.getters.USERPHONE != null
      ) {
        this.$store.commit('SET_SUBMITTED')

        alert('Успешно')
      }
    }
  }
}
</script>

<style lang="scss"></style>
