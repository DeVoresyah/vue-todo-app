<template>
  <div>
    <div v-if="todos.length !== 0">
      <ActivityItem
        v-for="item in todos"
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
import API from '~/services/api'

export default Vue.extend({
  name: 'ActivityDetail',
  components: { ActivityItem },
  data() {
    return {
      todos: [] as any,
    }
  },
  async beforeMount() {
    const slug = this.$route.params?.slug

    if (isNaN(+slug)) {
      console.log('invalid slug')
      this.todos = []
      return
    }

    try {
      // hit api to get list of todo by activity id
      const api = API.create('https://todo.api.devcode.gethired.id')
      const res = await api.getDetailActivity(Number(slug))

      console.log('todo response => ', res)

      if (res.ok) {
        this.todos = res.data?.todo_items
      } else {
        this.todos = []
      }
    } catch (error) {
      console.log('Error =>', error)
    }
  },
})
</script>
