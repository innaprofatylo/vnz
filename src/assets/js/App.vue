<template>
  <form
    action="result-test.html"
    method=" post"
    id="testform"
    class="ba-form"
    v-on:submit="getAnswers"
  >
    <fieldset v-for="(item,index) in questions">
      <legend>{{item.question}}</legend>
      <label :for="`a${index}`">
        <input
          type="radio"
          :name="`q${index}`"
          :id="`a${index}`"
          value="a"
          class="answer"
          v-model="userAnswers[index]"
			 required
        />
        {{item.answerA}}
      </label>
      <label :for="`b${index}`">
        <input
          type="radio"
          :name="`q${index}`"
          :id="`b${index}`"
          value="b"
          class="answer"
          v-model="userAnswers[index]"
        />
        {{item.answerB}}
      </label>
    </fieldset>

    <button id="btn" class="ba-button ba-button--test">перевірити тест</button>
  </form>
</template>


<script>
// import json from '../db/data.json'

export default {
  data() {
    return {
      itemsPerPage: 2,
      questions: [],
      userAnswers: []
    };
  },
  methods: {
    getTotalPages() {
      return Math.ceil(this.products.length / this.itemsPerPage);
    },
    getAnswers() {
      //  console.log(this.userAnswers);
      let a = this.userAnswers.filter(x => x === "a").length;
      let b = this.userAnswers.filter(x => x === "b").length;
      window.localStorage.setItem("answerA", a);
      window.localStorage.setItem("answerB", b);
      console.log(a);
      console.log(b);
    }
  },
  mounted() {
    //  window.localStorage.removeItem("answerA");
    //  window.localStorage.removeItem("answerB");

    fetch("assets/json/mydoc.json")
      .then(res => res.json())
      .then(list => {
        this.questions = list;
        console.log(this.questions);
      });
  }
};
</script>