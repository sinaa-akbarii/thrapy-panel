import Layout from "components/layout";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("in useEffect");
    console.log({need:navigator});
    // navigator.bluetooth.requestDevice({ filters: [{ services: ['heart_rate'] }] })
    //   .then((device) => {
    //     // Human-readable name of the device.
    //     console.log(device);

    //     // Attempts to connect to remote GATT Server.
    //     // return device.gatt.connect();
    //   })
    //   .then((server) => {
    //     /* … */
    //   })
    //   .catch((error) => {
    //     console.error({error});
    //   });
  }, []);
  return (
    <Layout title={""}>
      <span></span>
    </Layout>
  );
}
