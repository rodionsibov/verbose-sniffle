<template>
  <form
    class="
      flex flex-col
      gap-2
      w-2/3
      mt-8
      rounded
      mx-auto
      bg-gray-100
      shadow-lg
      p-4
    "
    @submit.prevent="login"
  >
    <h1 class="my-2">Login</h1>
    <label for="username">Username</label>
    <input
      class="border-2 p-2 rounded"
      type="text"
      id="username"
      v-model="username"
    />
    <label for="password">Password</label>
    <input
      class="border-2 p-2 rounded"
      type="password"
      id="password"
      v-model="password"
    />
    <button class="bg-gray-800 text-white p-2 rounded hover:opacity-90">
      Login
    </button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const username = ref("");
    const password = ref("");
    const login = () => {
      window.user = username.value;
      const redirectPath = useRoute().query.redirect || "/protected";
      useRouter().push({ redirectPath });
    };

    return { username, password, login };
  },

  methods: {
    login() {
      //   Auth user against API
      window.user = this.username;
      const redirectPath = this.route.query.redirect || "/protected";
      this.$router.push({ redirectPath });
    },
  },
};
</script>

<style>
</style>