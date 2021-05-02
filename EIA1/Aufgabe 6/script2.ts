var africa : string  = "Afrika";
var australia : string = "Australien";
var southamerica : string = "Südamerika";
var northamerica : string = "Nordamerika";
var asia : string = "Asien";
var europe : string = "Europa";
var africa2008 : number = 1028;
var africa2018 : number = 1235.5;
var australia2008 : number = 1993;
var australia2018 : number = 2100.5;
var southamerica2008 : number = 1132.6;
var southamerica2018 : number = 1261.5;
var northamerica2008 : number = 6600.4;
var northamerica2018 : number = 6035.6;
var asia2008 : number = 12954.7;
var asia2018 : number = 16274.2;
var europe2008 : number = 4965.7;
var europe2018 : number  = 4209.3;

var entire2018 : number = (africa2018 + australia2018 + southamerica2018 + northamerica2018+ asia2018 + europe2018) 

window.addEventListener("load", function () {
    document.querySelector('.africa').addEventListener("click", function () { emission(africa, africa2008, africa2018); });
    document.querySelector('.australia').addEventListener("click", function () { emission(australia, australia2008, australia2018); });
    document.querySelector('.southamerica').addEventListener("click", function () { emission(southamerica, southamerica2008, southamerica2018); });
    document.querySelector('.northamerica').addEventListener("click", function () { emission(northamerica, northamerica2008, northamerica2018); });  
    document.querySelector('.asia').addEventListener("click", function () { emission(asia, asia2008, asia2018); });
    document.querySelector('.europe').addEventListener("click", function () { emission(europe, europe2008, europe2018); });
});

function emission(continent, continent2008, continent2018) {
    document.querySelector("#titleRegion").innerHTML = continent;
    document.querySelector("#continentSubtitle").innerHTML = continent;
    document.querySelector("#emissionAbsolute").innerHTML = continent2018.toString();
    document.querySelector("#emissionRelative").innerHTML = Math.round(continent2018 / entire2018 * 100 * 100) / 100 + "%";
    document.querySelector("#growthRelative").innerHTML = Math.round((continent2018 - continent2008) / continent2008 * 100) + "%";
    document.querySelector("#growthAbsolute").innerHTML = Math.round(continent2018 - continent2008).toString();
    document.querySelector(".chart").setAttribute("style", "height:" + (continent2018 / entire2018) * 100 + "%");
};;