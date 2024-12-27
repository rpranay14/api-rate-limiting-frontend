import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import Dropzone from "react-dropzone";
import axios from "axios";
import PhotoComponent from "../Components/PhotoComponent";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateCredits } from "../redux/ActionCreators";

const Dashboard = () => {
  const [files, setFiles] = useState(null);
  const [fetchCredits, setFetchCredits] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const axiosprivate = useAxiosPrivate();
  const [showPhotoComp, setShowPhotoComp] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [imgUrl, setImgURl] = useState(null);
  const [restoring, setRestoring] = useState(false);
  const [restoredImage, setRestoredImage] = useState(null);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    const getCredits = async () => {
      try {
        const response = await axiosprivate.get("/users/credits");
        if (response.data.success) {
          dispatch(updateCredits({ credits: response.data.data }));
        }
      } catch (error) {}
    };
    getCredits();
  }, [fetchCredits]);
  const handleSubmit = async (acceptedFiles) => {
    try {
      setErrorMessage("");
      setUploading(true);
      setRestoring(false);
      const validImageTypes = ["image/jpeg", "image/png",];
      if (!validImageTypes.includes(acceptedFiles[0].type)) {
        setUploading(false);
        setErrorMessage("Only image files (JPEG, PNG) are allowed.");
        return;
      }
      const newFileName=`${state.user.userinfo.email}-${new Date()}-${acceptedFiles[0].name}`
      console.log(acceptedFiles[0].name,"file")
      const response = await axiosprivate.post("/uploadimage", {
        filename: newFileName,
        filetype: acceptedFiles[0].type,
      });
      const uploadToS3 = await axios.put(response.data.data, acceptedFiles[0], {
        headers: { "Content-Type": acceptedFiles[0].type },
      });
      setUploading(false);
      setImgURl(URL.createObjectURL(acceptedFiles[0]));
      setShowPhotoComp(true);
      setRestoring(true);
      const restoredImage = await axiosprivate.post(
        "/uploadimage/restoreimage",
        { filename:  newFileName}
      );
      setRestoring(false);
      setFetchCredits(!fetchCredits);
      setRestoredImage(restoredImage.data.data);
    } catch (error) {
      setRestoring(false);
      setUploading(false);
      if (error.response.status === 400) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Some error occured");
      }
    }
  };
  return (
    <>
      
        <div className=" mt-48 px-2">
          <p className="text-3xl lg:text-6xl text-center lg:leading-[5rem]  font-bold   ">
            Make Any Face Photo Clear Again
          </p>
        </div>
        {state.user.userinfo.credits === 0 ? (
          <p className="text-center mt-8 text-xl mb-12">
            You have {state.user.userinfo.credits} credits left. Buy{" "}
            <Link className="text-blue-800 underline font-bold" to="/pricing">
              more credits here
            </Link>
          </p>
        ) : (
          <p className="text-center mt-8 text-xl mb-12">
            You have <span className="font-extrabold">{state.user.userinfo.credits}</span> credits left.
          </p>
        )}
        {errorMessage !== "" ? (
          <p className="text-center  mb-2 text-red-600 font-semibold">
            {errorMessage}
          </p>
        ) : (
          <></>
        )}
        {!showPhotoComp ? (
          <div className="flex items-center justify-center  ">
            <Dropzone onDrop={(acceptedFiles) => handleSubmit(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section
                  {...getRootProps()}
                  className="w-[90%] sm:w-[75%] lg:w-[50%] py-8 border-2 flex items-center justify-center flex-col lg:px-32 lg:py-16 xl:px-56 xl:py-16 rounded-md border-dotted border-gray-400"
                >
                  <div>
                    <input {...getInputProps()} />
                    <button className="bg-black text-lg px-5 py-1 text-white lg:px-10 lg:py-3 rounded-md lg:text-xl mb-2 ">
                      {uploading === true ? "Uploading..." : "Upload File"}
                    </button>
                  </div>
                  <p>...or drag and drop an image</p>
                </section>
              )}
            </Dropzone>
          </div>
        ) : (
          <PhotoComponent
            imgUrl={imgUrl}
            restoredImage={restoredImage}
            setShowPhotoComp={() => setShowPhotoComp(false)}
          />
        )}
      
    </>
  );
};

export default Dashboard;
