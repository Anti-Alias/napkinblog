import init from './game/rpg_tournament.js'
async function main() {
    window.devicePixelRatio = 1.0;
    try {
        await init();
    }
    catch(error) {
        if (!error.message.startsWith("Using exceptions for control flow, don't mind me. This isn't actually an error!")) {
            throw error;
        }
    }
}
main();