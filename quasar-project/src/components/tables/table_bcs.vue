<template>
  <div class="q-pa-md">
    <!--     <div class="tbheader">
      <div class="header row justify-center full-width text-bold header-bcs">
        <div class="col-md-1">STT </div>
        <div class="col-md-4">Chỉ tiêu</div>
        <div class="col-md-1">ĐVT</div>
        <div class="col-md-1">Kế hoạch</div>
        <div class="col-md-2">thực hiện</div>
        <div class="col-md-1">% sosacnh</div>
        <div class="col-md-2">cảnh báo</div>
      </div>
      <div class="full-width" v-for="(topic, index) in tables" :key="topic.id">
        <div class="full-width row">
          <div class="col-md-1">{{ ++index }}</div>
          <div class="col-md-4 topic-name">{{ topic.name }}</div>
          <div class="col-md-1">{{topic.comment}}</div>
          <div class="col-md-1"></div>
          <div class="col-md-2"></div>
          <div class="col-md-1"></div>
          <div class="col-md-1"></div>
          <hr class="col-md-12" />
        </div>
        <div
          class="full-width row "
          v-for="(target1, index1) in topic.targets"
          :key="index1"
        >
          <div class="col-md-1 target-level"> {{++index-index+1}}.{{ ++index1 }}</div>
          <div class="col-md-4">{{ target1.name }}</div>
          <div class="col-md-1">{{target1.comment}}</div>
          <div class="col-md-1"> {{target1.setindicators[0].plan}}</div>
          <div class="col-md-2"> {{ target1.setindicators[0].total_plan }}  </div>
          <div class="col-md-1">{{ tinhphantram(target1.setindicators[0].total_plan , target1.setindicators[0].plan) }}</div>
          <div class="col-md-1" :class=" tinhphantram(target1.setindicators[0].total_plan, target1.setindicators[0].plan) < 100 ? 'bg-red' : 'bg-green' " > 
            </div>
          <hr class="col-md-12" />
          <br />
          <div class="full-width target-level" v-if="target1.targets.length > 1">
            <div
              class="full-with row"
              v-for="(target2, index2) in target1.targets"
              :key="index2"
            >
              <div class="col-md-1 target-level">{{ ++index-index1-1 }}.{{ ++index1-index2-1 }}.{{ ++index2 }}</div>
              <div class="col-md-4 textover">{{ target2.name }}</div>
              <div class="col-md-1"></div>
              <div class="col-md-1"></div>
              <div class="col-md-1"></div>
              <div class="col-md-1"></div>
              <div class="col-md-1"></div>
              <hr class="col-md-12" />
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!--  TẠO BẢNG BẰNG QTABLE -->

    <q-markup-table dark class="bg-indigo-8">
      <thead>
        <tr>
          <th class="text-center th-tieude">
            <span class="text-tieude">TT</span>
          </th>
          <th class="text-center"><span class="text-tieude">CHỈ SỐ</span></th>
          <th class="text-center"><span class="text-tieude">ĐVT</span></th>
          <th class="text-center"><span class="text-tieude">Kế hoạch</span></th>
          <th class="text-center">
            <span class="text-tieude">Thực hiện</span>
          </th>
          <th class="text-center"><span class="text-tieude">% so KH</span></th>
          <th class="text-center">
            <span class="text-tieude">Ngưỡng cảnh báo</span>
          </th>
        </tr>
      </thead>

      <tbody>
        <template v-for="(topic, index) in tables" :key="topic.id">
          <tr class="text-center">
            <td><span class ="topic-id">{{ ++index }}</span></td>
            <td>
              {{ topic.name }}
            </td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>

          <template v-for="(target1, index1) in topic.targets" :key="target1.id">
            <tr class="text-center">
              <td>
                 {{++index-index+1}}.{{ ++index1 }}
              </td>
              <td>
                {{ target1.name }}
              </td>
              <td>
                {{ target1.comment }}
              </td>
              <td>
                {{ target1.setindicators[0].plan }}
              </td>
              <td>
                {{ target1.setindicators[0].total_plan }}
              </td>

              <td>
                {{
                  tinhphantram(
                    target1.setindicators[0].total_plan,
                    target1.setindicators[0].plan
                  )
                }}
              </td>

              <td
                :class="
                  tinhphantram(
                    target1.setindicators[0].total_plan,
                    target1.setindicators[0].plan
                  ) < 100
                    ? 'bg-danger'
                    : 'bg-success' "
              ></td>
            </tr>
            <template v-for="(target2, index2) in target1.targets" :key="target2.id">
              <tr class="text-center">
                <td>
                  {{ index-index1+index2}}.{{ ++index1-index2-1 }}.{{ ++index2 }}
                 
                </td>
                <td>
                  {{ target2.name }}
                </td>

                <td>
                  {{ target2.comment }}
                </td>

                <td>
                  {{ target2.setindicators[0].plan }}
                </td>

                <td>{{ target2.setindicators[0].total_plan }}</td>

                <td>
                  {{
                    tinhphantram(
                      target2.setindicators[0].total_plan,
                      target2.setindicators[0].plan
                    )
                  }}
                </td>

                <td   :class="
                    tinhphantram(
                      target2.setindicators[0].total_plan,
                      target2.setindicators[0].plan
                    ) < 100
                      ? 'bg-danger'
                      : 'bg-success'
                  " 
                >
                
                </td>
              </tr>
            </template>
          </template>
        </template>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>

import setindicator from "../../boot/callApi/setindicators";
export default {
  name: "table_bcs",
  props:{
    tables: {
      type: Array, 
      required: true, 
    }
  },
  async created() {
    setInterval(function () {}, 30000);

  },
  methods: {
    tinhphantram(totalPlan, plan) {
      /* console.log(plan)
       console.log(totalPlan)
      console.log((plan/totalPlan)*100) */
      return (totalPlan / plan) * 100;
        
    },

    canhbao(tinhphantram) {
      return tinhphantram;
    },
  },
  data() {
    return {
    
      // tables: {},
      /* tables-detail: {}, */
    };
  },
};  
</script>

<style lang="sass" scoped>
.bg-green
  color: #a2aa33
.bg-success
  background-color: #28a745 
.bg-danger
  background-color: #f52727



.background-red
  background-color: red
.background-green
  background-color: green



.header-bcs
  margin-bottom: 10px

.textover
  white-space: nowarp
.target-level
  margin-left: 10px
  border-left: 10px solid #f1f3f4

.text-tieude
  font-size: 16px
  font-weight: bold

.topic-id
  font-weight: 700
  


.topic-name
  margin-left: 20px
</style>
