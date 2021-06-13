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
      password: '',
      id: ''
    }
  },
  methods: {
    authFirebase() {
      if (this.signup) {
        this.signupFirebase()
      } else {
        this.login()
      }
    },
    async signupFirebase() {
      await this.$fire.auth.createUserWithEmailAndPassword(this.email,this.password)
      
      const user = await this.$fire.auth.currentUser;
      await user.updateProfile({displayName: this.name})
      const userdata = {
        name: this.name,
        email: user.email,
        id: user.uid
      }
      this.$store.dispatch('auth/setUser',userdata)
      this.$router.push('/home')
    },
    async login () {
      await this.$fire.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(result => {
        const userdata = {
          name: result.user.displayName,
          email: result.user.email,
          id: result.user.uid
        }
        console.log(result)
        this.$store.dispatch('auth/setUser',userdata)
        this.$router.push('/home')
      })
      .catch(result => {
        console.log(result)
        alert(result.message)
      })
    },
    displaySubmit() {
      return this.signup ? "サインアップ" : "ログイン"
    }
  }
}
</script>
