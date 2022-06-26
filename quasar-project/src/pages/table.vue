<template>
  <tableBCS></tableBCS>
</template>

<script>
import { defineComponent, defineAsyncComponent } from "vue";
const tableBCS = defineAsyncComponent(() =>
  import("components/tables/table_bcs.vue")
);

export default defineComponent({
  name: "table",

  components: {
    tableBCS,
  },
});
</script>
