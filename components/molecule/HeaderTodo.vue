<template>
  <section>
    <TextField v-model="newActivityText" :text-value="newActivityText" />
    <div class="w-full p-5 container mx-auto flex items-center justify-end">
      <Button
        title="Tambah"
        prefix-icon="icon-plus.svg"
        data-cy="activity-add-button"
        :on-click="onClick"
      />
    </div>
  </section>
</template>

<script>
import Button from '../atom/Button.vue'
import TextField from '../atom/TextField.vue'

export default {
  name: 'HeaderTodoComponent',
  components: {
    Button,
    TextField,
  },
  props: {
    refetchTodoList: {
      type: Function,
      required: false,
      default: () => ({}),
    },
    onClick: {
      type: Function,
      required: false,
      default: () => ({}),
    },
  },
  data() {
    return {
      newActivityText: 'New Activity',
    }
  },
}
</script>
