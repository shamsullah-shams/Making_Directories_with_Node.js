const fs = require('fs');
// ----------- @@ Array of folders and files @@ -----------
const express_dir = [
    'App', 'app.js', 'route', 'route.js', 'public', 'app.js', 'style.css', 'controllers', 'middleware'
];

// ---------- @@ for checking every element of array @@ ------------
express_dir.forEach((a, index) => {

    // @@ ------------ checks root element if does not exist @@ ---------------
    if (index === 0) {
        if (!fs.existsSync(`./${a}`)) {
            fs.mkdirSync(`./${a}`);
        }
    } else {
        // @@ -------------- checks if the element needs to be a file @@ ------------------
        if (a.includes('.')) {
            // @@ ----------- find the parent element of the file @@ -------------------
            for (let i = index - 1; i >= 0; i--) {

                if (!express_dir[i].includes('.')) {
                    // @@ ----------- checks if the parent element needs to be the root element @@ ------------
                    if (express_dir[i] === 'App') {
                        fs.writeFileSync(`./App/${a}`, '"some text"');
                    } else if (!fs.existsSync(`./App/${express_dir[i]}/${a}`)) {
                        fs.writeFileSync(`./App/${express_dir[i]}/${a}`, '"some text"');
                    }
                    return;
                }
            }
        } else {
            // @@ --------------- create directory if not exists @@ ----------------
            if (!fs.existsSync(`./App/${a}`)) {
                fs.mkdirSync(`./App/${a}`);
            }
        }
    }

})