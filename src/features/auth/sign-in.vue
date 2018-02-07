
<script>
  import { required } from 'vuelidate/lib/validators'
  export default {
    mounted () {
      this.$bus.$on('navigate', this.reset)
    },
    validations: {
      username: {
        required
      },
      password: {
        required
      },
    },
    data () {
      return {
        username: '',
        password: '',
        keepSignedIn: true
      }
    },
    methods: {
      submit () {
        if (!this.$v.$invalid) {
          this.$emit('do-sign-in', {...this.$data})
        } else {
          this.$v.$touch()
        }
      },
      reset (selected) {
        if (selected === 'signup') {
          this.username = ''
          this.password = ''
          this.keepSignedIn = true
          this.$v.$reset()
        }
      }
    }
  }
</script>

<template>
  <form action="#" @submit.prevent="submit" class="sign-in-htm">
    <div class="group">
      <label
        :class="{ invalid: $v.username.$dirty && $v.username.$invalid }"
        for="sign-in-user"
        class="label">Username</label>
      <input
        :class="{ invalid: $v.username.$dirty && $v.username.$invalid }"
        id="sign-in-user"
        type="text"
        @input="$v.username.$touch()"
        class="input" v-model="username">
    </div>
    <div class="group">
      <label
        :class="{ invalid: $v.password.$dirty && $v.password.$invalid }"
        for="sign-in-pass"
        class="label">Password</label>
      <input
        :class="{ invalid: $v.password.$dirty && $v.password.$invalid }"
        @input="$v.password.$touch()"
        id="sign-in-pass"
        type="password"
        class="input"
        data-type="password"
        v-model="password">
    </div>
    <div class="group">
      <input id="check" type="checkbox" class="check" v-model="keepSignedIn">
      <label for="check"><span class="icon"></span> Keep me Signed in</label>
    </div>
    <div class="group">
      <input type="submit" class="button" value="Sign In">
    </div>
    <div class="hr"></div>
    <div class="foot-lnk">
      <a href="#forgot">Forgot Password?</a>
    </div>
  </form>
</template>
