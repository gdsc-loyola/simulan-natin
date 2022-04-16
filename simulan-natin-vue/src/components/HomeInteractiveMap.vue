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
    width: 800px !important; /*800px*/
    height: 700px !important; /*700px*/
}
</style>