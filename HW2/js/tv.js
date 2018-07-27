"use strict"

//constructor TV
function TV(name, brand, displaySize) {
    this._name = name;
    this._brand = brand;
    this._displaySize = displaySize;
    DeviceControl.apply(this, arguments);
}

TV.prototype = Object.create(DeviceControl.prototype);
TV.prototype.constructor = TV;

TV.prototype.changeChannel = function (channel, setChannel) {
    var firstChannel = 1,
        lastChannel = 100;
    if(channel < firstChannel || channel > lastChannel) {
        return;
    }

    switch (setChannel) {
        case "next":
            channel++;
            break;
        case "prev":
            channel--;
            break;
        default:
            return channel;
    }
    return channel;
};

TV.prototype.renderTV = function() {
    var tv = document.createElement("div");
    tv.className = "tv";
    tv.innerHTML = this._name;

    root.children[0].appendChild(tv);
};
