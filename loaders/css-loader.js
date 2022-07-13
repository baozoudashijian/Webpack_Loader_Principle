const transfrom = (code) => `
        let str = ${JSON.stringify(code)}
        if(document) {
          let style = document.createElement('style') 
          style.innerHTML = str + 'body {background: pink}'
          document.head.appendChild(style)
        }
      `
module.exports = transfrom