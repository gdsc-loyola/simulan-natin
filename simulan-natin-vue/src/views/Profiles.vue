<template>
    <div class="profiles-page">
        <section class="profiles-page-container-info d-flex flex-column">
            <div class="profiles-page-head">REPUBLIC OF THE PHILIPPINES  |  HOUSE OF REPRESENTATIVES 18TH  CONGRESS DISTRICT REPRESENTATIVES</div>
            <div class="d-flex align-items-center">
                <div class="profile-page-image-border rounded-circle">
                    <img :src="repData?.photo?.data?.attributes.url" class="profile-page-image rounded-circle" alt="...">
                </div>
                <div class="d-flex flex-column profiles-page-container-details">
                    <div class="profiles-page-name">{{ repData?.name }}</div>
                    <div class="profiles-page-location-party">{{ repData?.province?.data?.attributes.name }}, District {{ repData?.district?.data?.attributes.number }}</div>
                    <div class="profiles-page-location-party">{{ repData?.political_party }}</div>
                    <div class="d-flex">
                        <!-- Button trigger modal -->
                        <button type="button" class="profiles-page-more-information btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        MORE INFORMATION
                        </button>
                    </div>
                    <div class="d-flex">
                        <div class="profiles-page-advocacy-pill badge rounded-pill" :style="`background: ${repData?.advocacies?.data[0]?.attributes.bg_color}; color: ${repData?.advocacies?.data[0]?.attributes.text_color};`">{{ repData?.advocacies?.data[0]?.attributes.name }}</div>
                    </div>
                </div>
            </div>
            <div class="profiles-page-image-note">The following are <b>approved</b> laws under the representative’s top platform (at most 10):</div>
        </section>
        <section class="profiles-page-container-bills">
            <BillCard v-for="bill in bills" :key="bill.id" :billData="bill"/>
        </section>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="profiles-page-modal-head">EDUCATION</div>
                    <div class="profiles-page-modal-body-education" v-html="repData?.educational_background?.split('\n').join('<br/>')"/>
                    <div class="profiles-page-modal-head">COMMITTEE MEMBERSHIP</div>
                    <div class="profiles-page-modal-body-membership" v-html="repData?.committee_members?.split('\n').join('<br/>')"/>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import BillCard from '../components/BillCard.vue'

export default {
  name: 'App',
  components: {
    BillCard,
  },
  data() {
    return {
        repId: this.$route.params.id,
        repData: {},
        bills: []
    }
  },
  async mounted() {
    const rep = await axios.get(`https://simulan-natin-cms.herokuapp.com/api/representatives/${this.repId}?populate=*`)
    const bil = await axios.get(`https://simulan-natin-cms.herokuapp.com/api/representatives/${this.repId}?populate[bills][populate]=*`)
    
    this.repData = rep?.data?.data?.attributes
    this.bills = bil?.data?.data?.attributes?.bills?.data
  }
}
</script>

<style scoped>
/* Relative 1440 */
.profiles-page {
    background-image: url('../assets/ProfilesBG.png');
    /* background-attachment: fixed; */
    background-position-y: -6.6667vw; /*-96px*/
    background-repeat: no-repeat;
    max-width: 100%;
    background-size: 100%;
}

.profiles-page-container-info {
    padding-top: 2.7778vw !important; /*40px*/
    padding-bottom: 2.2222vw !important; /*32px*/
    margin-left: 8.3333vw !important; /*120px*/
    margin-right: 8.3333vw !important; /*120px*/
    width: 83.3333vw !important; /*1200px*/
}

.profiles-page-head {
    margin-left: 3.8889vw !important; /*56px*/
    margin-right: 3.8889vw !important; /*56px*/
    margin-bottom: 3.4028vw !important; /*49px*/
    width: 75.4861vw !important; /*1087px*/
    height: 5.5556vw !important; /*80px*/
    color: #333333;
    font-family: 'AvenirNext-Bold';
    font-weight: 700;
    font-size: 2.2222vw; /*32px*/
    line-height: 2.7778vw; /*40px*/

    text-align: center !important;
}

.profile-page-image-border {
    width: 17.2222vw !important; /*248px*/
    height: 17.2222vw !important; /*248px*/
    border: 0.2083vw solid #293C92; /*3px*/
    text-align: center;
}

.profile-page-image {
    width: 16.6667vw !important; /*240px*/
    height: 16.6667vw !important; /*240px*/

    border: 0.2vw solid #293C92; /*2px*/
    border-radius: 8.3333vw; /*120px*/
    object-fit: cover;
    object-position: 0 0;
}

.profiles-page-container-details {
    margin-left: 5vw !important; /*72px*/
}

.profiles-page-name {
    margin-bottom: 0.5556vw !important; /*8px*/
    color: #293C92;
    font-family: 'AvenirNext-Bold';
    font-weight: 700;
    font-size: 2.2222vw; /*32px*/
    line-height: 2.7778vw; /*40px*/
}

.profiles-page-location-party {
    margin-bottom: 0.5556vw !important; /*8px*/
    color: #333333;
    font-family: 'AvenirNext';
    font-weight: 700;
    font-size: 1.25vw !important; /*18px*/
    line-height: 1.5278vw !important; /*22px*/
}

.profiles-page-more-information {
    padding: 0.4861vw 0.9028vw !important; /*7px 13px*/
    margin-top: 0.5556vw !important; /*8px*/
    margin-bottom: 2.2222vw !important; /*32px*/
    width: 12.4vw !important; /*171px*/
    height: 2.1vw !important; /*30px*/
    background: #293C92;
    color: #FAFAFA;
    font-family: 'AvenirNext';
    font-weight: 500;
    font-size: 0.9722vw; /*14px*/
    line-height: 1.1111vw; /*16px*/

    border: 0.0694vw solid #293C92; /*1px*/
    box-sizing: border-box;
    border-radius: 0.2778vw; /*4px*/
}

.profiles-page-image-note {
    margin-top: 3.3333vw !important; /*48px*/
    color: #333333;
    font-family: 'AvenirNext';
    font-weight: 400;
    font-size: 1.1111vw; /*16px*/
    line-height: 1.25vw; /*18px*/
}

.profiles-page-advocacy-pill {
    display: inline-block;
    padding: 0.7292vw 1.3542vw !important; /*10.5px 19.5px*/
    margin-right: 1.1111vw; /*16px*/
    margin-bottom: 1.1111vw; /*16px*/
    font-family: 'AvenirNext-Bold';
    font-weight: 700;
    font-size: 1.6667vw; /*24px*/
    line-height: 2.2222vw; /*32px*/

    text-transform: uppercase;
    border-radius: 6.875vw; /*99px*/
    cursor: pointer !important;
}

.profiles-page-advocacy-add {
    padding: 0.6479vw !important; /*9.33px*/
    background: #342A92;
    color: #FAFAFA;
    font-family: 'AvenirNext';
    font-weight: 700;
    font-size: 1.6667vw; /*24px*/
    line-height: 1vw; /*14.4px*/

    cursor: pointer !important;
}

.profiles-page-law-count {
    padding: 0.3646vw 0.6771vw !important; /*5.25px 9.75px*/
    margin-left: 2.7778vw !important; /*40px*/
    margin-top: 2.2222vw !important; /*32px*/
    background: #293C92;
    color: #E0E0E0;
    font-family: 'AvenirNext-Bold';
    font-weight: 700;
    font-size: 1.25vw; /*18px*/
    line-height: 1.5278vw; /*22px*/

    border-radius: 6.875vw; /*99px*/
}

.profiles-page-container-bills {
    padding-bottom: 1.6667vw !important; /*24px*/
    text-align: center !important; 
}

/*modal is not relative to 1440*/
.profiles-page-modal-head {
    margin-bottom: 16px;
    color: #333333;
    font-family: 'AvenirNext-Bold';
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
}

.profiles-page-modal-body-education {
    margin-bottom: 24px;
    color: #333333;
    font-family: 'AvenirNext';
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
}

.profiles-page-modal-body-membership {
    margin-bottom: 24px;
    color: #333333;
    font-family: 'AvenirNext';
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
}
</style>