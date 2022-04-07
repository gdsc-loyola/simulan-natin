<template>
    <div class="representatives-page">
      <section>
        <div class="representatives-page-head">Representative Database</div>
        <div class="representatives-page-body">With information on 52 candidates across multiple regions in the country, find a representative that aligns with your advocacy* as we work towards a better future.</div>
        <div class="representatives-page-note">*The data that the team has collated is the main basis for the representatives’ respective platforms, primarily basing from the laws they have enacted.</div>
      </section>
      <section></section>
    </div>
    
    <!-- <div>
      <section class="al-representatives-top">
        <h1 class="al-bold al-padding-v12">Representative Database</h1>
        <h3 class="al-medium al-container-h670max al-padding-v12">
            With information on 52 candidates across multiple regions in
            the country, find a representative that aligns with your
            advocacy* as we work towards a better future.
        </h3>
        <sub class="al-medium al-italic al-container-h670max al-padding-v12">
            *The data that the team has collated is the main basis for 
            the representatives’ respective platforms, primarily basing 
            from the laws they have enacted.
        </sub>
        <div class="al-space-v40"></div>
        <SearchBar/>
        <div class="dropdown al-inline-block al-padding-v12">
          <button type="button" class="btn al-filter-button dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Location Filter
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li class="dropdown-item" v-for="province in provinces" :key="province.id" @click="addLocFilter(province)">
              {{ province.attributes.name }}
            </li>
          </ul>
        </div>
        <div class="al-padding-h16">
          <span class="badge rounded-pill al-bg-primary-blue al-pill-badge" v-for="loc in locFilter" :key="loc.id" @click="removeLocFilter(loc)">{{ loc.attributes.name }}</span>
        </div>
        <FilterButton/>
      </section>

      <section class="al-representatives-bottom">

        <div class="al-representative-card" v-for="representative in representatives" :key="representative.id" @click="goToProfiles()">
          <div class="al-representative-card-content">
            <img :src="`https://simulan-natin-cms.herokuapp.com${representative.attributes.photo.data.attributes.url}`" class="rounded-circle al-representative-card-content-photo" alt="..." width="77" height="77">
            <h3 class="al-representative-card-content-name"> {{ representative.attributes.name_short }} </h3>
            <sub class="al-representative-card-content-location">{{ representative.attributes.province.data.attributes.name }}, District {{ representative.attributes.district.data.attributes.number }}</sub>
            <span class="badge rounded-pill al-bg-primary-blue al-pill-badge">Advocacy1</span>
            <span class="badge rounded-pill al-bg-primary-blue al-pill-badge">Advocacy2</span>
            <span class="badge rounded-pill al-bg-primary-blue al-pill-badge">Advocacy3</span>
          </div>
        </div>

        <RepresentativeCard/>
      </section>
    </div> -->
</template>

<script>
// import SearchBar from '../components/SearchBar.vue'
// import FilterButton from '../components/FilterButton.vue'
// import RepresentativeCard from '../components/RepresentativeCard.vue'

import axios from "axios";

export default {
  name: 'App',
  components: {
    // SearchBar,
    // FilterButton,
    // RepresentativeCard
  },
  data() {
    return {
      representatives: [],
      provinces: [],

      locFilter: [],
    };
  },
  async mounted() {
    const rep = await axios.get("https://simulan-natin-cms.herokuapp.com/api/representatives?populate=*");
    const pro = await axios.get("https://simulan-natin-cms.herokuapp.com/api/provinces?populate=*");

    this.representatives = rep.data.data;
    this.provinces = pro.data.data;
  },
  methods: {
    goToProfiles() {
      this.$router.push('/profiles');
    },
    addLocFilter(toAdd) {
      if (!this.locFilter.includes(toAdd)) {
        this.locFilter.push(toAdd)
      }
      this.provinces = this.provinces.filter((province) => province !== toAdd)
    },
    removeLocFilter(toRemove){
      if (!this.provinces.includes(toRemove)) {
        this.provinces.push(toRemove)
      }
      this.locFilter = this.locFilter.filter((loc) => loc !== toRemove)
    },
  }
}
</script>

<style scoped>
/* Relative 1440 */
.representatives-page {
  padding-top: 7.5vw !important; /*108px*/
  padding-bottom: 4.4444vw !important; /*64px*/
  padding-left: 8.3333vw !important; /*120px*/
  padding-right: 8.3333vw !important; /*120px*/

  background-image: url('../assets/RepresentativesBG.png');
  background-repeat: no-repeat;
  max-width: 100%;
  /* background-attachment: fixed;
  background-position-y: 90px; */
  background-position-y: -9px;
  background-size: 100%;
}

.representatives-page-head {
  padding-bottom: 1.6667vw !important; /*24px*/
  color: #000000;
  font-family: 'AvenirNext-Bold';
  font-weight: 700;
  font-size: 2.7778vw; /*40px*/
  line-height: 3.3333vw; /*48px*/
}

.representatives-page-body {
  padding-bottom: 1.6667vw !important; /*24px*/
  width: 46.4583vw !important; /*669px*/
  font-family: "AvenirNext";
  color: #000000;
  font-weight: 700;
  font-size: 1.6667vw; /*24px*/
  line-height: 2.2222vw; /*32px*/
}

.representatives-page-note {
  width: 47.9167vw !important; /*690px*/
  color: #000000; 
  font-family: 'AvenirNext-Italic';
  font-weight: 700; 
  font-size: 1.1111vw; /*16px*/
  line-height: 1.25vw; /*18px*/
}
</style>