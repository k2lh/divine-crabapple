<template>
  <div class="casestudy">
    <div class="lining">
      <h2 class="section raised padbot1">
        case studies
      </h2>
      <h3 class="meta jobline martop1">
        Case Study #1
      </h3>
      <router-link :to="'cstudy1'" class="studylink">
        When Data Attacks: IBM Talent Transformation
      </router-link>
      <h3 class="meta jobline martop1">
        Case Study #2
      </h3>
      <router-link :to="'cstudy2'" class="studylink">
        Getting Left and Right to Talk: OpenWhisk Redesign
      </router-link>
      <h3 class="meta jobline martop1">
        Case Study #3
      </h3>
      <router-link :to="'cstudy3'" class="studylink">
        More than a Doorway: D&B/Hoovers Integration
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "studies",
    data() {
      return {}
    }
  };
</script>

<style scoped lang="scss">
  .lining {
    padding-bottom: 1rem;
  }
  .meta.jobline {
    margin: 1rem 0 0 0;
  }

  a.studylink {
    display: block;
    margin: .25rem 0 2rem 0;
    color: #6c4f70;
    font-size: 1.5rem;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
</style>
