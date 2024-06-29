import styled from "styled-components";
import { Featureitem } from "./utils/Featureitem";

const Feature = () => {

    return (
        <>
            <FeaturedStyled>
                <div className="heading">
                    <h1>Features</h1>
                    <p>Explore various available features and stay tuned for more exciting <br />additions.</p>
                </div>

                <div className="feature">
                    {Featureitem.map((item) => (
                        <div key={item.id} className="featureitem">
                            <div className="svg">
                                <p>{item.svg}</p>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </FeaturedStyled>
        </>
    );
};

const FeaturedStyled = styled.div`
            font-family: "Poppins", sans-serif;
            padding: 6rem 0;
           .heading{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0 0 6rem 0 ;
            h1{
                font-size: 2.8rem;
                font-weight: 600;
                color: #1b374c;
            }
            p{
                font-size: 1.1rem;
                color: #768492;
                text-align: center;
            }
           }
           .feature{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            row-gap: 2rem;
            column-gap: 6.5rem;
            .featureitem{
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1rem;
                .svg{
                   background-color: white;
                   padding: 0.7rem;
                   border-radius: 0.4rem;
                   background-color: #eef7fb;
                   margin-bottom: 1rem;
                }
                h3{
                    font-size: 1.5rem;
                    font-weight: 600;
                    color:  #1b374c;
                }
                p{
                    font-size: 1.05rem;
                    color: #768492;
                }
            }
           }

`;



export default Feature;
