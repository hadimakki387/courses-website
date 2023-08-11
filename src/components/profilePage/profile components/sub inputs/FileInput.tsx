import React, { useState } from "react";
import "@uploadthing/react/styles.css";
import { UploadDropzone } from "@uploadthing/react";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import Link from "next/link";

function FileInput(getImg: any) {
  const [res, setRes] = useState<
    {
      fileUrl: string;
      fileKey: string;
    }[]
  >([]);
  const getRes = ()=>{
    res.forEach(res => {
      getImg(res.fileUrl)
    });
   
  }
  return (
    <>
      <main className="justify-between  bg-[#1e2f4b] hover:bg-[#213452] transition-all duration-300">
        <UploadDropzone<OurFileRouter>
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            // Do something with the response
            if (res) {
              setRes(res);

              getRes()

              console.log("Files: ", res);
            }

            console.log("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
        />
      </main>
    </>
  );
}

export default FileInput;
