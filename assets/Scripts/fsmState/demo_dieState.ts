import { _decorator, Animation, Component, Node } from 'cc';
import { fsmState } from './fsmState';
const { ccclass, property } = _decorator;

@ccclass('demo_dieState')
export class demo_dieState extends fsmState {
  // 进入状态
  onEnter() {
    super.onEnter()
    console.log("die")
    this.component.getComponent(Animation).play("hitbirddie")
  }

  // 状态更新中
  onUpdate() {
    super.onUpdate()
  }
}



