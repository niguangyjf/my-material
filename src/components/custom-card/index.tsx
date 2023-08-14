import React, { createElement } from 'react';
import './index.scss'

export interface CustomCardProps {
  /**
   * 容器的样式
   */
  style?: React.CSSProperties;
  /**
   * 头部的样式
   */
  headStyle?: React.CSSProperties;
  /**
   * 内容区的样式
   */
  bodyStyle?: React.CSSProperties;
  /**
   * 标题
   */
  title?: string;
  /**
   * 插槽区
   */
  splot?: React.ReactNode;
  /**
   * 插槽区2
   */
  // slot?: React.ReactNode;
}

const CustomCard: React.FC<CustomCardProps> = ({
  style,
  headStyle,
  children,
  bodyStyle,
  title,
  splot,
  // slot
}) => {
console.log(children, `XZZZZZZZZZZZZZZZZZZZZZZZZ`)
  return (
    <div
      data-name="Grid"
      style={{...style}}
      className="custom_card"
    >
      <div className="custom_card_head" style={{...headStyle}}>
        <span style={{fontWeight: "bold"}}>{title}</span>
        <span>{splot}</span>
        {/* <span>{slot}</span> */}
      </div>
      <div className='custom_card_body' style={{...bodyStyle}}>
        {children}
      </div>
    </div>
  );
};

CustomCard.defaultProps = {
  title: "title"
};

export { CustomCard };