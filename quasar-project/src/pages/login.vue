<template>
  <q-layout>
    <q-page-container class="login-container">
      <div>
        <q-img
          id="login-logo"
          src="https://itvnpt.vn/wp-content/uploads/2021/11/Logo-VNPT-TP-HCM-1.png"
        />
      </div>
      <div>
        <q-card
          v-bind:style="$q.screen.lt.sm ? { width: '70%' } : { width: '25%' }"
          class="login-card"
        >
          <q-card-section>
            <q-avatar size="103px" class="absolute-center shadow-10">
              <img
                src="https://cdn.popsww.com/blog/sites/2/2022/02/zoro-sau-2-nam.jpg"
              />
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">Đăng nhập</div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md" @submit.prevent="submitForm">
              <q-input label="Username" v-model="login.username"> </q-input>
              <q-input
                label="Password"
                type="password"
                v-model="login.password"
              >
              </q-input>
              <div>
                <q-btn
                  class="full-width"
                  color="primary"
                  label="Login"
                  type="submit"
                  to="/dashboard"
                  rounded
                ></q-btn>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      login: {
        username: "admin",
        password: "admin123",
      },
    };
  },
};
</script>

<style scoped>
.wave {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}

.login-container {
  width: auto;
  min-height: 90%;
  padding: 50 50 50 50;
}
#login-logo {
  height: 30%;
  width: 20%;
  margin-right: auto;
  margin-left: auto;
  display: block;
}
.login-card {
  margin-top: 70px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
}

#login-button {
  width: 100%;
  height: 50px;
  border-radius: 15px;
}
</style>
