<template>
  <h3>{{ title }}</h3>
  <!-- eslint-disable -->
  <input
    type="text"
    @input="$emit('update:modelValue', $event.target.value)" />
  <!-- eslint-enable -->
</template>

<script>
import fieldMixin from './mixin'
export default {
  mixins: [fieldMixin]
}
</script>