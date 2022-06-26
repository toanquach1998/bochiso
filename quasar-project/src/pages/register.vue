<template>
  <q-page class="q-pa-sm">
    <div class="row q-col-gutter-sm">
      <div class="col-lg-8 col-md-8 col-xs-12 col-sm-12">
        <q-card class="card-bg text-white">
          <q-card-section class="text-h6">
            <div class="text-h6">Đăng ký người dùng</div>
            <div class="text-subtitle2">Quản trị viên</div>
          </q-card-section>
          <q-card-section class="q-pa-sm">
            <q-list class="row">
              <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-item-section side>
                  <q-avatar size="100px">
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-btn
                    label="Thêm ảnh"
                    class="text-capitalize"
                    rounded
                    color="info"
                    style="max-width: 120px"
                  ></q-btn>
                </q-item-section>
              </q-item>

              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    type="username"
                    dark
                    color="white"
                    dense
                    v-model="username"
                    label="Tài khoản *"
                    hint-color="white"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'Vui lòng nhập tài khoản',
                    ]"
                  />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    type="password"
                    dark
                    color="white"
                    dense
                    v-model="password"
                    label="Mật khẩu *"
                    hint-color="white"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'Vui lòng nhập mật khẩu',
                    ]"
                  />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    dark
                    color="white"
                    dense
                    v-model="name"
                    label="Họ và tên *"
                    hint-color="white"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'Vui lòng nhập họ và tên',
                    ]"
                  />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    dark
                    color="white"
                    dense
                    label="Năm sinh"
                    v-model="date"
                    mask="date"
                    placeholder="dd-mm-yyyy"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'Vui lòng nhập họ và tên',
                    ]"
                  />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    class="input-register"
                    dark
                    color="white"
                    dense
                    v-model="name"
                    label="Your name *"
                    hint="Name and surname"
                    hint-color="white"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'Please type something',
                    ]"
                  />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    class="input-register"
                    dark
                    color="white"
                    dense
                    v-model="name"
                    label="Your name *"
                    hint="Name and surname"
                    hint-color="white"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'Please type something',
                    ]"
                  />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    dark
                    color="white"
                    dense
                    v-model="user_details.post_code"
                    label="Postal Code"
                  />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    dark
                    color="white"
                    type="textarea"
                    dense
                    v-model="user_details.about"
                    label="About"
                  />
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn class="text-capitalize bg-info text-white"
              >Update User Info</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-lg-4 col-md-4 col-xs-12 col-sm-12">
        <q-card class="card-bg text-white">
          <q-card-section class="text-center bg-transparent">
            <q-avatar size="150px" class="shadow-10">
              <img
                src="https://gamek.mediacdn.vn/133514250583805952/2022/5/18/photo-1-16528608926331302726659.jpg"
              />
            </q-avatar>
            <div class="text-subtitle2 q-mt-lg">by TQ</div>
            <div class="text-h6 q-mt-md">Monkey D. Luffy</div>
          </q-card-section>
          <q-card-section>
            <div class="text-body2 text-justify">
              Cậu là người sáng lập và thuyền trưởng của Băng Hải tặc Mũ Rơm
              ngày càng khét tiếng và mạnh mẽ , đồng thời là một trong bốn chiến
              binh hàng đầu của băng. [25] Ước mơ cả đời của cậu là trở thành
              Vua hải tặc bằng cách tìm ra kho báu huyền thoại được để lại bởi
              Vua hải tặc quá cố, Gol D. Roger . [26] Cậu tin rằng trở thành Vua
              hải tặc đồng nghĩa với việc có nhiều tự do nhất trên thế giới..
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-lg-8 col-md-8 col-xs-12 col-sm-12">
        <q-card class="card-bg text-white">
          <q-card-section class="text-h6 q-pa-sm">
            <div class="text-h6">Change Password</div>
          </q-card-section>
          <q-card-section class="q-pa-sm row">
            <q-item class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-item-section> Current Password </q-item-section>
            </q-item>
            <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <q-item-section>
                <q-input
                  type="password"
                  dark
                  dense
                  outlined
                  color="white"
                  round
                  v-model="password_dict.current_password"
                  label="Current Password"
                />
              </q-item-section>
            </q-item>
            <q-item class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-item-section> New Password </q-item-section>
            </q-item>
            <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <q-item-section>
                <q-input
                  type="password"
                  dark
                  dense
                  outlined
                  color="white"
                  round
                  v-model="password_dict.new_password"
                  label="New Password"
                />
              </q-item-section>
            </q-item>
            <q-item class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-item-section> Confirm New Password </q-item-section>
            </q-item>
            <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <q-item-section>
                <q-input
                  type="password"
                  dark
                  dense
                  outlined
                  round
                  color="white"
                  v-model="password_dict.confirm_new_password"
                  label="Confirm New Password"
                />
              </q-item-section>
            </q-item>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn class="text-capitalize bg-info text-white"
              >Change Password</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { moment } from "moment";

export default defineComponent({
  name: "register",
  setup() {
    return {
      user_details: {},
      password_dict: {},
    };
  },
});
</script>

<style scoped>
.card-bg {
  background-image: linear-gradient(#1976d2, #e86f93);
}
</style>
