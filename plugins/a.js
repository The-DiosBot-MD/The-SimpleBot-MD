import fetch from 'node-fetch'

var handler = (m, { text }) => m
handler.before = async (m, { text }) => {

let Prefijo = false
const prefixRegex = global.prefix
if (prefixRegex.test(m.text)) Prefijo = true

let api = await fetch(`https://aemt.me/bard?text=${text}`)
let res = await api.json()

await m.reply(res.result)

}
export default handler
