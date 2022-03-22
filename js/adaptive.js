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
    element.style.height = String(height) + "px";
});

let width_factor = cal_width / 1920;

document.getElementsByTagName("html")[0].style.fontSize = String(cal_height * (10 / 1080)) + "px";

window.onresize = () => location.reload();
