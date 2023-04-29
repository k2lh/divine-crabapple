<template>
  <div class="mainpage">
    <div class="frontpiece" id="hello">
      <div class="lining padtop10">
        <div class="topquote">
          I love using <b>elegant code</b> and <b>intuitive design</b> to build <b>sophisticated systems</b>.
        </div>
        <div class="hellotext">
          Lots of people soak up information. I distill it to find the patterns that gird the system. Whether I come at things as a fullstack dev, a ux or dataviz designer, a content strategist, or as an architect, they're all doorways to the same heart.
        </div>
      </div>
      <div class="sectionangle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="white" points="0,100 100,0 100,100"/>
        </svg>
      </div>
    </div>

    <div class="pure-g">
      <div class="pure-u-1-1">
        <div class="base">

          <div id="experience" class="filler">
            <div class="wrapper noborder">
              <h2 class="section">
                experience
              </h2>
            </div>
            <history/>
          </div>

          <div id="education" class="filler">
            <div class="wrapper">
              <h2 class="section">
                education
              </h2>
            </div>
            <div class="centered lining">
              <h3 class="title">
                George Mason University
              </h3>
              <h4 class="meta jobline padbot2">
                Fairfax, Virginia <span class="box">⦿</span> Bachelor's of Interdisciplinary Studies
              </h4>
            </div>
          </div>

          <div id="projects" class="filler">
            <div class="wrapper">
              <h2 class="section marbot0">
                projects
              </h2>
            </div>
            <projects/>
          </div>

          <div id="testimonials" class="filler">
            <div class="wrapper">
              <h2 class="section">
                testimonials
              </h2>
            </div>
            <reviews/>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import skills from "@/components/pages/skills.vue";
  import reviews from "@/components/pages/reviews.vue";
  import projects from "@/components/pages/projects.vue";
  import history from "@/components/pages/history.vue";
  import studies from "@/components/pages/studies.vue";

  export default {
    name: "Home",
    components: {
      skills,
      reviews,
      projects,
      history,
      studies
    },
    data() {
      return {}
    }
    // mounted() {
    //   this.$store.commit('setIsHome', true);
    // }
  };

</script>

<style scoped lang="scss">
  .noborder {
    border: 0px solid transparent;
  }

  .meta.jobline.links {
    padding-top: 1rem;
    line-height: 1.5;
    & a {
      text-transform: lowercase;
    }
  }

  .frontpiece {
    & .page-container {
      min-height: unset;
    }
    background: #FFD700;
    & .topquote {
      color: #111;
    }
    & .hellotext {
        font-size: 1.25rem;
        font-weight: 200;
        color: #111S;
        height: 20vh;
      }
  }

  .pure-form [type="checkbox"], [type="radio"] {
    margin: 0 .25rem 0 0;
  }

  .sectionangle {
    position: relative;
    height: 6rem;
    background: #FFD700;
  }

  svg {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 5rem;
  }

  .filler {
    padding: 1rem 0;
  }
</style>
