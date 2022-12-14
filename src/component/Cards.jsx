import React from "react";
import "./cards.css";
import Minus from "../asset/images/minus.png";
import Plus from "../asset/images/plus.png";
import Trash from "../asset/images/trash.png";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 1,
    };
  }

  render() {
    const onPlus = () => {
      return this.setState({ amount: this.state.amount + 1 });
    };

    const onMinus = () => {
      return this.setState({
        amount:
          this.state.amount > 1 ? this.state.amount - 1 : this.state.amount,
      });
    };

    const { data } = this.props;
    return (
      <div className="wrapper">
        <div className="wrapper__right">
          <img src={data.img} alt="" />
          <div className="wrapper-box">
            <h3>{data.details.title}</h3>
            <span>{data.details.desc}</span>
          </div>
        </div>
        <div className="wrapper__left">
          <div className="amount">
            <span>{this.state.amount}</span>
            <div className="all-btn">
              <button onClick={onMinus} className="plus">
                <img src={Minus} alt="" />
              </button>
              <button onClick={onPlus} className="minus">
                <img src={Plus} alt="" />
              </button>
            </div>
          </div>
          <p>${data.price}</p>
          <img src={Trash} alt="" />
        </div>
      </div>
    );
  }
}

export default Cards;
