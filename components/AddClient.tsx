import Image from "next/image";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdOutlinePublish } from "react-icons/md";
import { BiCloudUpload } from "react-icons/bi";

import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

type Props = {
  onClose: () => void;
};

type FileWithPreview = {
  file: File;
  previewUrl: string;
};

function AddClient({ onClose }: Props) {
  const handleClose = () => {
    onClose();
  };

  //*-----------------------------> Rich Text Input

  const [value, setValue] = useState("");

  function handleChange(newValue: string) {
    setValue(newValue);
    console.log(newValue);
  }

  //*-----------------------------> Upload Images

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileInputChange() {
    if (fileInputRef.current?.files?.length) {
      const file = fileInputRef.current.files[0];
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    } else {
      setImageUrl(null);
    }
  }

  function handleButtonClick() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }
  function handleClearButtonClick() {
    setImageUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  //*----------------------------->

  const [selectedFiles, setSelectedFiles] = useState<FileWithPreview[]>([]);
  const imageInputRef = useRef<HTMLInputElement>(null);

  function handleImageInputChange() {
    if (imageInputRef.current?.files?.length) {
      const files = Array.from(imageInputRef.current.files);
      const filesWithPreview = files.map((file) => ({
        file,
        previewUrl: URL.createObjectURL(file),
      }));
      setSelectedFiles((prevSelectedFiles) => [
        ...prevSelectedFiles,
        ...filesWithPreview,
      ]);
    }
  }

  function handleAddImagesButtonClick() {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  }

  function handleClearButtonClickImages(file: FileWithPreview) {
    setSelectedFiles((prevSelectedFiles) =>
      prevSelectedFiles.filter((selectedFile) => selectedFile !== file)
    );
  }

  //*----------------------------->  Ai and Cdr files

  const [selectedAiFiles, setSelectedAiFiles] = useState<File[]>([]);
  const [selectedCdrFiles, setSelectedCdrFiles] = useState<File[]>([]);
  const [selectedOtherFiles, setSelectedOtherFiles] = useState<File[]>([]);

  const aiFileInputRef = useRef<HTMLInputElement>(null);
  const cdrFileInputRef = useRef<HTMLInputElement>(null);
  const otherFileInputRef = useRef<HTMLInputElement>(null);

  const handleAiUploadButtonClick = () => {
    aiFileInputRef.current?.click();
  };

  const handleCdrUploadButtonClick = () => {
    cdrFileInputRef.current?.click();
  };

  const handleOtherUploadButtonClick = () => {
    otherFileInputRef.current?.click();
  };
 

  return (
    <div className="add-client-main">
      <div className="add-client-container">
        <div className="title">
          <h4>Add Client</h4>

          <button className="close-button" type="button" onClick={handleClose}>
            <AiFillCloseCircle size={25} />
          </button>
        </div>
        <div className="line" />
        <div className="add-client-form">
          <form action="#">
            <div className="form-input">
              <label htmlFor="#">Client Name:</label>
              <input type="text" placeholder="add full name of the client" />
            </div>
            <div className="line" />
            <div className="form-input">
              <label htmlFor="#">Client Brand:</label>
              <input type="text" placeholder="add brand name of the client" />
            </div>
            <div className="line" />
            <div className="form-input rich-text-input">
              <label htmlFor="#">Description:</label>
              <ReactQuill
                value={value}
                onChange={handleChange}
                className="rich-text-editor"
              />
            </div>
            <div className="line" />
            <div className="form-input upload-image-main">
              <label htmlFor="#">Brand Logo .png:</label>
              {imageUrl && (
                <div className="upload-image-container">
                  <Image
                    src={imageUrl}
                    alt="Selected file"
                    fill
                    style={{ objectFit: "contain" }}
                  />

                  <button
                    type="button"
                    className="clear-image"
                    onClick={handleClearButtonClick}
                  >
                    <AiFillCloseCircle size={15} />
                    Remove
                  </button>
                </div>
              )}

              <button
                className="input-button"
                type="button"
                onClick={handleButtonClick}
              >
                <BiCloudUpload size={25} />
                Upload an Image
              </button>

              <input
                type="file"
                accept=".png"
                placeholder="add brand name of the client"
                ref={fileInputRef}
                onChange={handleFileInputChange}
                style={{ display: "none" }}
              />
            </div>
            <div className="line" />
            <div className="form-input upload-all-files-container">
              <label htmlFor="#">Upload all logo image files:</label>
              <input
                type="file"
                id="imageInput"
                ref={imageInputRef}
                style={{ display: "none" }}
                accept=".jpg,.jpeg,.png"
                multiple
                onChange={handleImageInputChange}
              />
              <button
                type="button"
                className="input-button"
                onClick={handleAddImagesButtonClick}
              >
                <BiCloudUpload size={25} />
                Upload Files
              </button>
              {selectedFiles.length > 0 && (
                <>
                  {selectedFiles.map((selectedFile) => (
                    <div
                      key={selectedFile.previewUrl}
                      className="uploaded-all-files"
                    >
                      <span>{selectedFile.file.name}</span>
                      <button
                        type="button"
                        className="input-button"
                        onClick={() =>
                          handleClearButtonClickImages(selectedFile)
                        }
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </>
              )}
            </div>
            <div className="line" />
            <div className="form-input upload-all-files-container">
              <label htmlFor="#">Upload .ai files:</label>
              <input
                type="file"
                id="ai-upload"
                multiple
                accept=".ai"
                onChange={(e) => {
                  if (e.target.files) {
                    const filesArray = Array.from(e.target.files);
                    setSelectedAiFiles((prevSelectedAiFiles) => [
                      ...prevSelectedAiFiles,
                      ...filesArray,
                    ]);
                  }
                }}
                ref={aiFileInputRef}
                style={{ display: "none" }}
              />
              <button
                onClick={handleAiUploadButtonClick}
                className="input-button"
                type="button"
              >
                <BiCloudUpload size={25} />
                Upload Files
              </button>
              {selectedAiFiles.map((file, index) => (
                <div key={index} className="uploaded-all-files">
                  <span>{file.name}</span>

                  <button
                    className="input-button"
                    onClick={() => {
                      setSelectedAiFiles((prevSelectedAiFiles) =>
                        prevSelectedAiFiles.filter((_, i) => i !== index)
                      );
                    }}
                    type="button"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="line" />
            <div className="form-input upload-all-files-container">
              <label htmlFor="#">Upload .cdr files:</label>
              <input
                type="file"
                id="cdr-upload"
                multiple
                accept=".cdr"
                onChange={(e) => {
                  if (e.target.files) {
                    const filesArray = Array.from(e.target.files);
                    setSelectedCdrFiles((prevSelectedCdrFiles) => [
                      ...prevSelectedCdrFiles,
                      ...filesArray,
                    ]);
                  }
                }}
                ref={cdrFileInputRef}
                style={{ display: "none" }}
              />
              <button
                onClick={handleCdrUploadButtonClick}
                className="input-button"
                type="button"
              >
                <BiCloudUpload size={25} />
                Upload Files
              </button>
              {selectedCdrFiles.map((file, index) => (
                <div key={index} className="uploaded-all-files">
                  <span>{file.name}</span>

                  <button
                    className="input-button"
                    onClick={() => {
                      setSelectedCdrFiles((prevSelectedCdrFiles) =>
                        prevSelectedCdrFiles.filter((_, i) => i !== index)
                      );
                    }}
                    type="button"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="line" />
            <div className="form-input upload-all-files-container">
              <label htmlFor="#">Upload all logo image files:</label>
              <input
                type="file"
                id="imageInput"
                ref={imageInputRef}
                style={{ display: "none" }}
                accept=".jpg,.jpeg,.png"
                multiple
                onChange={handleImageInputChange}
              />
              <button
                type="button"
                className="input-button"
                onClick={handleAddImagesButtonClick}
              >
                <BiCloudUpload size={25} />
                Upload Files
              </button>
              {selectedFiles.length > 0 && (
                <>
                  {selectedFiles.map((selectedFile) => (
                    <div
                      key={selectedFile.previewUrl}
                      className="uploaded-all-files"
                    >
                      <span>{selectedFile.file.name}</span>
                      <button
                        type="button"
                        className="input-button"
                        onClick={() =>
                          handleClearButtonClickImages(selectedFile)
                        }
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </>
              )}
            </div>
            <div className="line" />
            <div className="form-input upload-all-files-container">
              <label htmlFor="#">Upload .ai files:</label>
              <input
                type="file"
                id="ai-upload"
                multiple
                accept=".ai"
                onChange={(e) => {
                  if (e.target.files) {
                    const filesArray = Array.from(e.target.files);
                    setSelectedAiFiles((prevSelectedAiFiles) => [
                      ...prevSelectedAiFiles,
                      ...filesArray,
                    ]);
                  }
                }}
                ref={aiFileInputRef}
                style={{ display: "none" }}
              />
              <button
                onClick={handleAiUploadButtonClick}
                className="input-button"
                type="button"
              >
                <BiCloudUpload size={25} />
                Upload Files
              </button>
              {selectedAiFiles.map((file, index) => (
                <div key={index} className="uploaded-all-files">
                  <span>{file.name}</span>

                  <button
                    className="input-button"
                    onClick={() => {
                      setSelectedAiFiles((prevSelectedAiFiles) =>
                        prevSelectedAiFiles.filter((_, i) => i !== index)
                      );
                    }}
                    type="button"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="line" />
            <div className="form-input upload-all-files-container">
              <label htmlFor="#">Upload other files:</label>
              <input
                type="file"
                id="other-upload"
                multiple
                accept="image/*, .cdr"
                onChange={(e) => {
                  if (e.target.files) {
                    const filesArray = Array.from(e.target.files);
                    console.log(filesArray);

                    setSelectedOtherFiles((prevSelectedOtherFiles) => [
                      ...prevSelectedOtherFiles,
                      ...filesArray,
                    ]);
                  }
                }}
                ref={otherFileInputRef}
                style={{ display: "none" }}
              />
              <button
                onClick={handleOtherUploadButtonClick}
                className="input-button"
                type="button"
              >
                <BiCloudUpload size={25} />
                Upload Files
              </button>
              {selectedOtherFiles.map((file, index) => (
                <div key={index} className="uploaded-all-files">
                  <span>{file.name}</span>

                  <button
                    className="input-button"
                    onClick={() => {
                      setSelectedOtherFiles((prevSelectedOtherFiles) =>
                        prevSelectedOtherFiles.filter((_, i) => i !== index)
                      );
                    }}
                    type="button"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="line" />
            <button className="publish-button" type="submit">
              <MdOutlinePublish size={25} />
              Publish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddClient;
