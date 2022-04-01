<template>
    <div>
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

        <div class="al-representative-card" v-for="representative in representatives" :key="representative.id">
          <div class="al-representative-card-content">
            <img :src="`http://localhost:1337${representative.attributes.photo.data.attributes.url}`" class="rounded-circle al-representative-card-content-photo" alt="..." width="77" height="77">
            <h3 class="al-representative-card-content-name"> {{ representative.attributes.name }} </h3>
            <sub class="al-representative-card-content-location">{{ representative.attributes.province.data.attributes.name }}, District {{ representative.attributes.district.data.attributes.number }}</sub>
            <span class="badge rounded-pill al-bg-primary-blue al-pill-badge">Advocacy1</span>
            <span class="badge rounded-pill al-bg-primary-blue al-pill-badge">Advocacy2</span>
            <span class="badge rounded-pill al-bg-primary-blue al-pill-badge">Advocacy3</span>
          </div>
        </div>

        <RepresentativeCard/>
      </section>
    </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'
import FilterButton from '../components/FilterButton.vue'
import RepresentativeCard from '../components/RepresentativeCard.vue'

import axios from "axios";

export default {
  name: 'App',
  components: {
    SearchBar,
    FilterButton,
    RepresentativeCard
  },
  data() {
    return {
      representatives: [],
      provinces: [],

      locFilter: [],
    };
  },
  async mounted() {
    const rep = await axios.get("http://localhost:1337/api/representatives?populate=*");
    const pro = await axios.get("http://localhost:1337/api/provinces?populate=*");

    this.representatives = rep.data.data;
    this.provinces = pro.data.data;
  },
  methods: {
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
