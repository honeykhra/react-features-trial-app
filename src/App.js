import "./App.css";
import ImageUploader from "./components/ImageUploader/ImageUploader";
import MultipleImageUpload from "./components/ImageUploader/MultipleImageUploader";
import MultipleUploder2 from "./components/ImageUploader/MultipleUploder2";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageUploader />
      {/* <MultipleImageUpload /> */}
      <MultipleUploder2 />
      <Loader />
    </div>
  );
}

export default App;
