const fs = require("fs")

module.exports = async nono => {

    fs.readdirSync("./Events").filter(f => f.endsWith("js")).forEach(async file => {

        let event = require (`../Events/${file}`)
        nono.on(file.split(".js").join(""), event.bind(null, nono))
        console.log(`🧨 | Evenement ${file} chargée avec succès !`)
    })
}