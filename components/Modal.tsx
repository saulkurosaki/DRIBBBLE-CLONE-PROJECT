"use client";

import { useCallback, useRef, ReactNode } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "./ui/button";

const Modal = ({ children }: { children: ReactNode }) => {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleClick = () => {};

  const onDismiss = () => {};

  return (
    <div ref={overlay} className="modal" onClick={handleClick}>
      <Button onClick={onDismiss} className="absolute top-4 right-8">
        <Image src="/close.svg" alt="close" width={17} height={17} />
      </Button>

      <div ref={wrapper} className="modal_wrapper">
        {children}
      </div>
    </div>
  );
};

export default Modal;
