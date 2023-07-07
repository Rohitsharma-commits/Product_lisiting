<template>
    <div class="card">
        <div class="card-body">
           <router-link :to="{name: 'new'}" class="btn btn-primary">
              Add Product
          </router-link>

            <h5 class="card-title">Product List</h5>
           <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Image</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product, key) in productList" :key="key">
                    <td>{{product.name}}</td>
                    <td>{{product.price}}</td>
                    <td><img :src="product.image" width="100" height="100"/></td>
                    <td><router-link :to="{name: 'edit', params: {id: product.uuid}}" class="btn btn-warning">
                      Edit
                    </router-link></td>
                    <td><button type="button" class="btn btn-danger" @click="deleteProduct(product.uuid)">Delete</button></td>
                    </tr>
                </tbody>
                </table>
                <div class="row g-2">
                  <div class="col-12 text-center">
                    <button type="button" class="btn btn-danger logout_class" @click="Logout()">Logout</button>
                  </div>
                </div>
        </div>
    </div>

</template>

<script>
import New from '../components/Form.vue'
export default {
   components: {
    New
   },
   computed: {
    productList(){
      return this.$store.getters.products;
    },
   },
   methods: {
    Logout() {
      this.$swal({
        title: "Are you sure?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willLogout) => {
        if (willLogout) {
          localStorage.removeItem("user_name");
          this.$router.replace('/login');
        }
      });
    },
    deleteProduct(uuid){
      this.$swal({
        title: "Are you sure?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          const products = this.productList.filter(p => p.uuid !== uuid)
          this.$store.dispatch('setProducts', products)
        }
      });
    },
   }
}
</script>

<style scoped>
.logout_class {
   background-color: transparent !important;
   color: black !important;
   border-color: transparent !important;
}
</style>