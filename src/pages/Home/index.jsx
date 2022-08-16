import { useEffect } from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { Cards } from "../../components/Cards";
import { Header } from "../../components/Header";
import { ModalPath } from "../../components/Modal/ModalPut";
import { Modal } from "../../components/Modal/ModalPost";
import { NavBar } from "../../components/NavBar";
import { TitleContainerCards } from "../../components/TitleContainerCards";
import { Api } from "../../service/api";
import { ContainerPages } from "../../styles/globalStyles";
import { ContainerHome } from "./style";

export const Home = ({ authenticated, setAuthenticated }) => {
  const [user, setUser] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [modalPath, setModalPath] = useState(false);
  const [idPost, setIdPost] = useState("");

  useEffect(() => {
    const API = Api();

    async function get() {
      const GET = await API.getUser();

      setUser(GET);
    }

    get();
  }, []);

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <ContainerHome>
      <NavBar setAuthenticated={setAuthenticated} />
      <div className="decoration"></div>
      <Header name={user.name} course_module={user.course_module} />
      <div className="decoration"></div>
      <TitleContainerCards setModalVisible={setModalVisible} />

      {user?.techs?.length > 0 ? (
        <ContainerPages page="home">
          <Cards
            techs={user.techs}
            setModalPath={setModalPath}
            setIdPost={setIdPost}
          />
          {modalPath ? (
            <ModalPath
              setModalPath={setModalPath}
              idPost={idPost}
              user={user.techs}
            />
          ) : null}
        </ContainerPages>
      ) : null}

      {modalVisible ? <Modal setModalVisible={setModalVisible} /> : null}
    </ContainerHome>
  );
};
