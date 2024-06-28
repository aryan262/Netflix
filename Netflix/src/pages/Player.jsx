import React from 'react'
import styled from 'styled-components'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
function Player() {
    const navigate = useNavigate();
    const video = "https://res.cloudinary.com/backend1/video/upload/v1719486718/Top_5_DSA_Projects_for_Resume_with_CODE___Get_A_High_Paying_Job_In_2024_1_z08oig.mp4"
    return (
        <Container>
            <div className="player">
                <div className="back">
                    <BsArrowLeft onClick={() => navigate(-1)} />
                </div>
                <video src={video} autoPlay loop controls/>
            </div>
        </Container>
    )
}

const Container = styled.div`
    .player {
        width: 100vw;
        height: 100vh;
        position: relative;
        .back {
        position: absolute;
        top: 2rem;
        left: 2rem;
        z-index: 1;
        svg {
            font-size: 3rem;
            cursor: pointer;
        }
    }
    }
    video {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`

export default Player
