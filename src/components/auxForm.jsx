import React, { useState, useEffect } from "react";

function ImageUploadForm({ onUploadSuccess }) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event) => {
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
      formData.append(`images`, file); // Cambiamos el nombre a 'images'
    });

    try {
      const response = await fetch("/place/createPlace", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Manejar la respuesta exitosa
        alert("Imágenes subidas exitosamente.");
        onUploadSuccess(); // Llamamos a la función de éxito
      } else {
        // Manejar errores de la solicitud
        alert("Error al subir las imágenes.");
      }
    } catch (error) {
      console.error("Error al subir las imágenes:", error);
      alert(
        "Error al subir las imágenes. Consulta la consola para más detalles."
      );
    }

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

function App() {
  const [uploadSuccess, setUploadSuccess] = useState(false);

  useEffect(() => {
    if (uploadSuccess) {
      // Realiza acciones adicionales después de la carga exitosa, si es necesario
    }
  }, [uploadSuccess]);

  const handleUploadSuccess = () => {
    setUploadSuccess(true);
  };

  return (
    <div>
      {uploadSuccess ? (
        <div>
          <p>Las imágenes se han subido con éxito.</p>
          {/* Aquí puedes mostrar más información o redirigir al usuario a otra página */}
        </div>
      ) : (
        <ImageUploadForm onUploadSuccess={handleUploadSuccess} />
      )}
    </div>
  );
}

export default App;
