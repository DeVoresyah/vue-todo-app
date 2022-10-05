<template>
  <section>
    <TextField v-model="activityTitleText" :text-value="activityTitleText" />
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
// Components
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
    activityName: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      activityTitleText: '',
    }
  },
  watch: {
    activityName(val) {
      this.activityTitleText = val
    },
  },
}
</script>
