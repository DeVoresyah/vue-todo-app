<template>
  <div>
    <Navbar />

    <HeaderActivity class="mb-5" />
    <Nuxt />
  </div>
</template>

<script>
import HeaderActivity from '~/components/molecule/HeaderActivity.vue'

export default {
  name: 'DefaultLayout',
  components: { HeaderActivity },
}
</script>
