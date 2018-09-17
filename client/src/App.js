import React,  { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { ArticleList, ArticleListItem } from "./components/ArticleList";
import { Container, Row, Col } from "./components/Grid";
import "./App.css";


class App extends Component {
    state = {
        articles: [],
        articleSearch: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getArticles(this.state.articleSearch)
        .then(res => this.setState({ articles: res.data }))
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div id="everything">
                <Nav />
                <Jumbotron />
                <Container>
                    <Row>
                    <h1 id="message" className="text-center">Search</h1>
                        <Col size="md-12">
                        <form id="searchField">
                            <Container>
                                <Row>
                                    <Col size="xs-9 sm-10">
                                    <Input
                                    name="articleSearch"
                                    value={this.state.articleSearch}
                                    onChange={this.handleInputChange}
                                    placeholder="Topic"
                                    /> 
                                     <br></br>                                 
                                    </Col>
                                    <br></br>
                                    <Col size="xs-9 sm-10">
                                    <Input
                                    className="inputSearch"
                                    name="articleSearch"
                                    value={this.state.articleSearch}
                                    onChange={this.handleInputChange}
                                    placeholder="Start Year"
                                    />
                                     <br></br>
                                    </Col>
                                    <Col size="xs-9 sm-10">
                                    <Input
                                    name="articleSearch"
                                    value={this.state.articleSearch}
                                    onChange={this.handleInputChange}
                                    placeholder="End Year"
                                    />
                                     <br></br>
                                    </Col>
                                    <Col size="xs-9 sm-2">
                                    <Button
                                    id="searchButton"
                                    onClick={this.handleFormSubmit}
                                    type="success"
                                    className="input-lg"
                                    >
                                    Search
                                    </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size="xs-12">
                                    {!this.state.articles.length ? (
                                        <h1 id="message" className="text-center">No Articles to Display</h1>
                                        ) : (
                                            <ArticleList>
                                                {this.state.articles.map(articles => {
                                                    return (
                                                        <ArticleList
                                                            key={articles.title}
                                                            title={articles.title}
                                                            date={articles.date}
                                                            />
                                                    );
                                                })}
                                            </ArticleList>
                                        )}
                                    </Col>
                                </Row>
                            </Container>
                        </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }


}


export default App;
