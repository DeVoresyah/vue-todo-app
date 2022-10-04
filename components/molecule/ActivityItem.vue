<template>
  <div class="flex justify-between rounded-xl shadow mx-5 p-3 mt-2">
    <div class="flex items-center gap-[14px]">
      <input v-model="isChecked" type="checkbox" />
      <div :class="['rounded-full w-[5px] h-[5px]', priorityStyle]" />
      <p>{{ item?.title || 'unknown' }}</p>
    </div>
    <button>
      <img :src="require(`~/assets/icon-trash.svg`)" alt="icon" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'ActivityItemComponent',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    isChecked() {
      return this.item?.is_active === '1'
    },
    priorityStyle() {
      switch (this.item?.priority) {
        case 'very-high':
          return 'bg-red-500'
        case 'high':
          return 'bg-yellow-500'
        default:
          return 'bg-green'
      }
    },
  },
}
</script>
