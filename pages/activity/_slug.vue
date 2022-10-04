<template>
  <div>
    <div v-if="todoList.length !== 0">
      <ActivityItem
        v-for="item in todoList"
        :id="item.id"
        :key="item.id"
        :item="item"
      />
    </div>
    <div
      v-else
      class="w-full flex flex-col items-center justify-center"
      data-cy="activity-empty-state"
    >
      <img
        src="~/assets/img/todo-empty-state.png"
        alt=""
        class="w-[319px] md:w-[500px]"
      />
      <span
        class="font-poppins font-bold text-xl sm:text-2xl text-gray-900 mt-5"
        >Buat List Item kamu</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ActivityItem from '~/components/molecule/ActivityItem.vue'
import { TODOS } from '~/constants/dummy'

export default Vue.extend({
  name: 'ActivityDetail',
  components: { ActivityItem },
  computed: {
    todoList() {
      const slug = this.$route.params?.slug
      const filterByActivity = TODOS.filter(
        (item) => item.activity_group_id.toString() === slug
      )

      return filterByActivity
    },
  },
})
</script>
