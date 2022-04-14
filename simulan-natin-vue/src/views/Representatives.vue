<template>
  <div>
    <section class="representatives-page">
      <div class="representatives-page-head">Representative Database</div>
      <div class="representatives-page-body">With information on 52 candidates across multiple regions in the country, find a representative that aligns with your advocacy* as we work towards a better future.</div>
      <div class="representatives-page-note">*The data that the team has collated is the main basis for the representatives’ respective platforms, primarily basing from the laws they have enacted.</div>
      <div class="representatives-page-container-filter">

        <!-- location filter -->
        <div class="filter-button-component-main dropdown">
          <button type="button" class="btn dropdown-toggle filter-button-component" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Location Filter
          </button>
          <ul class="dropdown-menu filter-button-component-dropdown" aria-labelledby="dropdownMenuButton1">
              <li v-for="province in provinces" :key="province.id" @click="addLocFilter(province)" class="dropdown-item filter-button-component-dropdown-item">{{ province.attributes.name }}</li>
          </ul>
          <span class="badge rounded-pill filter-button-component-loc-adv-filter" v-for="loc in locFilter" :key="loc.id" @click="removeLocFilter(loc)">{{ loc.attributes.name }} <button class="btn-close" style="width:0.6944vw;height:0.6944vw;padding:0;margin-left:0.5vw;"></button></span>
        </div>
        <!-- advocacy filter -->
        <div class="filter-button-component-main dropdown">
          <button type="button" class="btn dropdown-toggle filter-button-component" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Advocacy Filter
          </button>
          <ul class="dropdown-menu filter-button-component-dropdown" aria-labelledby="dropdownMenuButton1">
              <li v-for="advocacy in advocacies" :key="advocacy.id" @click="addAdvFilter(advocacy)" class="dropdown-item filter-button-component-dropdown-item">{{ advocacy.attributes.name }}</li>
          </ul>
          <span class="badge rounded-pill filter-button-component-loc-adv-filter" :style="`background: ${adv.attributes.bg_color}; color: ${adv.attributes.text_color};`" v-for="adv in advFilter" :key="adv.id" @click="removeAdvFilter(adv)">{{ adv.attributes.name }}<button class="btn-close" style="width:0.6944vw;height:0.6944vw;padding:0;margin-left:0.5vw;"></button></span>
        </div>
      </div>
    </section>
    <section class="representatives-page-cards">
      <RepresentativeCard v-for="representative in representatives" :key="representative.id" :repData="representative" @click="goToProfiles(representative.id)"/>
    </section>
  </div>
</template>

<script>
import RepresentativeCard from '../components/RepresentativeCard.vue'

import axios from "axios";

export default {
  name: 'App',
  components: {
    RepresentativeCard
  },
  data() {
    return {
      representatives: [],
      provinces: [],
      advocacies: [],
      locFilter: [],
      advFilter: [],
    };
  },
  async mounted() {
    const rep = await axios.get("https://simulan-natin-cms.herokuapp.com/api/representatives?populate=*");
    const pro = await axios.get("https://simulan-natin-cms.herokuapp.com/api/provinces?name");
    const adv = await axios.get("https://simulan-natin-cms.herokuapp.com/api/advocacies?name");
    
    for (let i = 0; i < rep.data.data.length; i++) {
      if (this.$options.filters.location(rep.data.data[i]) !== undefined) {
        this.representatives.push(this.$options.filters.location(rep.data.data[i]))
      }
    }
    this.provinces = pro.data.data;
    this.advocacies = adv.data.data;
  },
  methods: {
    goToProfiles(repId) {
      this.$router.push(`/profiles/${repId}`);
      window.scrollTo(0, 0);
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
    addAdvFilter(toAdd) {
      if (!this.advFilter.includes(toAdd)) {
        this.advFilter.push(toAdd)
      }
      this.advocacies = this.advocacies.filter((advocacy) => advocacy !== toAdd)
    },
    removeAdvFilter(toRemove){
      if (!this.advocacies.includes(toRemove)) {
        this.advocacies.push(toRemove)
      }
      this.advFilter = this.advFilter.filter((adv) => adv !== toRemove)
    },
  },
  filters: {
    location: (val) => {
      // if (val.attributes.province.data.attributes.name == 'Cavite') {
        return val
      // }
    }
  }
}
</script>

<style scoped>
/* Relative 1440 */
.representatives-page {
  padding-top: 7.5vw !important; /*108px*/
  padding-bottom: 3.6111vw !important; /*52px*/
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
  padding-bottom: 4.4444vw !important; /*64px*/
  width: 47.9167vw !important; /*690px*/
  color: #000000; 
  font-family: 'AvenirNext-Italic';
  font-weight: 700; 
  font-size: 1.1111vw; /*16px*/
  line-height: 1.25vw; /*18px*/
}

.representatives-page-container-filter {
  padding-top: 1.6667vw !important; /*24px*/
}

.representatives-page-cards {
  padding-bottom: 3.6111vw !important; /*52px*/
  text-align: center !important;
}

/*Filter Button Component*/
.filter-button-component {
  padding-top: 0.4861vw !important; /*7px*/
  padding-bottom: 0.4861vw !important; /*7px*/
  padding-left: 0.9027vw !important; /*13px*/
  padding-right: 0.9027vw !important; /*13px*/
  margin-right: 1.9444vw !important; /*28px*/
  height: 2.5vw !important; /*36px*/
  background-color: #293C92 !important;
  color: #FFFFFF !important;
  font-family: "AvenirNext-Bold";
  font-size: 1.25vw !important;  /*18px*/
  line-height: 1.5278vw !important; /*22px*/
}

.filter-button-component-main {
  display: inline-block !important;
  margin-bottom: 0.2778vw !important; /*4px*/
  margin-right: 2.2222vw !important; /*32px*/ 
}

.filter-button-component-dropdown-item {
  padding-top: 0.2778vw !important; /*4px*/
  padding-bottom: 0.2778vw !important; /*4px*/
  padding-left: 1.1111vw !important; /*16px*/
  padding-right: 1.1111vw !important; /*16px*/
  font-family: "AvenirNext";
  font-size: 1.25vw !important;  /*18px*/
  line-height: 1.5278vw !important; /*22px*/
}

.filter-button-component-dropdown {
  padding-top: 0.5556vw !important; /*8px*/
  padding-bottom: 0.5556vw !important; /*8px*/
}

.filter-button-component-loc-adv-filter {
  padding: 0.4375vw 0.8125vw !important; /*6.3px 11.7px*/
  margin: 0.2778vw !important; /*4px*/
  background: #F1F1EF;
  color: #787774;
  font-family: 'AvenirNext-Bold';
  font-weight: 700;
  font-size: 0.8333vw; /*12px*/
  line-height: 1.1111vw; /*16px*/

  border-radius: 6.875vw; /*99px*/
  text-transform: uppercase;
  cursor: pointer;
}
</style>