"use client";
import { useState } from "react";

function ImageUploadForm() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event) => {
    event.preventDefault();
    console.log(event);
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      alert("Selecciona al menos una imagen para subir.");
      return;
    }

    setIsUploading(true);

    const formData = new FormData();
    selectedFiles.forEach((file, index) => {
      formData.append(`image-${index}`, file);
    });

    // Mostrar información de los archivos por consola
    selectedFiles.forEach((file, index) => {
      console.log("Nombre del archivo:", file.name);
      console.log("Tipo del archivo:", file.type);
      console.log("Tamaño del archivo:", file.size, "bytes");
      console.log("Path del archivo:", file.path);
    });

    setIsUploading(false);
  };

  return (
    <div>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
      />
      <button onClick={handleUpload} disabled={isUploading}>
        {isUploading ? "Subiendo..." : "Subir imágenes"}
      </button>
    </div>
  );
}

export default ImageUploadForm;
