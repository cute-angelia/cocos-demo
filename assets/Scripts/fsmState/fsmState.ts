import { _decorator, Component, Node } from 'cc';
import { fsmStateManager } from './fsmStateManager';
const { ccclass, property } = _decorator;

@ccclass('fsmState')
export class fsmState {
  // 当前状态
  StateId: number

  // 状态拥有者
  component: Component

  // 所属状态机
  fsmManager: fsmStateManager;

  constructor(StateId: number, component: Component, fsmManager: fsmStateManager) {
    this.StateId = StateId
    this.component = component
    this.fsmManager = fsmManager
  }

  // 进入状态
  onEnter() { }

  // 状态更新中
  onUpdate() { }
}

