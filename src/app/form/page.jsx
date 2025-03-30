"use client";
import React, { useActionState } from "react";
import { register } from "./auth";

const Page = () => {
  const [state, action, isPending] = useActionState(register, undefined);
  return (
    <form action={action} className="">
      <label htmlFor="email"></label>
 <input type="email" name="email" id="email" placeholder="email"/>
 <button type="submit"></button>
    </form>
  );
};

export default Page;
