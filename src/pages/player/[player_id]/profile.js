import Layout from "components/layout";
import { useEffect, useState } from "react";
import { accountBaseApi, playerBaseApi } from "api";
import PlayerProfileComponent from "components/playerProfile";

const Profile = ({ player_id }) => {
  const [playerData, setPlayerData] = useState({});
  const [playerPlayInformation, setPlayerPlayInformation] = useState({});
  const [chestsToken, setChestsToken] = useState([]);

  const fetchPlayerData = async (token) => {
    const player = await accountBaseApi({
      method: "GET",
      url: `/admin/accounts/${player_id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const playInformation = await playerBaseApi({
      method: "GET",
      url: `/players?id=${player_id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const chestsToken = await playerBaseApi({
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: `/items?type=chest`,
    });

    setPlayerData(player.data);
    setPlayerPlayInformation(playInformation.data);
    setChestsToken(chestsToken.data);
  };

  useEffect(() => {
    let token = localStorage.getItem('token');
    // let token =
      // "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhY2NvdW50cyIsImV4cCI6MTY2MDEyMDExNSwiaWF0IjoxNjU3NzAwOTE1LCJpc3MiOiJhY2NvdW50cyIsImp0aSI6IjE5Yzk0Mjk2LTc0YjgtNDhkNS05Njc4LTZmMWQyNzJhZGIwZiIsIm5iZiI6MTY1NzcwMDkxNCwicm9sIjoiYWRtaW4iLCJzdWIiOiI4NjcyNDc4NSIsInR5cCI6ImFjY2VzcyIsInVzbiI6IkZhcmhvb2QifQ.wAiskvOMSfZGhwWTS4CNkew25lPziw6B5sQlEQIN40yccMb-8gPyteQ3-bnDh7w3BblsMYv1HHiLS84lgdQMrg";
    fetchPlayerData(token);
  }, []);

  return (
    <Layout title={"User Profile"}>
      <PlayerProfileComponent
        playerData={playerData.data}
        playerPlayInformation={playerPlayInformation.data}
        chestsToken={chestsToken.data}
      />
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const player_id = query.player_id;
  return {
    props: { player_id },
  };
}
export default Profile;