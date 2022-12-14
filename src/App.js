import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";
import InputComponent from "./components/InputComponent";

const name = "hello";
const image =
  "https://i.guim.co.uk/img/media/d143e03bccd1150ef52b8b6abd7f3e46885ea1b3/0_182_5472_3283/master/5472.jpg?width=1200&quality=85&auto=format&fit=max&s=d5a74a011c3fef1ad9c1c962721d221d";
const alt = "Forest";
const place = "Write";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Test Page</h1>
        <ImageComponent src={image} alt={alt} />
        <InputComponent placeholder={place} />
        <ButtonComponent label={name} />
      </header>
    </div>
  );
}

export default App;
