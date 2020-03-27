import React, { Component, SyntheticEvent, ReactNode } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import Panel from 'src/components/panel/index';
import { ConnectState, ConnectProps } from 'src/models/connect';
import { DemoState } from 'src/models/demo';

interface InitState {
  name: string;
  num: number;
}

type SetCount = (e: SyntheticEvent) => void;

interface DemoProps {
  demo: DemoState;
}

@connect(({ demo, loading }: ConnectState) => ({
  demo,
  loading: loading.models.demo
}))
export default class Demo extends Component<DemoProps & ConnectProps, any> {
  state: InitState = {
    name: 'mobius',
    num: 0
  };

  setCount: SetCount = () => {
    const { num } = this.state;
    this.setState({
      num: num + 1
    });
  }

  setAvatar1 = async () => {
    const { dispatch } = this.props;
    console.log('avatar');
    dispatch({
      type:'demo/setAvatar',
      payload: {
        avatar: Date.now()
      }
    });
  }

  render(): ReactNode {
    const { name, num } = this.state;
    const { demo :{ avatar } } = this.props;
    return (
      <div className="demo">
        <Panel title="我是第一个标题">
          <p>a project with react&dva&typescript</p>
          <Button onClick={this.setAvatar1}>change Name{avatar}</Button>
          {name}
        </Panel>
        <Panel title="我是第二个标题">
          <Button onClick={this.setCount}>CLICK</Button>
          {num}
        </Panel>
      </div>
    );
  }
}
