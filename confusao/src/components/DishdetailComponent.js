import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'})
        .format(new Date(Date.parse(date)));
}

function RenderDish({dish}) {
    if (dish) {
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" top src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    } else {
        return(
            <div></div>
        );
    }
}

function RenderComments({comments}) {
    if(comments) {
        const commentsElement = comments.map((c) => {
            return (
                <div key={c.id}>
                    <p>{c.comment}</p>
                    <p>-- {c.author}, {formatDate(c.date)}</p>
                </div>
            );
        })
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {commentsElement}
            </div>
        );
    } else {
        return(
            <div></div>
        );
    }
}

const Dishdetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.comments} />
            </div>
        </div>
    );
}

export default Dishdetail;