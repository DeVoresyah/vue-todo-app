<template>
  <div>
    <!-- Label -->
    <p v-if="inputLabel" class="mb-3 font-semibold text-[10px]">
      {{ inputLabel }}
    </p>

    <input
      type="text"
      placeholder="Tambahkan Nama List Item"
      class="w-full focus:outline-none bg-white border p-4 border-[#E5E5E5] rounded-md"
      v-bind:value="textValue"
      v-on:input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'InputTodoItemComponent',
  props: {
    textValue: {
      type: String,
      required: false,
      default: '',
    },
    inputLabel: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>
