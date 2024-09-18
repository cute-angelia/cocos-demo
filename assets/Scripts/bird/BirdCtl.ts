import { _decorator, Component, Collider2D, Animation, Sprite, PhysicsSystem2D, Contact2DType, v2, IPhysics2DContact, RigidBody2D, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BirdCtl')
export class BirdCtl extends Component {

  onLoad() {
    PhysicsSystem2D.instance.enable = true;
    let collider = this.getComponent(Collider2D)
    if (collider) {
      collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact)
    }
  }

  start() {
    this.fly()
  }

  fly() {
    this.node.getComponent(RigidBody2D).linearVelocity = v2(0, 6)
  }

  die() {

  }

  onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null): void {
    // this.node.getComponent(Animation).stop();
    console.log("发生碰撞：", selfCollider.tag, otherCollider.tag)

    selfCollider.getComponent(Animation).stop()
  }

  update(deltaTime: number) {

  }
}

