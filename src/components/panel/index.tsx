import React, { Component } from 'react';
import './index.less';

export interface PanelProps {
  className?:string;
  title?: string | React.ReactNode;
  extra?: string | React.ReactNode;
}

export default class Panel extends Component<PanelProps, any> {
  renderPanelHeader=(): null|React.ReactNode=>{
    const { title, extra } = this.props;
    if(!(title||extra)){
      return  null;
    }
    return (
      <div className="py_panel_header">
        <span className={`py_panel_header_title`}>{title}</span>
        <div className={`py_panel_header_extra`}>{extra}</div>
      </div>
    );
  }
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
    const { children, className, title, extra } = this.props;
    const panelClassName:string = className? `py_panel ${className}`: 'py_panel';
    return (
      <div className={panelClassName}>
        {
          this.renderPanelHeader()
        }
        <div className="py_panel_content">
          {children}
        </div>
      </div>
    );
  }
}
