import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PipeCtl')
export class PipeCtl extends Component {

  @property
  speed: number = 30;

  @property
  width: number = 288;

  start() {

  }

  update(deltaTime: number) {
    for (const element of this.node.children) {
      element.setPosition(element.getPosition().x - this.speed * deltaTime, element.getPosition().y)

      if (element.getPosition().x <= -this.width) {
        // 40 -200
        element.setPosition(element.getPosition().x + this.width * 2, Math.random() * 90 + 20)
      }
    }
  }
}

