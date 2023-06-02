import React, { useState } from "react";
import { Table } from "react-bootstrap";
import styles from "./styles/lobbies.module.scss";
import {
  headers,
  handleTerminate,
  handleClose,
  handleTerminateAll,
} from "./services";
import icons from "utils/icons";
import ConfirmationModal from "components/modals/confirmationModal";

const AllLobbiesComponent = ({ data, setDeleted, deleted }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedLobby, setSelectedLobby] = useState("");
  const [toast, setToast] = useState({
    show: false,
    text: "",
  });

  return (
    <>
      <ConfirmationModal
        show={showModal}
        setShow={setShowModal}
        handleSubmit={handleTerminate}
        selectedLobby={selectedLobby}
        setToast={setToast}
        setDeleted={setDeleted}
        deleted={deleted}
      />
      {/* Search part if it's need
        <form>
          <div className="relative mb-5">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-6 pl-10 text-md text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-slate-800"
              placeholder="Search Players"
              onChange={(e) => handleChange(e, setSearchValue)}
            />
          </div>
        </form> */}
      <button
        type="button"
        className={`flex items-center justify-center  bg-gray-500 p-3 rounded-lg text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mb-2 ${styles.delete}`}
        onClick={() => {setShowModal(true)}}
      >
        {icons.trash()}
        <span className="ml-2">Terminate All Lobbies</span>
      </button>

      <div className={styles.tableContainer}>
        {data === undefined ? (
          <div
            role="status"
            className="w-full h-2/4 flex items-center justify-center	"
          >
            <svg
              className="inline mr-2 w-20 h-20 text-gray-200 animate-spin dark:text-gray-200 fill-slate-800"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : data.length === 0 ? (
          <div className="w-full h-2/4 flex items-center justify-center	">
            <p className="text-3xl font-medium text-sky-800">
              There is no data.
            </p>
          </div>
        ) : (
          <Table striped bordered hover variant="dark" className={styles.table}>
            <thead>
              <tr>
                <th>#</th>
                {headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody className={styles.body}>
              {data?.map((lobby, index) => (
                <tr
                  key={index}
                  // onClick={() => handleBattleDetails(router, battle._key)}
                  className={styles.tableRow}
                >
                  <td className={styles.number}>{index + 1}</td>
                  <td className={styles.longText}>
                    {lobby.id ? lobby.id : "-"}
                  </td>
                  <td className={styles.number}>
                    {lobby.mode ? lobby.mode : "-"}
                  </td>
                  <td className={styles.number}>
                    {lobby.type ? lobby.type : "-"}
                  </td>
                  <td className={styles.number}>
                    {lobby.data.leader_id ? lobby.data.leader_id : "-"}
                  </td>
                  <td className={styles.number}>{lobby.data.phase}</td>
                  <td>
                    <ul>
                      {lobby.data?.players?.map((player, index) => (
                        <li key={index} className={styles.list}>
                          {player.username}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className={styles.delete}>
                    <button
                      onClick={() => {
                        setShowModal(true);
                        setSelectedLobby(lobby.id);
                      }}
                    >
                      {icons.trash()}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
      {toast.show && (
        <div
          id="toast-danger"
          className="flex items-center p-4 mb-4 w-full max-w-xs text-white bg-gray-600 rounded-lg shadow ml-auto"
          role="alert"
        >
          <div className="ml-3 text-sm font-normal">{toast.text}</div>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-danger"
            aria-label="Close"
            onClick={() => handleClose(setToast)}
          >
            <span className="sr-only">Close</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default AllLobbiesComponent;
