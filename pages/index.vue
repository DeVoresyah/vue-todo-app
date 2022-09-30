<template>
  <div class="grid grid-cols-2 gap-2 px-5">
    <ActivityCard
      :id="1"
      title="Daftar Belanja Bulanan"
      date="2021-11-30T05:29:24.000Z"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ActivityCard from '~/components/molecule/ActivityCard.vue'

export default Vue.extend({
  name: 'DashboardPage',
  components: {
    ActivityCard,
  },
})
</script>
