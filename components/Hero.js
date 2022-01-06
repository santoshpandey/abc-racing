import Image from 'next/image';
import ReactPlayer from 'react-player';

import MyImage from '../public/slide-2-1920x787.jpg';
import { useNetworkStatus } from 'react-adaptive-hooks/dist/index.umd.js';



export default function Hero() {
  const { effectiveConnectionType } = useNetworkStatus();
  
  let is4g = effectiveConnectionType === '4g' ? true : false;
  return (
    <div>
        {!is4g ? <Image src={MyImage} alt="Hero" aria-hidden="true" priority={true} role="presentation"></Image> : <ReactPlayer
      url="https://www.youtube.com/watch?v=PkkV1vLHUvQ"
      className="react-player"
      playing="true"
      width="100%"
      height="700px"
      loop="true"
      muted	="true"
      controls={false}
    />}
    </div>
    )
  }