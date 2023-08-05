<template>
  <h3>{{ title }}</h3>
  <ul>
    <li
      v-for="item in items"
      :key="item">
      <label>
        <!-- eslint-disable -->
        <input
          type="radio"
          :name="title"
          :value="item"
          @input="$emit('update:modelValue', $event.target.value)" />
        <!-- eslint-enable -->
        {{ item }}
      </label>
    </li>
  </ul>
</template>

<script>
import FieldMixin from './mixin'
export default {
  mixins: [FieldMixin]
}
</script>