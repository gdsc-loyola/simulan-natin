<template>
  <div>
    <NavBar/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  },
}
</script>

<style>
/* Bootstrap 5 Override */

#app {
  font-family: "AvenirNext";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
  /* Simulan Natin 2022 Colors/Black (#333333) */
  color: #333333;
}

/* adding fonts */
@font-face {
  font-family: "AvenirNext";
  src: local("AvenirNext"),
   url(./fonts/AvenirNextLTPro/AvenirNextLTPro-Regular.otf) format("opentype");
}

@font-face {
  font-family: "AvenirNext-Bold";
  src: local("AvenirNext-Bold"),
   url(./fonts/AvenirNextLTPro/AvenirNextLTPro-Bold.otf) format("opentype");
}

@font-face {
  font-family: "AvenirNext-Italic";
  src: local("AvenirNext-Italic"),
   url(./fonts/AvenirNextLTPro/AvenirNextLTPro-It.otf) format("opentype");
}

@font-face {
  font-family: "CoolBritannia";
  src: local("CoolBritannia"),
   url(./fonts/CoolBritannia/CoolBritannia-Sans.otf) format("opentype");
}

/* default html tags override */
h1 {
  font-size: 40px;
  line-height: 48px;
}

h2 {
  font-size: 32px;
  line-height: 40px;
}

h3 {
  font-size: 24px;
  line-height: 32px;
}

body {
  font-size: 18px;
  line-height: 22px;
}

sub {
  font-size: 16px;
  line-height: 18px;
}

  sub.al-caption {
    font-size: 14px;
    line-height: 16px;
  }

  sub.al-tag-caption {
    font-size: 12px;
    line-height: 16px;
  }

/* font typing */
.al-body {
  font-size: 18px;
  line-height: 22px;
}

.al-bold {
  font-family: "AvenirNext-Bold";
}

.al-medium {
  font-weight: 700;
}

.al-italic {
  font-family: "AvenirNext-Italic";
}

/* colors */
.al-font-primary-red {
  color: #FF0016 !important;
}

.al-font-primary-yellow {
  color: #FFE300 !important;
}

.al-font-primary-blue {
  color: #342A92 !important;
}

/* override bootstrap classes - direct attribute change*/
.bg-light {
  /* Simulan Natin 2022 Colors/Before White (#FAFAFA) */
  background: #FAFAFA;
  /* Nav Bar_Drop Shadow */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

/* override bootstrap classes - class over class */
.al-navbar {
  min-height: 96px !important;
}

.al-container-fluid {
  padding-left: 80px !important;
  padding-right: 80px !important;
}
</style>

