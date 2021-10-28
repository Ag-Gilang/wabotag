// By RC047 :V

let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Silahkan masukkan laporan', m)
    if (text > 300) return conn.reply(m.chat, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks!', m)
    var nomor = m.sender
    const laporan = `*「 REPORT 」*\nNomor : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid))
    m.reply(laporan, jid)
    conn.reply(m.chat, '✔️Masalah telah di laporkan ke Owner Bot, laporan palsu/main2 tidak akan ditanggapi!', m)
}
handler.help = ['bug', 'report'].map(v => v + ' <laporan>')
handler.tags = ['info']
handler.command = /^(bug|report)$/i

module.exports = handler
