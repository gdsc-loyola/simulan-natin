<template>
    <div class="d-flex flex-column align-items-center">
        <div class="convention-page-head">ConventionName</div>
        <iframe src="https://www.facebook.com/plugins/video.php?height=560&href=https%3A%2F%2Fwww.facebook.com%2FSimulanNatin2022%2Fvideos%2F548476302799818%2F&show_text=false&width=560&t=0" style="border:none;overflow:hidden;width:69.1667vw;height:38.8889vw;" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        <!-- <iframe :src="`https://www.facebook.com/plugins/video.php?height=560&href=https%3A%2F%2Fwww.facebook.com%2F${conData.attributes.recording_url.split('/')[3]}%2Fvideos%2F${conData.attributes.recording_url.split('/')[5]}%2F&show_text=false&width=996&t=0`" style="border:none;overflow:hidden;width:69.1667vw;height:38.8889vw;" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> -->
        <div>ConventionTitle</div>
        <div>Location Convention | Date</div>
        <div class="convention-page-head">Meet the Speakers</div>
        <div class="convention-page-head">More Conventions</div>
    </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style scoped>
/* Relative 1440 */
.convention-page-head {
    font-family: 'CoolBritannia';
    font-size: 4.4444vw; /*64px*/
    line-height: 5.3472vw; /*77px*/
}
</style>