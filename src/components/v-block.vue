<template>
  <nav class="navbar">
    <ul class="pagination pagination-lg flex-column">
      <li class="page-item" :class="{ disabled: count === 1 }">
        <a href="#" class="page-link" @click.prevent="getPrev">НАЗАД</a>
      </li>

      <!-- <li class="page-item" v-for="item in MAX" :key="item" :class="{ active: COUNT === item }">
        <a href="#" class="page-link" @click.prevent="SET_PAGE(item)">{{ item }}</a>
      </li> -->
      <li class="page-item" :class="{ disabled: !COUNTPAGE }">
        <a href="#" class="page-link" @click.prevent="getNext">ДАЛЕЕ</a>
      </li>
    </ul>
  </nav>
  <!-- <button v-show="BLOCK<questions.length+1" :disabled="question.checked">Следующий</button> -->
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'VBlock',
  props: {
    count: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters(['MAX', 'COUNTPAGE'])
    // allSalons() {
    //   return this.$store.getters.SALONS
    // }
  },
  methods: {
    // ...mapMutations(['SET_PAGE']),
    ...mapActions(['getNext', 'getPrev'])
  }
}
</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 50%;
  left: 0;
}
</style>
