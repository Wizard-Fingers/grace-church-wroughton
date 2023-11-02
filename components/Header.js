//import Image from next/image
import Image from "next/image";
// import Image file
import graceChurchWroughton from "../public/grace_church_wroughton.png";

export default function Header() {
  const styles = {
    header:
      "bg-LightGreen p-4 flex flex-col lg:max-w-xl max-w-lg mx-auto sm:mt-6 lg:mt-0 shadow-xl",
    boxImage: "inline-block mx-auto lg:mb-6",
    p: "p-4 text-base sm:text-lg lg:text-2xl font-bold lg:font-medium ",
    boxText: "flex justify-content-center items-center",
  };

  const Images = {
    src: graceChurchWroughton,
    alt: "Grace Church Wroughton",
  };

  return (
    <header className={styles.header}>
      <div className={styles.boxImage}>
        <Image src={Images.src} alt={Images.alt} width={600} />
      </div>
      <div className={styles.boxText}>
        <p className={styles.p}>
          Join us Sunday Afternoons at the Gospel Hall at 3PM on 8 Markham Rd,
          Wroughton, SN4 9JT for a time of fellowship, singing teaching and
          prayer.
        </p>
      </div>
      <div className={styles.boxText}>
        <p className={styles.p}>
          Watch this space!
          <br /> More coming soon...
        </p>
      </div>
    </header>
  );
}
