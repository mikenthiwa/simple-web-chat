import { Store, Persistor} from "../Store/store";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import {PersistGate} from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )

}

export default MyApp
