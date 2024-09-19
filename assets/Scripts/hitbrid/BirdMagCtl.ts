import { _decorator, Component, instantiate, Label, Node, Prefab } from 'cc';
import { BirdCtl } from './BirdCtl';
const { ccclass, property } = _decorator;

// 加分，游戏结束

@ccclass('BirdMagCtl')
export class BirdMagCtl extends Component {

  @property(Prefab)
  hitbird: Prefab = null;

  // 分数
  score: number = 0;

  @property(Label)
  scoreLabel: Label = null;

  @property(Node)
  gameOverLabel: Node = null;

  start() {
    this.schedule(() => {
      let ibird = instantiate(this.hitbird)
      ibird.setParent(this.node.parent)
      ibird.setPosition(this.getRandomInRange(-132, 88), 0)

      // 回调
      ibird.getComponent(BirdCtl).dieCallBack = () => {
        this.die()
      }
      ibird.getComponent(BirdCtl).addScoreCallBack = () => {
        this.addScore()
      }

      // 飞
      ibird.getComponent(BirdCtl).fly()

    }, 1)

  }

  getRandomInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  update(deltaTime: number) {

  }

  addScore() {
    this.score += 100
    this.scoreLabel.string = this.score + ""
  }


  die() {
    // 暂停所有计时器
    this.unscheduleAllCallbacks();

    // 销毁
    this.node.destroyAllChildren()

    // 游戏结束
    this.gameOverLabel.active = true
  }


}

