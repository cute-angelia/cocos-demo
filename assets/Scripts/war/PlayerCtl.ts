import { _decorator, Component, Node, v3, EventTouch, NodeEventType, Prefab, instantiate, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerCtl')
export class PlayerCtl extends Component {

  @property(Prefab)
  bulletProfab: Prefab = null;


  start() {
    this.node.on(NodeEventType.TOUCH_MOVE, (touch: EventTouch) => {
      this.node.setWorldPosition(v3(touch.getUILocation().x, touch.getUILocation().y))
    })


    this.schedule(() => {
      // 创建子弹
      let bullet = instantiate(this.bulletProfab)
      // bullet.setParent(director.getScene())
      bullet.setParent(this.node.parent);

      console.log("创建子弹", this.node.getPosition().x, this.node.getPosition().y);

      bullet.setPosition(
        this.node.getPosition().x,
        this.node.getPosition().y + 80
      );


    }, 0.5)
  }

  update(deltaTime: number) {

  }
}

