<template>
  <div>
    <form @submit.prevent="authFirebase">
      <input 
        v-model="name"
        name="name"
        type="text"
        placeholder="ユーザー名"
        required
        v-if="signup"
      />
      <input
        v-model="email"
        name="email"
        type="email"
        placeholder="メールアドレス"
        required
      />
      <input
        v-model="password"
        name="password"
        type="password"
        placeholder="パスワード"
        required
      />
      <button type="submit">{{ displaySubmit() }}</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    signup: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    authFirebase() {
      if (this.signup) {
        this.signin()
      } else {
        this.login()
      }
    },
    async signin() {
      await this.$fire.auth.createUserWithEmailAndPassword(this.email,this.password)
      
      const user = await this.$fire.auth.currentUser;
      user.updateProfile({displayName: this.name})
    },
    login () {
      this.$fire.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(user => {
        console.log(user)
      })
    },
    displaySubmit() {
      return this.signup ? "サインアップ" : "ログイン"
    }
  }
}
</script>
