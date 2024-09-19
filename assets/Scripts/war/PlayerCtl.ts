import { _decorator, Component, Node, v3, EventTouch, NodeEventType, Prefab, instantiate, director, PhysicsSystem2D, Contact2DType, Collider2D, IPhysics2DContact, find, resources, SpriteFrame, Sprite } from 'cc';
const { ccclass, property } = _decorator;

import { BulletCtl } from './BulletCtl';
import { EmemyCtl } from './EmemyCtl';
import { BgCrl } from './BgCrl';

@ccclass('PlayerCtl')
export class PlayerCtl extends Component {

  @property(Prefab)
  bulletProfab: Prefab = null;

  @property(Prefab)
  ememyProfab: Prefab = null;


  onLoad() {
    // 注册全局碰撞回调函数
    PhysicsSystem2D.instance?.on(
      Contact2DType.BEGIN_CONTACT,
      this.onBeginContact,
      this
    );
  }

  onBeginContact(
    selfCollider: Collider2D,
    otherCollider: Collider2D,
    contact: IPhysics2DContact | null
  ) {

    console.log("碰撞 self:", selfCollider.tag, otherCollider.tag);

    // 子弹和敌人碰撞
    if (
      (selfCollider.tag === 0 && otherCollider.tag === 1) ||
      (selfCollider.tag === 1 && otherCollider.tag === 0)
    ) {
      selfCollider.tag === 0
        ? selfCollider.getComponent(BulletCtl).miss()
        : selfCollider.getComponent(EmemyCtl).die();
      otherCollider.tag === 1
        ? otherCollider.getComponent(EmemyCtl).die()
        : otherCollider.getComponent(BulletCtl).miss();
    }

    // 敌人和英雄碰撞
    if (
      (selfCollider.tag === 1 && otherCollider.tag === 2 && !selfCollider.getComponent(EmemyCtl).isDie) ||
      (selfCollider.tag === 2 && otherCollider.tag === 1 && !otherCollider.getComponent(EmemyCtl).isDie)
    ) {
      find("Canvas/bg").getComponent(BgCrl)?.pause();
      selfCollider.tag === 1
        ? selfCollider.getComponent(EmemyCtl).die()
        : otherCollider.getComponent(EmemyCtl).die();
      this.lose();
    }
  }


  lose(): void {
    // 暂停所有计时器
    this.unscheduleAllCallbacks();
    resources.load(
      "AirplaneWars/hero1_die/spriteFrame",
      SpriteFrame,
      (err: Error, data: SpriteFrame) => {
        if (!err) {
          this.node.getComponent(Sprite).spriteFrame = data;
        }
      }
    );
  }


  start() {
    this.node.on(NodeEventType.TOUCH_MOVE, (touch: EventTouch) => {
      this.node.setWorldPosition(v3(touch.getUILocation().x, touch.getUILocation().y))
    })


    // 创建子弹
    this.schedule(() => {
      let bulletProfab = instantiate(this.bulletProfab)
      // bulletProfab.setParent(director.getScene())
      bulletProfab.setParent(this.node.parent);

      // bulletProfab.getComponent(BulletCtl).miss()
      // console.log("创建子弹", this.node.getPosition().x, this.node.getPosition().y);

      bulletProfab.setPosition(
        this.node.getPosition().x,
        this.node.getPosition().y + 80
      );
    }, 0.5)


    // 敌人计时器
    this.schedule(() => {
      let aNumber: number = 175 * Math.random() + 1;
      let xPos: number = Math.floor(aNumber);
      let symbol: boolean = Math.random() > 0.5;
      if (!symbol && xPos !== 0) {
        xPos = -xPos;
      }

      let enemy: Node = instantiate(this.ememyProfab);
      enemy.setParent(this.node.parent);
      enemy.setPosition(xPos, 390 * 2);
    }, 0.5);


  }

  update(deltaTime: number) {

  }
}

