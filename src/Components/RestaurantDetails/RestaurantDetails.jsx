import ReactPlayer from "react-player";
// import {
//   MediaController,
//   MediaControlBar,
//   MediaTimeRange,
//   MediaTimeDisplay,
//   MediaVolumeRange,
//   MediaPlaybackRateButton,
//   MediaPlayButton,
//   MediaSeekBackwardButton,
//   MediaSeekForwardButton,
//   MediaMuteButton,
//   MediaFullscreenButton,
// } from "media-chrome/react";


export default function Player() {
    // const [playing , setPlaying] = useState(false)
  return (
    // <MediaController
      
    // >
      <ReactPlayer
        slot="media"
        src="https://youtu.be/DzSSUU37ynQ?si=lv2CsW4QU43a7Yyc"
        controls
        playing
        muted
        loop
        // style={{
        //   width: "100%",
        //   height: "100%",
        //   "--controls": "none",
        // }}
      ></ReactPlayer>
    //   {/* <MediaControlBar>
    //     <MediaPlayButton />
    //     <MediaSeekBackwardButton seekOffset={10} />
    //     <MediaSeekForwardButton seekOffset={10} />
    //     <MediaTimeRange />
    //     <MediaTimeDisplay showDuration />
    //     <MediaMuteButton />
    //     <MediaVolumeRange />
    //     <MediaPlaybackRateButton />
    //     <MediaFullscreenButton />
    //   </MediaControlBar> */}
    //   {/* <Button onClick={()=> setPlaying(!playing)}> play / pause </Button> */}
    // </MediaController>
  );
}