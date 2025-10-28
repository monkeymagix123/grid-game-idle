import { config } from "./config";
import { clamp } from "./math";

import { ClientInput, PlayerData } from "./types";
import { v2, Vec2 } from "./v2";

export abstract class Player {
	id: string;
	name: string;
	team: string; // red or blue
	ready: boolean;

    pos: Vec2;

    // resourcesManager: ResourceManager;

    constructor(id: string, team: string, x: number, y: number, name: string = "Player", ready: boolean = false) {
        this.id = id;
        this.name = name;
        this.team = team;
        this.ready = ready;

        this.pos = new Vec2(x, y);
    }

    /**
     * Updates the player by a given delta time
     * @param dt time to update (in seconds)
     */
    update(dt: number): void {
        // this.decrementCooldown(dt);
    }

    // doDamage(amount: number, target: Player): void {
    //     target.takeDamage(amount);
    // }

    // takeDamage(amount: number): void {
    //     if (this.startDash) return; // Invulnerable during dash
        
    //     this.health -= amount;
    //     if (this.health < 0) this.health = 0;
    // }

    // heal(amount: number): void {
    //     this.health += amount;
    //     if (this.health > 100) this.health = 100;
    // }

    // isAlive(): boolean {
    //     return this.health > 0;
    // }


    // data-related stuff

    /**
     * Returns PlayerData object with necessary data for this player
     */
    getData(): PlayerData {
        return {
            id: this.id,
            pos: this.pos,
        };
    }

    /**
     * Loads PlayerData data into this player
     */
    loadData(data: PlayerData) {
        Object.assign(this, data);

        // console.log(this.team + " health: " + this.health);
    }

    /**
     * Updates player based on ClientInput
     */
    doInput(input: ClientInput) {
        const dt = input.interval;

        // // Update position
		// if (input.keys["arrowdown"] || input.keys["s"]) this.moveDown(dt * config.speedPerSecond);
		// if (input.keys["arrowup"] || input.keys["w"]) this.moveUp(dt * config.speedPerSecond);
		// if (input.keys["arrowleft"] || input.keys["a"]) this.moveLeft(dt * config.speedPerSecond);
		// if (input.keys["arrowright"] || input.keys["d"]) this.moveRight(dt * config.speedPerSecond);

        // // Dash calculations
		// if (input.mouseClick) {
		// 	this.attemptDash(input.mousePos);
		// }
    }
}
