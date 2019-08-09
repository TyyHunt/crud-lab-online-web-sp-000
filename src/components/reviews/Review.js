import React, { Component } from 'react';

class Review extends Component {

  handleOnClick = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button> X </button>
      </div>
    );
  }

};

export default Review;
