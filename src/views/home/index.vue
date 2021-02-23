<template>
  <h3>{{ pageName }}</h3>
</template>

<script>
import { AppStore } from '../../store/modules/app'
import { defineComponent } from 'vue';

export default defineComponent({
  mounted() {
    console.log(AppStore.getSysNo);
  },
  setup() {
    const pageName = 'Home Page';
    
    return {
      pageName
    }
  }
})

</script>
