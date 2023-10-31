"use client";
import { useState } from "react";
import FileUploader from "./imageUploader";
import { APICreatePlace } from "@/lib/ApiCalls";
export default function PlaceCreatorDosmilByPABLOandLAURA() {
  const [imagesUrl, setImagesUrl] = useState("");
  const handleCreatePlace = async (e) => {
    e.preventDefault();
    const {
      email,
      category,
      description,
      latitude,
      longitude,
      placeName,
      socialNetworks,
      zone,
    } = e.target;

    const newPlace = {
      createdBy: email.value,
      category: category.value,
      description: description.value,
      latitude: latitude.value,
      longitude: longitude.value,
      placeName: placeName.value,
      socialNetworks: socialNetworks.value,
      zone: zone.value,
      imagesUrl: imagesUrl,
    };
    await APICreatePlace(newPlace);
    console.log(newPlace);
  };
  return (
    <form onSubmit={handleCreatePlace}>
      <label htmlFor="email">
        <p>CreatedBy</p>
        <input type="email" name="email" />
      </label>

      <label htmlFor="category">
        <p>Category</p>
        <input type="text" name="category" />
      </label>

      <label htmlFor="description">
        <p>Description</p>
        <textarea name="description"></textarea>
      </label>

      <label htmlFor="imagesUrl">
        <p>Images URL</p>
        <FileUploader setImagesUrl={setImagesUrl} />
      </label>

      <label htmlFor="latitude">
        <p>Latitude</p>
        <input type="text" name="latitude" />
      </label>

      <label htmlFor="longitude">
        <p>Longitude</p>
        <input type="text" name="longitude" />
      </label>

      <label htmlFor="placeName">
        <p>Place Name</p>
        <input type="text" name="placeName" />
      </label>

      <label htmlFor="socialNetworks">
        <p>Social Networks</p>
        <input type="text" name="socialNetworks" />
      </label>

      <label htmlFor="zone">
        <p>Zone</p>
        <input type="text" name="zone" />
      </label>

      <button>Create Place</button>
    </form>
  );
}
