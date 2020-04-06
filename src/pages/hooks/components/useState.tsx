import React, { useState, ReactElement } from 'react';
import { Button } from 'antd';
import classnames from 'classnames';
import Panel from 'src/components/panel';

interface Iprops {
  title: string;
  className?: string;
}
interface TempClass {
  comp: boolean;
  [key:string]:boolean;
}
const UseStateComp = ({ title, className }:Iprops): ReactElement<any>=>{
  const [count, setCount] = useState(0);
  const handleSetCount = () => {
    setCount(count+1);
  };
  const templasss: TempClass = {
    comp: true,
  };
  if(className){
    templasss[className]=true;
  }
  const compClass:string =classnames(templasss);
  return(
    <Panel className={compClass}>
      <h2>{title}</h2>
      <p>{count}</p>
      <Button onClick={handleSetCount}>CLICK</Button>
    </Panel>
  );
};

export default UseStateComp
