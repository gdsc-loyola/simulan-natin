<template>
  <div class="representative-card-component">
    <div class="representative-card-component-card d-flex justify-content-center align-items-center">
      <img :src="repData.attributes.photo.data?.attributes.url" class="representative-card-component-image rounded-circle" alt="...">
      <div class="representative-card-component-container-details d-flex flex-column">
        <div class="d-flex align-items-center">
          <div class="representative-card-component-head">{{ repData.attributes.name.split(" ")[0] }} {{ repData.attributes.name.split(" ")[1]}}</div>
          <div class="representative-card-component-location">{{ repData.attributes.province.data?.attributes.name }}, District {{ repData.attributes.district.data?.attributes.number }}</div>
        </div>
        <div>
          <span class="badge rounded-pill representative-card-component-pill" :style="`background: ${repData.attributes.advocacies.data[0]?.attributes.bg_color}; color: ${repData.attributes.advocacies.data[0]?.attributes.text_color};`">{{ repData.attributes.advocacies.data[0]?.attributes.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RepresentativeCard',
  props: ['repData']
}
</script>

<style scoped>
/* Relative 1440 */
.representative-card-component {
  display: inline-block !important;
  text-align: left !important;
}

.representative-card-component-card {
  margin: 0.8333vw !important; /*12px*/
  width: 40.8333vw !important; /*588px*/
  height: 10vw !important; /*144px*/
  border: 2px solid #293C92;
  box-sizing: border-box;
  border-radius: 0.5556vw; /*8px*/
  cursor: pointer !important;
}

.representative-card-component-image {
  width: 5.3764vw !important; /*77.42px*/
  height: 5.3764vw !important; /*77.42px*/

  border: 2px solid #293C92;
  object-fit: cover;
  object-position: 0 0;
}

.representative-card-component-container-details {
  margin-left: 1.1111vw !important; /*16px*/
}

.representative-card-component-head {
  display: inline-block !important;
  width: 22.3542vw !important; /*321.9px*/
  color: #333333;
  font-family: 'AvenirNext-Bold';
  font-weight: 700;
  font-size: 1.6667vw; /*24px*/
  line-height: 2.2222vw; /*32px*/
}

.representative-card-component-location {
  width: 5.9028vw !important; /*85px*/
  height: 2.5vw !important; /*36px*/
  color: #333333;
  font-family: 'AvenirNext';
  font-style: normal;
  font-weight: 700;
  font-size: 1.1111vw; /*16px*/
  line-height: 1.25vw; /*18px*/
}

.representative-card-component-pill {
  padding-top: 0.4375vw !important; /*6.3px*/
  padding-bottom: 0.4375vw !important; /*6.3px*/
  padding-left: 0.8125vw !important; /*11.7px*/
  padding-right: 0.8125vw !important; /*11.7px*/
  margin-right: 0.5556vw !important; /*8px*/
  height: 2.0139vw !important; /*29px*/
  font-family: "AvenirNext-Bold";
  font-size: 0.8333vw; /*12px*/
  line-height: 1.1111vw; /*16px*/

  text-transform: uppercase;
  cursor: pointer;
}
</style>