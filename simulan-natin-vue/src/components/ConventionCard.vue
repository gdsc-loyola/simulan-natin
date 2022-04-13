<template>
    <div class="convention-card-component d-flex justify-content-center flex-column">
        <img :src="conData.attributes.poster.data?.attributes.url" alt="" class="convention-card-component-image">
        <div class="convention-card-component-details d-flex flex-column">
            <div class="d-flex align-items-center justify-content-between">
                <div>
                    <div class="convention-card-component-head" :style="`color: ${conData.attributes.theme};`">{{ conData.attributes.name }}</div>
                    <div class="convention-card-component-body">{{ conData.attributes.location }} Convention</div>
                </div>
                <div class="convention-card-component-date">{{ conData.attributes.date }}</div>
            </div>
            <div class="convention-card-component-body">{{ conData.attributes.description }}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ConventionCard',
  props: ['conData']
}
</script>

<style scoped>
/* Relative 1440 */
.convention-card-component {
    display: inline-block !important;
    padding: 0 !important;
    margin: 0.8333vw !important; /*12px*/
    width: 40.8333vw !important; /*588px*/
    height: 41.4583vw !important; /*597px*/
    background: #FAFAFA;

    border-radius: 1.1111vw ; /*16px*/
    filter: drop-shadow(0 0.2778vw 0.6944vw rgba(0, 0, 0, 0.25)); /*0px 4px 10px*/
    text-align: left !important;
    cursor: pointer;
}

.convention-card-component-image {
    width: 40.8333vw !important; /*588px*/
    height: 30.625vw !important; /*441px*/

    border-radius: 1.1111vw 1.1111vw 0 0; /*16px*/
    object-fit: cover;
    object-position: 0 0;
}

.convention-card-component-details {
    display: flex !important;
    margin: 1.6667vw !important; /*24px*/
    background: #FAFAFA;
}

.convention-card-component-head {
    margin-bottom: 1.1111vw !important; /*16px*/
    font-family: 'CoolBritannia';
    font-weight: 400;
    font-size: 2.7778vw !important; /*40px*/
    line-height: 3.3333vw !important; /*48px*/
}

.convention-card-component-body {
    margin-bottom: 0.5556vw !important; /*8px*/
    color: #333333;
    font-family: 'AvenirNext';
    font-weight: 700;
    font-size: 1.1111vw; /*16px*/
    line-height: 1.25vw; /*18px*/
}

.convention-card-component-date {
    color: #333333;
    font-family: 'AvenirNext';
    font-weight: 700;
    font-size: 1.25vw; /*18px*/
    line-height: 1.5278vw; /*22px*/
}
</style>