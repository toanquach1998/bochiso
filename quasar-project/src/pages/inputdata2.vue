<template>
  <div class="q-pa-md">
    <q-markup-table dark class="bg-indigo-8">
      <thead>
        <tr>
          <th class="text-center">TT</th>
          <th class="text-center">CHỈ SỐ</th>
          <th class="text-center">ĐVT</th>
          <th class="text-center">Thực hiện</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="table_bcs in table_bcs" :key="table_bcs.id">
          <th>
            {{ table_bcs.id }}
          </th>

          <th>{{ table_bcs.name }}</th>
          <th>{{ table_bcs.dvt }}</th>
          <th>
            {{ table_bcs.thuchien }}
            <q-popup-edit
              v-model="table_bcs.thuchien"
              title="Nhập thực hiện"
              auto-save
              v-slot="scope"
            >
              <q-input
                v-model="scope.value"
                dense
                autofocus
                counter
                @keyup.enter="scope.set"
              />
            </q-popup-edit>
          </th>
        </tr>
      </tbody>
    </q-markup-table>
    <q-btn
      class="btn-data"
      color="
    "
      label="Lưu"
      @click="showNotif"
    >
    </q-btn>
  </div>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";

export default {
  name: "table_bcs",

  data() {
    const $q = useQuasar();
    return {
      table_bcs: [
        {
          id: 1,
          name: "Doanh thu VTCNTT",
          dvt: "Tr.đ",
          chitieu: "158,915",
          kehoach: "11,915",
          thuchien: "6,059",
          pt_kh: "50,055%",
          ncb: "",
          /*   bcs_con: [
            {
              id: 1,
              name: "đâsdsadsad",
              dvt: "tr.d",
              chitieu: "dâdsadasd",
              kehoach: "",
              thuchien: "",
              pt_kh: "",
              ncb: "",
            },
          ], */
        },
      ],
      showNotif() {
        $q.notify({
          message: "Jim pinged you.",
          color: "purple",
        });
      },
    };
  },
};
</script>

<style lang="sass" scoped>

.btn-data
  margin-top: 20px
  float: right
</style>
