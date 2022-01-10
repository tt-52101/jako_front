<template>
  <NavbarLayout>
    <!-- Content Wrapper -->
    <div class="page-content-inner">
    <RouterView v-slot="{ Component }">
      <transition name="translate-page-y" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
    </div>
  </NavbarLayout>
</template>

<style lang="scss">
@import '../scss/abstracts/_mixins.scss';
@import '../scss/pages/demo/_demo.scss';
</style>