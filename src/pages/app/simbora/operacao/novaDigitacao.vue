<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Nova Digitação'
})
</script>

<template>
  <div>
    <div class="columns">
      <div class="column is-12">
        <VCard>
          OLA MUNDO
        </VCard>
      </div>
    </div>
    <div class="columns">
      <div class="column is-12">
        <VCard>
          OLA MUNDO
        </VCard>
      </div>
    </div>
  </div>
</template>
