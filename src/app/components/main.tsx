"use client";
import "regenerator-runtime";
import { useState } from "react";

import Image from "next/image";
import { AiOutlineSearch, AiFillCamera } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import { useRouter } from "next/navigation";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { BsFillMicFill } from "react-icons/bs";

const Main: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const googleImageURL: string =
    "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
  const router = useRouter();

  function handleSearch(
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    router.push(`https://www.google.com/search?q=${searchText}`);
  }

  if (!browserSupportsSpeechRecognition) {
    console.log("Browser doesn't support speech recognition.");
    return null;
  }

  function startListening() {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  }

  function stopListening() {
    SpeechRecognition.stopListening();
    setSearchText(transcript);
  }

  return (
    <div
      className="flex
     flex-col items-center mt-60"
    >
      <Image src={googleImageURL} alt="Google image" height={400} width={570} />
      <form
        className="flex border rounded-full mt-7 px-5 w-1/3 items-center shadow-md py-4"
        onSubmit={(e) => handleSearch(e)}
      >
        <span className="text-xl text-slate-400">
          <AiOutlineSearch />
        </span>
        <input
          type="text"
          className="w-full focus:outline-none ml-4 text-xl"
          value={searchText || transcript}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        {listening ? (
          <span className="text-3x mr-5" onClick={() => stopListening()}>
            <BsFillMicFill />
          </span>
        ) : (
          <span
            className="text-3xl text-slate-400 mr-5"
            onClick={() => startListening()}
          >
            <BiMicrophone />
          </span>
        )}

        <span className="text-3xl text-slate-400">
          <AiFillCamera />
        </span>
      </form>
      <div className="mt-7">
        <button
          className="bg-slate-100 px-3 py-4 mr-3 rounded hover:border text-xl"
          onClick={(e) => handleSearch(e)}
        >
          Google Search
        </button>
        <button
          className="bg-slate-100 px-3 py-4 rounded hover:border text-xl"
          onClick={() => router.push("https://www.google.com/doodles")}
        >
          I'm Feeling Lucky
        </button>
      </div>
    </div>
  );
};

export default Main;
