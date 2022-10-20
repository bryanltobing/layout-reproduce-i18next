import type { FC, ReactNode } from "react";
import { useTranslation } from "next-i18next";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    const { t } = useTranslation();

    return (
        <div>
            <div>{t("hello-world")}</div>
            {children}
        </div>
    );
};