<template>
  <footer class="text-center text-lg-start bg-light text-muted" style="background-color: rgba(0, 0, 0, 0.05);">
    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <br>
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3"></i>
            </h6>
            <div class="d-flex flex-row align-items-center mb-4">
              <i class="fas fa-key fa-lg me-3 fa-fw"></i>
              <div class="form-outline flex-fill mb-0">
                <input type="email" id="form3Example4cd" class="form-control" v-model="email" @input="checkEmail" />
                <label class="form-label" for="form3Example4cd">Type your email</label>
              </div>
            </div>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">
              PWT Solution
            </h6>
            <p>
              <a href="#!" class="text-reset">Products</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Services</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Contacts</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Works</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">
              Useful links
            </h6>
            <p>
              <a href="#!" class="text-reset">Pricing</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Settings</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Orders</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Help</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i class="fas fa-home me-3"></i> Минск, ст.м. Фрунзенская, ул. Мельникайте, 4 (комната 307)</p>
            <p>
              <i class="fas fa-envelope me-3"></i>
              mikhalkevich@ya.ru
            </p>
            <p><i class="fas fa-phone me-3"></i> + 375 (29) 763-93-82</p>
            <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
      © 2021 Copyright:
      <a class="text-reset fw-bold" href="#">Mikhalkevich</a>
    </div>
    <!-- Copyright -->
  </footer>
</template>

<script>
export default {
  name: "BootstrapFooter",
  data(){
    return {
      email: 'default@ya.ru'
    }
  },
  methods:{
    async checkEmail() {
      console.log(this.email);
    },
  },
}
</script>