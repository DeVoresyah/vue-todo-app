<template>
  <Card data-cy="activity-item" class="activity-card">
    <h3
      data-cy="activity-item-title"
      class="font-poppins font-bold text-gray-900 text-sm"
    >
      {{ title }}
    </h3>

    <div class="flex items-center justify-between">
      <span
        data-cy="activity-item-date"
        class="font-poppins text-xs text-gray-600"
        >{{ formattedDate }}</span
      >
      <button
        :id="`activity-item-delete-button-${id}`"
        data-cy="activity-item-delete-button"
      >
        <img src="~/assets/icon-trash.svg" alt="icon trash" />
      </button>
    </div>
  </Card>
</template>

<script>
import datefn from 'dayjs'
import Card from '../atom/Card.vue'

export default {
  name: 'ActivityCardComponent',
  components: {
    Card,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  computed: {
    formattedDate() {
      return datefn(this.date).format('D MMMM YYYY')
    },
  },
}
</script>
