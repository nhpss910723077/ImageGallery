var displayedImage = document.querySelector(".displayed-img");
var thumbBar = document.querySelector(".thumb-bar");

var btn = document.querySelector("button");
var overlay = document.querySelector(".overlay");

var left = document.querySelector(".left");
var right = document.querySelector(".right");

var largeOverlay = document.querySelector(".large-overlay"); 
var largeImg = document.querySelector(".large-img");

var thumbImages = [];
var thumbNum = 0;

function thumbControl() {
    for (var i = 1; i <= 5; i++) {
        thumbImages[i - 1].src = "images/pic" + (i + thumbNum) + ".jpg";
    }
}

function thumbCreate() {
    for (var i = 1; i <= 5; i++) {
        var thumbImage = document.createElement("img");
        thumbImage.setAttribute("src", "images/pic" + i + ".jpg");
        thumbBar.appendChild(thumbImage);

        thumbImage.addEventListener("click", function (e) {
            var imgSrc = e.target.getAttribute("src");
            displayedImage.setAttribute("src", imgSrc);
        });
        thumbImages.push(thumbImage);
    }
}

function addListener() {
    btn.addEventListener("click", function () {
        var btnClass = btn.getAttribute("class");
        if (btnClass === "dark") {
            btn.setAttribute("class", "light");
            btn.textContent = "light";
            overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
        } else {
            btn.setAttribute("class", "dark");
            btn.textContent = "dark";
            overlay.style.backgroundColor = "rgba(0,0,0,0)";
        }
    });

    left.addEventListener("click", function () {
        if (thumbNum > 0) {
            thumbNum--;
            thumbControl();
        }
    });

    right.addEventListener("click", function () {
        if (thumbNum < 2) {
            thumbNum++;
            thumbControl();        
        }
    });
    overlay.addEventListener("click", function () {
        largeImg.src = displayedImage.src;
        largeOverlay.style.display = "block";
    })

    largeOverlay.addEventListener("click", function () {
        largeOverlay.style.display = "none";
    });
}

thumbCreate();
addListener();
