<template>
  <div class="row">
    <div class="column ba-box ba-box--math small-12 medium-8 large-5">
      <div class="row">
        <img class="column small-6 medium-4 large-5" src="assets/img/mozgi1.png" alt="mozgi" />
        <div class="column ba-box__text small-6 medium-4 large-6">
          <span>{{answerA}}%</span>
          <p>Математичний склад розуму</p>
        </div>
      </div>
    </div>
    <!-- /.column -->

    <div class="column ba-box ba-box--hug small-12 medium-8 large-5">
      <div class="row">
        <img class="column small-6 medium-4 large-5" src="assets/img/mozgi2.png" alt="mozgi" />
        <div class="column ba-box__text small-6 medium-4 large-6">
          <span>{{answerB}}%</span>
          <p>Гуманітарний склад розуму</p>
        </div>
        <!-- /.ba-box__text -->
      </div>
    </div>
    <!-- /.column -->
  </div>
  <!-- /.row -->
</template>


<script>
export default {
  data() {
    return {
      answerA: Math.round((window.localStorage.getItem("answerA") / 12) * 100),
      answerB: Math.round((window.localStorage.getItem("answerB") / 12) * 100)
    };
  }
};
</script>