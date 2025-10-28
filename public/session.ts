import { io, Socket } from "socket.io-client";
import { ClientInput, Keys } from "../shared/types";
import { Vec2 } from "../shared/v2";
import { config } from "../shared/config";
import { settings } from "./settings";
import { Player } from "../shared/player";

class Session {
	socket: Socket;
	currentRoom: string | null;
	canvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D;
	gameLoop: number | null;

	currentPlayer: Player | undefined;
	keys: Keys;
	clientInput: ClientInput;

	constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
		this.socket = io() as Socket;
		this.currentRoom = null;
		this.keys = {} as Keys;
		this.canvas = canvas as HTMLCanvasElement;
		this.ctx = ctx as CanvasRenderingContext2D;
		this.gameLoop = null as number | null;
		this.currentPlayer = undefined;
		this.clientInput = new ClientInput();
	}

	resetSession(): void {
		this.currentRoom = null;
		this.keys = {} as Keys;
		this.gameLoop = null;
		this.currentPlayer = undefined;
		this.clientInput = new ClientInput();
	}

	resetInput(): void {
		// this.clientInput = new ClientInput();
		this.clientInput.interval = 0;
		this.clientInput.mouseClick = false;
	}
}

export const session = new Session(
	document.getElementById("game-canvas") as HTMLCanvasElement,
	(document.getElementById("game-canvas") as HTMLCanvasElement)?.getContext("2d") as CanvasRenderingContext2D
);