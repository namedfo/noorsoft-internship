import MessagesHeader from "./MessagesComponents/MessagesHeader";
import MessagesBlock from "./MessagesComponents/MessagesBlock";
import MessagesWrite from "./MessagesComponents/MessagesWrite";

import { useDialog } from "../../../redux/selectors";

import styles from "./Messages.module.css";

const Messages = () => {
  const location = window.location.pathname;
  const dialog = useDialog();
  return (
    <div className={styles.messages}>
      <MessagesHeader {...dialog} />
      <MessagesBlock dialog={dialog} />
      {location === `/complected/messages/${dialog.id}` ? (
        <div className={styles.complectedDialogText}>
          <p>
            Диалог с <span>{dialog.name}</span> завершен
          </p>
        </div>
      ) : (
        <MessagesWrite />
      )}
    </div>
  );
};
export default Messages;
