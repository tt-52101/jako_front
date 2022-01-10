<script setup lang="ts">
import RiderFilters from '/@src/components/pages/rider/RiderFilters.vue'
import { useHead } from '@vueuse/head'
import { pageTitle } from '/@src/state/navbarLayoutState'
import axios from './../../axios'
import { useRoute } from 'vue-router'
import { defineProps, ref, onMounted, computed } from 'vue'
import { Notyf } from 'notyf'

const props = defineProps({ added: { type: Boolean, default: false } })
var collection = ref([])
var filters = { name: '', status: 'active' }
const route = useRoute()
const notyf = new Notyf()
var page = computed(() => {
  var page
  try {
    page = Number.parseInt(route.query.page as string) || 1
    loadingRiders(page)
    return page
  } catch {}
  loadingRiders(1)
  return 1
})
var loading = ref(true)
onMounted(() => {
  loadingRiders(page.value)
  if (props.added) notyf.success('Rider has been added.')
})
function loadingRiders(x: number) {
  loading.value = true
  axios.get('rider?page=' + x, { params: filters }).then((response) => {
    collection.value = response.data
    loading.value = false
  })
}
function al() {
  loadingRiders(page.value)
}
pageTitle.value = 'Riders'
useHead({
  title: 'Riders - Jako',
})
</script>
<template>
  <div>
    <div class="card-grid-toolbar">
      <div style="display: flex; align-items: center">
        <RiderFilters :filters="filters" :func="al" />
      </div>
      <div class="buttons">
        <VButton color="primary" to="/rider/add" raised>
          <span class="icon">
            <i aria-hidden="true" class="fas fa-plus"></i>
          </span>
          <span>Add User</span>
        </VButton>
      </div>
    </div>

    <VPlaceloadText
      v-if="loading"
      :lines="5"
      width="75%"
      last-line-width="25%"
    />
    <Table v-if="!loading" :riders="collection.data ?? []" />
    <VFlexPagination
      :item-per-page="10"
      :total-items="collection.total ?? 0"
      :current-page="page"
      :max-links-displayed="5"
    />
  </div>
</template>
