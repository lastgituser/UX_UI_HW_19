console.log("started");
var daynight = "night";
$('body').on('click', function() {
    console.log('body');
})
$('#day-night-toggle').on('mouseover', function () {
    $(this).css("height", "3rem");
    $(this).css("width", "3rem");
    $(this).css("cursor", "pointer");
    console.log("mouseover");
});
$('#day-night-toggle').on('mouseout', function () {
    $(this).css("height", "2rem");
    $(this).css("width", "2rem");
    $(this).css("cursor", "default");
    console.log("mouseout");
});
$('#day-night-toggle').on('click', function() {
    if (daynight === "night") {
        daynight = "day";
        $(':root').css("--color-primary", "#FFFFFF");
        $(':root').css("--color-primary-transparent", "#FFFFFF00");
        $(':root').css("--color-secondary", "#101820");
        $(':root').css("--color-accent", "#234E70");
        $('.exp-img').css("filter", "invert(0.0)");
        $('.skill-icon').css("filter", "invert(0.0)");
        $('#img-github').css("filter", "invert(0.0)");
        $('#img-footer-github').css("filter", "invert(1.0)");
        $('#img-uxskills').attr("src", "images/skillspics/uxskills-day.png");
        $('#img-devskills').attr("src", "images/skillspics/devskills-day.png");
        $(this).css("mask-image", "url(images/icons/pngs/moon.png)");
        $(this).css("-webkit-mask-image", "url(images/icons/pngs/moon.png)");
        $('.img-logo').css("filter", "hue-rotate(170deg) brightness(0.5) saturate(1.0)")
    }
})