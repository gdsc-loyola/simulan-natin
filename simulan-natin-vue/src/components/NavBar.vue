<template>
<nav class="nav-bar-component navbar sticky-top navbar-expand-lg navbar-light bg-light">
  <div class="nav-bar-component-container-items container-fluid">
    <a class="navbar-brand" @click="goToHome()">
      <img src="../assets/SimulanNatin2022HorizontalLogosBlue.png" alt="SimulanNatin2022BLLogo" width="193" height="43">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-bar-component-item nav-item" @click="goToRepresentatives()">
          <a class="nav-bar-component-item-color nav-link">Representatives</a>
        </li>
        <li class="nav-bar-component-item nav-item" @click="goToConventions()">
          <a class="nav-bar-component-item-color nav-link">Conventions</a>
        </li>
        <li class="nav-bar-component-item nav-item" @click="goToAbout()">
          <a class="nav-bar-component-item-color nav-link">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    goToHome() {
      this.$router.push('/');
      window.scrollTo(0, 0);
    },
    goToRepresentatives() {
        this.$router.push('/representatives');
        window.scrollTo(0, 0);
    },
    goToConventions() {
        this.$router.push('/conventions');
        window.scrollTo(0, 0);
    },
    goToAbout() {
      this.$router.push('/about');
      window.scrollTo(0, 0);
    },
  }
}
</script>

<style scoped>
/* Relative 1440 */
.navbar-brand {
  cursor: pointer !important; /*add style to bs5 class*/
}

.nav-bar-component {
  padding-top: 1.4931vw !important; /*21.5px*/
  padding-bottom: 1.4931vw !important; /*21.5px*/
  padding-left: 5.5556vw !important; /*80px*/
  padding-right: 5.5556vw !important; /*80px*/
  background: #FAFAFA;

  box-shadow: 0 0.2778vw 0.5556vw rgba(0, 0, 0, 0.1); /*0px 4px 8px*/
}

.nav-bar-component-container-items {
  padding: 0 !important;
}

.nav-bar-component-item {
  padding-left: 5.5556vw !important; /*80px*/
  color: #293C92 !important;
  font-family: 'AvenirNext-Bold';
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
}

.nav-bar-component-item-color {
  color: #293C92 !important;
}

.nav-bar-component-item-color:hover {
  color: #101E5F !important;
}
</style>