let height = window.innerHeight;
let width = window.innerWidth;
let set_by_width = true;
let cal_height;
let cal_width;

if (width * 9 / 16 >= height) set_by_width = false;

if (set_by_width) {
    cal_width = width;
    cal_height = width * 9 / 16;
} else {
    cal_width = height * 16 / 9;
    cal_height = height;
}

document.getElementById("container-16-9").style.width = cal_width + "px";
document.getElementById("container-16-9").style.left = (width - cal_width) / 2 + "px";

var section_elements = document.getElementsByClassName("section");
var sections = Array.prototype.filter.call(section_elements, function (section_elements) {
    return section_elements.nodeName === "DIV";
})

sections.forEach(element => {
    element.style.height = String(cal_height) + "px";
});

let width_factor = cal_width / 1920;

document.getElementsByTagName("html")[0].style.fontSize = String(cal_height * (10 / 1080)) + "px";

window.onresize = () => {
    if (x.matches) { // If media query matches
        console.log("small device");

    } else {
        if (window.innerHeight > height * 1.1 || window.innerHeight < height * 0.9 ||
            window.innerWidth > width * 1.1 || window.innerWidth < width * 0.9) {
            location.reload();
        }
    }
}

console.log('%c PuuTzzA', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');

var x = window.matchMedia("(max-width: 700px)")
