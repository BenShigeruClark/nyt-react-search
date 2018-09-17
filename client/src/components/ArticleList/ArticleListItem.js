import React from "react";
import { Container, Row, Col } from "../Grid";

// ArticleListItem will render a bootsrap list item containing data from the article api call
export const ArticleListItem = props => (
    <li className="list-group-item">
    <Container>
        <Row>
            <Col size="xs-8 sm-9">
            <h3>{props.title}</h3>
            <p>Article: {props.article}</p>
            </Col>
        </Row>
    </Container>
    </li>
);