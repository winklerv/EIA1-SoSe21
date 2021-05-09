var beats = [];
beats[0] = new Audio("assets/A.mp3");
beats[1] = new Audio("assets/C.mp3");
beats[2] = new Audio("assets/F.mp3");
beats[3] = new Audio("assets/G.mp3");
beats[4] = new Audio("assets/hihat.mp3");
beats[5] = new Audio("assets/kick.mp3");
beats[6] = new Audio("assets/laugh-1.mp3");
beats[7] = new Audio("assets/laugh-2.mp3");
beats[8] = new Audio("assets/snare.mp3");
function playSample(chooseSample) {
    beats[chooseSample].play();
}
window.addEventListener("load", function () {
    document.querySelector("#drum1").addEventListener("click", function () { playSample(0); });
    document.querySelector("#drum2").addEventListener("click", function () { playSample(1); });
    document.querySelector("#drum3").addEventListener("click", function () { playSample(2); });
    document.querySelector("#drum4").addEventListener("click", function () { playSample(3); });
    document.querySelector("#drum5").addEventListener("click", function () { playSample(4); });
    document.querySelector("#drum6").addEventListener("click", function () { playSample(5); });
    document.querySelector("#drum7").addEventListener("click", function () { playSample(6); });
    document.querySelector("#drum8").addEventListener("click", function () { playSample(7); });
    document.querySelector("#drum9").addEventListener("click", function () { playSample(8); });
    var beat = [];
    beat[0] = ("assets/kick.mp3");
    beat[1] = ("assets/snare.mp3");
    beat[2] = ("assets/hihat.mp3");
    document.querySelector('#play-button').addEventListener("click", function () { mixedbeat(); });
    function mixedbeat() {
        setTimeout(function () { playAudio(beat[0]); }, 500);
        setTimeout(function () { playAudio(beat[1]); }, 1000);
        setTimeout(function () { playAudio(beat[2]); }, 1600);
    }
    function playAudio(Beat) {
        var beat = new Audio(Beat);
        beat.play();
    }
});
//# sourceMappingURL=drumpad.js.map