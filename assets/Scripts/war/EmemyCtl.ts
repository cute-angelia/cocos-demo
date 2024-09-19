import { _decorator, Component, Node, resources, Sprite, SpriteFrame, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EmemyCtl')
export class EmemyCtl extends Component {

  @property
  speed: number = 400;

  @property
  isDie: boolean = false;

  start() {

  }

  update(deltaTime: number) {
    this.node.setPosition(v3(this.node.getPosition().x, this.node.getPosition().y - this.speed * deltaTime))
    if (this.node.getPosition().y <= -480) {
      this.die()
    }
  }

  die() {
    if (!this.isDie) {
      this.isDie = true
      resources.load("AirplaneWars/enemy0_die/spriteFrame", SpriteFrame, (err, data) => {
        if (!err) {
          this.node.getComponent(Sprite).spriteFrame = data
        } else {
          console.log(err)
        }
        setTimeout(() => {
          this.node?.destroy()
        }, 1000);
      })
    }
  }
}

