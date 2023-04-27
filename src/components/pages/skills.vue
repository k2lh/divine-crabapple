<template>
  <div class="skills">
    <div class="lining">
      <h2 class="section subsection marbot0">
        Skills List
      </h2>

      <div class="pure-u-1-2 pure-u-md-1-3 pure-u-xl-1-5">
        <h4 class="meta padtop1">
          Collaborative Leadership
        </h4>
        <ul class="list">
          <li v-for="(tag, tagindex) in aside.style" :key="tagindex" class="tagitem">
            {{ tag }}
          </li>
        </ul>
      </div>
      <div class="pure-u-1-2 pure-u-md-1-3 pure-u-xl-1-5">
        <h4 class="meta padtop1">
          UX Research
        </h4>
        <ul class="list">
          <li v-for="(tag, tagindex) in aside.research" :key="tagindex" class="tagitem">
            {{ tag }}
          </li>
        </ul>
      </div>
      <div class="pure-u-1-2 pure-u-md-1-3 pure-u-xl-1-5">
        <h4 class="meta padtop1">
          UX/IA Design
        </h4>
        <ul class="list">
          <li v-for="(tag, tagindex) in aside.design" :key="tagindex" class="tagitem">
            {{ tag }}
          </li>
        </ul>
      </div>
      <div class="pure-u-1-2 pure-u-md-1-3 pure-u-xl-1-5">
        <h4 class="meta padtop1">
          UX Development
        </h4>
        <ul class="list">
          <li v-for="(tag, tagindex) in aside.dev1" :key="tagindex" class="tagitem">
            {{ tag }}
          </li>
        </ul>
      </div>
      <div class="pure-u-1-2 pure-u-md-1-3 pure-u-xl-1-5">
        <h4 class="meta padtop2">

        </h4>
        <ul class="list">
          <li v-for="(tag, tagindex) in aside.dev2" :key="tagindex" class="tagitem">
            {{ tag }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'redaxios';

  export default {
    name: "skills",
    data() {
      return {
        aside: []
      }
    },
    created() {
      this.getAside();
    },
    methods: {
      getAside() {
        axios.get('../aside.json').then((response) => {
          this.aside = response.data[0];
        });
      }
    }
  };
</script>

<style scoped lang="scss">

</style>
