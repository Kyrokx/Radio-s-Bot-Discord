module.exports = async (client) => {
    client.user.setActivity('Valorant & listen radio | #help', { type: 'PLAYING' })

    console.log(client.user.tag + " is connected...")
};