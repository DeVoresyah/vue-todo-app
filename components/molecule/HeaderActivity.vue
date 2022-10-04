<template>
  <section>
    <TextField
      v-if="renderAddActivityField"
      v-model="newActivityText"
      :text-value="newActivityText"
    />
    <div :class="[baseStyle, titleStyle]">
      <h2
        v-if="$route.path === '/'"
        class="font-poppins text-gray-900 font-bold text-base"
        data-cy="activity-title"
      >
        Activity
      </h2>

      <Button
        title="Tambah"
        prefix-icon="icon-plus.svg"
        data-cy="activity-add-button"
        :on-click="handleAddItem"
      />
    </div>
  </section>
</template>

<script>
import Button from '../atom/Button.vue'
import TextField from '../atom/TextField.vue'

export default {
  name: 'HeaderActivityComponent',
  components: {
    Button,
    TextField,
  },
  data() {
    return {
      baseStyle: 'w-full p-5 container mx-auto flex items-center',
      newActivityText: 'New Activity Name',
    }
  },
  computed: {
    // dynamic style
    titleStyle() {
      return this.$route?.params?.slug ? 'justify-end' : 'justify-between'
    },
    renderAddActivityField() {
      const pathName = this.$route?.name
      return pathName === 'activity-slug'
    },
  },
  methods: {
    handleAddItem() {
      const pathName = this.$route.name

      if (pathName === 'activity-slug') {
        // TODO: open modal add todo item
        console.log('Open modal todo form')
        return
      }

      // TODO: hit add activity api and navigate to todo list with the created activity id
      // temp created activity id
      const createdId = 1010

      // navigate to todo list
      this.$router.push(`/activity/${createdId}`)
    },
  },
}
</script>
