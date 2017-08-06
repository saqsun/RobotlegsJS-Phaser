import { injectable, inject, IConfig } from "robotlegs";

import { IStateMediatorMap } from "@robotlegsjs/robotlegsjs-phaser";

import { BootMediator } from "../mediators/BootMediator";
import { PreloadMediator } from "../mediators/PreloadMediator";
import { GameTitleMediator } from "../mediators/GameTitleMediator";
import { MainMediator } from "../mediators/MainMediator";
import { GameOverMediator } from "../mediators/GameOverMediator";

import { Boot } from "../states/Boot";
import { Preload } from "../states/Preload";
import { GameTitle } from "../states/GameTitle";
import { Main } from "../states/Main";
import { GameOver } from "../states/GameOver";

@injectable()
export class StateMediatorConfig implements IConfig {

    @inject(IStateMediatorMap)
    public stateMediatorMap: IStateMediatorMap;

    public configure(): void {
        this.mapstateMediators();
    }

    private mapstateMediators(): void {
        this.stateMediatorMap.map(Boot).toMediator(BootMediator);
        this.stateMediatorMap.map(Preload).toMediator(PreloadMediator);
        this.stateMediatorMap.map(GameTitle).toMediator(GameTitleMediator);
        this.stateMediatorMap.map(Main).toMediator(MainMediator);
        this.stateMediatorMap.map(GameOver).toMediator(GameOverMediator);
    }
}