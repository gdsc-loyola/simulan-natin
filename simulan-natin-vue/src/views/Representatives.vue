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
        <FilterButton/>
        <div class="al-space-h32"></div>
        <FilterButton/>
      </section>

      <section class="al-representatives-bottom">
          <RepresentativeCard/>
          <RepresentativeCard/>
          <RepresentativeCard/>
          <RepresentativeCard/>
          <RepresentativeCard/>
          <RepresentativeCard/>
          <RepresentativeCard/>
          <RepresentativeCard/>
      </section>
      
      
      <!-- <br><br><br>
      <h1>ALS PLAYGROUND BELOW</h1> -->

      <!-- <div class="dropdown al-inline-block al-padding-v12">
        <button type="button" class="btn al-filter-button dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Location Filter
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li v-for="district in districts" :key="district.id">
              <a class="dropdown-item" href="#">
                District {{ district.attributes.Number }}
              </a>
            </li>
            <li v-for="province in provinces" :key="province.id">
              <a class="dropdown-item" href="#">
                {{ province.attributes.Name }}
              </a>
            </li>
        </ul>
      </div> -->

      <!-- <div class="dropdown al-inline-block al-padding-v12">
        <button type="button" class="btn al-filter-button dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Advocacy Filter
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li v-for="advocacy in advocacies" :key="advocacy.id" @click="addAdvocacy(advocacy.attributes.Name)">
            <a class="dropdown-item" href="#">
              {{ advocacy.attributes.Name }}
            </a>
          </li>
        </ul>
      </div>
      <span v-for="activeAdvocacy in activeAdvocacies" :key="activeAdvocacy.id" class="badge rounded-pill bg-primary" @click="removeAdvocacy(activeAdvocacy)">{{ activeAdvocacy }}</span> -->

      <!-- <div class="dropdown al-inline-block al-padding-v12">
        <button type="button" class="btn al-filter-button dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Province Filter
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li v-for="province in provinces" :key="province.id" class="dropdown-item" :v-model="`${province}FilterEnabled`">
            {{ province.attributes.Name }}
          </li>
        </ul>
      </div> -->

      <!-- <div id="students">
          <select v-model="mychoice" multiple>
              <option v-for="province in provinces" :key="province.id" :value="`${province.attributes.Name}`">
                {{ province.attributes.Name }}
              </option>
          </select>
          <span v-for="item in mychoice" :key="item.id" class="badge rounded-pill bg-primary" @click="cleardata(item)">{{ item }}</span>
      </div> -->
      
      <!-- <div v-for="representative in representatives" :key="representative.id">
        <img :src="`http://localhost:1337${representative.attributes.Photo.data.attributes.url}`"/>
        <div>
          <h3 class="al-bold">
            {{ representative.attributes.Name }}
          </h3>
          <sub class="al-medium">
            {{ representative.attributes.Age }} <br>
            {{ representative.attributes.EducationalBackground }} <br>
          </sub>
        </div>
      </div> -->
    </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'
import FilterButton from '../components/FilterButton.vue'
import RepresentativeCard from '../components/RepresentativeCard.vue'

// import axios from "axios";

export default {
  name: 'App',
  components: {
    SearchBar,
    FilterButton,
    RepresentativeCard
  },
  // data() {
  //   return {
  //     representatives: [],
  //     provinces: [],
  //     districts: [],
  //     advocacies: [],

  //     activeAdvocacies : [
  //       { text: '' }
  //     ]
  //   };
  // },
  // async mounted() {
  //   const rep = await axios.get("http://localhost:1337/api/representatives?populate=*");
  //   const pro = await axios.get("http://localhost:1337/api/provinces?populate=*");
  //   const dis = await axios.get("http://localhost:1337/api/districts?populate=*");
  //   const adv = await axios.get("http://localhost:1337/api/advocacies?populate=*");

  //   this.representatives = rep.data.data;
  //   this.provinces = pro.data.data;
  //   this.districts = dis.data.data;
  //   this.advocacies = adv.data.data;
  // },
  // methods: {
  //   addAdvocacy(toAdd) {
  //     this.activeAdvocacies = this.activeAdvocacies.push({ text: toAdd })
  //   },
  //   removeAdvocacy(toRemove){
  //     this.activeAdvocacies = this.activeAdvocacies.filter((filter) => filter !== toRemove)
  //   },
  // }
}
</script>
