<template>
  <form @submit.prevent="submitForm">
    <div class="row q-mb-md">
      <q-banner class="bg-grey-3 col">
        <template v-slot:avatar>
          <q-icon name="face" color="primary" />
        </template>
        {{ tab | titleCase }} to access Todos anywhere!
      </q-banner>
    </div>
    <div class="row q-mb-md">
      <q-input
        outlined
        :rules="[val => isVaildEmail(val) || 'Please enter a valid email']"
        lazy-rules
        v-model="formData.email"
        label="Email"
        class="col"
        stack-label
        ref="email"
      />
    </div>
    <div class="row q-mb-md">
      <q-input
        outlined
        type="password"
        :rules="[val => val.length >= 6 || 'Please use mininum 6 characters']"
        lazy-rules
        v-model="formData.password"
        label="Password"
        class="col"
        stack-label
        ref="password"
      />
    </div>
    <div class="row">
      <q-space></q-space>
      <q-btn type="submit" color="primary" :label="tab" />
    </div>
  </form>
</template>

<script>
export default {
  props: ["tab"],
  data() {
    return {
      formData: {
        email: "",
        password: ""
      },
      text: ""
    };
  },
  methods: {
    submitForm() {
      this.$refs.email.validate();
      this.$refs.password.validate();
      if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
        if (this.tab == "login") {
          console.log("login");
        } else {
          console.log("register ");
        }
      }
    },
    isVaildEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  },
  filters: {
    titleCase(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style></style>
