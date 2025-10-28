import { PlayerData } from "../shared/types";
import { v2 } from "../shared/v2";
import { Player } from "../shared/player";
import { settings } from "./settings";

export class State {
	players: Player[];

	constructor() {
		this.players = [];
	}

	changeState(newState: State): void {
		this.players = newState.players;
	}

	resetState(): void {
		this.players = [];
	}

	updatePlayer(data: PlayerData): void {
		const player = this.players.find((p) => p.id === data.id);
		if (player) {
			player.loadData(data);
		}

		console.log(player);
	}
}

export const state = new State();