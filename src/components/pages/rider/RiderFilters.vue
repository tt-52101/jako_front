<script setup lang="ts">
import { defineEmits, defineProps, ref } from 'vue'
const props = defineProps({
  filters: {
    type: Object,
    default: {
      name: '',
      status: 'active',
    },
  },
  func: {
    type: Function,
    default: () => {},
  },
})
const emit = defineEmits(['update:filters'])
const val = ref(props.filters)
const applyfilters = () => {
  emit('update:filters', val.value)
  props.func()
}
</script>
<template>
  <div class="columns is-multiline">
    <div class="column is-4">
      <VField>
        <VControl icon="feather:user">
          <input
            v-model="filters.name"
            type="text"
            class="input"
            autocomplete="name"
            placeholder="Search by Name"
          />
        </VControl>
      </VField>
    </div>
    <div class="column is-4">
      <VField>
        <VControl>
          <div class="select">
            <select v-model="filters.status" style="height: 38px">
              <option value="active" selected>Active</option>
              <option value="pause">Pause</option>
              <option value="gone">Gone</option>
            </select>
          </div>
        </VControl>
      </VField>
    </div>
    <div class="column is-4">
      <VButton color="info" raised @click="applyfilters()">
        <span class="icon">
          <i aria-hidden="true" class="fas fa-search"></i>
        </span>
        <span>Apply Filters</span>
      </VButton>
    </div>
  </div>
</template>
