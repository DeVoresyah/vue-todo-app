<template>
  <!-- container -->
  <div
    v-if="isVisible"
    :class="[
      'fixed top-0 bottom-0 left-0 right-0 z-10 p-0 bg-transparent flex items-center justify-center',
    ]"
  >
    <!-- Overlay -->
    <div
      class="absolute w-screen h-screen bg-[#1A202C4D] bg-opacity-5"
      @click="onHide"
    />

    <!-- Modal Card -->
    <div
      class="z-50 shadow rounded-xl w-full md:max-w-[530px] xl:max-w-[830px] mx-5 bg-white"
    >
      <!-- Modal Header -->
      <div class="flex justify-between p-5 border-b border-b-[#E5E5E5]">
        <h1 class="text-base font-semibold">{{ title }}</h1>
        <button @click="onHide">
          <img src="~/assets/icon-close.svg" alt="icon close" />
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-5">
        <InputTodoItem
          v-model="itemName"
          :text-value="itemName"
          :input-label="'NAMA LIST ITEM'"
        />

        <SelectField
          v-model="priorityValue"
          :input-label="'PRIORITY'"
          class="mt-5"
        />
      </div>

      <!-- Modal Footer -->
      <div class="flex justify-end p-5 border-t border-t-[#E5E5E5]">
        <Button
          title="Simpan"
          data-cy="todo-add-button"
          :on-click="handleOnSubmit"
          :disabled="!formIsReady"
        />
      </div>
    </div>
  </div>
</template>

<script>
import InputTodoItem from '../atom/InputTodoItem.vue'
import SelectField from '../atom/SelectField.vue'
import Button from '../atom/Button.vue'

export default {
  name: 'ModalAddTodoComponent',
  components: { InputTodoItem, SelectField, Button },
  props: {
    title: {
      type: String,
      required: false,
      default: 'Modal Title',
    },
    item: {
      type: Object,
      default: () => ({}),
    },
    isVisible: {
      type: Boolean,
      required: true,
      default: false,
    },
    onHide: {
      type: Function,
      required: true,
    },
    handleAddTodo: {
      type: Function,
      required: false,
      default: () => {},
    },
  },
  data() {
    return {
      itemName: '',
      priorityValue: '',
    }
  },
  computed: {
    formIsReady() {
      return this.itemName && this.priorityValue
    },
  },
  methods: {
    clearForm() {
      this.itemName = ''
      this.priorityValue = ''
    },
    handleOnSubmit() {
      this.handleAddTodo(this.itemName, this.priorityValue)
      this.clearForm()
      this.onHide()
    },
  },
}
</script>
