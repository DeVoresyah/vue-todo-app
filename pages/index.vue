<template>
  <ActivityList :activities="activityList" />
</template>

<script lang="ts">
import Vue from 'vue'
import { ACTIVITIES } from '~/constants/dummy'

export default Vue.extend({
  name: 'DashboardPage',
  computed: {
    activityList() {
      return ACTIVITIES
    },
  },
})
</script>
