import { Modal } from "antd";
import { ReactNode } from "react";

interface Props {
  title?: string;
  visible: boolean;
  centered?: boolean;
  className?: string;
  children?: ReactNode;
  width?: any;
  description?: string;
  handleCancel?: (e: any) => void;
}
const ModalComponent = ({
  title,
  visible,
  children,
  centered,
  handleCancel,
  width,
  className,
  description,
}: Props) => {
  return (
    <Modal
      mask={false}
      title={title}
      visible={visible}
      onCancel={handleCancel}
      footer={null}
      centered={centered}
      width={width || null}
      className={
        className || "w-[calc(100%-2rem)] tab-sm:w-[30rem] pc:w-[800px]"
      }
    >
      <h2>{description}</h2>
    </Modal>
  );
};

export default ModalComponent;
