import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import React from "react";
import { Messagewrapper } from "./components/message/messagewrapper";
import { Mymessage } from "./components/message/mymessage";
import { Context } from "./Context/contextprovider";
const App = () => {
  const { message, setMessage } = React.useContext(Context);

  return (
    <>
      <Header />
      <Messagewrapper>
        {message.map((e) => (
          <Mymessage data={e} key={e.id} />
        ))}
      </Messagewrapper>
      <Footer />
    </>
  );
};

export default App;
