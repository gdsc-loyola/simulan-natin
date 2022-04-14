<template>
    <div>
        <section class="d-flex align-items-center justify-content-between">
            <div class="home-page-head">Simulan natin ang <span style="color:#FF0016;">Mabuting Pamamahala</span> para sa <span style="color:#FF0016;">Bayan!</span></div>
            <HomeCarousel/>
        </section>
        <section class="home-page-laws">
            <div class="home-page-body">The 52 district representatives on this website authored a total of 6,687 laws just for <b>YOU.</b></div>
            <img src="../assets/HomePieChart.png" alt="" class="home-page-laws-image">
        </section>
        <section class="home-page-map">
            <div class="home-page-body">They’re making a difference in <b>YOUR</b> neighborhood.</div>
            <img src="../assets/HomeWordCloud.png" alt="" class="home-page-map-image">
        </section>
        <section class="home-page-conventions">
            <div class="home-page-body">Take <b>YOUR</b> first step towards enabling good governance through our virtual conventions!</div>
            <div class="home-page-conventions-container">
                <SmallConventionCard v-for="convention in conventions" :key="convention.id" :conData="convention" @click="goToConvention(convention.id)"/>
            </div>
        </section>
    </div>
</template>

<script>
import HomeCarousel from '../components/HomeCarousel.vue'
import SmallConventionCard from '../components/SmallConventionCard.vue'

import axios from "axios";

export default {
  name: 'App',
  components: {
    HomeCarousel,
    SmallConventionCard
  },
  data() {
    return {
      conventions: [],
    };
  },
  async mounted() {
    const con = await axios.get("https://simulan-natin-cms.herokuapp.com/api/conventions?populate=*")

    this.conventions = con.data.data
  },
  methods: {
    goToConvention(conId) {
      this.$router.push(`/convention/${conId}`);
    },
  }
}
</script>

<style scoped>
/* Relative 1440 */
.home-page-head {
    margin-left: 11.1111vw !important; /*160px*/
    width: 35.2778vw !important; /*508px*/
    color: #293C92;
    font-family: 'CoolBritannia';
    font-weight: 400;
    font-size: 4.1667vw; /*60px*/
    line-height: 4.1667vw; /*60px*/

    text-align: center;
}

.home-page-body {
    display: inline-block !important;
    padding: 1.1111vw !important; /*16px*/
    height: 4.4444vw !important; /*64px*/
    background: #293C92;
    color: #FAFAFA;
    font-family: 'AvenirNext';
    font-weight: 500;
    font-size: 1.6667vw ; /*24px*/
    line-height: 2.2222vw; /*32px*/

    border-radius: 0.5556vw; /*8px*/
}

.home-page-laws {
    padding-top: 7.9861vw !important; /*115px*/

    text-align: center !important;
}

.home-page-laws-image {
    margin-top: 5.5556vw !important; /*80px*/
    width: 69.1667vw !important; /*996px*/
    height: 36.8333vw !important; /*516px*/
}

.home-page-map {
    padding-top: 6.25vw !important; /*90px*/
    height: 55.5556vw !important; /*800px*/

    text-align: center !important;
}

.home-page-map-image {
    margin-top: 5.5556vw !important; /*80px*/
    width: 69.1667vw !important; /*996px*/
    height: 28.9583vw !important; /*417px*/
}

.home-page-conventions {
    padding-top: 4.4444vw !important; /*64px*/
    padding-bottom: 2.7778vw !important; /*40px*/
    height: 79.1667vw !important; /*1140px*/

    text-align: center !important;
}

.home-page-conventions-container {
    display: inline-block !important;
    padding: 4.7222vw 0 !important; /*68px*/
    width: 56.9444vw !important; /*820px*/
}
</style>