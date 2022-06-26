<template>
  <div class="q-pa-md col">
    <q-table
      title="Bộ Chỉ Số"
      :rows="rows"
      :columns="columns"
      :filter="filter"
      row-key="name"
      v-model:pagination="pagination"
      :rows-per-page-options="[5]"
    >
      <div class="q-pa-lg flex flex-center"></div>
      <template v-slot:top="props">
        <div class="col q-table__title text-h6" style="font-size: 25px">
          Bộ chỉ số - {{ value }}
        </div>
        <q-space />
        <!--     <q-btn round dense flat color="" icon="filter_list">
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section>Tháng 1</q-item-section>
              </q-item>

              <q-item clickable v-close-popup>
                <q-item-section>Tháng 2</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>Tháng 3</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>Tháng 4</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>Tháng 5</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>...</q-item-section>
              </q-item>
              <q-separator />
            </q-list>
          </q-menu>
        </q-btn> -->
        <q-btn
          flat
          round
          dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
          class="q-ml-md"
        />
        <q-input
          filled
          borderless
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div>
</template>

<script>
import { ref } from "vue";

const columns = [
  { name: "TT", align: "left", label: "TT", field: "TT", sortable: true },
  {
    name: "name",
    required: true,
    label: "Chỉ số",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calories",
    align: "center",
    label: "Calories",
    field: "calories",
    sortable: true,
  },
  { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
  { name: "carbs", label: "Carbs (g)", field: "carbs", sortable: true },
  { name: "protein", label: "Protein (g)", field: "protein", sortable: true },
  { name: "sodium", label: "Sodium (mg)", field: "sodium", sortable: true },
  {
    name: "calcium",
    label: "Calcium (%)",
    field: "calcium",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "iron",
    label: "Iron (%)",
    field: "iron",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];

const rows = [
  {
    TT: 1,
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
  {
    TT: 2,
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
  {
    TT: 3,
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
  },
  {
    TT: 4,
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
  },
  {
    TT: 5,
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%",
  },
  {
    TT: 6,
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: "0%",
    iron: "0%",
  },
  {
    TT: 7,
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: "0%",
    iron: "2%",
  },
  {
    TT: 8,
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: "0%",
    iron: "45%",
  },
  {
    TT: 9,
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: "2%",
    iron: "22%",
  },
  {
    TT: 10,
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: "12%",
    iron: "6%",
  },
  {
    TT: 10,
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: "12%",
    iron: "6%",
  },
];

export default {
  name: "table_bcs",
  setup() {
    return {
      filter: ref(""),
      value: "Tháng 1",
      columns,
      rows,
      pagination: ref(2),
    };
  },
};
</script>
<style lang="sass" scoped>
.my-sticky-header-table
</style>
