import React from "react";
import { Modal } from "antd";

const TrailerModal = ({ isModalOpen, onCancel, contentModal }) => {
  return (
    <>
      <Modal
        title="Trailer"
        open={isModalOpen}
        onCancel={onCancel}
        width={1000}
        footer={null}
        afterClose={() => {
          let iframe = document.querySelector("iframe");
          //   console.log(iframe);
          if (iframe) {
            let src = iframe.src;
            iframe.src = src;
          }
        }}
      >
        {contentModal}
      </Modal>
    </>
  );
};

export default TrailerModal;
