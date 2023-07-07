import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import withUUID from "vue-uuid";
import store from './store'
const app = createApp(App).use(store);

app.use(VueSweetalert2);
app.use(withUUID);

router.beforeEach((to, from, next) => {
    let user_name = localStorage.getItem('user_name')
    console.log(user_name)
    if(user_name && to.name === 'login'){
      next({name: 'home'});
    }else if(to.name !== 'login' && !user_name){
      next({name: 'login'});
    }else{
      next();
    }
  })
app.use(router).mount('#app')
