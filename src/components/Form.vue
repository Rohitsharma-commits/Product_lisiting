<template>
  <form @submit.prevent="submitFn">
    <div class="row">
      <div class="form-group col-md-12">
          <label for="">Name *</label>
          <input type="text" class="form-control" required v-model="product.name" placeholder="Enter Name">
      </div>
        <div class="form-group col-md-12">
          <label for="">Price *</label>
          <input type="number" class="form-control" required v-model="product.price" placeholder="Enter Price">
      </div>
        <div class="form-group col-md-12">
          <label for="">Upload *</label>
          <input type="file" class="form-control" accept="image/*" required ref="file" @change="uploadImg">
      </div>
        <div class="form-group col-md-12 mt-4">
          <button type="submit" class="btn btn-primary">Save</button>
        </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    product: {
      type:Object,
      required: true
    },
    uploadImg: {
      type: Function
    },
    submitFn: {
      type: Function,
      required: true
    }
  }
}
</script>

<style>

</style>