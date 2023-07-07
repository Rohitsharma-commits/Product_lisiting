<template>

<div class="card">
  <div class="card-body">
   <form @submit.prevent="loggedIn()">
      <div class="mb-3 mt-24">
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input type="email" class="form-control" v-model="email" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" v-model="password" id="exampleInputPassword1">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</div>


</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      email: '',
      name: ''
    }
  },
    methods: {
    loggedIn() {
       if (this.email === 'admin@admin.com' &&this.password === '12345') {
          localStorage.setItem('user_name', this.email);
          this.$router.replace('/');
       } else {
          this.$swal({
              title: "Login Failed",
              text: 'Invalid Username or Password',
              icon: "error"
            })
       }
    }
    }
}
</script>
