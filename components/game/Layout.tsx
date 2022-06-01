import React, { PropsWithChildren, useEffect, useRef } from "react";
import Burger from "./Burger";
import LevelBar from "./LevelBar";
import io, { Socket } from "socket.io-client";

export default function Layout(props: PropsWithChildren<{ username: String }>) {
  const socketRef = useRef<Socket|null>(null);

  useEffect(() => {
    fetch("/api/socket").finally(() => {
      const socket = io();
      socketRef.current = socket;

      socket.on("connect", () => {
        console.log("connect");
        socket.emit("game-click");
      });

    });
  }, []);

  function clickBurger() {
    const io = socketRef.current;
    if(io) {

      io.emit("game-click", {
        cookies: document.cookie
      });

      console.log("Hopefully sent burgir clix");

    }
  }

  async function logOut() {
    const res = await fetch('/api/logout', { method: "POST" });
    const data = await res.text();

    if(data === "Success") {
      document.location.reload();  
    }
  }

  return (
    <div className="layout">
      <div className="sidebar">
        <div>
          <h1 id="title" className="nobold">
            Burger Clicker 2
          </h1>
        </div>

        <div className="account">
          <div className="account-box">
            <img
              src={`https://avatars.dicebear.com/api/big-ears-neutral/${props.username}.svg`}
            />
            <p>Playing as &quot;{props.username}&quot;,<br/><span onClick={logOut}>Log out</span></p>
          </div>
        </div>

        <div className="receipt">
          <h1>Cheese Burger</h1>
          <h3></h3>

          <div className="receipt__prices">
            <ul className="receipt__spacer">
              <li>
                <p>Extras</p>
              </li>
              <li></li>
              <li></li>
            </ul>

            <h3 id="totalPrice">Total</h3>
          </div>

          <span id="barcode">BURGER CLICKER 2</span>
        </div>
        <div className="bank">
          <p>Balance:</p>
        </div>
      </div>
      <div className="content">
        <Burger onClick={clickBurger}/>
        <LevelBar level={0} xp={0} />
      </div>
      <div className="upgrades">
        <h1 className="nobold">Upgrades menu</h1>
        <div className="upgrades__container"></div>
      </div>
    </div>
  );
}
