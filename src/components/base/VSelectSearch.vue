<script setup lang="ts">
    import Multiselect from 'vue-multiselect'
    export interface VSelectSearchProps {
        dados?: object
    }
    const modelValue = defineModel<any>({
        default: ''
    })
    const props = defineProps<VSelectSearchProps>()

    const valorSelect = computed ({
        get() {

            
        }

    })

</script>

<template>
    <div>
    <label class="typo__label">Select with search</label>
    <multiselect 
        v-model="value"
        :options="options"
        :custom-label="nameWithLang"
        placeholder="Select one"
        label="name"
        track-by="name">
    </multiselect>
    <pre class="language-json">
        <code>{{ value }}</code>
    </pre>
  </div>
</template>
