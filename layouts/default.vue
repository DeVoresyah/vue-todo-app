<template>
  <div>
    <Navbar />

    <HeaderActivity />
    <Nuxt />
  </div>
</template>

<script>
import HeaderActivity from '~/components/molecuke/HeaderActivity.vue'
export default {
  name: 'DefaultLayout',
  components: { HeaderActivity },
}
</script>
