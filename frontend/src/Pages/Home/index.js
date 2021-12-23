import React from "react";
import { MainContainer, Container } from "./styles";
import InputText from "../../Components/Input";

export default function Home() {
    return (
        <MainContainer>
            <div className="container-wrapper">
                <Container>
                    <InputText placeholder="Hashtag" />
                </Container>
                <Container middle>
                    <h1>
                        Wesley teste
                    </h1>
                </Container>
                <Container>
                    <h1>
                        Wesley teste
                    </h1>
                </Container>
            </div>
        </MainContainer>
    )
}