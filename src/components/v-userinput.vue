<template>
  <div>
    <h1 class="text-center my-3">{{ title }}</h1>
    <pre>{{ USERNAME }}</pre>
    <pre>{{ USERPHONE }}</pre>
    <div class="form-group">
      <label>Имя</label>
      <input type="text" class="form-control" v-model.trim="USERNAME" />
    </div>
    <div class="form-group">
      <label>Имя</label>
      <input type="text" class="form-control" v-model.lazy.trim="USERPHONE" />
    </div>
  </div>
</template>

<script>
// import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'VUserinput',
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
    USERNAME: {
      get() {
        return this.$store.getters.USERNAME
      },
      set(name) {
        this.$store.commit('SET_USERNAME', name)
      }
    },
    USERPHONE: {
      get() {
        return this.$store.getters.USERPHONE
      },
      set(name) {
        this.$store.commit('SET_USERPHONE', name)
      }
    }
  }
}
</script>

<style scoped lang="scss"></style>
