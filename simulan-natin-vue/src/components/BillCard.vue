<template>
  <div class="al-bill-card">
    <div class="al-bg-primary-blue p-2 d-flex align-content-center flex-wrap align-items-center">
      <div class="al-font-primary-white">
          <div class="pb-2">
            <sub>House Bill / Resolution No.</sub><br>
          </div>
          <span class="al-bold al-body">HB00059</span>
      </div>
      <div class="ms-auto">
        <span class="badge rounded-pill al-bg-primary-yellow al-bold al-caption">Advocacy1</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BillCard',
}
</script>

<style scoped>
.al-bill-card {
  display: inline-block;
  border: 2px solid #293C92 !important;
  box-sizing: border-box !important;
  border-radius: 8px !important;
  width: 584px;
  height: 198px;
  text-align: left;
}
</style>