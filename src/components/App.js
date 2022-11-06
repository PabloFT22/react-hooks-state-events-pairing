import video from "../data/video.js";
import VideoDetails from "./VideoDetails.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoDetails video={video}/>
      
    </div>
  );
}

export default App;
