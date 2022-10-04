<template>
  <div>
    <HeaderActivity class="mb-5" />
    <ActivityList :activities="activityList" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ACTIVITIES } from '~/constants/dummy'
import HeaderActivity from '~/components/molecule/HeaderActivity.vue'

export default Vue.extend({
  name: 'DashboardPage',
  computed: {
    activityList() {
      return ACTIVITIES
    },
  },
  components: { HeaderActivity },
})
</script>
