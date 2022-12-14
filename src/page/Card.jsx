import React from "react";
import Cards from "../component/Cards";
import Myimage from "../asset/images/food1.png";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 1,
    };
  }

  render() {
    let data = [
      {
        id: 0,
        img: Myimage,
        details: {
          title: "Italy Pizza",
          desc: "Extra cheese and toping",
        },
        price: "600",
      },
      {
        id: 1,
        img: Myimage,
        details: {
          title: "Combo Plate",
          desc: "Extra cheese and toping",
        },
        price: "600",
      },
      {
        id: 2,
        img: Myimage,
        details: {
          title: "Spanish Rice",
          desc: "Extra garllic",
        },
        price: "600",
      },
    ];

    return (
      <div className="container">
        <h2>Shopping Continue</h2>
        <hr />
        <h3>Shopping Continue</h3>
        <span>You have 3 item in your cart</span>
        {data.map((item, index) => {
          // item.id = index;
          return (
            <Cards
              key={item.id.toString()}
              data={item}
              amount={this.state.amount}
            ></Cards>
          );
        })}
      </div>
    );
  }
}

export default Card;
