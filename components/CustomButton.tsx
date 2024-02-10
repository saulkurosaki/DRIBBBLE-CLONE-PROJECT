import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  leftIcon,
  rightIcon,
  handleClick,
  isSubmitting,
  type,
  bgColor,
  textColor,
}: CustomButtonProps) => {
  return (
    <button
      type={type || "button"}
      disabled={isSubmitting}
      className={`flexCenter gap-3 px-4 py-3
        ${textColor ? textColor : "text-white"}
        ${
          isSubmitting ? "bg-black/50" : bgColor ? bgColor : "bg-primary-purple"
        }
        rounded-xl text-sm font-medium max-md:w-full
      `}
      onClick={handleClick}
    >
      {leftIcon && <Image src={leftIcon} alt="left" width={14} height={14} />}

      {title}

      {rightIcon && (
        <Image src={rightIcon} alt="right" width={14} height={14} />
      )}
    </button>
  );
};

export default CustomButton;
