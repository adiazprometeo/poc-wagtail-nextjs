import React from "react";
import { Container, Row } from "react-bootstrap";
import { SideBar } from "@components/side-bar";
import { TopNav } from "@components/top-nav";
import { Footer } from "@components/footer";
import { PostPageCardContainer } from "@components/post-page-card-container";

function BlogPage(props: any) {
    return (
        <div>
            <TopNav />
            <Container>
                <Row>
                    <PostPageCardContainer {...props} />
                    <SideBar {...props} />
                </Row>
            </Container>
            <Footer /> 
        </div>
    ); 
}

export { BlogPage };
