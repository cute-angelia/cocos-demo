import { _decorator, CCBoolean, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BgCrl')
export class BgCrl extends Component {


  @property
  height: number = 852;

  @property(CCBoolean)
  private symbol: boolean = true;

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
  }
}

