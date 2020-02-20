import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super();
    }

    renderDish(dish) {
        if (dish)
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" top src={dish.image} alt={dish.name} />
                            <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(dish)}
                    </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(dish) {
        if(dish.comments) {
            const comments = dish.comments.map((c) => {
                return (
                    <div>
                        <p>{c.comment}</p>
                        <p>-- {c.author}, {c.date}</p>
                    </div>
                );
            })
            return comments;
        } else {
            return(
                <div></div>
            );
        }
    }

    render() {
        return this.renderDish(this.props.dish);
    }
}

export default Dishdetail;