import React from "react";
import PropTypes from "prop-types";
import "./index.pcss";

class ContainScroll extends React.PureComponent {
  static propTypes = {
    height: PropTypes.string.isRequired // 滚动区域的高度
  };
  onTouchStart = e => {
    const touch = (e.touches && e.touches[0]) || null;
    if (!touch) {
      return;
    }
    this.preY = touch.screenY;
  };
  onTouchMove = e => {
    const touch = (e.touches && e.touches[0]) || null;
    if (!touch) {
      return;
    }
    const { scrollHeight, scrollTop, clientHeight } = this.scrollRef;
    if (
      (scrollTop <= 0 && touch.screenY - this.preY > 0) ||
      (scrollTop + clientHeight >= scrollHeight &&
        touch.screenY - this.preY < 0)
    ) {
      // 判断默认行为是否可以被禁用
      if (event.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!event.defaultPrevented) {
          e.preventDefault();
        }
      }
    }
    this.preY = touch.screenY;
  };
  render() {
    const { height } = this.props;
    const hStyle = {
      height
    };
    return (
      <div
        className="contain-scroll"
        onTouchStart={this.onTouchStart}
        onTouchMove={this.onTouchMove}
        ref={ref => (this.scrollRef = ref)}
        style={hStyle}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ContainScroll;
