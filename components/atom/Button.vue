<template>
  <button
    :data-cy="dataCy"
    class="py-2.5 px-4 bg-primary-500 rounded-full flex items-center hover:bg-primary-600 active:bg-primary-600 focus:outline-none focus:ring focus:ring-primary-200"
    @click="onClick"
  >
    <img
      v-if="prefixIcon !== undefined"
      :src="require(`~/assets/${prefixIcon}`)"
      alt="icon"
    />
    <span
      class="font-poppins text-white text-xs"
      :class="{ 'ml-2': prefixIcon !== undefined }"
      >{{ title }}</span
    >
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    dataCy: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    prefixIcon: {
      type: String,
      default: undefined,
    },
    onClick: {
      type: Function,
      required: true,
    },
  },
}
</script>
