<template>
  <!--<img class="img" src="./assets/logo.png"/>-->

  <div class="formdemo">
    <h3>Login Form</h3>
    <form @submit.prevent="handleSubmit">
      <div class="forminput">
        <label>Email:</label>
        <input type="email" required v-model="state.email" />
        <div
          class="error"
          v-for="error of v$.email.$silentErrors"
          :key="error.$message"
        >
          <strong>{{ error.$message }}</strong>
        </div>
      </div>
      <br />
      <div class="forminput">
        <label>Password:</label>
        <input type="password" required v-model="state.password" />
        <div
          class="error"
          v-for="error of v$.password.$silentErrors"
          :key="error.$message"
        >
          <strong>{{ error.$message }}</strong>
        </div>
      </div>
      <br />
      <div class="forminput">
        <input
          type="checkbox"
          v-model="state.terms"
          @click="state.terms = !state.terms"
        />
        <label> Remember Me</label>
        <div class="error" v-if="!state.terms">
          <strong>{{ "Pls tick the field" }}</strong>
        </div>
      </div>
      <br />
      <div class="submit">
        <router-link
          style="color: white; text-decoration: none"
          @click="redirect()"
          to="/instance"
          >Submit</router-link
        >
      </div>
    </form>
  </div>
</template>


<script>
import { reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
export default {
  setup() {
    const state = reactive({
      email: "",
      password: "",
      terms: false,
    });
    const rules = {
      email: { required, email },
      password: { required, minLength: minLength(10) },
      terms: {
        required,
      },
      redirect() {
        this.$router.push({ name: "Home" });
      },
    };
    const v$ = useVuelidate(rules, state);
    return { state, v$ };
  },
};
</script>
<style scoped>
.formdemo {
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  max-width: 420px;
  margin: 30px auto;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: black;
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  font-size: 0.9em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
h3 {
  text-align: center;
}
.forminput {
  display: block;
  padding: 10 px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
input[type="email"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}

.submit {
  background: rgb(54, 99, 204);
  text-align: center;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
a.router-link-exact-active {
  color: white;
}
.error {
  color: rgb(204, 79, 79);
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
.img {
  background-position: 100%;
}
</style>
