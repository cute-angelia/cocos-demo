import { _decorator, Animation, Component, Node } from 'cc';
import { fsmStateManager } from './fsmStateManager';
import { demo_flyState } from './demo_flyState';
import { demo_dieState } from './demo_dieState';
const { ccclass, property } = _decorator;

enum BirdState {
  Fly,
  Die
}

@ccclass('BirdCtl')
export class BirdCtl extends Component {

  ani: Animation
  fsmManager: fsmStateManager

  start() {
    this.ani = this.getComponent(Animation)

    this.fsmManager = new fsmStateManager()

    let fly = new demo_flyState(BirdState.Fly, this, this.fsmManager)
    let die = new demo_dieState(BirdState.Die, this, this.fsmManager)

    this.fsmManager.StateList = [fly, die]

    // 执行状态
    this.fsmManager.ChangeState(BirdState.Die)

  }

  update(deltaTime: number) {
    if (this.fsmManager.CurrentIndex != -1) {
      this.fsmManager.OnUpate();
    }
  }

  fly() {
    this.fsmManager.ChangeState(BirdState.Fly)
  }

  die() {
    this.fsmManager.ChangeState(BirdState.Die)
  }

}

