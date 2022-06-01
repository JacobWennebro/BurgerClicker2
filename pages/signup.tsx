import React, { SyntheticEvent, useState } from "react";
import Router from 'next/router'
import LocalStorage from "../scripts/LocalStorage";
import Link from "next/link";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [email, setEmail] = useState("");

  const submitSignupForm = async (e: SyntheticEvent) => {
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
    if(res.message === "Success") {
      location.replace("/");
    }
    
  };

  return (
    <div>
      <form onSubmit={submitSignupForm}>
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
          <br/>
          <span>Already have an account? <Link href="/signin">Sign in here.</Link></span>
        </fieldset>
      </form>
    </div>
  );
}
