import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function ChatbotBox() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let date = new Date();

  console.log("11", typeof date);

  const [text, setText] = useState();
  const [result, setResult] = useState([
    {
      userinput: "welcome to chat bot do you follow the instructions ",
      useroutput: "",
    },
  ]);

  const ChatbotBox = (e) => {
    e.preventDefault();
    let textdata = text.toLowerCase();
    if (textdata === "hi") {
      setResult([...result, { userinput: text, useroutput: "hello" }]);
    } else if (textdata === "hello") {
      setResult([
        ...result,
        { userinput: text, useroutput: "What can I help you" },
      ]);
    } else if (
      textdata === "gm" ||
      textdata === "good morning" ||
      textdata === "goodmorning"
    ) {
      setResult([
        ...result,
        { userinput: text, useroutput: "very good morning" },
      ]);
    } else if (
      textdata === "gn" ||
      textdata === "good night" ||
      textdata === "goodnight"
    ) {
      setResult([
        ...result,
        { userinput: text, useroutput: "good night sweet dreams" },
      ]);
    } else if (textdata === "job") {
      setResult([
        ...result,
        {
          userinput: text,
          useroutput:
            "Select entar type of job  1.Civil  2.Mechnical  3.Software ex: civil",
        },
      ]);
    } else if (
      textdata === "civil" ||
      textdata === "mechanical" ||
      textdata === "software"
    ) {
      setResult([
        ...result,
        {
          userinput: text,
          useroutput: "Please enter your first name ex: name : kiran",
        },
      ]);
    } else if (textdata.slice(0, 4).includes("name")) {
      setResult([
        ...result,
        {
          userinput: text,
          useroutput: "Please enter your age ex: age : 20",
        },
      ]);
    } else if (textdata.slice(0, 3).includes("age")) {
      if (textdata.slice(6, 8) <= 40 || textdata.slice(6, 8) >= 20) {
        setResult([
          ...result,
          {
            userinput: text,
            useroutput: "Please enter your address   ex: address : bengalur",
          },
        ]);
      } else {
        setResult([
          ...result,
          {
            userinput: text,
            useroutput: "Please enter currectly your age ex: age : 20",
          },
        ]);
      }
    } else if (textdata.slice(0, 7).includes("address")) {
      setResult([
        ...result,
        {
          userinput: text,
          useroutput: "thank you for giving information",
        },
      ]);
    } else {
      setResult([
        ...result,
        { userinput: text, useroutput: "I don't understand" },
      ]);
    }
  };

  console.log(result);
  return (
    <>
      <Button variant="primary" onClick={handleShow} className="m-5">
        Chatbot
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>ChatbotBox</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div style={{ height: "60vh", overflow: "scrollY" }}>
            {result.map((item) => {
              console.log(item);
              return (
                <>
                  <div className="text-end">
                    <p
                      className="text-end text-dark  px-2 btn "
                      style={{ backgroundColor: "#def4d5" }}
                    >
                      {item.userinput}
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-start px-2 btn"
                      style={{ backgroundColor: "#f1f3f4" }}
                    >
                      {item.useroutput}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </Offcanvas.Body>
        <form onSubmit={ChatbotBox} className="d-flex gap-2 m-2 ">
          <input
            className="form-control "
            type="text"
            placeholder="Ask you something please"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button className="btn btn-primary p-2 " type="submit">
            send
          </button>
        </form>
      </Offcanvas>
    </>
  );
}

export default ChatbotBox;
