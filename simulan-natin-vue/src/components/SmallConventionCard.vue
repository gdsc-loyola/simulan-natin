<template>
    <div class="small-convention-card-component d-flex justify-content-center flex-column">
        <img :src="conData.attributes.poster.data?.attributes.url" alt="" class="small-convention-card-component-image">
        <div class="small-convention-card-component-head" :style="`color: ${conData.attributes.theme};`">{{ conData.attributes.name }}</div>
        <div class="small-convention-card-component-body">{{ conData.attributes.location }} Convention</div>
    </div>
</template>

<script>
export default {
  name: 'SmallConventionCard',
  props: ['conData']
}
</script>

<style scoped>
/* Relative 1440 */
.small-convention-card-component {
    display: inline-block !important;
    padding: 0 !important;
    margin: 0.8333vw !important; /*12px*/
    width: 26.6667vw !important; /*384px*/
    height: 27.3611vw !important; /*394px*/
    background: #FAFAFA;

    border-radius: 0.5556vw ; /*8px*/
    filter: drop-shadow(0 0.2778vw 0.6944vw rgba(0, 0, 0, 0.25)); /*0px 4px 10px*/
    cursor: pointer;
}

.small-convention-card-component:hover {
    filter: drop-shadow(0 1.1111vw 1.3889vw rgba(0, 0, 0, 0.25)); /*0px 16px 20px*/
}

.small-convention-card-component-image {
    width: 26.6667vw !important; /*384px*/
    height: 20vw !important; /*288px*/

    border-radius: 0.5556vw 0.5556vw 0 0; /*8px*/
    object-fit: cover;
    object-position: 0 0;
}

.small-convention-card-component-head {
    margin-top: 1.1111vw !important; /*16px*/
    font-family: 'CoolBritannia';
    font-weight: 400;
    font-size: 2.7778vw !important; /*40px*/
    line-height: 3.3333vw !important; /*48px*/
}

.small-convention-card-component-body {
    margin-top: 0.5556vw !important; /*8px*/
    color: #333333;
    font-family: 'AvenirNext';
    font-weight: 700;
    font-size: 1.1111vw; /*16px*/
    line-height: 1.25vw; /*18px*/
}
</style>