import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import { FaCheck, FaXmark } from "react-icons/fa6";

interface NotificationProps {
  title?: string;
  type?: "success" | "error" | "warning" | "info";
  content?: string;
  show?: boolean;
  onClose?: () => void;
  autoClose?: boolean;
  duration?: number;
}

const Notifications = ({
  title,
  type = "success",
  content,
  show = false,
  onClose,
  autoClose = true,
  duration = 3000,
}: NotificationProps) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    setIsVisible(show);
  }, [show]);

  useEffect(() => {
    if (isVisible && autoClose) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onClose) {
          setTimeout(onClose, 300); // Wait for animation to complete
        }
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, autoClose, duration, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      setTimeout(onClose, 300);
    }
  };

  const getTypeStyles = () => {
    switch (type) {
      case "success":
        return {
          borderColor: "border-t-green-600",
          iconColor: "text-green-600",
          icon: <FaCheck />,
        };
      case "error":
        return {
          borderColor: "border-t-red-600",
          iconColor: "text-red-600",
          icon: <FaXmark />,
        };
      case "warning":
        return {
          borderColor: "border-t-yellow-600",
          iconColor: "text-yellow-600",
          icon: <FaXmark />,
        };
      case "info":
        return {
          borderColor: "border-t-blue-600",
          iconColor: "text-blue-600",
          icon: <FaCheck />,
        };
      default:
        return {
          borderColor: "border-t-green-600",
          iconColor: "text-green-600",
          icon: <FaCheck />,
        };
    }
  };

  const typeStyles = getTypeStyles();

  if (!show) return null;

  return createPortal(
    <div
      className={`fixed ${
        typeStyles.borderColor
      } border-t-8 top-28 transition-all duration-300 ease-in-out ${
        isVisible ? "right-4 opacity-100" : "-right-96 opacity-0"
      } z-50 flex items-center justify-between min-w-80 bg-white rounded-lg p-4 shadow-2xl`}
    >
      <div className="flex items-center gap-3">
        <div className={`text-xl ${typeStyles.iconColor}`}>
          {typeStyles.icon}
        </div>
        <div>
          {title && <h3 className="font-semibold text-gray-800">{title}</h3>}
          {content && <p className="text-sm text-gray-600">{content}</p>}
        </div>
      </div>

      <button
        onClick={handleClose}
        className="text-gray-400 hover:text-gray-600 ml-4"
      >
        <FaTimes />
      </button>
    </div>,
    document.body
  );
};

export default Notifications;
