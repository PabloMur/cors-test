"use client";
import { APICreateUser } from "@/lib/ApiCalls";

export default function CreateUser() {
  const handleCreateUser = async (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name.value;
    const email = target.email.value;
    const phone = target.phone.value;
    const password = target.password.value;

    console.log(name, email);
    const userCreated = await APICreateUser(email, name, phone, password);
    console.log(userCreated);
  };
  return (
    <div>
      <form onSubmit={handleCreateUser}>
        <input type="text" name="name" id="" />
        <input type="email" name="email" id="" />
        <input type="phone" name="phone" id="" />
        <input type="password" name="password" id="" />
        <div>Me la pela</div>
        <button>Create User</button>
      </form>
    </div>
  );
}
