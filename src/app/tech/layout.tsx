import styles from "./styles.module.css";

export default function TechLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className={styles.gradientAnimation}>
            {children}
        </section>
    )
}
