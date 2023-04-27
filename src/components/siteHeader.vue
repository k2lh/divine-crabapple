<template>
  <div id="nav" class="globalnav">
    <div class="header">
      <div class="pure-g">
        <div class="pure-u-1-4 pure-u-lg-1-12">
          <div>
            <div v-scroll-to="'#hello'" class="lining logo">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  width="54px" height="48.417px" viewBox="-24 -17.584 54 48.417" enable-background="new -24 -17.584 54 48.417"
                  xml:space="preserve">
                <g>
                  <path d="M-5.782,16.473c0,0.357-0.303,0.659-0.66,0.659c-0.385,0-0.687-0.302-0.687-0.659v-3.074l-2.745-2.746l-5.161,6.232
                  c-0.111,0.192-0.33,0.245-0.522,0.245c-0.136,0-0.3-0.027-0.438-0.137c-0.275-0.273-0.302-0.659-0.056-0.961l5.216-6.341
                  l-5.189-5.187c-0.273-0.275-0.273-0.686,0-0.933c0.275-0.275,0.66-0.275,0.933,0l7.963,7.933V-1.425c0-0.356,0.301-0.66,0.687-0.66
                  c0.358,0,0.66,0.303,0.66,0.66L-5.782,16.473L-5.782,16.473z"/>
                </g>
                <g>
                  <path d="M1.936-12.938c0-0.779,0.302-1.438,0.66-1.438c0.383,0,0.687,0.66,0.687,1.438v39.121c0,0.781-0.302,1.44-0.687,1.44
                  c-0.358,0-0.66-0.659-0.66-1.44V-12.938z"/>
                </g>
                <g>
                  <path d="M20.884,8.978c0-2.362-1.921-3.954-4.283-3.954c-2.333,0-4.255,1.592-4.255,3.954v7.492v0.085
                  c0,0.055-0.026,0.08-0.026,0.106c-0.03,0.056-0.03,0.085-0.056,0.11c-0.082,0.164-0.219,0.273-0.41,0.33
                  c0,0-0.029,0.027-0.056,0.027h-0.055H11.66c-0.191,0-0.383-0.082-0.521-0.221c-0.056-0.08-0.083-0.137-0.109-0.219
                  c-0.028-0.083-0.028-0.135-0.028-0.221V8.976V8.754V-1.43c0-0.358,0.3-0.66,0.659-0.66c0.385,0,0.686,0.301,0.686,0.66v7.082
                  c1.019-1.207,2.555-1.977,4.255-1.977c3.104,0,5.628,2.198,5.628,5.299v7.493c0,0.357-0.299,0.659-0.686,0.659
                  c-0.358,0-0.659-0.302-0.659-0.659V8.978z"/>
                </g>
              </svg>
            </div>
          </div>
          <!-- <div v-else>
            <router-link to="/" class="lining logo nothome">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  width="54px" height="48.417px" viewBox="-24 -17.584 54 48.417" enable-background="new -24 -17.584 54 48.417"
                  xml:space="preserve">
                <g>
                  <path d="M-5.782,16.473c0,0.357-0.303,0.659-0.66,0.659c-0.385,0-0.687-0.302-0.687-0.659v-3.074l-2.745-2.746l-5.161,6.232
                  c-0.111,0.192-0.33,0.245-0.522,0.245c-0.136,0-0.3-0.027-0.438-0.137c-0.275-0.273-0.302-0.659-0.056-0.961l5.216-6.341
                  l-5.189-5.187c-0.273-0.275-0.273-0.686,0-0.933c0.275-0.275,0.66-0.275,0.933,0l7.963,7.933V-1.425c0-0.356,0.301-0.66,0.687-0.66
                  c0.358,0,0.66,0.303,0.66,0.66L-5.782,16.473L-5.782,16.473z"/>
                </g>
                <g>
                  <path d="M1.936-12.938c0-0.779,0.302-1.438,0.66-1.438c0.383,0,0.687,0.66,0.687,1.438v39.121c0,0.781-0.302,1.44-0.687,1.44
                  c-0.358,0-0.66-0.659-0.66-1.44V-12.938z"/>
                </g>
                <g>
                  <path d="M20.884,8.978c0-2.362-1.921-3.954-4.283-3.954c-2.333,0-4.255,1.592-4.255,3.954v7.492v0.085
                  c0,0.055-0.026,0.08-0.026,0.106c-0.03,0.056-0.03,0.085-0.056,0.11c-0.082,0.164-0.219,0.273-0.41,0.33
                  c0,0-0.029,0.027-0.056,0.027h-0.055H11.66c-0.191,0-0.383-0.082-0.521-0.221c-0.056-0.08-0.083-0.137-0.109-0.219
                  c-0.028-0.083-0.028-0.135-0.028-0.221V8.976V8.754V-1.43c0-0.358,0.3-0.66,0.659-0.66c0.385,0,0.686,0.301,0.686,0.66v7.082
                  c1.019-1.207,2.555-1.977,4.255-1.977c3.104,0,5.628,2.198,5.628,5.299v7.493c0,0.357-0.299,0.659-0.686,0.659
                  c-0.358,0-0.659-0.302-0.659-0.659V8.978z"/>
                </g>
              </svg>
            </router-link>
          </div> -->
        </div>
        <div class="pure-u-3-4 pure-u-lg-5-12">
          <div class="lining headers">
            <h1>K L Hamilton</h1>
          </div>
        </div>
        <div class="pure-u-1-2 pure-u-lg-1-2">
          <div class="lining nav">
            <div class="pure-menu pure-menu-horizontal">
              <ul class="pure-menu-list">
                <li class="pure-menu-item">
                  <span v-scroll-to="'#experience'" class="pure-menu-link">
                    experience
                  </span>
                </li>
                <li class="pure-menu-item">
                  <span v-scroll-to="'#projects'" class="pure-menu-link">
                    projects
                  </span>
                </li>
                <li class="pure-menu-item">
                  <span v-scroll-to="'#testimonials'" class="pure-menu-link">
                    testimonials
                  </span>
                </li>
                <!-- <li v-if="!isHome" class="pure-menu-item">
                  <router-link to="/" class="pure-menu-link">
                    Main site
                  </router-link>
                </li>
                <li v-if="!isHome" class="pure-menu-item">
                  <router-link to="cstudy1" class="pure-menu-link">
                    Case Study #1
                  </router-link>
                </li>
                <li v-if="!isHome" class="pure-menu-item">
                  <router-link to="cstudy2" class="pure-menu-link">
                    Case Study #2
                  </router-link>
                </li>
                <li v-if="!isHome" class="pure-menu-item">
                  <router-link to="cstudy3" class="pure-menu-link">
                    Case Study #3
                  </router-link>
                </li> -->
                <li class="pure-menu-item">
                  <a href="https://www.dropbox.com/s/3xhg17d8ywo3ugf/klhamilton2023.pdf?dl=0">
                    resumé
                  </a>
                </li>
                <li class="pure-menu-item">
                  <a href="https://github.com/k2lh">
                    github
                  </a>
                </li>
                <li class="pure-menu-item">
                  <a href="https://www.linkedin.com/pub/kl-hamilton/2/977/231">
                    linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
.globalnav {
  height: 6rem;
  background: #FFD700;
  width: 100%;
  color: #111;
  position: fixed;
  top: 0;
  z-index: 999;
  & .lining {
    padding: .25rem;
    &.headers {
      & h1 {
        letter-spacing: 3px;
        font-size: 1.25rem;
        font-weight: 400;
      }
    }
  }
  & .lining.logo {
    margin: 0 2rem;
    &.nothome {
      position: relative;
      top: .5rem;
    }
  }
  & .lining.nav {
    text-transform: uppercase;
    margin: 0;
    float: none;
    font-weight: 400;
  }
}
.logo {
  padding: 0 0 0 2rem;
  & svg {
    fill: #111;
    height: 3rem;
  }
}
.pure-menu-item {
  margin: -1rem 1rem 0 0;
  font-size: .85rem;
  color: #111;
  & a {
    color: #111;
  }
}

.pure-menu-link {
  color: #111;
}
@media screen and (min-width: 64em) {
  .globalnav {
    height: 5rem;
    & .lining {
      padding: .5rem;
      &.headers {
        & h1 {
          letter-spacing: 3px;
          font-size: 1.5rem;
          font-weight: 400;
        }
      }
    }
    & .lining.nav {
      text-transform: uppercase;
      margin: 0;
      float: right;
      font-weight: 400;
    }
  }
  .pure-menu-item {
    margin: .5rem 1rem 0 0;
    font-size: 1.5rem;
    color: #111;
    cursor: pointer;
    & a {
      color: #111;
    }
  }
  .logo {
    padding: 0 0 0 2rem;
    & svg {
      fill: #111;
      height: 4rem;
    }
  }
}
.pure-menu-active > .pure-menu-link, .pure-menu-link:focus, .pure-menu-link:hover {
  background-color: #111;
  color: #FFD700;
}
</style>
