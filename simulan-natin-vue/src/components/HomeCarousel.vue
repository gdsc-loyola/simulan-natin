<template>
    <div id="carouselExampleIndicators" class="home-carousel-component carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="../assets/HomeCarouselPic1.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="../assets/HomeCarouselPic2.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="../assets/HomeCarouselPic3.png" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
export default {
  name: 'HomeCarousel',
}
</script>

<style scoped>
/* Relative 1440 */
.home-carousel-component {
    width: 50vw !important; /*720px*/
    height: 48.4722vw !important; /*698px*/
}
</style>