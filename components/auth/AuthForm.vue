<template>
  <div class="close_note">
    <div class="form">
      <form @submit.prevent="authFirebase">
        <div>
          <label for="username" v-if="signup">User Name</label>
          <input 
            v-model="name"
            name="name"
            type="text"
            required
            v-if="signup"
            id="username"
          />
        </div>
        <div>
          <label for="mailaddress">Mail Address</label>
          <input
            v-model="email"
            name="email"
            type="email"
            required
            id="mailaddress"
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            v-model="password"
            name="password"
            type="password"
            required
            id="password"
          />
        </div>
        <div>
          <button type="submit">{{ displaySubmit() }}</button>
        </div>
      </form>
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
  display: block;
  background-image: url("../../assets/img/bg_close_note.png");
  background-size: 350px;
  background-repeat: no-repeat;
  z-index: 100;
  margin: 100px;
  width: 335px;
  height: 470px;
}

.form {
  padding-top: 230px;
  font-size: 15px;
  font-family: cursive;
  color: rgb(255, 255, 231);
}

label, input {
  display: block;
}

input {
  width: 40%;
  margin-left: 120px;
  color:rgb(255, 255, 231);
  background-color: rgba(255, 255, 255, 0);
  border-style: none;
  
}

label {
  margin-left: 30px;
}

</style>
