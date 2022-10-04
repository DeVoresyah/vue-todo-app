<template>
  <div>
    <div class="flex border-b-2 m-5 pb-[10px]">
      <input
        type="text"
        placeholder="New Activity Name"
        class="w-full focus:outline-none"
        v-bind:value="textValue"
        v-on:input="$emit('input', $event.target.value)"
      />
      <button>
        <img src="~/assets/icon-pencil.svg" alt="icon pencil" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    textValue: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>
