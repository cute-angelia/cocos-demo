import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LandCtl')
export class LandCtl extends Component {

  @property
  speed: number = 4;

  @property
  width: number = 288;

  start() {

  }

  update(deltaTime: number) {
    for (const bg of this.node.children) {




      bg.setPosition(
        bg.getPosition().x - this.speed * deltaTime,
        bg.getPosition().y,
      )

      if (bg.getPosition().x <= -this.width / 2) {
        bg.setPosition(
          bg.getPosition().x + this.width * 2,
          bg.getPosition().y,
        )
      }
    }
  }
}

