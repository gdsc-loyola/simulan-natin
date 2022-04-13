<template>
    <div class="convention-page d-flex flex-column align-items-center">
        <div class="convention-page-head" :style="`color: ${conData.theme};`">{{ conData.name }}</div>
        <div class="convention-page-description" :style="`color: ${conData.theme};`">{{ conData.description }}</div>
        <!-- <iframe :src="`https://www.facebook.com/plugins/video.php?height=560&href=https%3A%2F%2Fwww.facebook.com%2F${conData.recording_url?.split('/')[3]}%2Fvideos%2F${conData.recording_url?.split('/')[5]}%2F&show_text=false&width=996&t=0`" style="border:none;overflow:hidden;width:69.1667vw;height:38.8889vw;" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> -->
        
        <div v-html="conData.recording_url"></div>
        <div class="convention-page-location-date">{{ conData.location }} Convention | {{ conData.date }}</div>
        <div class="convention-page-head" :style="`color: ${conData.theme};`">Meet the Speakers</div>
        <div class="convention-page-container-speaker">
            <img :src="conData.speaker?.data[0].attributes.url" alt="" class="convention-page-speaker-image">
            <img :src="conData.speaker?.data[1].attributes.url" alt="" class="convention-page-speaker-image">
        </div>
        <img :src="conData.poster?.data.attributes.url" alt="" class="convention-page-poster">
        <div class="convention-page-head" :style="`color: ${conData.theme};`">More Conventions</div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  components: {

  },
  data() {
    return {
        conId: this.$route.params.id,
        conData: {}
    }
  },
  async mounted() {
    this.conData = await axios.get(`https://simulan-natin-cms.herokuapp.com/api/conventions/${this.conId}?populate=*`)
    this.conData = this.conData?.data?.data?.attributes
  }
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

.convention-page-poster {
    padding: 2.7778vw 0 !important; /*40px 0*/
    width: 50.6944vw !important; /*730px*/
    height: 60.8333vw !important; /*876px*/
}
</style>