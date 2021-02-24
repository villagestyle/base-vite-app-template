<template>
  <div>
    <input type="text" v-model="value" @input="emitData" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  ref,
  watch,
  watchEffect
} from "vue";

export default defineComponent({
  name: "form-item",
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  setup(props, { emit }) {
    const value = ref(props.modelValue);

    watch(props, () => {
      console.log("触发");
      value.value = props.modelValue;
    });

    const emitData = () => {
      console.log("emit", value.value);
      emit("update:modelValue", value.value);
    };

    return {
      emitData,
      value
    };
  }
});
</script>

<style lang="scss" scoped></style>
