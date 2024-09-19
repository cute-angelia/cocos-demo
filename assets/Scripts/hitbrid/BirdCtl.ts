import { _decorator, Animation, Component, Node, NodeEventType, tween, v3, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BirdCtl')
export class BirdCtl extends Component {

  @property
  hp: number = 1;

  @property
  speed: number = 50;

  // 结束游戏
  @property(Function)
  dieCallBack: Function = null

  // 加分
  @property(Function)
  addScoreCallBack: Function = null

  // 目标点 +-110， 185
  targetPos: Vec3 = null;

  start() {
    this.fly()
  }

  fly() {
    this.targetPos = v3(Math.random() * 220 - 110, 185)


    // 翻转
    if (this.targetPos.x > this.node.getPosition().x) {
      this.node.setScale(-1, 1)
    }

    // move
    let move = tween(this.node).sequence(
      tween(this.node).to(3, { position: v3(this.targetPos.x, this.targetPos.y, 0) }),
    ).start();

    // 触摸⌚️
    this.node.on(NodeEventType.TOUCH_START, (event) => {
      if (this.hp > 0) {
        this.hp--

        // 加分
        this.addScoreCallBack()

        // 掉落
        // this.node.stop
        move.stop()

        // 动画
        this.node.getComponent(Animation).play("hitbirddie")

        // 掉落
        tween(this.node)
          .to(2, { position: v3(this.targetPos.x, -200, 0) })
          .start();

        // 销毁
        setTimeout(() => {
          this.node?.destroy()
        }, 3000);
      }
    })

    // 飞出了屏幕
    // console.log(this.targetPos.x, this.targetPos.y)
  }

  update(deltaTime: number) {
    if (this.node.getPosition().y >= 130) {
      this.dieCallBack()

      this.node.destroy()
    }
  }
}

