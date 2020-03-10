<template>
  <div>
    <h1 class="text-center my-5">{{ title }}</h1>
    <div class="salon row row-cols-1 row-cols-md-3">
      <div class="col mb-4" v-for="salon in SALONS" :key="salon.id">
        <div class="card h-100">
          <img :src="salon.picture" class="card-img-top" alt="alt" />
          <div class="card-body d-flex align-content-between flex-wrap">
            <h5 class="card-title">Название карточки</h5>
            <!-- <h6 class="card-subtitle mb-2 text-muted"></h6> -->
            <p class="card-text">{{ salon.text }}</p>

            <dl class="row">
              <dt class="col-sm-4">Адрес</dt>
              <dd class="col-sm-8">{{ salon.address }}</dd>
              <dt class="col-sm-4">GEO</dt>
              <dd class="col-sm-8">{{ salon.geo }}</dd>
              <dt class="col-sm-4">Время</dt>
              <dd class="col-sm-8">{{ salon.time }}</dd>
            </dl>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary btn-block" @click.passive="set_salon(salon.id)">
              Выбрать
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'VSalons',
  //   components: {
  //   'v-block': () => import('@/components/v-block.vue')
  // },
  props: {
    title: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters(['SALONS', 'IDSALON', 'COUNTPAGE'])
    // allSalons() {
    //   return this.$store.getters.SALONS
    // }
  },
  methods: {
    // ...mapMutations(['SET_COUNTPAGE']),
    // ...mapActions(['getNext']),
    set_salon(value) {
      this.$store.commit('SET_IDSALON', value)
      if (this.IDSALON != null) {
        this.$store.commit('SET_COUNTPAGE', true)
        this.$store.commit('SET_NEXT')
      }
    }
  }
}
</script>

<style scoped lang="scss"></style>
