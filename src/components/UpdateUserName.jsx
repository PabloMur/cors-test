"use client";
import { APIUpadateUser } from "@/lib/ApiCalls";

export default function UpdateUserName() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const userID = "Mk83k6Egl91dIWzkSRe6";
    const updateData = {
      name: name,
    };
    const res = await APIUpadateUser(userID, updateData);
    console.log(res);
    return res;
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          <p>Ingresa el nuevo nombre</p>
          <input type="text" name="name" />
        </label>
        <button>Cambiar Nombre</button>
      </form>
    </div>
  );
}
