<template>
<nav class="al-navbar navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid al-container-fluid">
    <a class="navbar-brand" @click="goToHome()">
      <img src="../assets/SimulanNatin2022HorizontalLogosBlue.png" alt="SimulanNatin2022BLLogo" width="193" height="43">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse al-bold" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item pe-1">
            <button type="button" @click="goToRepresentatives()" class="btn btn-light">
                <a class="nav-link al-body al-font-primary-blue">Representatives</a>
            </button>
        </li>
        <li class="nav-item pe-1">
            <button type="button" @click="goToConventions()" class="btn btn-light">
                <a class="nav-link al-body al-font-primary-blue">Conventions</a>
            </button>
        </li>
        <li class="nav-item pe-1">
            <button type="button" @click="goToAbout()" class="btn btn-light">
                <a class="nav-link al-body al-font-primary-blue">About</a>
            </button>
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
    },
    goToRepresentatives() {
        this.$router.push('/representatives');
    },
    goToConventions() {
        this.$router.push('/conventions');
    },
    goToAbout() {
      this.$router.push('/about');
    },
  }
}
</script>