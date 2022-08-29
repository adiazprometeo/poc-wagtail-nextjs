import { Container, Row, Col } from "react-bootstrap";
import { BaseImage } from "@components/base-image";


function ImageText(props: any) { 
    const {value} = props;
    
    return (
        <Container className="py-4">
            <Row className={`align-items-center ${value.reverse ? "flex-row-reverse" : "" }`}>
                <Col xs={12} md={5}>
                    <div dangerouslySetInnerHTML={{__html: value.text}}/>
                </Col>
                <Col xs={12} md={7}>
                    <BaseImage img={value.image}/>
                </Col>
            </Row>
        </Container> 
    );
}

export { ImageText };
