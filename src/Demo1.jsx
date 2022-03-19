/*
 * @Author: wuj
 * @Date: 2022-03-16 16:13:53
 * @LastEditors: wuj
 * @LastEditTime: 2022-03-16 16:19:09
 * @Description: 
 */
import React from 'react'
import "./styles.css";

export function Demo1() {
  return (
    <div className="App">
      爸爸
      <Son />
    </div>
  );
}

class Son extends React.Component {
  constructor() {
    super();
    this.state = {
      n: 0
    };
  }
  add() {
    // this.state.n += 1 为什么不行
    this.setState({ n: this.state.n + 1 });
  }
  render() {
    return (
      <div className="Son">
        儿子 n: {this.state.n}
        <button onClick={() => this.add()}>+1</button>
        <Grandson />
      </div>
    );
  }
}

const Grandson = () => {
  const [n, setN] = React.useState(0);
  return (
    <div className="Grandson">
      孙子 n:{n}
      <button onClick={() => setN(n + 1)}>+1</button>
    </div>
  );
};


 
