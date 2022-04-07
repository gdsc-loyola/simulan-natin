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

.al-caption {
    font-size: 14px;
    line-height: 16px;
}

.al-bold {
  font-family: "AvenirNext-Bold";
}

.al-medium {
  font-family: "AvenirNext";
  font-weight: 700;
}

.al-italic {
  font-family: "AvenirNext-Italic";
}

/* colors */
.al-font-primary-white {
  color: #FAFAFA !important;
}

.al-font-primary-red {
  color: #FF0016 !important;
}

.al-font-primary-yellow {
  color: #FFE300 !important;
}

.al-font-primary-blue {
  color: #293C92 !important;
}

.al-bg-primary-red {
  background-color: #FF0016 !important;
}

.al-bg-primary-yellow {
  background-color: #FFE300 !important;
}

.al-bg-primary-blue {
  background-color: #293C92 !important;
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

.al-representatives-top{
  background-image: url('assets/RepresentativesBG.png');
  background-repeat: no-repeat;
  max-width: 100%;
  /* background-attachment: fixed;
  background-position-y: 90px; */
  background-position-y: -9px;
  background-size: 100%;
  
  padding-left: 120px !important;
  padding-right: 120px !important;
  padding-top: 96px !important;
  padding-bottom: 32px !important;
  margin: 0 !important;
}

.al-representatives-bottom{
  padding-top: 32px !important;
  padding-bottom: 32px !important;
  margin: 0 !important;
  text-align: center;
}

.al-searchbar {
  font-size: 24px !important;
  line-height: 32px !important;
  font-family: "AvenirNext" !important;
  font-weight: 700 !important;
  padding-top: 16px !important;
  padding-bottom: 16px !important;
  padding-left: 24px !important;
}

.al-filter-button {
  background-color: #293C92 !important;
  font-size: 18px;
  line-height: 22px;
  font-family: "AvenirNext-Bold";
  color: #FFFFFF !important;
  padding-left: 13px;
  padding-right: 13px;
  padding-top: 7px;
  padding-bottom: 7px;
}

.al-representative-card {
  display: inline-block;
  border: 2px solid #293C92 !important;
  box-sizing: border-box !important;
  border-radius: 8px !important;
  width: 588px;
  height: 144px;
  margin: 12px;
  text-align: left;
  cursor: pointer;
}

  .al-representative-card-content {
    min-width: 516px;
    min-height: 77px;
    padding-left: 35.84px;
    padding-right: 35.84px;
    padding-top: 33.29px;
    padding-bottom: 33.29px;
  }

    .al-representative-card-content-photo {
      float: left;
      margin-right: 16px;
    }
    
    .al-representative-card-content-name {
      display: inline-block;
      font-family: "AvenirNext-Bold";
      width: 321px;
      height: 36px;
      padding-right: 16px;
    }

    .al-representative-card-content-location {
      display: inline-block;
      font-family: "AvenirNext";
      font-weight: 700;
      width: 85px;
      height: 36px;
    }

.al-pill-badge {
  min-height: 29px;
  font-family: "AvenirNext-Bold";
  font-size: 12px;
  line-height: 16px;
  padding-top: 6.3px;
  padding-bottom: 6.3px;
  padding-left: 11.7px;
  padding-right: 11.7px;
  margin-right: 8px;
  cursor: pointer;
}

/* custom styles */
.al-inline-block {
  display: inline-block !important;
}

.al-padding-h80 {
  padding-left: 80px !important;
  padding-right: 80px !important;
  margin: 0 !important;
}

.al-padding-h20 {
  padding-left: 20px !important;
  padding-right: 20px !important;
  margin: 0 !important;
}

.al-padding-h16 {
  display: inline;
  padding-left: 16px !important;
  padding-right: 16px !important;
  margin: 0 !important;
}

.al-padding-v12 {
  padding-top: 12px !important;
  padding-bottom: 12px !important;
  margin: 0 !important;
}

.al-padding-v2 {
  padding-top: 2px !important;
  padding-bottom: 2px !important;
  margin: 0 !important;
}

.al-container-h670max {
  display: block;
  max-width: 670px;
}

.al-container-v64max {
  display: block !important;
  max-height: 64px !important;
}

.al-space-v40 {
  padding-top: 20px !important;
  padding-bottom: 20px !important;
}
</style>