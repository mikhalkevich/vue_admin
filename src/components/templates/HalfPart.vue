<template>
  <div class="col-md-6">
    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div class="col p-4 d-flex flex-column position-static">
        <strong :class="name_class">{{name}}</strong>
        <h3 class="mb-0">{{title}}</h3>
        <p class="card-text mb-auto">{{description}}</p>
        <a href="#" class="stretched-link">Continue reading</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HalfPart",
  props:['name', 'name_class', 'title', 'description', 'link']
}
</script>

<style scoped>

</style>