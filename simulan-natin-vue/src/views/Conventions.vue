<template>
    <div>
        <section class="conventions-page-top">
            <div class="conventions-page-top-head">Conventions</div>
            <div class="conventions-page-top-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare sagittis amet, sed sed pellentesque a ante.</div>
        </section>
        <section class="conventions-page-container-cons">
            <ConventionCard v-for="convention in conventions" :key="convention.id" :conData="convention" @click="goToConvention()"/>
        </section>
    </div>
</template>

<script>
import ConventionCard from '../components/ConventionCard.vue'

import axios from "axios";

export default {
  name: 'App',
  components: {
    ConventionCard,
  },
  data() {
    return {
      conventions: [],
    };
  },
  async mounted() {
    const rep = await axios.get("https://simulan-natin-cms.herokuapp.com/api/conventions?populate=*");

    this.conventions = rep.data.data;
  },
  methods: {
    goToConvention() {
      this.$router.push('/convention');
    },
  }
}
</script>

<style scoped>
/* Relative 1440 */
.conventions-page-top {
    display: flex !important;
    width: 100% !important; /*1440px*/
    height: 36.1111vw !important; /*520px */   
    /* background: #293C92; */

    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-image: url('../assets/ConventionsBG.png');
    background-repeat: no-repeat;
    max-width: 100%;
    background-size: 100%;
}

.conventions-page-top-head {
    margin-bottom: 2.7778vw !important; /*40px*/ 
    width: 22.5vw !important; /*324px*/
    height: 6.6667vw !important; /*96px*/
    color: #FAFAFA;
    font-family: 'CoolBritannia';
    font-weight: 400;
    font-size: 5.5556vw; /*80px*/
    line-height: 120%;
}

.conventions-page-top-body {
    width: 48.6806vw !important; /*701px*/
    height: 4.4444vw !important; /*64px*/
    color: #FAFAFA;
    font-family: 'AvenirNext';
    font-weight: 500;
    font-size: 1.6667vw; /*24px*/
    line-height: 2.2222vw; /*32px*/

    text-align: center;
}

.conventions-page-container-cons {
    padding: 4.7222vw 0 !important; /*68px 0px*/

    text-align: center !important;
}
</style>