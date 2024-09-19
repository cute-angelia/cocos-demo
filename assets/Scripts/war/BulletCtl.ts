import { _decorator, Component, Node, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BulletCtl')
export class BulletCtl extends Component {


  @property
  speed: number = 800;

  start() {

  }

  update(deltaTime: number) {
    // 移动
    this.node?.setWorldPosition(v3(this.node.getWorldPosition().x, this.node.getWorldPosition().y + this.speed * deltaTime));
    // 离开屏幕销毁子弹
    if (this.node?.getPosition().y > 820) {
      this.node?.destroy();
    }

  }

  // 碰到敌人销毁子弹
  miss(): void {
    try {
      this.node?.destroy();
    } catch (e) {
      // ..
    }
  }
}

