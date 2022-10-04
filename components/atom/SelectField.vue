<template>
  <div>
    <!-- Label -->
    <p v-if="inputLabel" class="mb-3 font-semibold text-[10px]">
      {{ inputLabel }}
    </p>

    <select
      id="priority"
      name="priority"
      class="w-full focus:outline-none bg-white border p-4 border-[#E5E5E5] rounded-md"
      :value="selectValue"
      @input="$emit('input', $event.target.value)"
    >
      <option value="" disabled selected>Pilih priority</option>
      <option value="very-high">Very High</option>
      <option value="high">High</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
      <option value="very-low">Very Low</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectFieldComponent',
  props: {
    selectValue: {
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
  data() {
    return {
      select: '',
    }
  },
}
</script>
