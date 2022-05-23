import React, { SyntheticEvent, useState } from "react";
import Router from 'next/router'
import LocalStorage from "../scripts/LocalStorage";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [email, setEmail] = useState("");

  const submitForm = async (e: SyntheticEvent) => {
    e.preventDefault();

    const req = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type":"application/json" },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
    });

    const res = await req.json();
    const token = res.token;

    if(token) {
      const auth = new LocalStorage("auth");
      auth.set("token", token);
      Router.push(`/`);
    }

  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <fieldset>
          <legend>Sign up</legend>
          <input type="text" placeholder="Username" name="username" onChange={e => setUsername(e.target.value)}/>
          <br/>
          <input type="email" placeholder="Email" name="email" onChange={e => setEmail(e.target.value)}/>
          
          <input type="password" placeholder="Password" name="password" onChange={e => setPassword(e.target.value)}/>
          <input type="password" placeholder="Confirm Password" name="cpassword" onChange={e => setCPassword(e.target.value)}/>
          <br/>
          <br/>
          <input type="submit" value="Register"/>
        </fieldset>
      </form>
    </div>
  );
}
