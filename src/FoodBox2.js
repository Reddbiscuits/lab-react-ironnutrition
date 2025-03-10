import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';

class FoodBox extends React.Component {
  state = {
    foods: foods.slice(0, 5),
  };

  render() {
    return (
      <div>
        {this.state.foods.map((food) => {
            return (
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img
                    src={food.image}
                    style={{ width: '50px' }}
                    className="imgShadow"
                    alt=""
                  />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{food.name}</strong> <br />
                    <small>{food.calories}</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input className="input" type="number" value="1" />
                  </div>
                  <div className="control">
                    <button className="button is-info">+</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
          )
        })}
      </div>
    );
  }
}

export default FoodBox;
