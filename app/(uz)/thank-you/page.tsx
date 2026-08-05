import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "../../i18n";

export const metadata: Metadata = {
  ...pageMetadata({
    lang: "uz",
    path: "/thank-you",
    title: "Rahmat! So'rovingiz qabul qilindi — Repid Agency",
    description: "Mutaxassislarimiz tez orada siz bilan bog'lanishadi.",
  }),
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main style={styles.page}>
      {/* Boy va jonli orqa fon nurlari */}
      <div style={styles.glowBlue} />
      <div style={styles.glowGreen} />
      <div style={styles.glowCenter} />

      {/* Ekran markazidagi karta */}
      <div style={styles.card}>
        <div style={styles.cardBorderTop} />

        {/* Icon */}
        <div style={styles.iconContainer}>
          <div style={styles.iconBlur} />
          <div style={styles.iconCircle}>
            <svg
              style={styles.checkSvg}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Text */}
        <h1 style={styles.title}>Arizangiz qabul qilindi!</h1>
        <p style={styles.desc}>
          Murojaatingiz uchun rahmat. Mutaxassislarimiz loyihangizni o'rganib
          chiqib, <span style={styles.timeBadge}>15 daqiqa ichida</span>{" "}
          bog'lanishadi.
        </p>

        {/* Status Tracker */}
        <div style={styles.statusWidget}>
          <div style={styles.statusStep}>
            <span style={styles.stepDotDone} />
            <span style={styles.stepTextDone}>Qabul qilindi</span>
          </div>
          <div style={styles.stepLine} />
          <div style={styles.statusStep}>
            <span style={styles.stepDotActive} />
            <span style={styles.stepTextActive}>Tahlil qilinmoqda</span>
          </div>
        </div>

        {/* Button */}
        <Link href="/" style={styles.button}>
          <svg
            style={styles.btnIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Bosh sahifaga qaytish
        </Link>
      </div>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--bg2)",
    padding: "2rem 1rem",
    position: "relative",
    overflow: "hidden",
    fontFamily: "var(--font)",
    boxSizing: "border-box",
  },
  // Orqa fondagi gradient va nurlar
  glowBlue: {
    position: "absolute",
    top: "-10%",
    left: "-5%",
    width: "55vw",
    height: "55vw",
    background:
      "radial-gradient(circle, var(--accent-soft) 0%, rgba(255,255,255,0) 70%)",
    filter: "blur(80px)",
    pointerEvents: "none",
  },
  glowGreen: {
    position: "absolute",
    bottom: "-10%",
    right: "-5%",
    width: "50vw",
    height: "50vw",
    background:
      "radial-gradient(circle, rgba(26, 159, 75, 0.12) 0%, rgba(255,255,255,0) 70%)",
    filter: "blur(90px)",
    pointerEvents: "none",
  },
  glowCenter: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40vw",
    height: "40vw",
    background:
      "radial-gradient(circle, rgba(66, 165, 255, 0.15) 0%, rgba(255,255,255,0) 75%)",
    filter: "blur(70px)",
    pointerEvents: "none",
  },
  card: {
    position: "relative",
    zIndex: 2,
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    border: "1px solid var(--line)",
    borderRadius: "var(--r)",
    padding: "3.5rem 2.25rem 3rem",
    maxWidth: "460px",
    width: "100%",
    textAlign: "center",
    boxShadow: "0 30px 60px -15px rgba(15, 19, 32, 0.1)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
  },
  cardBorderTop: {
    position: "absolute",
    top: 0,
    left: "15%",
    right: "15%",
    height: "3px",
    background:
      "linear-gradient(90deg, transparent, var(--accent), var(--green), transparent)",
  },
  iconContainer: {
    position: "relative",
    width: "80px",
    height: "80px",
    margin: "0 auto 1.75rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconBlur: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    backgroundColor: "var(--green)",
    opacity: 0.25,
    filter: "blur(14px)",
  },
  iconCircle: {
    position: "relative",
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    backgroundColor: "var(--green)",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 10px 22px -4px rgba(26, 159, 75, 0.4)",
  },
  checkSvg: {
    width: "36px",
    height: "36px",
  },
  title: {
    fontSize: "1.875rem",
    fontWeight: "700",
    color: "var(--ink)",
    letterSpacing: "-0.03em",
    marginBottom: "0.875rem",
  },
  desc: {
    fontSize: "1rem",
    color: "var(--sub)",
    lineHeight: "1.6",
    marginBottom: "2rem",
  },
  timeBadge: {
    color: "var(--accent-d)",
    backgroundColor: "var(--accent-soft)",
    padding: "0.2rem 0.6rem",
    borderRadius: "6px",
    fontWeight: "600",
    fontSize: "0.95rem",
  },
  statusWidget: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    backgroundColor: "var(--bg3)",
    border: "1px solid var(--line)",
    padding: "0.75rem 1.25rem",
    borderRadius: "var(--r-sm)",
    marginBottom: "2rem",
  },
  statusStep: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  stepDotDone: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: "var(--green)",
  },
  stepTextDone: {
    fontSize: "0.85rem",
    fontWeight: "600",
    color: "var(--ink)",
  },
  stepLine: {
    width: "20px",
    height: "1px",
    backgroundColor: "var(--faint)",
    opacity: 0.4,
  },
  stepDotActive: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: "var(--amber)",
  },
  stepTextActive: {
    fontSize: "0.85rem",
    color: "var(--sub)",
  },
  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    width: "100%",
    backgroundColor: "var(--accent)",
    color: "#ffffff",
    padding: "0.95rem 1.5rem",
    borderRadius: "var(--r-sm)",
    fontSize: "1rem",
    fontWeight: "600",
    textDecoration: "none",
    boxShadow: "0 8px 20px -4px rgba(0, 113, 227, 0.35)",
  },
  btnIcon: {
    width: "18px",
    height: "18px",
  },
};
