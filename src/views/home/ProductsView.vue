<template>
  <form>
    //name
    //description
    //price
    //catalog
    //file
    <input type="text" name="product_name" v-model="product_name">
    <select>
      <option v-for="catalog in catalogs" :key="catalog.id">{{ catalog.name }}</option>
    </select>
  </form>
</template>

<script>
import axios from "axios";
import {onMounted, ref} from "vue";

export default {
  name: "ProductsView.vue",
  setup() {
    const product_name = ref('');
    const catalogs = ref('');
    console.log('ok');
    onMounted(() => {
       getCatalogs();
    })
    const getCatalogs = async () => {
      const data = await axios.get('catalogs');
      console.log(data);
      this.catalogs.value = data.data.results;
    }
    return {
      product_name,
      catalogs,
    }
  }
}
</script>

<style scoped>

</style>