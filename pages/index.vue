<template>
  <div>
    <HeaderActivity class="mb-5" />
    <ActivityList :activities="activities" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ACTIVITIES } from '~/constants/dummy'
import HeaderActivity from '~/components/molecule/HeaderActivity.vue'
import API from '~/services/api'
import { ActivityType } from '~/services/api/api.types'

export default Vue.extend({
  name: 'DashboardPage',
  components: { HeaderActivity },
  data() {
    return {
      activities: [] as ActivityType[],
    }
  },
  computed: {
    activityList() {
      return ACTIVITIES
    },
  },
  beforeMount() {
    this.fetchActivities()
  },
  methods: {
    async fetchActivities() {
      try {
        const api = API.create('https://todo.api.devcode.gethired.id')
        const res = await api.getActivity()

        if (res.ok) {
          if (res.data?.data.length) {
            this.activities = res.data?.data
          }
        }
      } catch (error) {
        console.log('Error => ', error)
      }
    },
  },
})
</script>
