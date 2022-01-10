<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  profile: Object,
})

const emit = defineEmits(['update:profile'])
const val = ref(props.profile)

var url = ref('')

function uploadFile(e: any): void {
  const file = e.target.files[0]
  url.value = URL.createObjectURL(file)
  emit('update:profile', file)
}
</script>

<template>
  <img
    :src="url"
    style="width: 200px; height: 200px"
    onerror="this.onerror=null;this.src = '/images/avatars/placeholder-m.jpg'"
    alt=""
  />
  <VField grouped>
    <VControl>
      <div class="file has-name is-right">
        <label class="file-label">
          <input
            class="file-input"
            type="file"
            accept="image/*"
            name="resume"
            @change="uploadFile"
          />
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-cloud-upload-alt"></i>
            </span>
            <span class="file-label"> Choose a file… </span>
          </span>
          <span class="file-name light-text">
            22082020_project_budget.xls
          </span>
        </label>
      </div>
    </VControl>
  </VField>
</template>
