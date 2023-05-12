var rpc = require("discord-rpc")
rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity : {
            details : "Meilleurs serveur français💖",
            state : "Venez nous rejoindre, déjà +1.8k👤",
            assets : {
                large_image : "rp",
                large_text : "💗Lyon RP💗",
            },
            buttons : [
                {label : "📎Discord" , url : "https://discord.gg/lyonrp"},
                {label : "🖇️Linktree",url : "https://linktr.ee/lyonrp"}
            ]
        }
    }
    )
}
);

client.login({ clientId : "1106218149998759998" }).catch(console.error);