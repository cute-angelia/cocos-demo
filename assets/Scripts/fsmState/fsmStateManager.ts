import { _decorator, Component, Node } from 'cc';
import { fsmState } from './fsmState';
const { ccclass, property } = _decorator;

@ccclass('fsmStateManager')
export class fsmStateManager {
  // 状态列表
  StateList: fsmState[] = [];

  // 当前index
  CurrentIndex: number = -1;

  ChangeState(StateId: number) {
    this.CurrentIndex = StateId
    // enter
    this.StateList[this.CurrentIndex].onEnter();
  }

  // 更新
  OnUpate() {
    if (this.CurrentIndex != -1) {
      this.StateList[this.CurrentIndex].onUpdate();
    }
  }

}

