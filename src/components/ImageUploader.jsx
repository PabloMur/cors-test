"use client";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const FileUploader = ({ setImagesUrl }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        setImagesUrl(event.target.result);
      };

      reader.readAsDataURL(file);
    },
    [setImagesUrl]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag and drop files here, or click to select files</p>
      </div>
    </div>
  );
};

export default FileUploader;
