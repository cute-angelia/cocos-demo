import { _decorator, CCBoolean, Component, find, Node } from 'cc';
import { PlayerCtl } from './PlayerCtl';
import { StartGameCtl } from './StartGameCtl';
const { ccclass, property } = _decorator;

@ccclass('BgCrl')
export class BgCrl extends Component {
  @property
  height: number = 852;

  @property(CCBoolean)
  symbol: boolean = true;

  @property(PlayerCtl)
  player: PlayerCtl = null;

  @property(StartGameCtl)
  startgame: StartGameCtl = null

  start() {

  }

  update(deltaTime: number) {
    if (this.symbol) {
      for (const element of this.node.children) {
        element.setPosition(element.getPosition().x / 2, element.getPosition().y - deltaTime * 50)
        if (element.getPosition().y <= -this.height) {
          element.setPosition(
            element.getPosition().x,
            element.getPosition().y + this.height * 2,
          )
        }
      }
    }
  }

  pause() {
    this.symbol = false
  }

  restart() {
    this.symbol = true

    console.log("restart game")

    // 隐藏按钮
    this.startgame.hide();

    // 开始游戏
    // find("Canvas/player/hero1").getComponent(PlayerCtl)?.startGame();
    this.player.startGame();

  }
}

