<template>
  <div class="bg-white rounded-xl drop-shadow-lg p-3" :data-cy="dataCy">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    dataCy: {
      type: String,
      required: true,
    },
  },
}
</script>
