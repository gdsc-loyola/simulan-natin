<template>
  <div class="bill-card-component">
    <div class="bill-card-component-top d-flex justify-content-center align-items-center">
      <div class="bill-card-component-top-container-details d-flex flex-column">
        <div class="bill-card-component-top-label">House Bill / Resolution No.</div>
        <div class="bill-card-component-top-code">AL69420</div>
      </div>
      <div class="bill-card-component-top-container-advocacy">
        <span class="bill-card-component-top-advocacy badge rounded-pill">ADVOCACY</span>
      </div>
    </div>
    <div class="bill-card-component-bottom d-flex flex-column">
      <div class="bill-card-component-bottom-act-title"><b>Act Title</b></div>
      <div>Status: <b>[blank]</b></div>
      <div>Republic Act RA11595 enacted on 2021-12-10</div>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'BillCard',
}
</script>

<style scoped>
/* Relative 1440 */
.bill-card-component {
  display: inline-block !important;
  margin: 1.1111vw !important; /*16px*/
  width: 40.5556vw !important; /*584px*/
  height: 13.75vw !important; /*198px*/

  border: 2px solid #293C92;
  box-sizing: border-box;
  border-radius: 0.5556vw; /*8px*/
  cursor: pointer !important;
}

.bill-card-component-top {
  height: 5vw !important; /*72px*/
  background: #293C92;

  border-radius: 0.5vw 0.5vw 0vw 0vw; /*8px 8px 0px 0px*/
}

.bill-card-component-top-container-details {
  width: 13.5417vw !important; /*195px*/
  text-align: left !important;
}

.bill-card-component-top-label {
  margin-bottom: 0.5556vw !important; /*8px*/
  color: #FAFAFA;
  font-family: 'AvenirNext';
  font-weight: 400;
  font-size: 1.1111vw; /*16px*/
  line-height: 1.25vw; /*18px*/
}

.bill-card-component-top-code {
  color: #FAFAFA;
  font-family: 'AvenirNext-Bold';
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
}

.bill-card-component-top-container-advocacy {
  width: 24.8611vw !important; /*358px*/
  text-align: right !important;
}

.bill-card-component-top-advocacy {
  padding: 0.5104vw 0.9479vw !important; /*7.35px 13.65px*/
  background: #F4F1E5;
  color: #B57E33;
  font-family: 'AvenirNext-Bold';
  font-weight: 700;
  font-size: 0.9722vw; /*14px*/
  line-height: 1.1111vw; /*16px*/

  border-radius: 6.875vw; /*99px*/
  justify-content: center;
  align-items: center;
  text-align: center;
}

.bill-card-component-bottom {
  padding: 1.1111vw !important; /*16px*/
  color: #000000;
  font-family: 'AvenirNext';
  font-weight: 400;
  font-size: 1.1111vw; /*16px*/
  line-height: 1.25vw; /*18px*/

  text-align: left !important;
}

.bill-card-component-bottom-act-title {
  height: 3.8889vw !important; /*56px*/
}
</style>