<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'TESTE'
})
</script>

<template>
  <div>
    <VCard>
      Hello Vuero
    </VCard>
  </div>
</template>
