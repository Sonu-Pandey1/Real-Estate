import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./UploadWidget.scss"; // Import styling for the widget

function UploadWidget({ uwConfig, setState }) {
  const [loaded, setLoaded] = useState(false);
  const [widget, setWidget] = useState(null);

  useEffect(() => {
    const initializeScript = () => {
      const existingScript = document.getElementById("cloudinary-upload-widget-script");
      if (!existingScript) {
        const script = document.createElement("script");
        script.id = "cloudinary-upload-widget-script";
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.async = true;
        script.onload = () => setLoaded(true);
        script.onerror = () => console.error("Failed to load Cloudinary upload widget script.");
        document.body.appendChild(script);
      } else {
        setLoaded(true);
      }
    };

    initializeScript();
  }, []);

  useEffect(() => {
    if (loaded && !widget) {
      // Initialize the Cloudinary upload widget once the script is loaded
      const cloudinaryWidget = window.cloudinary?.createUploadWidget(
        uwConfig,
        (error, result) => {
          if (error) {
            console.error("Cloudinary Widget Error:", error);
          }
          if (result && result.event === "success") {
            console.log("Uploaded image info:", result.info);
            setState((prev) => [...prev, result.info.secure_url]);
          }
        }
      );
      setWidget(cloudinaryWidget);
    }
  }, [loaded, uwConfig, setState, widget]);

  const handleUploadClick = () => {
    if (widget) {
      widget.open();
    } else {
      console.error("Upload widget is not initialized yet.");
    }
  };

  return (
    <button
      id="upload_widget"
      className=" btn btn-outline-primary "
      onClick={handleUploadClick}
      disabled={!loaded}
    >
      {loaded ? "Upload Image" : "Loading..."}
    </button>
  );
}

UploadWidget.propTypes = {
  uwConfig: PropTypes.object.isRequired, // Cloudinary widget configuration
  setState: PropTypes.func.isRequired, // Function to update the parent state
};

export default UploadWidget;
