import game, { handleUserAction } from "./game/gameState";
import { TICK_RATE } from "./game/constants";
import initButtons from "./game/buttons";

async function init() {
	console.log("starting the game");
	initButtons(handleUserAction);

	let nextTimeToTick = Date.now();

	function nextAnimationFrame() {
		const now = Date.now();
		if (nextTimeToTick <= now) {
			game.tick();
			nextTimeToTick = now + TICK_RATE;
		}
		requestAnimationFrame(nextAnimationFrame);
	}
	nextAnimationFrame();
}

init();
