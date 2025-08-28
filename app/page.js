"use client";
import Input from "./components/input";
import Listing from "./components/listing";
import { NoteContextProvider } from "./context/noteContext";

export default function Home() {
  return (
    <NoteContextProvider>
      <div className="bg-gray-200 h-190 md:h-220 lg:h-145 ">
        <div
          className="bg-base-400 mx-2 my-5 lg:mx-auto md:mx-auto flex flex-col lg:flex-row md:flex-row justify-around"
          style={{ width: "80%" }}
        >
          <div className="field my-5">
            <Input />
          </div>
          <div className="list my-5">
            <Listing />
          </div>
        </div>
      </div>
    </NoteContextProvider>
  );
}
