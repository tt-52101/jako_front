<template>
  <VField>
    <VControl icon="feather:user" is-valid>
      <input
        type="text"
        class="input"
        placeholder="Username"
        value="Superman"
      />
      <p class="help is-success">This username is available</p>
    </VControl>
  </VField>
  <VField>
    <VControl icon="feather:lock" has-error>
      <input
        type="password"
        class="input"
        placeholder="Password"
        value="passwd"
      />
      <p class="help text-danger">The password must contains 8 characters</p>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl icon="feather:user" is-valid>
    <input
      type="text"
      class="input"
      placeholder="Username"
      value="Superman"
    />
    <p class="help text-success">This username is available</p>
  </VControl>
</VField>
<VField>
  <VControl icon="feather:lock" has-error>
    <input
      type="password"
      class="input"
      placeholder="Password"
      value="passwd"
    />
    <p class="help text-danger">The password must contains 8 characters</p>
  </VControl>
</VField>

<!--/example-->
