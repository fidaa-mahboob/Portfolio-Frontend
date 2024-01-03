import {React, useState, useEffect} from 'react'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

const Blog = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(
            "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@fidaamahboob"
        )
            .then((res) => res.json())
            .then((data) => setArticles(data.items));
    }, []);

    return (
        <Row>
            {articles.map((article, index) => (
                <Col key={index} lg="4" md="4" className="mb-3">
                    <Card className="mb-3" style={{ width: "20%" }}>
                        <Image src={article.thumbnail} alt={article.title} fluid />
                        <Card.Body>
                            <Card.Title>{article.title}</Card.Title>
                            <Card.Subtitle className="text-muted">
                                {new Date(article.pubDate).toLocaleDateString()}
                            </Card.Subtitle>
                            
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default Blog
