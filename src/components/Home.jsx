import { Box } from '@mui/material';
import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Background from '../assets/background.png';
import FullPageVideo from '../assets/videoView.png';
import Cross from '../assets/cross.png'
import { useState } from 'react';
import Slide from '@mui/material/Slide';
import Container from '@mui/material/Container';
import Brand from '../assets/brand.png'



const images = [
    {
        original: "/src/assets/picture1.png", // Update the path
        thumbnail: "path_to_thumbnail1.jpg",
    },
    {
        original: "/src/assets/picture2.png", // Update the path
        thumbnail: "path_to_thumbnail2.jpg",
    },
];

function Home() {
    const [showFullPageImage, setshowFullPageImage] = useState(false)
    return (
        <Box sx={{
            backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100vh",
            position: 'absolute',
            inset: 0
        }}>

            <Container sx={{ display: 'flex', marginTop: '20px' }} maxWidth="xl">
                <img src={Brand} alt='Logo' style={{ marginLeft: '80px' }} />
                <Box sx={{ fontSize: 'clamp(8px,3vw,20px)', fontWeight: 'bold', marginRight: '140px', color: 'white', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Dolce Mall & Signature Residency / Videos</Box>
            </Container>


            <Box sx={{ marginTop: '20px', maxHeight: '700px' }}>
                {/* IMAGE SLIDER */}
                <ImageGallery
                    items={images}
                    showThumbnails={false}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    onClick={() => setshowFullPageImage(true)}
                />
            </Box>
            {
                showFullPageImage ?
                    <Slide direction="up" timeout={700} in={showFullPageImage} mountOnEnter unmountOnExit>
                        <Box sx={{ position: 'absolute', inset: 0, textAlign: 'center' }}>
                            <img
                                src={FullPageVideo}
                                alt={`Full Page Video Image`}
                                style={{ position: 'relative' }}
                            />
                            <Box sx={{
                                position: 'absolute',
                                right: '171px',
                                top: '51px',
                                cursor: 'pointer'
                            }}
                                onClick={() => setshowFullPageImage(false)}
                            >
                                <img src={Cross} alt={'Video Player'} />
                            </Box>
                        </Box>
                    </Slide>
                    : null
            }
        </Box >
    )
}

export default Home