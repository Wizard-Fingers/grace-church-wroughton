//import Image from next/image
import Image from "next/image";
// import Image file
import reading from "../public/reading.png";
import meeting from "../public/meeting.png";

export default function Pictures() {
  const styles = {
    divGeneral: "max-w-lg mx-auto flex flex-col lg:flex-row lg:justify-between",
    divImage1: "ml-2 mb-2 lg:ml-0 lg:mr-2",
    divImage2: "ml-2 lg:ml-0",
    img: "shadow-xl",
  };

  const Images = {
    srcImageReading: reading,
    altImageReading: "The Reading of the Bible",
    srcImageMeeting: meeting,
    altImageMeeting: "Meetings",
  };

  return (
    <div className={styles.divGeneral}>
      <div className={styles.divImage1}>
        <Image
          src={Images.srcImageReading}
          alt={Images.altImageReading}
          className={styles.img}
          width={450}
        />
      </div>
      <div className={styles.divImage2}>
        <Image
          src={Images.srcImageMeeting}
          alt={Images.altImageMeeting}
          className={styles.img}
          width={450}
        />
      </div>
    </div>
  );
}
