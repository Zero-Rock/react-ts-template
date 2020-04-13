/**
 * Created by 含光<mobius_pan@yeah.net> on 2020/4/13 8:30 下午.
 */
import React, { useState, useEffect, useCallback } from 'react';
import { Button } from 'antd';
import { Panel } from 'src/components/index';
const UseEffectsComp = () => {
  const [list, setList] = useState([]);
  const [type, setType] = useState('type-A');

  const fetchData = (timer: number)=>{
    setList((p)=>{
      const tempList = [...p, timer];
      return tempList;
    });
  };

  useEffect(()=>{
    setList((p)=>{
      return [];
    });
    fetchData(Date.now());
  }, [type]);

  const handleChangeType = () => {
    setType(type === 'type-A' ? 'type-B': 'type-A');
  };

  return(
    <Panel>
      <Button onClick={handleChangeType}>切换TYPE</Button>
      ~~
      {/* tslint:disable-next-line:jsx-no-lambda */}
      <Button onClick={()=>{fetchData(Date.now());}}>拉取数据</Button>
      <pre>
        {
          JSON.stringify({ type, list }, null, 2)
        }
      </pre>
    </Panel>
  );
};

export default UseEffectsComp;
