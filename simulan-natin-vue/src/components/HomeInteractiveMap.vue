<template>
    <body onload="initViz();" class="d-flex justify-content-center align-items-center">
        <div id="vizContainer" class="home-interactive-map-component"/>
    </body>
</template>

<script>
export default {
  name: 'HomeInteractiveMap',
}
</script>

<style scoped>
/* Relative 1440 */
.home-interactive-map-component {
    width: 55.5556vw !important; /*800px*/
    height: 48.6111vw !important; /*700px*/
}
</style>