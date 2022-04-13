<template>
    <div class="convention-page d-flex flex-column align-items-center">
        <div class="convention-page-head" :style="`color: ${conData.theme};`">{{ conData.name }}</div>
        <div class="convention-page-description" :style="`color: ${conData.theme};`">{{ conData.description }}</div>
        <iframe :src="`https://www.facebook.com/plugins/video.php?height=560&href=https%3A%2F%2Fwww.facebook.com%2F${conData.recording_url?.split('/')[3]}%2Fvideos%2F${conData.recording_url?.split('/')[5]}%2F&show_text=false&width=996&t=0`" style="border:none;overflow:hidden;width:69.1667vw;height:38.8889vw;" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        <div class="convention-page-location-date">{{ conData.location }} Convention | {{ conData.date }}</div>
        <div class="convention-page-head" :style="`color: ${conData.theme};`">Meet the Speakers</div>
        <div class="convention-page-container-speaker">
            <img :src="conData.speaker?.data[0].attributes.url" alt="" class="convention-page-speaker-image">
            <img :src="conData.speaker?.data[1].attributes.url" alt="" class="convention-page-speaker-image">
        </div>
        <div class="convention-page-container-poster">
            <img :src="conData.poster?.data.attributes.url" alt="" class="convention-page-poster">
            <div class="convention-page-container-article">
                <div class="convention-page-article" :style="`color: ${conData.theme};`">Read more about the Convention:</div>
                <a class="convention-page-article-button btn" :href="`${conData.article_url}`" role="button">Go to Article</a>
            </div>
        </div>
        <div class="convention-page-head" :style="`color: ${conData.theme};`">More Conventions</div>
        <div class="convention-page-container-cons">
            <SmallConventionCard v-for="convention in conventions" :key="convention.id" :conData="convention" @click="goToConvention(convention.id)"/>
        </div>
    </div>
</template>

<script>
import SmallConventionCard from '../components/SmallConventionCard.vue'

import axios from 'axios'

export default {
  name: 'App',
  components: {
      SmallConventionCard,
  },
  data() {
    return {
        conId: this.$route.params.id,
        conData: {},
        conventions: [],
    }
  },
  async mounted() {
    this.conData = await axios.get(`https://simulan-natin-cms.herokuapp.com/api/conventions/${this.conId}?populate=*`)
    this.conData = this.conData?.data?.data?.attributes

    const con = await axios.get("https://simulan-natin-cms.herokuapp.com/api/conventions?populate=*")
    this.conventions = con.data.data

    // const con = await axios.get("https://simulan-natin-cms.herokuapp.com/api/conventions?populate=*");
    // for (let i = 0; i < con.data.data.length; i++) {
    //   if (this.$options.filters.others(con.data.data[i]) !== undefined) {
    //     this.conventions.push(this.$options.filters.location(con.data.data[i]))
    //   }
    // }
  },
  methods: {
    goToConvention(conId) {
      this.$router.push(`/convention/${conId}`);
    },
  }
//   filters: {
//     others: (val) => {
//       if (val.attributes.id != this.conId) {
//         return val
//       }
//     }
//   }
}
</script>

<style scoped>
/* Relative 1440 */
.convention-page {
    padding-top: 3.8889vw !important; /*56px*/
    padding-bottom: 2.9167vw !important; /*42px*/
}

.convention-page-head {
    font-family: 'CoolBritannia';
    font-size: 4.4444vw; /*64px*/
    line-height: 5.3472vw; /*77px*/
}

.convention-page-description {
    margin-top: 0.5556vw !important; /*8px*/
    margin-bottom: 3.3333vw !important; /*48px*/
    font-family: 'AvenirNext';
    font-weight: 700;
    font-size: 1.6667vw; /*24px*/
    line-height: 2.2222vw; /*32px*/
}

.convention-page-location-date {
    margin-top: 1.6667vw !important; /*24px*/
    margin-bottom: 2.7778vw !important; /*40px*/
    color: #333333;
    font-family: 'AvenirNext';
    font-weight: 700;
    font-size: 1.6667vw; /*24px*/
    line-height: 2.2222vw; /*32px*/
}

.convention-page-container-speaker {
    padding: 2.2222vw 0 !important; /*32px 0*/
    text-align: center !important;
}

.convention-page-speaker-image {
    margin: 0 0.8333vw !important; /*0 12px*/
    display: inline-block !important;
    width: 40.8333vw !important; /*588px*/
    height: 40.8333vw !important; /*588px*/
}

.convention-page-container-poster {
    padding-top: 3.3333vw !important; /*48px*/
    padding-bottom: 5.5556vw !important; /*80px*/

    align-content: center !important;
}

.convention-page-poster {
    width: 33.75vw !important; /*486px*/
    height: 40.5556vw !important; /*584px*/
}

.convention-page-container-article {
    display: inline-block !important;
    padding-left: 8.75vw !important; /*126px*/
}

.convention-page-article {
    width: 31.25vw !important; /*450px*/ 
    font-family: 'CoolBritannia';
    font-weight: 400;
    font-size: 4.4444vw; /*64px*/
    line-height: 5.3472vw; /*77px*/
}

.convention-page-article-button {
    margin-top: 2.7778vw !important; /*40px*/
    padding: 1.1111vw !important; /*16px*/ 
    width: 19.0972vw !important; /*275px*/
    background: #293C92;
    color: #FAFAFA;
    font-family: 'AvenirNext-Bold';
    font-weight: 700;
    font-size: 2.2222vw; /*32px*/
    line-height: 2.7778vw; /*40px*/

    border-radius: 0.5556vw; /*8px*/
}

.convention-page-container-cons {
    text-align: center !important;
}
</style>