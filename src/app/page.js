import CreateUser from "@/components/CreateUser";
import ImageUploadForm from "@/components/ImageUploader";
import UpdateUserName from "@/components/UpdateUserName";
export default function Home() {
  return (
    <main>
      <CreateUser></CreateUser>
      <ImageUploadForm></ImageUploadForm>
      <UpdateUserName></UpdateUserName>
    </main>
  );
}
