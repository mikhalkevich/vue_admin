<template>
  <div class="p-4 p-md-5 mb-4 rounded text-bg-secondary">
    <div class="col-md-12">
      <h1 class="display fst-italic">{{name}}</h1>
      <p class="lead my-3">{{description}}</p>
      <p class="lead mb-0"><a href="#" class="text-white fw-bold">Continue reading...</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderPage",
  props: ['name', 'description']
}
</script>

<style scoped>

</style>