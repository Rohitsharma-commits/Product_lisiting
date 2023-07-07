<template>
    <Form :product="product" :uploadImg="uploadImg" :submitFn="editProduct"/>
</template>

<script>
import Form from '../components/Form.vue'
export default {
   components: {
     Form
   },
   data() {
     return {
        product: {
        },
        products: []
     }
   },
   created() {
      var data = this.productList.filter(p => p.uuid === this.$route.params.id)
      if(data.length > 0) {
        this.product = data[0]
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
    editProduct() {
        this.productList.forEach(p => {
           if (p.uuid === this.$route.params.id) {
             p.name = this.product.name
             p.price = this.product.price
             p.image = this.product.image
           }
        })
        console.log(JSON.stringify(this.productList))
        this.$store.dispatch('setProducts', this.productList)
         this.$swal({
            title: "Product Updated!",
            icon: "success"
          })
        this.$router.replace('/');
    }
   }
}
</script>

<style>

</style>