/**
 * Created by 含光<mobius_pan@yeah.net> on 2020/4/12 9:15 下午.
 */
import React, { Component, ReactNode } from 'react';
import { Spin } from 'antd';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import { debounce, throttle } from 'lodash';
import { Numbers } from 'src/enum/common';
import { isPromise } from 'src/utils';

type a = (target: ReactNode, eventType: string, listener: Function)=> { remove: Function };

interface Iprops {
  loading: boolean;
  trigger: string;
  root: string;
  hasMore: boolean;
  onLoad: Function;
}

export default class LoadMore extends Component<Iprops, any>{
  eventType: string;
  eventTarget: Element | Window;
  targetDom: Element;
  triggerEvent: {remove: Function};
  resizeEvent: {remove: Function};
  threshold: number;

  fixChrome = (e:WheelEvent)=>{
    if(e.deltaY === 1){
      e.preventDefault();
    }
  }

  // tslint:disable-next-line:no-empty
  load= (chek: Function = ()=>{}) => {
    this.detachEvent();
    const { onLoad } = this.props;
    const res = onLoad();
    if(isPromise(res)){
      res.then(()=>{
        if(this.props.hasMore){
          this.attachEvent();
        }
        chek();
      });
    }


  }

  checkHight = () => {
    const { scrollHeight, clientHeight } = this.targetDom;
    const { loading, hasMore } = this.props;
    const hasScrollBar = scrollHeight > clientHeight;
    if(!hasScrollBar && hasMore && !loading){
      this.load(this.checkHight);
    }
  }

  lazyCheck = debounce(this.checkHight, Numbers.hundred);

  handleScroll = ()=>{
    if(!this.props.loading){
      const { scrollHeight, scrollTop, clientHeight } = this.targetDom;
      if(scrollHeight - scrollTop - clientHeight < this.threshold && this.props.hasMore){
        this.load();
      }
    }
  }

  init = () => {
    const { trigger, root } = this.props;
    this.eventType = trigger;
    this.targetDom = document.querySelectorAll(root)[0] || document.documentElement || document.body;
    this.eventTarget = document.querySelectorAll(root)[0] || window;
  }

  attachEvent = () => {
    this.triggerEvent = (addEventListener as a)(this.eventTarget, this.eventType, throttle(this.handleScroll, Numbers.hundred));
    this.resizeEvent = (addEventListener as a)(this.targetDom, 'resize', debounce(this.lazyCheck, Numbers.fiveHundred, { maxWait: Numbers.fiveHundred }));
  }

  detachEvent = () => {
    this.triggerEvent.remove();
    this.resizeEvent.remove();
  }
  componentDidMount(): void {
    window.addEventListener('mousewheel', this.fixChrome as EventListenerOrEventListenerObject, { passive: false });
    this.init();
    this.attachEvent();
  }

  componentWillUnmount(): void {
    window.removeEventListener('mousewheel', this.fixChrome as EventListenerOrEventListenerObject);
    this.detachEvent();
  }

  render(): React.ReactNode {
    return this.props.loading? <Spin tip="loading"><div/></Spin> : null;
  }
}
