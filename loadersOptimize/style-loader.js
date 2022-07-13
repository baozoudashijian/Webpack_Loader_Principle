const transfrom = (code) => 
    `
    if(document) {
        let style = document.createElement('style') 
        style.innerHTML = ${code} + 'body {background: pink}'
        document.head.appendChild(style)
    }
    `

module.exports = transfrom
