<script setup lang="ts">
const props = defineProps({
  riders: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <VCard radius="smooth" class="demo-table">
    <table
      class="table is-hoverable is-fullwidth"
      aria-label="Vuero media table example"
    >
      <thead>
        <tr>
          <th scope="col" class="is-media"></th>
          <th scope="col">Full Name</th>
          <th scope="col">Father Name</th>
          <th scope="col">Phone Line 1</th>
          <th scope="col">Phone Line 2</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
          <th scope="col">Status</th>
          <th scope="col" class="is-end">
            <div class="dark-inverted is-flex is-justify-content-flex-end">
              Actions
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="rider in riders" :key="rider.id">
          <td class="is-media">
            <VAvatar :picture="rider.image" />
          </td>
          <td>{{ rider.name }}</td>
          <td>{{ rider.father_name }}</td>
          <td>{{ rider.phone_line_1 }}</td>
          <td>{{ rider.phone_line_2 }}</td>
          <td>{{ rider.email }}</td>
          <td>{{ rider.dob }}</td>
          <td>
            <div class="tags">
              <VTag
                :label="rider.status == 'active' ? 'Active' : 'Pause'"
                :color="rider.status == 'active' ? 'success' : 'danger'"
                rounded
                elevated
              />
            </div>
          </td>
          <td class="is-end">
            <div class="is-flex is-justify-content-flex-end">
              <FlexTableDropdown />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <VPlaceholderSection
      v-if="riders.length < 1"
      title="No data to show"
      subtitle="There is currently no data to show in this list."
    >
      <template #image>
        <img
          class="light-image"
          src="/@src/assets/illustrations/placeholders/search-4.svg"
          alt=""
        />
        <img
          class="dark-image"
          src="/@src/assets/illustrations/placeholders/search-4-dark.svg"
          alt=""
        />
      </template>
    </VPlaceholderSection>
  </VCard>
</template>
