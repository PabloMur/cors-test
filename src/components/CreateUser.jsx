"use client";
import { APICreateUser } from "@/lib/ApiCalls";

export default function CreateUser() {
  const handleCreateUser = async (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name.value;
    const email = target.email.value;
    console.log(name, email);
    const userCreated = await APICreateUser(email, name);
    console.log(userCreated);
  };
  return (
    <div>
      <form onSubmit={handleCreateUser}>
        <input type="text" name="name" id="" />
        <input type="email" name="email" id="" />
        <button>Create User</button>
      </form>
    </div>
  );
}
