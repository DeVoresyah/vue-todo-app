<template>
  <div
    v-if="activities.length > 0"
    class="container mx-auto grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4 px-5 gap-y-4"
  >
    <ActivityCard
      v-for="activity in activities"
      :id="activity.id"
      :key="activity.id"
      :title="activity.title"
      :date="activity.created_at"
      :on-click-icon="onClickIcon"
    />
  </div>
  <div
    v-else
    class="w-full flex flex-col items-center justify-center"
    data-cy="activity-empty-state"
  >
    <img
      src="~/assets/img/activity-empty-state.png"
      alt=""
      class="w-[319px] md:w-[500px]"
    />
    <span class="font-poppins font-bold text-xl sm:text-2xl text-gray-900 mt-5"
      >Buat activity pertamamu</span
    >
  </div>
</template>

<script>
import ActivityCard from '../molecule/ActivityCard.vue'

export default {
  name: 'ActivityListComponent',
  components: {
    ActivityCard,
  },
  props: {
    activities: {
      type: Array,
      required: true,
    },
    onClickIcon: {
      type: Function,
      required: false,
      default: undefined,
    },
  },
}
</script>
