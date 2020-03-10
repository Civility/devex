<template>
  <div>
    <h1 class="text-center my-3">{{ title }}</h1>
    <pre>{{ USERDATE }}</pre>
    <pre>{{ USERTIME }}</pre>
    <div class="form-group flatpickr">
      <label for="UserDate">День/Месяц</label>
      <input type="text" ref="UserDate" class="form-control" v-model="USERDATE" />
    </div>
    <div class="form-group flatpickr">
      <label for="UserDate">Время</label>
      <input type="text" ref="UserTime" class="form-control" v-model="USERTIME" />
    </div>
    <button
      class="btn btn-primary btn-block"
      :disabled="(!USERDATE, !USERTIME)"
      @click.passive="set_next()"
    >
      Далее
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import flatpickr from 'flatpickr'
import { Russian } from 'flatpickr/dist/l10n/ru.js'
import 'flatpickr/dist/flatpickr.min.css'
import 'flatpickr/dist/themes/dark.css'
export default {
  name: 'VFlatpickr',
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
    USERDATE: {
      get() {
        return this.$store.state.userDate
      },
      set(date) {
        this.$store.commit('SET_USERDATE', date)
      }
    },
    USERTIME: {
      get() {
        return this.$store.state.userTime
      },
      set(time) {
        this.$store.commit('SET_USERTIME', time)
        if (this.USERTIME != null) {
          this.$store.commit('SET_COUNTPAGE', true)
        }
      }
    }
    // ...mapGetters(['FILTER_TIMETABLE'])
  },
  //   beforeDestroy() {
  //     if (this.USERDATE) {
  //       this.USERDATE.destroy()
  //     }
  //     if (this.USERTIME) {
  //       this.USERTIME.destroy()
  //     }
  //   },
  mounted() {
    this.initUserDate()
    this.initUserTime()
  },
  methods: {
    set_next() {
      this.$store.commit('SET_COUNTPAGE', true)
      this.$store.commit('SET_NEXT')
    },
    initUserDate() {
      flatpickr(this.$refs.UserDate, {
        locale: Russian,
        theme: 'dark',
        minDate: 'today',
        defaultDate: 'today',
        altInput: true,
        disable: [
          function(date) {
            return date.getDay() === 0 || date.getDay() === 6
          }
        ],
        altFormat: 'd.m.Y'
        // onChange: (selectedDates, dateStr) => {
        //   this.$emit('input', dateStr)
        // }
      })
    },

    initUserTime() {
      // this.$refs.UserTime
      flatpickr(this.$refs.UserTime, {
        locale: Russian,
        altFormat: 'H:i',
        defaultDate: '09:00',
        theme: 'dark',
        minDate: 'today',
        altInput: true,
        enableTime: true,
        noCalendar: true,
        time_24hr: true,
        hourIncrement: 1,
        minuteIncrement: 15,
        minTime: '09:00',
        maxTime: '22:00'
      })
    }
    // updateUserDate(e) {
    //   this.$store.commit('SET_USERDATE', e.target.value)
    // },
    // updateUserTime(e) {
    //   this.$store.commit('SET_USERTIME', e.target.value)
    // }
  }
}
</script>
<style lang="scss" scoped></style>
