<template>
  <div class="w-full p-5 container mx-auto flex items-center justify-between">
    <h2
      class="font-poppins text-gray-900 font-bold text-base"
      data-cy="activity-title"
    >
      Activity
    </h2>

    <Button
      title="Tambah"
      prefix-icon="icon-plus.svg"
      data-cy="activity-add-button"
    />
  </div>
</template>

<script>
import Button from '../atom/Button.vue'

export default {
  name: 'HeaderActivityComponent',
  components: {
    Button,
  },
}
</script>
