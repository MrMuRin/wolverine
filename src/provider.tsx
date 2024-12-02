import { NextUIProvider } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import React from "react";

export function Provider({ children }: { children: React.ReactNode }) {
    const navigate = useNavigate();

    return <NextUIProvider navigate={navigate}>{children}</NextUIProvider>;
}