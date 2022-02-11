var daynight = "night";
import { starsDraw } from './stars.js';
import { cloudsDraw } from './clouds.js';
window.onload = function () {
    let myp5 = new p5(starsDraw);
    $('#day-night-toggle').css("display", "block");
    $('.hero-background-image').css("display", "none");
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
            $(':root').css("--color-accent", "#004ca0");
            $(':root').css("--color-accent-2", "#fee715");
            $('.exp-img').css("filter", "invert(0.0)");
            $('.skill-icon').css("filter", "invert(0.0)");
            $('#img-github').css("filter", "invert(0.0)");
            $('#img-footer-github').css("filter", "invert(1.0)");
            $('#img-uxskills').attr("src", "images/skillspics/uxskills-day.png");
            $('#img-devskills').attr("src", "images/skillspics/devskills-day.png");
            $(this).css("mask-image", "url(images/icons/pngs/moon.png)");
            $(this).css("-webkit-mask-image", "url(images/icons/pngs/moon.png)");
            $('.img-logo').css("filter", "hue-rotate(30deg) saturate(1.0) brightness(0.5)")
            let myp5 = new p5(cloudsDraw);
        } else {
            daynight = "night";
            $(':root').css("--color-primary", "#101820");
            $(':root').css("--color-primary-transparent", "#10182000");
            $(':root').css("--color-secondary", "#FFFFFF");
            $(':root').css("--color-accent", "#FEE715");
            $(':root').css("--color-accent-2", "#004ca0");
            $('.exp-img').css("filter", "invert(1.0)");
            $('.skill-icon').css("filter", "invert(1.0)");
            $('#img-github').css("filter", "invert(1.0)");
            $('#img-footer-github').css("filter", "invert(0.0)");
            $('#img-uxskills').attr("src", "images/skillspics/uxskills.png");
            $('#img-devskills').attr("src", "images/skillspics/devskills.png");
            $(this).css("mask-image", "url(images/icons/pngs/sun.png)");
            $(this).css("-webkit-mask-image", "url(images/icons/pngs/sun.png)");
            $('.img-logo').css("filter", "brightness(1.0)")
            let myp5 = new p5(starsDraw);
        }
    })
}