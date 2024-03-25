const rtlSponsoringProducts = {259446: { title:'قالب HTML در دست ساخت ویژن، Vision',permaLink:'https://www.rtl-theme.com/vision-html-template/'},257550: { title:'قالب HTML آموزشی Eduport، ادوپورت',permaLink:'https://www.rtl-theme.com/eduport-html-template/'},254067: { title:'قالب HTML خبری بلاگ زین',permaLink:'https://www.rtl-theme.com/blogzine-html-template/'},249640: { title:'قالب HTML صفحه ورود و ثبت نام Oddo',permaLink:'https://www.rtl-theme.com/oddo-html-template/'},246908: { title:'قالب HTML آموزشی اسکیل آپ، Skillup',permaLink:'https://www.rtl-theme.com/skillup-html-template/'},244517: { title:'قالب HTML شرکتی Saasup، سس آپ',permaLink:'https://www.rtl-theme.com/saasup-html-template/'},241705: { title:'قالب HTML شرکتی Ailng، ایلنگ',permaLink:'https://www.rtl-theme.com/ailng-html-template/'},240417: { title:'قالب HTML آموزشی لرن آپ، LearnUp',permaLink:'https://www.rtl-theme.com/learnup-html-template/'},240415: { title:'قالب HTML آگهی گودآپ، GOODUP',permaLink:'https://www.rtl-theme.com/goodup-html-template/'},236459: { title:'قالب html فروشگاهی بیگ بازار، BigBazar',permaLink:'https://www.rtl-theme.com/bigbazar-html-template/'},232748: { title:'قالب HTML خبری بلوگر، Blogar',permaLink:'https://www.rtl-theme.com/blogar-html-template/'},229112: { title:'قالب HTML چند منظوره فایندر، Finder',permaLink:'https://www.rtl-theme.com/finder-html-template/'},204436: { title:'قالب Golo، قالب HTML ثبت آگهی گولو',permaLink:'https://www.rtl-theme.com/golo-html-template/'},200413: { title:'قالب HTML پنل مدیریت جوبی، Jobie',permaLink:'https://www.rtl-theme.com/jobie-html-template/'},199703: { title:'قالب HTML شخصی Unfold',permaLink:'https://www.rtl-theme.com/unfold-html-template/'},196823: { title:'قالب Qniko، قالب HTML شرکتی کیونیکو',permaLink:'https://www.rtl-theme.com/qniko-html-template/'}};

const rtlSponsoringDomains = ["fixdevelopdemo.ir"];

var rtlSponsoringScriptSrc = document.currentScript.src;

var rtlSponsoringUrl       = new URL(rtlSponsoringScriptSrc);
var rtlSponsoringAffID     = rtlSponsoringUrl.searchParams.get("aff_id");
var rtlSponsoringProductID = rtlSponsoringUrl.searchParams.get("pid");
var rtlAfterScroll         = rtlSponsoringUrl.searchParams.get("scroll");

if (rtlAfterScroll == null) {
    rtlAfterScroll = 'true';
}

if (rtlSponsoringDomains.includes(window.location.hostname)) {
    var rtlSponsoringPopupHTML = `<style>.dnone {display: none;}.rtlthemehost{background: rgb(255 255 255 / 100%); box-shadow: 0 0 10px hsl(0deg 0% 75% / 35%); color: #4d535b; border-radius: 4px; padding: 20px 20px; font-size: 14px; position: fixed; bottom: 0; z-index: 99999999999999; width: 400px; right: 0; text-align: right; margin: 10px;}.rtlthemelink1{padding: 8px 12px; border-radius: 4px; color: #fff!important; margin-left: 15px; background-color: #8ed557!important; box-shadow: 0 5px 10px rgb(142 213 87 / 34%);}a.rtlthemelink1{color: white;}.rtlthemelink2{color: #4d535b;}a.rtlthemelink2{color: #4d535b; font-weight: 600;}a.rtlthemelink2:hover{color: #3f51b5;}span.rtlthemesp{border-right: 2px dashed #cfcfcf; padding: 5px 15px 5px 0px;}@media screen and (max-width: 460px){.rtlthemehost{border-radius: 0px; width: 100%; margin: 0px;text-align: center;padding: 20px 0px;font-size: 13px;}}</style>
<div class="rtlthemehost">
	<a href="[[product_id]]" title="[[title]]" class="rtlthemelink1" target="_blank" rel="follow noopener">خرید از راست چین </a>
	<span class="rtlthemesp" >میزبانی شده توسط</span>
	<a href="http://rtlt.ir/plh" class="rtlthemelink2" target="_blank" rel="nofollow noopener noreferrer">لیمو هاست</a>
</div>`;

    if (rtlSponsoringProductID == null) {
        rtlSponsoringPopupHTML = rtlSponsoringPopupHTML.replace('[[product_id]]', 'https://www.rtl-theme.com/');
        rtlSponsoringPopupHTML = rtlSponsoringPopupHTML.replace('title="[[title]]"', ' ');
    } else {
        if (rtlSponsoringProducts.hasOwnProperty(rtlSponsoringProductID)) {
            rtlSponsoringPopupHTML = rtlSponsoringPopupHTML.replace('[[product_id]]', rtlSponsoringProducts[rtlSponsoringProductID].permaLink);
            rtlSponsoringPopupHTML = rtlSponsoringPopupHTML.replace('[[title]]', rtlSponsoringProducts[rtlSponsoringProductID].title);
        } else {
            rtlSponsoringPopupHTML = rtlSponsoringPopupHTML.replace('[[product_id]]', 'https://www.rtl-theme.com/?p=' + rtlSponsoringProductID);
            rtlSponsoringPopupHTML = rtlSponsoringPopupHTML.replace('title="[[title]]"', ' ');
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        if (window.innerHeight >= document.body.clientHeight || rtlAfterScroll == 'false') {
            var rtlSponsoringPopupDIV       = document.createElement('div');
            rtlSponsoringPopupDIV.id        = 'rtl-footer-toast-90';
            rtlSponsoringPopupDIV.innerHTML = rtlSponsoringPopupHTML;

            document.body.appendChild(rtlSponsoringPopupDIV);
        }
    });

    window.addEventListener("scroll", function () {
        var rtlSponsoringScrollPercent = rtlGetAmountScrolled();

        /*if (rtlSponsoringAffID == null) {
            rtlSponsoringPopupHTML = rtlSponsoringPopupHTML.replace('[[aff_id]]', 'aff.php?aff=1340');
        } else {
            rtlSponsoringPopupHTML = rtlSponsoringPopupHTML.replace('[[aff_id]]', 'aff.php?aff=' + rtlSponsoringAffID);
        }*/

        if (rtlSponsoringScrollPercent >= 70) {
            var rtlSponsoringElement = document.getElementById('rtl-footer-toast-90');

            if (rtlSponsoringElement == null) {
                var rtlSponsoringPopupDIV       = document.createElement('div');
                rtlSponsoringPopupDIV.id        = 'rtl-footer-toast-90';
                rtlSponsoringPopupDIV.innerHTML = rtlSponsoringPopupHTML;

                document.body.appendChild(rtlSponsoringPopupDIV);
            }
        } else {
            var rtlSponsoringElement = document.getElementById('rtl-footer-toast-90');

            if (typeof (rtlSponsoringElement) != 'undefined' && rtlSponsoringElement != null && rtlAfterScroll == 'true') {
                document.getElementById("rtl-footer-toast-90").remove();
            }
        }
    });
}


/**
 * Get Document Height
 *
 * @returns {number}
 */
function rtlGetDocHeight() {
    var rtlSponsoringDocument = document;

    return Math.max(
        rtlSponsoringDocument.body.scrollHeight, rtlSponsoringDocument.documentElement.scrollHeight,
        rtlSponsoringDocument.body.offsetHeight, rtlSponsoringDocument.documentElement.offsetHeight,
        rtlSponsoringDocument.body.clientHeight, rtlSponsoringDocument.documentElement.clientHeight
    )
}

/**
 * Get Page Scrolled Amount
 *
 * @returns {number}
 */
function rtlGetAmountScrolled() {
    var rtlSponsoringWinHeight   = window.innerHeight || (document.documentElement || document.body).clientHeight
    var rtlSponsoringDocHeight   = rtlGetDocHeight()
    var rtlSponsoringScrollTop   = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    var rtlSponsoringTrackLength = rtlSponsoringDocHeight - rtlSponsoringWinHeight

    return Math.floor(rtlSponsoringScrollTop / rtlSponsoringTrackLength * 100);
}

fetch("https://1abzar.ir/abzar/tools/stat/amar-v3-ramz.php?mod=6&amar=5kmb6bjzstyrz69s-iln85ee7emme0&p=7a3fb00c87f260942f021416d19237ee");