import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";
function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I accept
      </Button>
    </div>
  );
  const modal = (
    <Modal actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra
      semper odio, ac sagittis sapien vestibulum vitae. Ut pretium a leo id
      aliquet. Duis aliquet nisi felis, quis fringilla arcu vestibulum ut.
      Curabitur vehicula nibh odio. Quisque iaculis vulputate mi, et congue mi
      iaculis non. Nulla hendrerit non lectus eget congue. Duis consectetur
      sapien ut congue fringilla. Maecenas ac nisl eu arcu malesuada molestie ut
      nec tellus.
      <Button onClick={handleClick} onClose={handleClose} primary>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
