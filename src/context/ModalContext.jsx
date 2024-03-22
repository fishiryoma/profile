import { createContext, useState } from "react";

export const ModalContext = createContext();

export default function ModalProvider({ children }) {
  const [modalShow, setModalShow] = useState(false);
  const [projectId, setProjectId] = useState("");
  const PROJECT = [
    {
      id: 1,
      name: "OOXX",
      picture1: "img/project1-1.png",
      picture2: "img/project1-2.png",
      picture3: "img/project1-3.png",
      alt: "ooxx game icon",
      subtitle: "用JavaScript, CSS, HTML寫成的對戰遊戲",
      description:
        "玩家能夠選擇先攻、後攻與電腦對戰。遊戲結束會出現連線動畫，以及下方自動記錄目前對戰狀況，並串連X(前推特)帳號，能即時與朋友分享遊戲結果。",
      link: "https://github.com/fishiryoma/tictactoe",
      demo: "https://tictactoe-tess.netlify.app/",
    },
    {
      id: 2,
      name: "台股存股計畫",
      picture1: "img/project2-1.png",
      picture2: "img/project2-2.png",
      picture3: "img/project2-3.png",
      alt: "stock app icon",
      subtitle: "用React及JavaScript打造的存股紀錄App",
      description:
        "與後端聯手打造，使用者能自行創建帳號，登入使用。輸入每次的交易紀錄及配息紀錄，並能在總覽的頁面看到目前的累績資產，及報酬回本狀況。",
      link: "https://github.com/fishiryoma/stockApp",
      demo: "https://www.youtube.com/watch?v=EfK9WMvS4g8",
    },
    {
      id: 3,
      name: "Spotify便利聽",
      picture1: "img/project3-1.png",
      picture2: "img/project3-2.png",
      picture3: "img/project3-3.png",
      alt: "spotify app icon",
      subtitle: "串接Spotify Podcast的微型專案",
      description:
        "不需額外申請直接串接自己的Spotify帳號，能自由新增分類，及Podcast節目，並加入收藏清單。",
      link: "https://github.com/fishiryoma/ALPHAcast",
      demo: "https://www.youtube.com/watch?v=8_O6Ygtt63M",
    },
  ];

  return (
    <ModalContext.Provider
      value={{ PROJECT, modalShow, setModalShow, projectId, setProjectId }}
    >
      {children}
    </ModalContext.Provider>
  );
}
