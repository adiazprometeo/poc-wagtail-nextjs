import React from "react";
import { Container, Row } from "react-bootstrap";
import { PostDetail } from "@components/post-detail";
import { SideBar } from "@components/side-bar";
import { TopNav } from "@components/top-nav";
import { Footer } from "@components/footer";

function PostPage(props: any) {
    return (
        <div>
            <TopNav />
            <Container>
                <Row>
                    <PostDetail {...props} />
                    <SideBar {...props} />
                </Row>
            </Container>
            <Footer /> 
        </div>
    ); 
}

export { PostPage };
