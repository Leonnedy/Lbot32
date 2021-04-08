let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'no te juzgare el hecho de que me desaprovechas usando tiktok, pero almenos poneme el link para que lo descargue no?'
  let res = await fetch(global.API('xteam', '/dl/tiktok', {
    url: args[0]
  }, 'APIKEY'))
  let json = await res.json()
  if (!json.result) throw json
  conn.sendFile(m.chat, json.result.url, 'tiktok.mp4', `
_*Username:*_ @${json.result.username}
`.trim(), m, false, {
    thumbnail
  })
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tiktok(dl)?)$/i

module.exports = handler