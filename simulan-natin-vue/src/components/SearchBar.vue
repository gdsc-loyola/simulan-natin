<template>
    <div class="row height d-flex justify-content-center align-items-center">
        <i class="fa fa-search"></i> 
        <input type="text" class="form-control search-bar-component" placeholder="Search for a keyword...">
    </div>
</template>

<script>
export default {
  name: 'SearchBar',
}
</script>

<style scoped>
/* Relative 1440 */
.search-bar-component { 
  padding-top: 1.1111vw !important; /*16px*/
  padding-bottom: 1.1111vw !important; /*16px*/
  padding-left: 1.6667vw !important; /*24px*/
  font-family: "AvenirNext" !important;
  font-weight: 700 !important;
  font-size: 1.6667vw !important; /*24px*/
  line-height: 2.2222vw !important; /*32px*/
}
</style>