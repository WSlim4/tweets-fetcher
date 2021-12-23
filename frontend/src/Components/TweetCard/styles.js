import styled from "styled-components";

const Container = styled.div`
    padding: 8px;
    display: flex;
    align-items: center;

    .card-box {
        h3, p {
            color: #657786;

            small {
                color: #14171A;
            }
        }
        padding: 6px;
        font-size: 0.8em;

        .text {
            width: 100%;
            text-align: left;
        }

        .bottom-card-box {
            display: flex;
            align-items: center;
            justify-content: flex-start;

            .button-group button:hover {
                cursor: normal;
            }

            .button-group button {
                background-color: #E1E8ED;
            }
        }

        .img-box {
            width: 8vh;
            height: 8vh;
            border-radius: 50%;

            img {
                width: 100%;
                height: auto;
            }
        }
    }
`

export { Container };