import React, { Component, ElementType } from 'react';
import { Button } from 'antd';
import Panel from 'src/components/panel';
import UseStateComp from 'src/pages/hooks/components/useState';
import UseEffectsComp from 'src/pages/hooks/components/use-effects';

interface Comps {
  comp: ElementType;
  title: string;
  key: string | number;
}

interface Istate {
  timer: number;
  list: Comps[];
}

const timer: number = Date.now();
const comps: Comps[] = [ {
  comp: UseStateComp,
  title: 'useState',
  key: 1
}, {
  comp: UseEffectsComp,
  title: 'use-effects',
  key: 2
} ];

export default class Hooks extends Component<any, any> {
  name: string;
  changeTimer: ()=>void;
  state: Istate = {
    timer,
    list: comps.reverse()
  };
  changeTimer = () => {
    this.setState({
      timer: Date.now()
    }, () => {
      console.log(this.name);
    });
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
    const { list } = this.state;
    return (
      <div className="hooks">
        <Panel>
          <Button onClick={this.changeTimer}>Click to Update</Button>
        </Panel>
        {
          list.map((item: Comps) => {
            const { comp: Comp, title, key } = item;
            return <Comp title={title} className={title} key={`${title}-${key}`}/>;
          })
        }
      </div>
    );
  }
}
