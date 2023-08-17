/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import logoTransparent from "../public/logo_transparent.png";

export default function Verse() {
  const styles = {
    div: "bg-LightGreen flex flex-col items-center mt-4 lg:mt-0 pb-6 lg:mb-4 max-w-lg mx-auto shadow-xl",
    img: "p-2",
    p: "text-lg font-bold text-center",
  };

  const Images = {
    srcImage: logoTransparent,
    altImage: "Logo Grace Church Wroughton",
  };

  return (
    <div className={styles.div}>
      <Image
        src={Images.srcImage}
        atl={Images.altImage}
        width={450}
        className={styles.img}
      />
      <p className={styles.p}>Ephesians 2.8-10</p>
    </div>
  );
}
