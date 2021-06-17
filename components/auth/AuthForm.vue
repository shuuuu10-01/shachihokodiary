<template>
  <div class="close_note">
    <div class="form">
      <form @submit.prevent="authFirebase">
        <label for="username" v-if="signup">ユーザー名</label>
        <input 
          v-model="name"
          name="name"
          type="text"
          placeholder="ユーザー名"
          required
          v-if="signup"
          id="username"
        />
        <label for="mailaddress">メールアドレス</label>
        <input
          v-model="email"
          name="email"
          type="email"
          placeholder="メールアドレス"
          required
          id="mailaddress"
        />
        <label for="password">ユーザー名</label>
        <input
          v-model="password"
          name="password"
          type="password"
          placeholder="パスワード"
          required
          id="password"
        />
        <button type="submit">{{ displaySubmit() }}</button>
      </form>
      <a href="https://www.freepik.com/photos/background">Background photo created by freepik - www.freepik.com</a>
    </div>
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

<style>
.close_note {
  background-image: url("../../assets/img/bg_close_note.png") no-repeat fixed;
  background-size: cover;
  background-position: center;
  z-index: 100;
  text-align: center;
  width: 50%;
  height: 100%;
}

.form {
  position: relative;
}
</style>
