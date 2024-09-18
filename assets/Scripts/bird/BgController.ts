import { _decorator, Component, Node, CCInteger } from 'cc';
import { BirdCtl } from './BirdCtl';
const { ccclass, property } = _decorator;

@ccclass('BgController')
export class BgController extends Component {

  // 速度
  @property(CCInteger)
  speed: number = 4;

  // 宽度
  @property
  width: number = 288;

  @property(BirdCtl)
  Bird: BirdCtl = null;

  start() {
    // 鼠标点击事件
    for (const element of this.node.children) {
      element.on(Node.EventType.MOUSE_DOWN, () => {
        console.log("鼠标按下")
        this.Bird?.fly()
      })
    }
  }

  update(deltaTime: number) {
    for (const bg of this.node.children) {

      bg.setPosition(
        bg.getPosition().x - this.speed * deltaTime,
        bg.getPosition().y,
      )

      if (bg.getPosition().x <= -this.width) {
        bg.setPosition(
          bg.getPosition().x + this.width * 2,
          bg.getPosition().y,
        )
      }
    }
  }
}

