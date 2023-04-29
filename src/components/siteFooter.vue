<template>
  <div class="global-footer">
    <div class="pure-u-1-3">
      <div class="inset description">
        <p>I was born in North Dakota, grew up in Georgia, and attended school just outside Washington DC. I've lived in seven states, including the smallest and the second-largest. </p>
        <p>Once upon a time I was fluent in French; now I read and write Mandarin but will never manage to speak it without an American accent.</p>
        <p>I can probably still rebuild a carburetor, but one Volvo transmission was enough for one lifetime.</p>
        <p>I was a rower in high school and a coxswain in college. I've done my time running ten hills after four hours on the water, but these days I aim for less painful methods of building team solidarity.</p>
      </div>
    </div>
    <div class="pure-u-1-3">
      <p class="padtop1 description centered">
        <a href="https://github.com/k2lh/" target="_blank" aria-label="(opens in new window)">github repository (k2lh)</a>
      </p>
      <p class="description centered">
        <a href="https://uk.linkedin.com/in/kl-hamilton/" target="_blank" aria-label="(opens in new window)">LinkedIn profile (klhamilton)</a>
      </p>
    </div>
    <div class="pure-u-1-3">
      <div class="inset padtop1">
        <ul class="highlight">
          <li v-scroll-to="'#experience'" class="description linkify">
            Read about current and past experience.
          </li>
          <li v-scroll-to="'#projects'" class="description linkify">
            Peruse a collection of past projects.
          </li>
          <li v-scroll-to="'#testimonials'" class="description linkify">
            Read client and team recommendations.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  .global-footer {
    background-color: #FFD700;
    padding: 2rem 0;
  }
  .bordered {
    border: 1px solid red;
  }
  .inset {
    margin: 0 2rem;
  }

  .description p {
    font-size: 1.25rem;
  }
  .linkify {
    cursor: pointer;
  }
</style>
