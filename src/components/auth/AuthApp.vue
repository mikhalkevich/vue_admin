<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

export default {
  name: "AuthApp",
  components: {},
  setup() {
    const user = ref(null);
    const router = useRouter();
    onMounted(async () => {
      try {
        const response = await axios.get('profile');
        user.value = await response.data
        await console.log(user.value);
      } catch (e) {
        router.push('/');
      }
    })
  }
}
</script>

<style scoped>

</style>