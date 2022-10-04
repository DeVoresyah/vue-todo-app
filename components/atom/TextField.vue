<template>
  <div>
    <div class="flex border-b-2 m-5 pb-[10px]">
      <input
        type="text"
        placeholder="New Activity Name"
        class="w-full focus:outline-none appearance-none pointer-events-none"
        v-bind:value="textValue"
        v-on:input="$emit('input', $event.target.value)"
      />
      <button @click="onClick">
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
    onClick: {
      type: Function,
      required: false,
      default: () => console.log('Edit Clicked'),
    },
  },
}
</script>
