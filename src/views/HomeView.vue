<template>
  <div>
    <main class="container break">
      <div class="p-4 p-md-5 mb-4 rounded text-bg-secondary">
        <div class="col-md-12">
          <h1 class="display fst-italic">Home page</h1>
          <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently
            about what’s most interesting in this post’s contents.</p>

        </div>
      </div>
    </main>
    <p class="lead mb-0"><a href="#" class="text-white fw-bold" @click="DialogShow">Open dialog form</a></p>
    <form>
      <MyDialog v-model:show="DialogVisible"> 
        <FormInput type="text" v-model="ProductName"/>
        <FormInput name="description" v-model="ProductDescription"/>
        <FormInput type="file" name="picture"/>
        <FormSelect :options="catalogs" v-model="SelectedOption"></FormSelect>
        <FormButton @click="SendData" />
      </MyDialog>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import {onMounted, ref, watch} from "vue";

export default {
  name: 'ProductsView',
  setup() {
    const catalogs = ref([]);
    const DialogVisible = ref(false);
    const SelectedOption = ref('');
    const ProductName = ref('');
    const ProductDescription = ref('');
    const DialogShow = () => {
      DialogVisible.value = true;
    };
    const SendData = () => {
      console.log(ProductName, ProductDescription, SelectedOption);
    };
    onMounted(async () => {
      const response = await axios.get('catalogs');
      catalogs.value = response.data;
      console.log(catalogs.value);
    });
    watch(SelectedOption, (newValue) => {
      console.log(newValue);
    });
    return {
      catalogs,
      DialogVisible,
      SelectedOption,
      ProductName,
      ProductDescription,
      DialogShow,
      SendData
    }
  },
}

</script>


