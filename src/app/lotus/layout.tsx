import classNames from "classnames";
import styles from "./styles.module.css";

export default function LotusLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className={styles.gradientAnimation}>
            {children}
        </section>
    )
};
