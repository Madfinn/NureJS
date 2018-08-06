"use strict"

//Create floorlamp
let renderFloorLamp = () => {
    const floorLamp = new Light("Floorlamp", "Panasonic", "floor lamp", "60W", "cold light");

    let lamp = document.createElement("div");
    lamp.className = floorLamp._name;
    lamp.innerHTML = floorLamp._name;

    let brand = document.createElement("div");
    brand.className = "prop";
    brand.innerText = `Brand: ${floorLamp._brand}`;

    let bright = document.createElement("div");
    bright.className = "prop";

    let brightStatus = document.createElement("div");
    brightStatus.className = "status";
    brightStatus.innerText = `Bright is  ${floorLamp._bright}`;

    let status = document.createElement("div");
    status.className = "status";
    status.innerText = "Light is off";

    let showStatus = () => {
        status.innerText = floorLamp._state ? "Light is on" : "Light is off";
    }

    let showBrightStatus = () => {
        brightStatus.innerText = `Bright is  ${floorLamp._bright}`;
        if (floorLamp._bright > 0) {
            status.innerText = "Light is on";
        } else {
            status.innerText = "Light is off";
        }
    }

    let increaseBright = document.createElement("button");
    increaseBright.type = "button";
    increaseBright.className = "settingsBtn button";
    increaseBright.innerHTML = "Bright Up";
    increaseBright.addEventListener("click", function () {
        floorLamp.addBright();
        showBrightStatus();
    }, false)

    let decreaseBright = document.createElement("button");
    decreaseBright.type = "button";
    decreaseBright.className = "settingsBtn button";
    decreaseBright.innerHTML = "Bright Down";
    decreaseBright.addEventListener("click", function () {
        floorLamp.removeBright();
        showBrightStatus();
    }, false)

    let onBtn = document.createElement("button");
    onBtn.type = "button";
    onBtn.className = "onBtn button";
    onBtn.innerHTML = "On";
    onBtn.addEventListener("click", function () {
        floorLamp.on()
        if (floorLamp._bright >= 50) {
            return;
        } else {
            floorLamp._bright = 50;
            showBrightStatus();
            showStatus();
        }
    })

    let offBtn = document.createElement("button");
    offBtn.type = "button";
    offBtn.className = "offBtn button";
    offBtn.innerHTML = "Off";
    offBtn.addEventListener("click", function () {
        floorLamp.off();
        floorLamp._bright = 0;
        showBrightStatus();
        showStatus();
    })

    root.children[0].children[0].appendChild(lamp);
    bright.appendChild(increaseBright);
    bright.appendChild(decreaseBright);
    lamp.appendChild(brand);
    lamp.appendChild(status);
    lamp.appendChild(onBtn);
    lamp.appendChild(offBtn);
    lamp.appendChild(brightStatus);
    lamp.appendChild(bright);

    return floorLamp;
}

//Create lusterlamp
let renderLusterLamp = () => {
    const lusterLamp = new Light("Luster", "Shine Like Sun", "luster", "100W", "warm light");

    let lamp = document.createElement("div");
    lamp.className = lusterLamp._name;
    lamp.innerHTML = lusterLamp._name;

    let brand = document.createElement("div");
    brand.className = "prop";
    brand.innerText = `Brand: ${lusterLamp._brand}`;

    let bright = document.createElement("div");
    bright.className = "prop";

    let brightStatus = document.createElement("div");
    brightStatus.className = "status";
    brightStatus.innerText = `Bright is ${lusterLamp._bright}`;

    let status = document.createElement("div");
    status.className = "status";
    status.innerText = "Light is off";

    let showStatus = () => {
        status.innerText = lusterLamp._state ? "Light is on" : "Light is off";
    }

    let showBrightStatus = () => {
        brightStatus.innerText = `Bright is ${lusterLamp._bright}`;
        if (lusterLamp._bright > 0) {
            status.innerText = "Light is on";
        } else {
            status.innerText = "Light is off";
        }
    }

    let increaseBright = document.createElement("button");
    increaseBright.type = "button";
    increaseBright.className = "settingsBtn button";
    increaseBright.innerHTML = "Bright Up";
    increaseBright.addEventListener("click", function () {
        lusterLamp.addBright();
        showBrightStatus();
    }, false)

    let decreaseBright = document.createElement("button");
    decreaseBright.type = "button";
    decreaseBright.className = "settingsBtn button";
    decreaseBright.innerHTML = "Bright Down";
    decreaseBright.addEventListener("click", function () {
        lusterLamp.removeBright();
        showBrightStatus();
    }, false)

    let onBtn = document.createElement("button");
    onBtn.type = "button";
    onBtn.className = "onBtn button";
    onBtn.innerHTML = "On";
    onBtn.addEventListener("click", function () {
        lusterLamp.on()
        if (lusterLamp._bright >= 50) {
            return;
        } else {
            lusterLamp._bright = 50;
            showBrightStatus();
            showStatus();
        }
    })

    let offBtn = document.createElement("button");
    offBtn.type = "button";
    offBtn.className = "offBtn button";
    offBtn.innerHTML = "Off";
    offBtn.addEventListener("click", function () {
        lusterLamp.off();
        lusterLamp._bright = 0;
        showBrightStatus();
        showStatus();
    })

    root.children[0].children[0].appendChild(lamp);
    bright.appendChild(increaseBright);
    bright.appendChild(decreaseBright);
    lamp.appendChild(brand);
    lamp.appendChild(status);
    lamp.appendChild(onBtn);
    lamp.appendChild(offBtn);
    lamp.appendChild(brightStatus);
    lamp.appendChild(bright);

    return lusterLamp;
}

//Create conditioner
let renderHumidifier = () => {
    const humidifier = new Conditioner("Conditioner-Humidifier", "Zelmer", "1500 Watt");

    let condition = document.createElement("div");
    condition.className = humidifier._name;
    condition.innerHTML = humidifier._name;

    let brand = document.createElement("div");
    brand.className = "prop";
    brand.innerText = `Brand:  ${humidifier._brand}`;

    let status = document.createElement("div");
    status.className = "status";
    status.innerText = "Conditioner is off";


    let showStatus = () => {
        status.innerText = humidifier._state ? "Conditioner is on" : "Conditioner is off";
    }

    let tempMenu = document.createElement("div");

    let onBtn = document.createElement("button");
    onBtn.type = "button";
    onBtn.className = "onBtn button";
    onBtn.innerHTML = "On";
    onBtn.addEventListener("click", function () {
        humidifier.on();
        condition.appendChild(tempMenu);
        showStatus();
    })

    let offBtn = document.createElement("button");
    offBtn.type = "button";
    offBtn.className = "offBtn button";
    offBtn.innerHTML = "Off";
    offBtn.addEventListener("click", function () {
        humidifier.off();
        condition.removeChild(tempMenu);
        showStatus();
    })

    let currentTemp = document.createElement("div");
    currentTemp.className = "status";
    currentTemp.innerText = `Temperature is ${humidifier._temperature}`;

    function  showTemp() {
        currentTemp.innerText = `Temperature is ${humidifier._temperature}`;
    }

    let increaseTemp = document.createElement("button");
    increaseTemp.type = "button";
    increaseTemp.className = "settingsBtn button";
    increaseTemp.innerHTML = "Temp Up";
    increaseTemp.addEventListener("click", function () {
        humidifier.addTemp();
        showTemp();
    }, false)

    let decreaseTemp = document.createElement("button");
    decreaseTemp.type = "button";
    decreaseTemp.className = "settingsBtn button";
    decreaseTemp.innerHTML = "Temp Down";
    decreaseTemp.addEventListener("click", function () {
        humidifier.removeTemp();
        showTemp();
    }, false)

    root.children[0].children[0].appendChild(condition);
    condition.appendChild(brand);
    condition.appendChild(status);
    condition.appendChild(onBtn);
    condition.appendChild(offBtn);
    tempMenu.appendChild(currentTemp);
    tempMenu.appendChild(decreaseTemp);
    tempMenu.appendChild(increaseTemp);

    return humidifier;
}

//create plazma
let renderTV = () => {
    const plazma = new TV("Plazma", "Samsung", "50d");

    let tv = document.createElement("div");
    tv.className = plazma._name;
    tv.innerHTML = plazma._name;

    let brand = document.createElement("div");
    brand.className = "prop";
    brand.innerText = `Brand: ${plazma._brand}`;

    let diagonal = document.createElement("div");
    diagonal.className = "prop";
    diagonal.innerText = `Screen size: ${plazma._displaySize}`;

    let status = document.createElement("div");
    status.className = "status";
    status.innerText = "Plazma is off";

    let menu = document.createElement("div");

    let showStatus = () => {
        status.innerText = plazma._state ? "Plazma is on" : "Plazma is off";
    }

    let onBtn = document.createElement("button");
    onBtn.type = "button";
    onBtn.className = "onBtn button";
    onBtn.innerHTML = "On";
    onBtn.addEventListener("click", function () {
        plazma.on();
        tv.appendChild(menu);
        showStatus();
    })

    let offBtn = document.createElement("button");
    offBtn.type = "button";
    offBtn.className = "offBtn button";
    offBtn.innerHTML = "Off";
    offBtn.addEventListener("click", function () {
        plazma.off();
        tv.removeChild(menu);
        showStatus();
    })

    let currentChannel = document.createElement("div");
    currentChannel.className = "status";
    currentChannel.innerText = "Channel is " + plazma._currentChannel;

    function  showChannel() {
        currentChannel.innerText = `Channel is ${plazma._currentChannel}`;
    }

    let increaseChannel = document.createElement("button");
    increaseChannel.type = "button";
    increaseChannel.className = "settingsBtn button";
    increaseChannel.innerHTML = "Next Channel";
    increaseChannel.addEventListener("click", function () {
        plazma.nextChannel();
        showChannel();
    }, false)

    let decreaseChannel = document.createElement("button");
    decreaseChannel.type = "button";
    decreaseChannel.className = "settingsBtn button";
    decreaseChannel.innerHTML = "Prev Channel";
    decreaseChannel.addEventListener("click", function () {
        plazma.prevChannel();
        showChannel();
    }, false)

    let volume = document.createElement("div");
    volume.className = "status";
    volume.innerText = `Volume is ${plazma._currentVolume}`;

    let showVolume = () => {
        volume.innerText = `Volume is  ${plazma._currentVolume}`;
    }

    let increaseVolume = document.createElement("button");
    increaseVolume.type = "button";
    increaseVolume.className = "settingsBtn button";
    increaseVolume.innerHTML = "Volume++";
    increaseVolume.addEventListener("click", function () {
        plazma.upVolume();
        showVolume();
    }, false)

    let decreaseVolume = document.createElement("button");
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

    return plazma;
}