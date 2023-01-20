
(function () {
    function IDGenerator() {

        // console.log(this.length);
        this.length = 4;
        this.timestamp = +new Date;

        var _getRandomInt = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        var _getRandomAscii = function () {
            var randomNum = _getRandomInt(48, 57);
            var randomLetter = _getRandomInt(65, 90);
            var char;
            // if (_getRandomInt(0, 1) == 0) { return randomNum; 
            // }
            // return randomLetter;
            // 32
            return String.fromCharCode(_getRandomInt(0, 1) ? randomNum : ((_getRandomInt(0, 1) ? randomLetter + 32 : randomLetter)));



        }

        this.generate = function () {
            var ts = this.timestamp.toString();
            var parts = ts.split("").reverse();
            var id = "";


            for (var i = 0; i < this.length; ++i) {
                // var index = _getRandomInt(0, parts.length - 1);
                // var index = _getRandomInt();
                var char = _getRandomAscii();
                console.log(char);
                id += char;
            }

            return id;
        }


    }
    document.addEventListener("DOMContentLoaded", function () {
        var btn = document.querySelector("#generator"),
            output = document.querySelector("#output");

        btn.addEventListener("click", function () {
            var generator = new IDGenerator();
            output.innerHTML = generator.generate();

        }, false);

    });


})();

