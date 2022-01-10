<script setup lang="ts">
import CountryDropdown from '../../components/helpers/CountryDropdown.vue'
import ImageUploadWithPreview from '../../components/helpers/ImageUploadWithPreview.vue'
import { useRouter } from 'vue-router'
import { useWindowScroll } from '@vueuse/core'
import { computed, ref } from 'vue'
import { pageTitle } from '/@src/state/navbarLayoutState'
import axios from '/@src/axios'
// import router from 'vue-router'

const router = useRouter()
const isLoading = ref(false)
var form = {
  name: '',
  father_name: '',
  dob: '',
  country: '',
  phone_line_1: '',
  phone_line_2: '',
  email: '',
  image: '',
  status: true,
}
var error = ref({})

const { y } = useWindowScroll()

function add() {
  var errr = error
  const formData = new FormData()
  Object.entries(form).forEach(([key, value]) => {
    formData.append(key, value)
  })
  isLoading.value = true
  axios
    .post('rider', formData, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    })
    .then(() => {
      router.push({ name: 'rider', params: { added: true } })
    })
    .catch((error) => {
      errr.value = error.response.data.error
    })
    .finally(() => {
      isLoading.value = false
    })
}

function hasError(key: String): boolean {
  if (error.value && error.value[key]) return true
  return false
}

const isStuck = computed(() => {
  return y.value > 30
})

pageTitle.value = 'Rider - Add'
</script>

<template>
  <div>
    <form class="form-layout" @submit.prevent>
      <div class="form-outer">
        <div :class="[isStuck && 'is-stuck']" class="form-header stuck-header">
          <div class="form-header-inner">
            <div class="left">
              <h3>Add a Rider</h3>
            </div>
            <div class="right">
              <div class="buttons">
                <VButton
                  icon="lnir lnir-arrow-left rem-100"
                  :to="{ name: 'rider' }"
                  light
                  dark-outlined
                >
                  Cancel
                </VButton>
              </div>
            </div>
          </div>
        </div>
        <div class="form-body">
          <!--Fieldset-->
          <div class="form-fieldset">
            <div class="fieldset-heading">
              <h4>Personal Info</h4>
            </div>
            <div class="columns is-multiline">
              <div class="column is-12">
                <VField>
                  <label>Full Name</label>
                  <VControl icon="feather:user" :has-error="hasError('name')">
                    <input
                      v-model="form.name"
                      type="text"
                      class="input"
                      placeholder=""
                      autocomplete="name"
                    />
                  </VControl>
                  <p v-if="hasError('name')" class="help text-danger">
                    {{ error.name[0] }}
                  </p>
                </VField>
              </div>
              <div class="column is-12">
                <VField>
                  <label>Father Name</label>
                  <VControl
                    icon="feather:user"
                    :has-error="hasError('father_name')"
                  >
                    <input
                      v-model="form.father_name"
                      type="text"
                      class="input"
                      placeholder=""
                      autocomplete="father_name"
                    />
                  </VControl>
                  <p v-if="hasError('name')" class="help text-danger">
                    {{ error.father_name[0] }}
                  </p>
                </VField>
              </div>
              <div class="column is-6">
                <VField>
                  <label>Date of Birth</label>
                  <VControl
                    icon="feather:calendar"
                    :has-error="hasError('name')"
                  >
                    <input
                      v-model="form.dob"
                      class="input"
                      type="date"
                      placeholder="Select a date"
                    />
                  </VControl>
                  <p v-if="hasError('dob')" class="help text-danger">
                    {{ error.dob[0] }}
                  </p>
                </VField>
              </div>
              <div class="column is-6">
                <CountryDropdown
                  v-model:country="form.country"
                  :verror="hasError('country') ? error.country[0] : ''"
                />
              </div>
            </div>
          </div>
          <!--Fieldset-->
          <div class="form-fieldset">
            <div class="fieldset-heading">
              <h4>Contact Info</h4>
            </div>

            <div class="columns is-multiline">
              <div class="column is-12">
                <VField>
                  <label>Email Address</label>
                  <VControl icon="feather:mail" :has-error="hasError('email')">
                    <input
                      v-model="form.email"
                      type="email"
                      class="input"
                      placeholder=""
                      autocomplete="email"
                      inputmode="email"
                    />
                  </VControl>
                  <p v-if="hasError('email')" class="help text-danger">
                    {{ error.email[0] }}
                  </p>
                </VField>
              </div>
              <div class="column is-6">
                <VField>
                  <label>Phone Line 1</label>
                  <VControl
                    icon="feather:phone"
                    :has-error="hasError('phone_line_1')"
                  >
                    <input
                      v-model="form.phone_line_1"
                      type="tel"
                      class="input"
                      placeholder=""
                      autocomplete="tel"
                      inputmode="tel"
                    />
                  </VControl>
                  <p v-if="hasError('name')" class="help text-danger">
                    {{ error.phone_line_1[0] }}
                  </p>
                </VField>
              </div>
              <div class="column is-6">
                <VField>
                  <label>Phone Line 2</label>
                  <VControl
                    icon="feather:phone"
                    :has-error="hasError('phone_line_2')"
                  >
                    <input
                      v-model="form.phone_line_2"
                      type="tel"
                      class="input"
                      placeholder=""
                      autocomplete="tel"
                      inputmode="tel"
                    />
                  </VControl>
                  <p v-if="hasError('name')" class="help text-danger">
                    {{ error.phone_line_2[0] }}
                  </p>
                </VField>
              </div>
            </div>
          </div>
          <!--Fieldset-->
          <div class="form-fieldset">
            <div class="fieldset-heading">
              <h4>Status</h4>
            </div>
            <div class="column is-12">
              <ImageUploadWithPreview v-model:profile="form.image" />
            </div>
          </div>
          <div class="form-fieldset">
            <div class="fieldset-heading">
              <h4>Status</h4>
            </div>
            <div class="column is-12">
              <label class="checkbox is-outlined is-primary"
                ><input v-model="form.status" type="checkbox" /><span></span>
                Active</label
              >
            </div>
            <hr />
          </div>
          <div style="display: flex; justify-content: flex-end">
            <div class="buttons">
              <VButton dark-outlined> Decline </VButton>
              <VButton color="primary" :loading="isLoading" raised @click="add">
                Accept
              </VButton>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss">
@import '../../scss/abstracts/_mixins.scss';
@import '../../scss/pages/generic/_forms.scss';
.text-danger {
  color: red;
}
</style>
