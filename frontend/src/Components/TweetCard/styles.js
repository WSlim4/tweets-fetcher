import styled from "styled-components";

const Container = styled.div`
    padding: 0px;
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
            padding-bottom: 8px;
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
            
            img {
                width: 100%;
                height: auto;
                border-radius: 50%;
            }
        }
    }
`

export { Container };