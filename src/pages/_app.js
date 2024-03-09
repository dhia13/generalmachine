import Ui from "@/components/Ui/Ui";
import "@/styles/globals.css";
import Context from "../Context/context";

function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <Ui className="font-Signika" children={<Component {...pageProps} />} />
    </Context>
  );
}

export default MyApp;
