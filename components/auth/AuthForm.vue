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
        <div class="empty" v-if="!signup">
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
          <button type="submit" class="submit-button">{{ displaySubmit() }}</button>
        </div>
      </form>
    </div>
    <img src="../../assets/img/pen_on_table.png" class="pen_on_table"/>
    <img src="../../assets/img/coffee.png" class="coffee"/>
    <div class="route">
      <a @click="$router.push('/signup')">
        <p :class="{color: $route.name==='signup'}">signup</p>
      </a>
      <p>&nbsp;/&nbsp;</p>
      <a @click="$router.push('/login')">
        <p :class="{color: $route.name==='login'}">login</p>
      </a>
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
      return this.signup ? "signup" : "login"
    }
  }
}
</script>

<style scoped>
@font-face {
	font-family: 'MyFont1';
	src: url(../../assets/font/DancingScript-VariableFont_wght.ttf);
}
@font-face {
	font-family: 'MyFont2';
	src: url(../../assets/font/NewTegomin-Regular.ttf);
}
.close_note {
  position: absolute;
  display: block;
  background-image: url("../../assets/img/bg_close_note.png");
  background-size: 400px;
  background-repeat: no-repeat;
  z-index: 100;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 400px;
  height: 570px;
}

.empty {
  height: 42px;
}

.form {
  padding-top: 273px;
  font-size: 15px;
  line-height: 20px;
  font-family: MyFont1, MyFont2;
  color: rgb(255, 255, 231);
}

label, input {
  display: block;
}

input {
  width: 40%;
  height: 22px;
  margin-left: 135px;
  color:rgb(255, 255, 231);
  background-color: #ffff0000;
  border-style: none;
  font-family : inherit;
}
input:focus {
  outline: none;
}

input:-webkit-autofill {
  -webkit-transition: background-color 9999s;
  transition: background-color 9999s;
  -webkit-text-fill-color: rgb(255, 255, 231) !important;
  font-family : MyFont1;
  border-style: none;
}

label {
  margin-left: 30px;
}

.submit-button {
  margin-top: 10px;
  margin-left: 35px;
  background-color: transparent;
  border: 3px solid rgba(255, 255, 231, 0.822);
  outline: none;
  font-family : inherit;
  color: rgb(255, 255, 231);
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  cursor: pointer;
}

.pen_on_table {
  height: 70%;
  position: absolute;
  right: -50%;
  bottom: -10%;
}

.coffee {
  height: 70%;
  position: absolute;
  left: -150%;
  top: -10%;
}
.route {
  position: absolute;
  display: flex;
  font-family: MyFont1;
  color: rgb(255, 255, 231);
  top: -150px;
  left: 50%;
  font-size: 45px;
  transform: translateX(-50%);
}
.route a {
  cursor: pointer;
}
.color {
  color: #9cacb7;
}
</style>
