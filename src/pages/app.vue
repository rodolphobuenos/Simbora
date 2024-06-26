<script setup lang="ts">
// import Layout from '/@src/layouts/sideblock.vue'
import Layout from '/@src/layouts/sidebar.vue'

definePage({
  meta: {
    requiresAuth: true
  }
})

useHead({
  meta: [
    {
      name: 'robots',
      content: 'noindex',
    },
  ],
})
</script>

<template>
  <Layout>
    <RouterView />
  </Layout>
</template>
