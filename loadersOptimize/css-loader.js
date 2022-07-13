const transfrom = (code) => `
        let str = ${JSON.stringify(code)}
      `
module.exports = transfrom