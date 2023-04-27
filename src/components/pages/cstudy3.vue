<template>
  <div id="dynamic-component-demo" class="casestudy">
    <p>tab three</p>
    subPage = {{ subPage }}
    <ol>
      <li>Introduction
        <ol>
          <li>Roles and responsibilities</li>
          <li>Context:</li>
          <li>Timeframe:</li>
        </ol>
      </li>
      <li>Analysis
        <ol>
          <li>Problem statement</li>
          <li>Users and audience</li>
          <li>Scope and constraints</li>
        </ol>
      </li>
      <li>Process
        <ol>
          <li>successes, failures</li>
        </oL>
      </li>
      <li>Synthesis: outcome/results
        <ol>
          <li>design</li>
          <li>development</li>
        </ol>
      </li>
    </ol>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "cstudy3",
    data() {
      return {}
    },
    computed: mapGetters([
      'subPage'
    ]),
    // mounted() {
    //   this.$store.commit('setSubPage', true);
    //   console.log(subPage);
    // },
    created() {
      console.log('home // subPage = ', this.subPage);
    }
  };
</script>


<style scoped lang="scss">
  .lining {
    padding-bottom: 1rem;
  }
  h2.section.short {
    margin-bottom: 0;
    padding-bottom: 0;
  }
</style>
