<template>
  <div class="">
    <p class="text-center text-h5 topic-text"><q-badge class="badge-topic" >Tạo Bộ Chỉ Số</q-badge></p>
    <q-form @reset="onReset" @submit="createBCS()" class="q-gutter-md">
      <div class="q-pa-md ">
        <div class="row q-gutter-sm">
          <q-select
            class="col-md col-xs-12"
            filled
            v-model="choseUnit"
            :options="units"
            option-label="name"
            label="Khu vực"

          />
          <q-select
            class="col-md col-xs-12"
            filled
            v-model="choseMonth"
            :options="months"
            label="Tháng"
          />
          <q-select
            class="col-md col-xs-12"
            filled
            v-model="choseYear"
            :options="years"
            label="Năm"
          />
   <!--        <q-select
            class="col-md col-xs-12"
            name="accepted_genres"
            v-model="choseDicator"
            multiple
            :options="topics"
            option-label="name"
            color="primary"
            filled
            clearable
            label="Đề mục"
          /> -->
          <q-btn
            class="col-md-2 col-xs-12"
            @click="seen=!seen"
            label="Xác nhận"
            type="submit"
            color="primary"
          />
        </div>
      </div>
      <div v-if="seen==false">
        <q-markup-table>
          <thead>
            <tr class="q color-thead test-tr">
              <th class="text-center th-tieude">
                <span class="text-tieude">TT</span>
              </th>
              <th class="text-center">
                <span class="text-tieude">CHỈ SỐ</span>
              </th>
              <th
                class="text-center"
                :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`"
              >
                <span class="text-tieude">ĐVT</span>
              </th>
              <th
                class="text-center"
                :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`"
              >
                <span class="text-tieude">Chỉ tiêu tháng</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(topic, index) in tables" :key="topic.id">
              <tr class="text-left">
                <td>
                  <span class="topic-id">{{ ++index }}</span>
                </td>
                <td class="topic-size">
                  {{ topic.name }}
                </td>
                <td class="text-left">-</td>
                <td class="text-left">-</td>
              </tr>
              <template
                v-for="(target1, index1) in topic.targets"
                :key="index1"
              >
                <tr class="text-left">
                  <td class="target1-index target1-size">
                    {{ index }}.{{ target1?.order }}
                  </td>
                  <td class="target1-size">
                    {{ target1.name }}
                  </td>
                  <td
                    :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`"
                    class="target1-size"
                  >
                    {{ target1.comment }}
                  </td>
                  <td>
                    <q-input
                      v-model="
                        target1.setindicators[0].plan
                      "
                      @change="updated( target1.setindicator[0].id, target1.setindicators[0].plan)"
                      label="cập nhật chỉ tiêu tháng"
                    />
                  </td>
                </tr>
                <template
                  v-for="(target2, index2) in target1.targets"
                  :key="index2"
                >
                  <tr class="text-left">
                    <td class="target2-index target1-size">
                      {{ index }}.{{ target1?.order }}.{{ ++index2 }}
                    </td>
                    <td class="target1-size">
                      {{ target2.name }}
                    </td>
                    <td
                      :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`"
                      class="target1-size"
                    >
                      {{ target2.comment }}
                    </td>
                    <td>
                      <q-input
                        v-model="
                          target2.setindicators[0].plan
                        "
                        @change="updated(target1.setindicator[0].id,target2.setindicators[0].plan)"
                        label="cập nhật chỉ số tháng"
                      />
                    </td>
                  </tr>
                </template>
              </template>
            </template>
          </tbody>
        </q-markup-table>
      </div>
      <!--     <div class="q-col-gutter-sm" >
        <q-tree
          class="col-12 col-sm-6"
          :nodes="simple"
          node-key="label"
          tick-strategy="leaf-filtered"
          ticked = "flase"
          default-expand-all
          accordion
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

        </div>
      </div> -->
    </q-form>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import setIndicators from "src/boot/callApi/setindicators";
import { ref } from "vue";
import units from "src/boot/callApi/units";
import topics from "src/boot/callApi/topics";
import targets from "src/boot/callApi/targets";
import detailsetindicator from "../boot/callApi/detailsetindicators";
import noti from "src/boot/noti/noti";

export default {
  name: "createbcs",

  async created() {
    const cator = await detailsetindicator.detail(-1);
    this.tables = cator.topics;
      this.months.push({
        label: "Cả năm",
        value: 13,
      });

    for (let i = 1; i < 13; i++) {
      this.months.push({
        label: "Tháng " + i,
        value: i,
      });
    }
    for (let i = 2020; i < 2029; i++) {
      this.years.push({
        label: "Năm " + i,
        value: i,
      });
    }
    // const data1 = await units.units();
    // this.units = data1.units;
    // console.log(this.units);
    // const data2 = await topics.topics();
    // this.topics = data2.topics;

    const [data1, data2] = await Promise.all([units.units(), topics.topics()]);
    this.units = data1.units;
    this.topics = data2.topics;
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
      topics: [],
      choseYear: null,
      choseMonth: null,
      choseUnit: null,
      choseDicator: null,
      showTest: false,
      name,
      age,
      accept,
      accepted: ref([]),
      seen: true,
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




    };
  },
  methods: {
    async updated(id, plan) {
      let data = await setIndicators.update(id,plan);

      if(data?.statuscode == 1) { noti.showNoti('Đã cập nhật','black'); }
    },
    async createBCS() {
      let unitId = this.choseUnit?.id ;
      let month = this.choseMonth.value == 13 ? null : this.choseMonth.value;
      let year = this.choseYear.value;
      var topicId = [];
      for( let i = 0; i< this.choseDicator?.length ; i++ ) {
        topicId.push(this.choseDicator[i].id);
      }
      topicId = topicId.toString();
      console.log(unitId, month, year, topicId);
      var data = await setIndicators.createWithTopicArr(unitId,topicId , year, month);
      if(data?.statuscode == 1) { noti.showNoti(' Tạo thành công','black'); }
      if(data?.statuscode == 2) { noti.showNoti(' Bộ chỉ số năm Trung tâm chưa tạo','black'); }
      if(data?.statuscode == 3) { noti.showNoti(' Bộ chỉ số tháng đã tạo rồi','black'); }
      if(data?.statuscode == 4) { noti.showNoti(' Bộ chỉ số tháng Trung tâm chưa tạo','black'); }
      if(data?.statuscode == 5) { noti.showNoti(' Bộ chỉ số năm chưa có','black'); }  
      if( data.statuscode == 1 || data.statuscode == 3) {
        var data1 = await setIndicators.index(unitId, year, month);
        console.log( data1.topics );
        this.tables = data1.topics;
      }
    }
    //SHOW HIDE DE MUC
   /*  async choseTopic() {
      let arrTopics = "";
      for (let i = 0; i < this.choseDicator.length; i++) {
        arrTopics += this.choseDicator[i].id + ",";
      }
      const resTopics = await targets.getwitharraytopic(arrTopics);

      return this.seen = false;
    }, */
  },
};
</script>

<style lang="sass" scoped>
.q-pa-md
  margin-top:  30px
  

.topic-text
  margin-bottom: 20px
  margin-top: 10px

.demuc-div
  margin-top: 10px

.badge-topic
  font-size: 30px
  padding: 20px
  
.topic-id
  font-weight: 750
  font-size: 16px
.topic-size
  font-size: 16px
.text-tieude
  color: #1976d2
  font-weight: bold
  font-size: 15px
.target1-index

  margin-left: 3px
  font-weight: 550

.target1-size
  font-size: 16px

.test1
  border-radius: 2px

//sass cho tieu chi con
.target2-index

  margin-left: 6px

</style>
