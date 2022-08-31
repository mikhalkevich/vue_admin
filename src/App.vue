<template>
  <div>
    <MenuTop/>
    <router-view/>
    <BootstrapFooter/>
  </div>
</template>
<script>
import MenuTop from "@/components/templates/MenuTop";
import BootstrapFooter from "@/components/templates/BootstrapFooter";

export default {

  components:{
    MenuTop,
    BootstrapFooter
  }
}
</script>
