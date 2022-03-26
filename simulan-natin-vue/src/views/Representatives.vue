<template>
    <div class="al-representatives-bg al-padding-h120 al-padding-v96">
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
            <li><a class="dropdown-item" href="#">Sa puso mo</a></li>
            <li><a class="dropdown-item" href="#">Sa isip mo</a></li>
            <li><a class="dropdown-item" href="#">Sa bahay mo</a></li>
          </ul>
        </div>
        <div class="al-space-h32"></div>
        <div class="dropdown al-inline-block al-padding-v12">
          <button type="button" class="btn al-filter-button dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Advocacy Filter
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">lorem ipsum</a></li>
            <li><a class="dropdown-item" href="#">dolor sit</a></li>
            <li><a class="dropdown-item" href="#">amet</a></li>
          </ul>
        </div>
    </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'

export default {
  name: 'App',
  components: {
    SearchBar,
  },
}
</script>
