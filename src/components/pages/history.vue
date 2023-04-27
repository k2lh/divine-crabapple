<template>
  <div class="history padbot2">
    <div v-for="(job, index) in positions" :key="index" class="dashbefore">
      <div class="pure-u-1-1 pure-u-md-1-4 alignright">
        <div class="lining">
          <h3 class="title martop1">
            {{ job.title }}
          </h3>
          <h4 class="meta jobline">
            <span v-if="job.team">{{ job.team}}, </span>{{ job.company }}
          </h4>
          <h4 class="meta jobline">
             {{ job.startMonth }} {{ job.startYear }} &ndash; {{ job.endMonth }} {{ job.endYear }} | {{ job.location }}
          </h4>
        </div>
      </div>
      <div class="pure-u-1-1 pure-u-md-1-2">
        <div class="lining">
          <div class="description">
            {{ job.description }}
          </div>
          <ul class="highlight martop0">
            <li v-for="(point, pindex) in job.points" :key="pindex">
              {{ point }}
            </li>
          </ul>
        </div>
      </div>
      <div class="pure-u-1-1 pure-u-md-1-8">
        <div class="lining">
          <h4 class="meta jobline uppercase">
            tools & technologies
          </h4>
          <div class="highlight martop0">
            <span v-for="(techs, tindex) in job.tech" :key="tindex">
              {{(techs !='' && tindex !=0) ? ' - ' : ''}}{{ techs }}
            </span>
          </div>

        </div>
      </div>
      <div class="pure-u-1-1 pure-u-md-1-8">
        <div class="lining">
          <h4 class="meta jobline uppercase">
            skills
          </h4>
          <div class="highlight martop0">
            <span v-for="(skill, sindex) in job.skills" :key="sindex">
              {{(skill !='' && sindex !=0) ? ' - ' : ''}}{{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'redaxios';

  export default {
    name: "history",
    data() {
      return {
        positions: []
      }
    },
    created() {
      this.getPositions();
    },
    methods: {
      getPositions() {
        axios.get('../positions.json').then((response) => {
          this.positions = response.data;
        });
      }
    }
  };
</script>

<style scoped lang="scss">
  .uppercase {
    text-transform: uppercase;
  }

  .lining {
    padding-bottom: 1rem;
  }
  h2.section.short {
    margin-bottom: 0;
    padding-bottom: 0;
  }
</style>
