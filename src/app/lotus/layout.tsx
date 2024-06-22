import classNames from "classnames";
import styles from "./styles.module.css";

export default function LotusLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className={classNames("bg-gradient-to-t from-pink-200 to-white", styles.gradientAnimation)}>
            <div className={classNames(styles.gradient, styles.gradientAnimation)} />
            {children}
        </section>
    )
};
