<template>
  <div class="projects padbot2">
    <div class="pure-u-1-1">
      <div class="lining marbot0">
        <p class="description">Combine filters to find projects where all tags apply.</p>
      </div>
    </div>
    <div class="pure-u-1-6 padbot0">
      <div class="lining">
        <p class="label">Example type</p>
        <v-select :options="options.example" v-model="filterList.fexample" />
      </div>
    </div>
    <div class="pure-u-1-6 padbot0">
      <div class="lining">
        <p class="label">Role in project</p>
        <v-select :options="options.role" v-model="filterList.frole" />
      </div>
    </div>
    <div class="pure-u-1-6 padbot0">
      <div class="lining">
        <p class="label">Design skills</p>
        <v-select :options="options.design" v-model="filterList.fdesign" />
      </div>
    </div>
    <div class="pure-u-1-6 padbot0">
      <div class="lining">
        <p class="label">Frontend skills</p>
        <v-select :options="options.frontend" v-model="filterList.ffront" />
      </div>
    </div>
    <div class="pure-u-1-6 padbot0">
      <div class="lining">
        <p class="label">Backend skills</p>
        <v-select :options="options.backend" v-model="filterList.fback" />
      </div>
    </div>
    <div class="pure-u-1-6">
      <div class="lining">
        <p class="label">Team</p>
        <v-select :options="options.position" v-model="filterList.fposition" />
      </div>
    </div>
    <div class="lining">
      <div v-for="(project, index) in filteredItems" :key="index" class="pure-u-1-1 pure-u-lg-1-2 pure-u-xl-1-3 pure-u-xx-1-4">
        <div class="card">
          <div class="img-avatar" :class="project.logo">
          </div>
          <div class="card-text">
            <div class="portada">
              <ul>
                <li v-for="(tag, tindex) in project.tags" :key="tindex" class="meta">
                  {{ tag }}
                </li>
              </ul>
            </div>
            <div class="title-total">
              <div class="title">
                {{ project.endMonth }} {{ project.endYear }}
              </div>
              <div class="title">
                {{ project.team }}
              </div>
              <h2>
                {{ project.title }}
              </h2>
              <div class="desc">
                {{ project.description }}
              </div>
              <div class="actions">
                <span v-for="(link, lindex) in project.links" :key="lindex" class="meta tags">
                  <a :href="link.url">{{ link.alt }}</a>
                  <span v-if="project.links.length > (lindex + 1)">
                    <span class="box"> &#8226; </span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'redaxios';

  export default {
    name: "projects",
    props: {
      project: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        options: {
          example: [
            {
              value: 'demo',
              label: 'Plnkr, jsFiddle, etc'
            },
            {
              value: 'mock',
              label: 'Mockups & wires'
            },
            {
              value: 'screen',
              label: 'Screenshots'
            },
            {
              value: 'site',
              label: 'App or site'
            },
            {
              value: 'docs',
              label: 'Documentation'
            }
          ],
          role: [
            {
              value: 'research',
              label: 'Researcher'
            },
            {
              value: 'design',
              label: 'Designer'
            },
            {
              value: 'development',
              label: 'Developer'
            },
            {
              value: 'lead',
              label: 'Lead'
            }
          ],
          design: [
            {
              value: 'sketch',
              label: 'Sketch'
            },
            {
              value: 'invision',
              label: 'Invision'
            },
            {
              value: 'adobe',
              label: 'Adobe CC'
            }
          ],
          frontend: [
            {
              value: 'vue',
              label: 'Vue.js'
            },
            {
              value: 'charts',
              label: 'D3, E-Charts, NVD3'
            },
            {
              value: 'preprocess',
              label: 'Less, Sass'
            },
            {
              value: 'bootstrap',
              label: 'Bootstrap'
            },
            {
              value: 'carbon',
              label: 'Carbon'
            },
            {
              value: 'apiuse',
              label: 'APIs'
            },
            {
              value: 'angular',
              label: 'Angular'
            },
            {
              value: 'jquery',
              label: 'jQuery'
            }
          ],
          backend: [
            {
              value: 'apidesign',
              label: 'API design'
            },
            {
              value: 'node',
              label: 'Node, Express'
            },
            {
              value: 'nosql',
              label: 'MongoDB, NoSQL'
            },
            {
              value: 'SQL',
              label: 'db2, SQL, mySQL'
            },
            {
              value: 'cloud',
              label: 'Heroku, IBM Cloud'
            },
            {
              value: 'PHP',
              label: 'PHP'
            }
          ],
          position: [
            {
              value: 'talent',
              label: 'IBM Talent Analytics'
            },
            {
              value: 'cdata',
              label: 'IBM Chief Data Office'
            },
            {
              value: 'platform',
              label: 'IBM Platform'
            },
            {
              value: 'bluemix',
              label: 'IBM Cloud'
            },
            {
              value: 'studio',
              label: 'IBM Studio'
            },
            {
              value: 'personal',
              label: 'personal'
            },
            {
              value: 'associates',
              label: 'KLH Associates'
            },
            {
              value: 'training',
              label: 'MEAN Training'
            },
            {
              value: 'dnb',
              label: 'Dun & Bradstreet'
            },
            {
              value: 'xtivia',
              label: 'Xtivia Liferay'
            }
          ]
        },
        selections: [],
        items: [],
        filterList: {
          frole: '',
          fdesign: '',
          ffront: '',
          fback: '',
          fexample: '',
          fposition: ''
        }
      }
    },
    computed: {
      filteredItems() {
        console.log('run filter', this.project);
        let that = this;
        if (!that.filterList.fexample && !that.filterList.frole && !that.filterList.fdesign && !that.filterList.ffront && !that.filterList.fback && !that.filterList.fposition) {
          return that.items
        } else {
          that.selections = [];
          if (that.filterList.frole) {
            that.selections.push(that.filterList.frole.value);
          }
          if (that.filterList.fdesign) {
            that.selections.push(that.filterList.fdesign.value);
          }
          if (that.filterList.ffront) {
            that.selections.push(that.filterList.ffront.value);
          }
          if (that.filterList.fback) {
            that.selections.push(that.filterList.fback.value);
          }
          if (that.filterList.fexample) {
            that.selections.push(that.filterList.fexample.value);
          }
          if (that.filterList.fposition) {
            that.selections.push(that.filterList.fposition.value);
          }
          return that.items.filter(item => {
            var isSuperset = that.selections.every(function (val) {
              return item.keywords.indexOf(val) >= 0;
            });
            if (isSuperset) {
              return item;
            }
          });
        }
      }
    },
    created() {
      console.log(this.project);
      this.getProjects();
    },
    methods: {
      getProjects() {
        axios.get('../projects.json').then((response) => {
          this.items = response.data;
          // this.items = response.data.sort((a, b) => (a.title > b.title) ? 1 : -1);
        });
      }
    }
  };
</script>

<style scoped lang="scss">
  a {
    color: #EA5F93;
  }

  .dropdown-label {
    display: block;
    margin: 0 0 .25rem 0;
  }

  .card {
    background: #fff;
    border-radius: 4px;
    border: 1px solid #d1d3cf;
    box-shadow: -1px 2px 8px rgba(100,100,100, 0.2);
    max-width: 100%;
    min-height: 18rem;
    display: flex;
    flex-direction: row;
    position: relative;
    margin: 1rem;
  }
  .card h2 {
    margin: 0;
    padding: 1rem 0 0 0;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.25rem;
    text-align: right;
  }
  .card .title {
    padding: 0;
    text-align: right;
    color: #111;
    font-size: 1.25rem;
  }
  .card .desc {
    padding: 1rem 0 0 0;
    font-size: 1.25rem;
  }
  .card .actions {
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // align-items: center;
    padding: 0.5rem 0 0 0;
  }
  .img-avatar {
    width: 80px;
    height: 80px;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #FBAF4F;
    background-color: #FFF;
    // background-image: linear-gradient(#6c4f70, #834c8a);
    top: 15px;
    left: 24%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-origin: content-box;
    &.ibm {
      background-image: url("../../assets/logos/ibm.png");
    }
    &.dnb {
      background-image: url("../../assets/logos/dnb.png");
    }
    &.ibmcloud {
      background-image: url("../../assets/logos/ibmcloud.png");
    }
    &.klh {
      background-image: url("../../assets/logos/klh.png");
    }
    &.studio {
      background-image: url("../../assets/logos/studio.png");
    }
    &.xtivia {
      background-image: url("../../assets/logos/xtivia.png");
    }
    &.zilker {
      background-image: url("../../assets/logos/zilker.png");
    }
    &.shark {
      background-image: url("../../assets/logos/shark.png");
    }
  }

  .card-text {
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 100%;
  }

  .title-total {
    padding: 2.5em 1.5em 1.5em 1.5em;
  }

  .img-portada {
    width: 100%;
  }

  .portada {
    width: 100%;
    height: 100%;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    background-color: #FFD700;
    // background-image: url("../../assets/bg06.png");
    background-position: bottom center;
    background-size: cover;
  }

  li.meta {
    list-style-type: none;
    margin: 0 0 0 -2rem;
    color: #111;
  }
  .label {
    margin: 0 0 .25rem 0;
    font-size: 1.25rem;
  }

  .pure-button {
    padding: .5rem 1rem;
    border: 1px solid #6c4f70;
    font-size: 1.25rem;
    color: #6c4f70;
    text-decoration: none;
    background-color: #FFF;
    font-weight: 300;
  }

  .pure-button:focus, .pure-button:hover {
    background-image: none;
    background-color: #FFD700;
    color: #FFF;
  }

</style>
