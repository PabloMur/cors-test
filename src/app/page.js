import CreateUser from "@/components/CreateUser";
import ImageUploadForm from "@/components/ImageUploader";
export default function Home() {
  return (
    <main>
      <CreateUser></CreateUser>
      <ImageUploadForm></ImageUploadForm>
    </main>
  );
}
