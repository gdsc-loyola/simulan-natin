<template>
    <div class="filter-button-component-main dropdown">
        <button type="button" class="btn dropdown-toggle filter-button-component" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            NameOfFilter
        </button>
        <ul class="dropdown-menu filter-button-component-dropdown" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item filter-button-component-dropdown-item" href="#">option1</a></li>
            <li><a class="dropdown-item filter-button-component-dropdown-item" href="#">option2</a></li>
            <li><a class="dropdown-item filter-button-component-dropdown-item" href="#">option3</a></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'FilterButton',
}
</script>

<style scoped>
/* Relative 1440 */
.filter-button-component {
    padding-top: 0.4861vw !important; /*7px*/
    padding-bottom: 0.4861vw !important; /*7px*/
    padding-left: 0.9027vw !important; /*13px*/
    padding-right: 0.9027vw !important; /*13px*/
    width: 11.3611vw !important; /*163.6px*/
    height: 2.5vw !important; /*36px*/
    background-color: #293C92 !important;
    color: #FFFFFF !important;
    font-family: "AvenirNext-Bold";
    font-size: 1.25vw !important;  /*18px*/
    line-height: 1.5278vw !important; /*22px*/
}

.filter-button-component-main {
    display: inline-block !important;
    margin-right: 2.2222vw !important; /*32px*/ 
}

.filter-button-component-dropdown-item {
    padding-top: 0.2778vw !important; /*4px*/
    padding-bottom: 0.2778vw !important; /*4px*/
    padding-left: 1.1111vw !important; /*16px*/
    padding-right: 1.1111vw !important; /*16px*/
    font-family: "AvenirNext";
    font-size: 1.25vw !important;  /*18px*/
    line-height: 1.5278vw !important; /*22px*/
}

.filter-button-component-dropdown {
    padding-top: 0.5556vw !important; /*8px*/
    padding-bottom: 0.5556vw !important; /*8px*/
}
</style>
