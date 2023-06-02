import {useEffect, useState} from "react";
import { Table } from "react-bootstrap";
import styles from "./styles/userProfile.module.scss";
import Switch from "./Switch";
import { handleChangeActivation, headers } from "./services";
import moment from "moment";

const UserProfile = ({ player }) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    if(player?.status === 'active'){
      setChecked(true)
    }else{
      setChecked(false)
    }
  },[player])

  return (
    <div className={`w-full ${styles.tableContainer}`}>
      <Table className={styles.table}>
        <thead className={`${styles.header}`}>
          <tr className="text-xl font-medium text-zinc-900">
            {headers.map((each, index) => (
              <th key={index}>{each}</th>
            ))}
            <th>Activation</th>
          </tr>
        </thead>
        <tbody className={styles.body}>
          <tr>
            <td>{moment(player?.data?.inserted_at).format("D MMM YYYY") || "-"}</td>
            <td>{player?.username ?  player?.username : player?._key}</td>
            <td>{player?.last_active_time ? player.last_active_time : '-'}</td>
            <td>{player?.phone_number ? player.phone_number : "-"}</td>
            <td>{player?.email ? player.email : "-"}</td>
            <td>
              <Switch checked={checked} setChecked={setChecked} handleChange={() => handleChangeActivation(setChecked, checked, player?._key)}/>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default UserProfile;
