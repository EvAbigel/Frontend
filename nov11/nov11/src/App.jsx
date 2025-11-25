import Header from "./components/header";
import Form from "./components/formController";
import "./app.css"
import ViewData from "./components/view";

function App() {
  

  return (
    <>
      <div id="header-style">
        <Header/>
      </div>
      <div id="form-style">
        <Form/>
      </div>
      <div id="viewStyle">
        <ViewData/>
      </div>
    </>
  )
}

export default App
