<template>
  <div>
    <HeaderTodo
      class="mb-5"
      :refetch-todo-list="fetchTodoList"
      :on-click="openAddTodoModal"
      :activity-name="activityName"
    />
    <div v-if="todos.length !== 0">
      <ActivityItem
        v-for="item in todos"
        :id="item.id"
        :key="item.id"
        :item="item"
        :on-click-icon="deleteTodoItem"
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
    <ModalAddTodo
      :is-visible="show.addTodoModal"
      :on-hide="onCloseAddTodoModal"
      :handle-add-todo="handleSaveTodo"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import API from '~/services/api'

// Components
import ActivityItem from '~/components/molecule/ActivityItem.vue'
import HeaderTodo from '~/components/molecule/HeaderTodo.vue'
import ModalAddTodo from '~/components/molecule/ModalAddTodo.vue'

// Types
import { TodoType } from '~/services/api/api.types'

export default Vue.extend({
  name: 'ActivityDetail',
  components: { ActivityItem, HeaderTodo, ModalAddTodo },
  data() {
    return {
      activityId: 0,
      activityName: '',
      todos: [] as TodoType[],
      show: {
        addTodoModal: false,
      },
    }
  },
  async beforeMount() {
    const slug = this.$route.params?.slug

    if (isNaN(+slug)) {
      alert('invalid slug')
      this.todos = []
      return
    }

    await this.fetchTodoList(+slug)
  },
  methods: {
    async createTodoItem(title: string, _priority: string) {
      if (!this.activityId) {
        return
      }

      // TODO: hit api to create todo item
      try {
        const api = API.create('https://todo.api.devcode.gethired.id')

        const bodyReq = {
          activity_group_id: this.activityId,
          title,
        }
        const res = await api.createTodo(bodyReq)

        if (res.ok) {
          console.log('success res=> ', res)

          // TODO: if success refetch todo list
          this.refetch()
        }
      } catch (error) {
        console.log('Error => ', error)
      }
    },
    async fetchTodoList(activityId: number) {
      try {
        // hit api to get list of todo by activity id
        const api = API.create('https://todo.api.devcode.gethired.id')
        const res = await api.getDetailActivity(activityId)

        if (res.ok) {
          if (res.data?.todo_items.length) {
            this.todos = res.data?.todo_items
          }
          this.activityName = res.data?.title || ''
          this.activityId = activityId
        } else {
          this.todos = []
        }
      } catch (error) {
        console.log('Error =>', error)
      }
    },
    async refetch() {
      if (!this.activityId) {
        return
      }

      try {
        // hit api to get list of todo by activity id
        const api = API.create('https://todo.api.devcode.gethired.id')
        const res = await api.getDetailActivity(this.activityId)

        if (res.ok) {
          if (res.data?.todo_items.length) {
            this.todos = res.data?.todo_items
          }
        }
      } catch (error) {
        console.log('Error =>', error)
      }
    },
    async handleSaveTodo(itemName: string, priorityValue: string) {
      // prevent to submit
      if (!itemName || !priorityValue) {
        alert('Fields Cannot be empty!')
        return
      }

      await this.createTodoItem(itemName, priorityValue)
    },
    async deleteTodoItem(todoId: number) {
      if (!todoId) return

      const confirmed = confirm(`Detele Todo with ID ${todoId}`)
      if (!confirmed) return

      try {
        const api = API.create('https://todo.api.devcode.gethired.id')
        const res = await api.deleteTodo(todoId)

        if (res.ok) {
          if (res.data?.status && res.data?.message) {
            alert(`${res.data?.status}\n${res.data?.message}`)
          }

          // refresh todos
          this.refetch()
        }
      } catch (error) {
        console.log('Error => ', error)
      }
    },
    openAddTodoModal() {
      this.show.addTodoModal = true
    },
    onCloseAddTodoModal() {
      this.show.addTodoModal = false
    },
  },
})
</script>
