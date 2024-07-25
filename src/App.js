import "./App.css";
import FormRegestration from "./component/FormRegestration";
import Modal from "./component/Modal";

function App() {
  return (
    <div className="container ">
      <div className="header text-center ">
        <h2>Requesting A Loan</h2>
        <hr />
      </div>
      <FormRegestration />
      {/*<Modal color='green' text='The Form Has Been Submitted Successfully' />*/}
    </div>
  );
}

export default App;
