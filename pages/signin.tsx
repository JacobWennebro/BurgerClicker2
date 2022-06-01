import React, { SyntheticEvent, useState } from "react";
import Router from 'next/router'
import LocalStorage from "../scripts/LocalStorage";
import Link from "next/link";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [email, setEmail] = useState("");

  const submitSigninForm = async (e: SyntheticEvent) => {
    e.preventDefault();

    const req = await fetch("/api/signin", {
      method: "POST",
      headers: { "Content-Type":"application/json" },
      body: JSON.stringify({
        password,
        email
      }),
    });

    const res = await req.json();
    if(res.message === "Success") {
      location.replace("/");
    }

  };

  return (
    <div>
      <form onSubmit={submitSigninForm}>
        <fieldset>
          <legend>Sign in</legend>
          <input type="email" placeholder="Email" name="email" onChange={e => setEmail(e.target.value)}/>
          
          <input type="password" placeholder="Password" name="password" onChange={e => setPassword(e.target.value)}/>
          <br/>
          <br/>
          <input type="submit" value="Signin"/>
          <br/>
          <span>Don&apos;t already have an account? <Link href="/signin">Sign up here.</Link></span>
        </fieldset>
      </form>
    </div>
  );
}
