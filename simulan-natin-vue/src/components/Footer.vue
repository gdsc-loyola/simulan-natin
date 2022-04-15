<template>
    <div>
        <div class="footer-component-top d-flex justify-content-center align-items-center">
            <div class="footer-component-container">
                <img src="../assets/SimulanNatin2022HorizontalLogosWhite.png" alt="SimulanNatin2022WHLogo" class="footer-component-image">
                <div class="footer-component-copyright">© 2022 GoodGov PH. All Rights Reserved.</div>
            </div>
            <a href="https://www.facebook.com/GoodGovPH" target="_blank"><div class="footer-component-logo"><img src="../assets/FaceBookLogoBlue.png" alt="" class="h-100"></div></a>
            <a href="https://twitter.com/GoodGovPH" target="_blank"><div class="footer-component-logo"><img src="../assets/TwitterLogoBlue.png" alt="" class="w-100"></div></a>
            <a href="https://goodgov.ph/" target="_blank"><div class="footer-component-logo"><img src="../assets/WWWLogoBlue.png" alt="" class="h-100"></div></a>
        </div>
        <div class="footer-component-bottom">
            <a href="https://www.gdscloyola.org/" target="_blank">
                Passionately Designed and Developed by Developer Student Clubs Loyola
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
/* Relative 1440 */
.footer-component-top {
    width: 100% !important; /*1440px*/
    height: 17.7778vw !important; /*256px*/
    background: #293C92;
}

.footer-component-container {
    width: 68.8889vw !important; /*992px*/
}

.footer-component-image {
    margin-bottom: 1.6667vw !important; /*24px*/
    width: 16.1806vw !important; /*233px*/  
    height: 2.7778vw !important; /*40px*/
}

.footer-component-copyright {
    color: #FAFAFA;
    font-family: 'AvenirNext';
    font-weight: 500;
    font-size: 1.6667vw; /*24px*/
    line-height: 2.2222vw; /*32px*/
}

.footer-component-logo {
    display: flex !important;
    padding: 1.4236vw !important; /*20.5px*/
    margin: 0 0.8333vw !important; /*0px 12px*/
    width: 5.5556vw !important; /*80px*/
    height: 5.5556vw !important; /*80px*/
    background: #FAFAFA;

    border-radius: 2.1667vw; /*31.2px*/
    justify-content: center;
    align-items: center;
}

.footer-component-bottom {
    display: flex !important;
    width: 100% !important; /*1440px*/
    height: 7.7778vw !important; /*112px*/
    background: #FAFAFA;
    color: #293C92;
    font-family: 'AvenirNext';
    font-weight: 400;
    font-size: 1.6667vw; /*24px*/
    line-height: 2.2222vw; /*32px*/
    
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

a { 
    color: inherit; 
    text-decoration: none;
} 

a:hover { 
    color: #101E5F !important;
} 
</style>