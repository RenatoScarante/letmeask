import toast, { Toaster } from 'react-hot-toast';
import copyImg from "../assets/images/copy.svg";

import "../styles/room-code.scss";

type RoomCodeProps = {
  code: string
}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);

    toast.success('Room code copied to clipboard');
  }

  return (
    <div>
      <Toaster />
      <button className="room-code" onClick={copyRoomCodeToClipboard}>
        <div>
          <img src={copyImg} alt="Copy room code" />
        </div>
        <span>Sala {props.code}</span>
      </button>
    </div>
  )
}