<template>
    <div class="al-profiles">
        <h2 class="al-bold al-profiles-header">REPUBLIC OF THE PHILIPPINES  |  HOUSE OF REPRESENTATIVES 18TH  CONGRESS DISTRICT REPRESENTATIVES</h2>
        <div class="al-profiles-representative-details">
            <img src="../assets/logo.png" class="rounded-circle al-profiles-representative-details-photo" alt="..." width="240" height="240">
            <div class="al-profiles-representative-details-name">
                <h2 class="al-bold al-font-primary-blue">LAST NAME, FIRST NAME M.I.</h2>
                <div class="al-medium">
                    <body>
                        Province, nth District <br>
                        Political Party
                    </body>
                </div>
                <button type="button" class="al-profiles-representative-details-button btn btn-light al-font-primary-white al-bg-primary-blue al-medium al-caption">MORE INFORMATION</button>
            </div>
        </div>

        <div class="al-profiles-representative-platforms">
            <sub>The following are this representative’s top platforms:</sub><br>
            <sub class="al-caption al-italic">*based on laws enacted</sub><br>
            <span class="badge rounded-pill al-bg-primary-blue al-platforms-pill-badge al-bold">PLATFORM (#)</span>
            <span class="badge rounded-pill al-bg-primary-blue al-platforms-pill-badge al-bold">PLATFORM (#)</span>
            <span class="badge rounded-pill al-bg-primary-blue al-platforms-pill-badge al-bold">PLATFORM (#)</span>
        </div>

        <div class="al-profiles-bills mx-auto">
            <div class="row height d-flex justify-content-center align-items-center al-profiles-search">
                <i class="fa fa-search"></i> 
                <input type="text" class="form-control al-searchbar" placeholder="Search for a keyword...">
            </div>

            <BillCard/>
        </div>
    </div>
</template>

<script>
import BillCard from '../components/BillCard.vue'

export default {
  name: 'App',
  components: {
    BillCard,
  },
}
</script>


<style scoped>
.al-profiles {
    background-image: url('../assets/ProfilesBG.png');
    background-attachment: fixed;
    background-repeat: no-repeat;
    max-width: 100%;
    background-size: 100%;
    text-align: center;
}

.al-profiles-header {
  height: 80px;
  width: 1087px;
  padding: 40px;
  text-align: center;
  display: inline-block;
}

.al-profiles-representative-details {
  height: 240px;
  width: 1200px;
  text-align: left;
  display: inline-block;
  position: relative;
  margin-top: 48px;
  margin-bottom: 48px;
}

.al-profiles-representative-details-photo {
    float: left;
}

.al-profiles-representative-details-name {
    padding-left: 76px;
    display: inline-block;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}

.al-profiles-representative-details-button {
    width: 171px;
    height: 30px;
    margin-top: 26px;
}

.al-profiles-representative-platforms {
  width: 1200px;
  text-align: left;
  display: inline-block;
}

.al-platforms-pill-badge {
    font-size: 24px;
    line-height: 32px;
    margin-top: 16px;
    margin-right: 16px;
}

.al-profiles-search {
    width: 768px;
    height: 64px;
}

.al-profiles-bills {
    width: 1200px;
    margin-top: 54px;
}
</style>