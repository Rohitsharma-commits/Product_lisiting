<template>
    <Form :product="product" :uploadImg="uploadImg" :submitFn="createProduct"/>
</template>

<script>
import { uuid } from 'vue-uuid'; 
import Form from '../components/Form.vue'
export default {
   components: {
     Form
   },
   data() {
     return {
        product: {
          name: null,
          price: null,
          image: null,
          uuid: this.$uuid.v4()
        },
        products: []
     }
   },
  computed: {
    productList(){
      return this.$store.getters.products;
    },
   },
   methods: {
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    },
    uploadImg(){
      let doc = event.target.files[0];
      this.getBase64(doc).then(
        data =>  {
          this.product.image = data
        });
    },
    createProduct() {
        this.products.push(this.product)
        console.log(this.products)
        this.$store.dispatch('setProducts', [...this.productList, ...this.products])
         this.$swal({
            title: "Product Created!",
            icon: "success"
          })
        this.$router.replace('/');
    }
   }
}
</script>

<style>

</style>