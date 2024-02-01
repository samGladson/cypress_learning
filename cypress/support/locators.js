class locator 
{
    constructor(){
    this.userEmail = "#username"
    this.userpassword = "#password"
    this.userSubmit = "#submit"
    this.acceptCookies ="button[id='onetrust-accept-btn-handler']"
    this.networkFeed = ".network-feed"
    this.clickArrowInProfile = "div .down-arrow-settings-dropdown"
    this.myProfileButton = "span.logged-in-user-settings__dropdown-label"
    this.iframeId ="#mce_0_ifr"
    this.iframeBody="#tinymce"
    }

}

module.exports = new locator();