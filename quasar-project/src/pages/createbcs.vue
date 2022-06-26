<template>
  <div class="q-pa-md q-card">
    <p class="text-left text-h6">Tạo Bộ Chỉ Số</p>
    <q-form @reset="onReset" class="q-gutter-md">
      <div class="row q-gutter-sm">
       <q-select
        class="col"
        filled
        v-model="choseUnit"
        :options="units"
        :option-value="id"
        label="Khu vực"
       />
       <q-select
        class="col"
        filled
        v-model="choseMonth"
        :options="months"
        label="Tháng"
       />
       <q-select 
       class="col"
       filled
       v-model="choseYear"
       :options="years"
       label="Năm"
       
       />
      </div>
      <div class="row q-gutter-sm">
        <q-input
          class="col"
          filled
          v-model="name"
          label="Tên Bộ Chỉ Số"
          :rules="[
            (val) => (val && val.length > 0) || 'Vui lòng nhập tên Bộ Chỉ Số',
          ]"
        />

        <q-select
          class="col"
          name="accepted_genres"
          v-model="accepted"
          multiple
          :options="tieudecha"
          color="primary"
          filled
          clearable
          label="Đề mục"
        />
      </div>
      <div>
        <q-btn
          @click="isActive = !isActive"
          label="Xác nhân đề mục"
          type="submit"
          color="primary"
        />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
      <div class="q-col-gutter-sm" v-if="!isActive">
        <q-tree
          class="col-12 col-sm-6"
          :nodes="simple"
          node-key="label"
          tick-strategy="leaf"
          selected-color="primary"
          v-model:selected="selected"
          v-model:ticked="ticked"
          v-model:expanded="expanded"
        />
        <div>
          <q-btn
            label="Tạo"
            type="submit"
            color="primary"
            @click="triggerNoGrouping"
          />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </div>
    </q-form>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import setindicators from "src/boot/callApi/setindicators";
import { ref } from "vue";

export default {
  name: "createbcs",

  async created(){
    const data = await setindicators.index();
    this.tables = data.topics;
    for(let i = 1; i < 13; i++){
      this.months.push({
        label: "Tháng" + i,
        value: i,
      });
    }
    for(let i =2020; i <2029; i++){
      this.years.push({
        label: "Năm" + i,
        value: i,
      });
    }
    const data1 = await units.units();
    this.units = data1.units;
    console.log(this.units);
  },
  data() {
    const $q = useQuasar();
    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);
 

    return {
      years: [],
      months: [],
      tables: [],
      units: [],
      choseYear: null,
      choseMonth: null,
      choseUnit: null,
      
      isActive: true,
      showTest: false,
      name,
      age,
      accept,
      accepted: ref([]),
      tieudecha: [
        {
          label: "Kinh Doanh 1",
          value: "Kinh Doanh 1",
        },
        {
          label: "Kinh Doanh 2",
          value: "Kinh Doanh 2",
        },
        {
          label: "Kinh Doanh 3",
          value: "Kinh Doanh 3",
        },
      ],
      model1: ref(null),
      model2: ref(null),
      model3: ref(null),
      triggerNoGrouping() {
        $q.notify({
          group: false,
          message: "Đã tạo bộ chỉ số  ",
          color: "primary",
        });
      },

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
      selected: ref(""),
      ticked: ref([""]),
      expanded: ref([""]),

      simple: [
        {
          label: "Kinh doanh",
          children: [
            {
              label: "My TV",
              children: [{ label: "TV1" }, { label: "tv2 VÀ SW" }],
            },
            {
              label: "Good service (disabled node)",
              disabled: false,
              children: [
                { label: "Prompt attention" },
                { label: "Professional waiter" },
              ],
            },
            {
              label: "Ple asant surroundings",
              children: [
                { label: "Happy atmosphere" },
                { label: "Good table presentation" },
                { label: "Pleasing decor" },
              ],
            },
          ],
        },
      ],
    };
  },
  method:{
    async getSetIndicator(){
      const data = await setindicators.index(
        this.choseUnit.id,
        this.choseYear,
        this.choseMonth,
      );
      this.tables = data.topics;
    }
    
  }
};
</script>

<style lang="sass" scoped>
.q-pa-md
    max-width: 600px
    margin-left: auto
    margin-right: auto
    text-align: center
    margin-top:  30px

.text-left
  margin-bottom: 20px
  margin-left: 5px
</style>
