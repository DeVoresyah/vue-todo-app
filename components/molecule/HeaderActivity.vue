<template>
  <section>
    <div class="w-full p-5 container mx-auto flex items-center justify-between">
      <h2
        class="font-poppins text-gray-900 font-bold text-base"
        data-cy="activity-title"
      >
        Activity
      </h2>

      <Button
        title="Tambah"
        prefix-icon="icon-plus.svg"
        data-cy="activity-add-button"
        :on-click="handleAddActivity"
      />
    </div>
  </section>
</template>

<script>
import Button from '../atom/Button.vue'
import API from '~/services/api'

export default {
  name: 'HeaderActivityComponent',
  components: {
    Button,
  },
  methods: {
    async handleAddActivity() {
      try {
        const api = API.create('https://todo.api.devcode.gethired.id')

        const initialBodyReq = {
          email: 'test@gmail.com',
          title: 'untitled',
        }
        const res = await api.createActivity(initialBodyReq)

        if (res.ok) {
          if (res.data?.id) {
            const createdId = res.data?.id

            if (createdId) {
              // navigate to created activity detail
              this.$router.push(`/activity/${createdId}`)
            }
          } else {
            alert('Invalid ID')
          }
        }
      } catch (error) {
        console.log('Error =>', error)
      }
    },
  },
}
</script>
