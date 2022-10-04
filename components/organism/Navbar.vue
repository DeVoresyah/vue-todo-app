<template>
  <nav class="w-full bg-primary-500">
    <div class="container mx-auto">
      <h1
        class="font-poppins font-bold text-lg text-white p-5"
        data-cy="header-title"
      >
        {{ renderTitle }}
      </h1>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
  computed: {
    renderTitle() {
      const pathName = this.$route?.name

      switch (pathName) {
        case 'activity-slug':
          return 'New Activity'
        default:
          return 'TO DO LIST APP'
      }
    },
  },
}
</script>
