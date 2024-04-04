import React,{ useCallback, useRef, useState }  from 'react';
import Webcam from 'react-webcam';
import { Button} from '@mui/material';
import {Link,useLocation} from 'react-router-dom';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import AdjustIcon from '@mui/icons-material/Adjust';
import Search from '../../customcomponent/search';
const MainPage=()=>{
    const [isShowVideo, setIsShowVideo] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);
    const [isButtonClicked, setButtonClicked] = useState(false);
    const [isRearCameraOpen,setRearCameraOpen]=useState(false)
    const location = useLocation();
    const name = location.state?.name
    const videoElement = useRef(null);
    const FACING_MODE_USER = "user";
    const FACING_MODE_ENVIRONMENT = "environment";

    const [hasWebcamUserMedia, setHasWebcamUserMedia] = useState(false);
    const [facingMode, setFacingMode] = useState(FACING_MODE_USER);
    
    const videoConstraints = {
        width: 640,
        height: 480,
        facingMode: FACING_MODE_USER 
    }
    const capture =useCallback( () => {
        const imageSrc = videoElement.current.getScreenshot(); // Capture image data
        setCapturedImage(imageSrc); // Set captured image data to state
    },[videoElement])
    const handleUserMedia = () => {
        console.log('Camera activated');
        setHasWebcamUserMedia(true);
      };
        
      
        const startCam = () => {
          
          setIsShowVideo(true);
        setButtonClicked(true);
        };
        const switchToRear =useCallback(() => {
            setFacingMode(
              prevState =>
                prevState === FACING_MODE_USER
                  ? FACING_MODE_ENVIRONMENT
                  : FACING_MODE_USER
            );
           setRearCameraOpen(true)
          },[]);
          const retakePicture = () => {
            setCapturedImage(null); // Clear captured image
        };

    const stopCam = () => {
        let stream = videoElement.current.stream;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        setIsShowVideo(false);
    }
    const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // You can perform search-related actions here, such as filtering data
  };

    
    return(   
    <div style={{marginTop:'50px',width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent: "center",alignItems: "center",}}>
        <div style={{height:'10%'}}>
            <h2>Hi, {name}</h2>
        </div>
        <div style={{width:'30%',height:'20%'}}>
            <Search onChange={handleSearchChange} />
        </div>
{
  capturedImage==null ?(
  <><div style={{
    height:'50%',
    marginTop:'20px',
    justifyContent: "center",
    alignItems: "center",
}}><div style={{position:'relative'}}>
        {isButtonClicked&&
            <Webcam audio={false} ref={videoElement} screenshotFormat="image.jpeg" videoConstraints={{
                                        ...videoConstraints,facingMode}} onUserMedia={handleUserMedia} />
        }
        <div style={{bottom:0,flexDirection:'column',justifyContent:'center'}}>
            {hasWebcamUserMedia&&
                    <FlipCameraAndroidIcon onClick={switchToRear}/>
            }
            <span></span>
    
            {isRearCameraOpen&&
                <AdjustIcon onClick={capture}/>
            }
        </div>
    </div>
                        
</div>
                    <div style={{justifyContent:'space-between',margin:'10px',height:'20%'}}>
                            <Button variant='contained' style={{ backgroundColor: 'green',marginRight:'10px'}} startIcon={<CameraAltOutlinedIcon />} onClick={startCam}>
                                Start
                            </Button>
                            <Button variant='contained' style={{ backgroundColor: 'green' }} startIcon={<CameraAltOutlinedIcon />} onClick={stopCam}>
                                Close
                            </Button>
                    </div></>):
(
                    <div>
                        <h2>Captured Image:</h2>
                        <div style={{flexDirection:'row'}} >
                            <Link to='/recommendation'>
                                <img src={capturedImage} alt="Captured" />
                            </Link>
                            <div style={{justifyContent:'space-between',margin:'10px'}}>
                                <Button variant='contained' style={{ backgroundColor: 'green',marginRight:'10px'}} startIcon={<CameraAltOutlinedIcon />} onClick={retakePicture}>
                                    Retake
                                </Button>
                                <Button variant='contained' style={{ backgroundColor: 'green' }} startIcon={<CameraAltOutlinedIcon />} onClick={stopCam}>
                                    Close
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
</div>

)

};
export default MainPage;
