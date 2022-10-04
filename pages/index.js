
import { useSelector } from "react-redux";
import { selectAuthState } from "../Store/authSlice";
import Layout from '../components/Layout';
import Login from '../components/Login';
import Chat from '../components/Chat';


export default function Home() {
  const authState = useSelector(selectAuthState)
  return (
    <Layout>
      {authState ? <Chat /> : <Login /> }
    </Layout>
  )
}
