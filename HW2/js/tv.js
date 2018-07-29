"use strict"

//constructor TV
function TV(name, brand, displaySize) {
    this._name = name;
    this._brand = brand;
    this._displaySize = displaySize;
    this._currentChannel = 1;
    this._currentVolume = 18;
    DeviceControl.apply(this, arguments);
}

TV.prototype = Object.create(DeviceControl.prototype);
TV.prototype.constructor = TV;

TV.prototype.nextChannel = function () {
    var lastChannel = 15;
    if(this._currentChannel >= lastChannel) {
        return;
    }
    return this._currentChannel++;
}

TV.prototype.prevChannel = function () {
    var firstChannel = 1;
    if(this._currentChannel <= firstChannel) {
        return;
    }
    return this._currentChannel--;
}

TV.prototype.upVolume = function () {
    var maxVolume = 50;
    if(this._currentVolume >= maxVolume) {
        return;
    }
    return this._currentVolume++;
}

TV.prototype.downVolume = function () {
    var minVolume = 0;
    if(this._currentVolume <= minVolume) {
        return;
    }
    return this._currentVolume--;
}

//create plazma
var plazma = new TV("Plazma", "Samsung", "50d");

plazma.rendertv = function() {
    var tv = document.createElement("div");
    tv.className = this._name;
    tv.innerHTML = this._name;

    var brand = document.createElement("div");
    brand.className = "prop";
    brand.innerText = "Brand: " + plazma._brand;

    var diagonal = document.createElement("div");
    diagonal.className = "prop";
    diagonal.innerText = "Screen size: " + plazma._displaySize;

    var status = document.createElement("div");
    status.className = "status";
    status.innerText = "Plazma is off";

    var menu = document.createElement("div");

    function showStatus() {
        status.innerText = plazma._state ? "Plazma is on" : "Plazma is off";
    }

    var onBtn = document.createElement("button");
    onBtn.type = "button";
    onBtn.className = "onBtn button";
    onBtn.innerHTML = "On";
    onBtn.addEventListener("click", function () {
        plazma.on();
        tv.appendChild(menu);
        showStatus();
    })

    var offBtn = document.createElement("button");
    offBtn.type = "button";
    offBtn.className = "offBtn button";
    offBtn.innerHTML = "Off";
    offBtn.addEventListener("click", function () {
        plazma.off();
        tv.removeChild(menu);
        showStatus();
    })

    var currentChannel = document.createElement("div");
    currentChannel.className = "status";
    currentChannel.innerText = "Channel is " + plazma._currentChannel;

    function  showChannel() {
        currentChannel.innerText = "Channel is " + plazma._currentChannel;
    }

    var increaseChannel = document.createElement("button");
    increaseChannel.type = "button";
    increaseChannel.className = "settingsBtn button";
    increaseChannel.innerHTML = "Next Channel";
    increaseChannel.addEventListener("click", function () {
        plazma.nextChannel();
        showChannel();
    }, false)

    var decreaseChannel = document.createElement("button");
    decreaseChannel.type = "button";
    decreaseChannel.className = "settingsBtn button";
    decreaseChannel.innerHTML = "Prev Channel";
    decreaseChannel.addEventListener("click", function () {
        plazma.prevChannel();
        showChannel();
    }, false)

    var volume = document.createElement("div");
    volume.className = "status";
    volume.innerText = "Volume is " + plazma._currentVolume;

    function  showVolume() {
        volume.innerText = "Volume is " + plazma._currentVolume;
    }

    var increaseVolume = document.createElement("button");
    increaseVolume.type = "button";
    increaseVolume.className = "settingsBtn button";
    increaseVolume.innerHTML = "Volume++";
    increaseVolume.addEventListener("click", function () {
        plazma.upVolume();
        showVolume();
    }, false)

    var decreaseVolume = document.createElement("button");
    decreaseVolume.type = "button";
    decreaseVolume.className = "settingsBtn button";
    decreaseVolume.innerHTML = "Volume--";
    decreaseVolume.addEventListener("click", function () {
        plazma.downVolume();
        showVolume();
    }, false)

    root.children[0].children[0].appendChild(tv);
    tv.appendChild(brand);
    tv.appendChild(diagonal);
    tv.appendChild(status);
    tv.appendChild(onBtn);
    tv.appendChild(offBtn);
    menu.appendChild(currentChannel);
    menu.appendChild(decreaseChannel);
    menu.appendChild(increaseChannel);
    menu.appendChild(volume);
    menu.appendChild(decreaseVolume);
    menu.appendChild(increaseVolume);
}