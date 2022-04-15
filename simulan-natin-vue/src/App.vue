<template>
  <div>
    <NavBar/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  },
  mounted() {
    document.title = "Simulan Natin 2022";
  }
}
</script>

<style>
/*Universal Styles*/
#app {
  font-family: "AvenirNext";
  -webkit-font-smoothing: subpixel-antialiased !important;
  -webkit-font-smoothing: antialiased !important; /*safari mac nicer*/
  -moz-osx-font-smoothing: grayscale !important; /*fix fatty ff on mac*/
  text-rendering: optimizeLegibility !important; 
  text-transform: none; /*mac ff fix*/ 
  speak: none;
  font-style: normal;
  font-variant: normal;
  
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
</style>