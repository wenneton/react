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
                    <div key={c.id}>
                        <p>{c.comment}</p>
                        <p>-- {c.author}, {this.formatDate(c.date)}</p>
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

    formatDate(date) {
        return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'})
            .format(new Date(Date.parse(date)));
    }

    render() {
        return (
            <div className="container">
                {this.renderDish(this.props.dish)}
            </div>
        );
    }
}

export default Dishdetail;