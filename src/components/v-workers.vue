<template>
  <div>
    <h1 class="text-center my-5">{{ title }}</h1>
    <div class="salon row row-cols-1 row-cols-md-3">
      <div class="col mb-4" v-for="worker in FILTER_MASTER" :key="worker.id">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">{{ worker.name.first }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ worker.name.last }}</h6>
            <p class="card-text">{{ worker.description }}</p>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary btn-block" @click.passive="set_worker(worker.id)">
              Выбрать
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'VWorkers',
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
    ...mapGetters(['FILTER_MASTER', 'IDMASTER'])
  },
  methods: {
    set_worker(value) {
      this.$store.commit('SET_IDMASTER', value)
      if (this.IDMASTER != null) {
        this.$store.commit('SET_COUNTPAGE')
        this.$store.commit('SET_NEXT')
      }
    }
    // ...mapActions(['getMaster'])
  }
}
</script>

<style scoped lang="scss"></style>
