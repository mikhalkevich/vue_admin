<template>
  <div>
    <MenuTop :user="user" />
    <router-view/>
    <BootstrapFooter/>
  </div>
</template>
<script>
import MenuTop from "@/components/templates/MenuTop";
import BootstrapFooter from "@/components/templates/BootstrapFooter";
import axios from "axios";
export default {
  data(){
    return {
      user:''
    }
  },
  mounted() {
    this.profile();
  },
  methods: {
    async profile() {
      const {data} = await axios.get('profile');
      this.user = data;
    }
  },
  components:{
    MenuTop,
    BootstrapFooter
  }
}
</script>
