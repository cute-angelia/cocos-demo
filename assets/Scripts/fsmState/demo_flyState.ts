import { _decorator, Animation, Component, Node } from 'cc';
import { fsmState } from './fsmState';
const { ccclass, property } = _decorator;

@ccclass('demo_flyState')
export class demo_flyState extends fsmState {
  // 进入状态
  onEnter() {
    super.onEnter()
    this.component.getComponent(Animation).play("hitbirdfly")
  }

  // 状态更新中
  onUpdate() {
    super.onUpdate()
  }
}

