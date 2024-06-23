document.addEventListener('DOMContentLoaded', (event) => {
    // var script = document.createElement('script');
    // script.src = "js/animals.js";
    // document.head.appendChild(script);

    // アルファベット変換
    let toHiragana = function (kana) {
        return kana.replace(/[\u30a1-\u30f6]/g, function (match) {
            // console.log(String.fromCharCode(match.charCodeAt(0) - 0x60));
            return String.fromCharCode(match.charCodeAt(0) - 0x60);
        });
    };

    // 問題

    let h2 = document.getElementsByTagName('h2')[0];
    h2.innerHTML = animals[3];

    // 入力値
    let input = document.getElementsByTagName('input')[0];

    // 入力文字　表示　ひらがな
    let h3 = document.getElementsByTagName('h3')[0];
    // h3.innerHTML = toHiragana(animals[3]);

    let animal_name = ["", ""];

    function isObject(value) {
        return value !== null && typeof value === 'object'
    }

    for (let i = 0; i < animals[3].length; i++) {
        // console.log(romanMap[toHiragana(animals[0][i])]);
        if (isObject(romanMap[toHiragana(animals[3][i])])) {
            let object = [Object.keys(romanMap[toHiragana(animals[3][i])])[0], Object.keys(romanMap[toHiragana(animals[3][i])])[1]];
            animal_name[0] += romanMap[toHiragana(animals[3][i])][object[0]];
            animal_name[1] += romanMap[toHiragana(animals[3][i])][object[1]];
            // console.log("オブジェクト");
        } else {
            animal_name[0] += romanMap[toHiragana(animals[3][i])];
            animal_name[1] += romanMap[toHiragana(animals[3][i])];
            // console.log(romanMap[toHiragana(animals[3][i])]);
        }
        // console.log(isObject(romanMap[toHiragana(animals[3][i])]));
    }

    let h4 = document.getElementsByTagName('h4')[0];
    h4.children[1].innerHTML = animal_name[0];

    let h5 = document.getElementsByTagName('h5')[0];
    h5.children[1].innerHTML = animal_name[1];

    // console.log(animal_name[0]);
    // console.log(animal_name[1]);

    let animals_hirahana = [];

    // console.log(toHiragana(animals[3]));
    // console.log(romanMap[toHiragana(animals[3][3])]);
    // console.log(romanMap[toHiragana(animals[3][3])].kunrei);
    // console.log(romanMap[toHiragana(animals[3][3])]['kunrei']);
    // console.log(typeof romanMap[toHiragana(animals[3][3])]);
    // console.log(Object.keys(romanMap[toHiragana(animals[3][3])])[0]);
    // let object = [Object.keys(romanMap[toHiragana(animals[3][3])])[0],Object.keys(romanMap[toHiragana(animals[3][3])])[1]];
    // console.log(romanMap[toHiragana(animals[3][3])][object[0]]);
    // console.log(Object.keys(romanMap[toHiragana(animals[3][3])])[1]);

    let getRoman = function (kana) {
        var roman = romanMap[toHiragana(kana)];
        if (roman) {
            if (typeof roman === 'string') {
                // console.log(roman);
                return roman;
            } else if (type === 'hepburn') {
                // console.log(roman.hepburn);
                return roman.hepburn;
            } else if (type === 'kunrei') {
                // console.log(roman.kunrei);
                return roman.kunrei;
            }
        } else {
            // console.log(kana);
            return kana;
        }
    };

    // console.log(getRoman(animals[0]));

    for (let j = 0; j < animals.length; j++) {
        let animal_name = "";

        for (let i = 0; i < animals[j].length; i++) {
            // console.log(romanMap[toHiragana(animals[0][i])]);
            animal_name += romanMap[toHiragana(animals[j][i])];
        }
        animals_hirahana[j] = animal_name;

    }
    for (let i = 0; i < animals_hirahana.length; i++) {
        // console.log(animals_hirahana[i]);
    }

    let keydown_correct = 0;

    document.body.addEventListener("keydown", (event) => {
        // input.addEventListener("keydown", (event) => {
        if (event.code == "Minus") {
            console.log("aaaaaaaaaaaa");

        }
        if (event.key === "Backspace" || event.isComposing || event.key === 229) {
            console.log("aaaaaaaaaaaa");
            return;
        }
        if (event.code.replace("Key", "").toLowerCase() == animal_name[0][keydown_correct]
            || event.code.replace("Key", "").toLowerCase() == animal_name[1][keydown_correct]
            || event.code.replace("Minus", "-") == animal_name[0][keydown_correct]
            || event.code.replace("Minus", "-") == animal_name[1][keydown_correct]) {

            console.log(event.code);

            h4.children[0].innerHTML += event.code.replace("Key", "").toLowerCase();
            h5.children[0].innerHTML += event.code.replace("Key", "").toLowerCase();
            // h3.innerHTML += event.code.replace("Key", "").toLowerCase();
            // console.log(animal_name[0][0]);
            keydown_correct++;
            h4.children[1].innerHTML = h4.children[1].innerHTML.slice(keydown_correct - animal_name[0].length);
            h5.children[1].innerHTML = h5.children[1].innerHTML.slice(keydown_correct - animal_name[0].length);
            console.log(h3.innerHTML[0]);
            console.log(h4.children[1].innerHTML);
            console.log(animal_name[0].length);
            console.log("keydown_correct：" + keydown_correct);
        }
        if (keydown_correct == animal_name[0].length || keydown_correct == animal_name[1].length) {
            let random = Math.floor(Math.random() * 100);
            keydown_correct = 0;
            h2.innerHTML = animals[random];
            h4.children[0].innerHTML = "";
            h4.children[1].innerHTML = "";
            h5.children[0].innerHTML = "";
            h5.children[1].innerHTML = "";

            animal_name[0] = "";
            animal_name[1] = "";
            for (let i = 0; i < animals[random].length; i++) {
                // console.log(romanMap[toHiragana(animals[0][i])]);
                if (isObject(romanMap[toHiragana(animals[random][i])])) {
                    let object = [Object.keys(romanMap[toHiragana(animals[random][i])])[0], Object.keys(romanMap[toHiragana(animals[random][i])])[1]];
                    animal_name[0] += romanMap[toHiragana(animals[random][i])][object[0]];
                    animal_name[1] += romanMap[toHiragana(animals[random][i])][object[1]];
                    // console.log("オブジェクト");
                } else {
                    animal_name[0] += romanMap[toHiragana(animals[random][i])];
                    animal_name[1] += romanMap[toHiragana(animals[random][i])];
                    // console.log(romanMap[toHiragana(animals[3][i])]);
                }
                // console.log(isObject(romanMap[toHiragana(animals[3][i])]));
            }

            h4.children[1].innerHTML = animal_name[0];
            h5.children[1].innerHTML = animal_name[1];
        }
        // console.log(animal_name[0][0]);
        // console.log(event.code.replace("Key", ""));
        // console.log(event.code);

    });

});


// 参考
// https://janken.asotetu.work/js_tip/
// https://qiita.com/riversun/items/3ff4f5ecf5c21b0548a4
// https://shanabrian.com/web/javascript/kana-to-roman.php
// https://zenn.dev/suin/books/8985cbff87b524e11c2b/viewer/01e63d