//import Image from next/image
import Image from "next/image";
// import Image file
import praying from "../public/praying.png";
// import Link from next/link
import Link from "next/link";
// import icon from react-icons
import { FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

export default function SideFooter() {
  const styles = {
    names: " text-xl",
    footer: "p-4 bg-Black lg:p-0 shadow-xl",
    ul: "sm:min-h-full b-0 flex sm:flex-col justify-between sm:justify-around lg:hidden",
    li: "text-Black bg-White text-Black text-2xl rounded-full ",
    divDesktop: {
      mainDiv: "hidden min-h-full lg:flex lg:flex-col lg:justify-between",
      contactBox: {
        div: "text-center text-White p-2 mb-4",
        h3: "text-3xl font-bold text-White underline mb-6",
        p: "text-xs",
        divIcon:
          "text-Black mx-auto bg-White rounded-full inline-block p-1 text-2xl mb-2",
      },
      getSocialBox: {
        flexDiv: "flex justify-center text-center",
        divIconGetSocialBox:
          "text-Black bg-White rounded-full p-1 text-2xl inline-block mx-2",
      },
    },
  };

  const links = {
    facebookLink: "https://www.facebook.com/profile.php?id=100095473574347",
    instagramLink:
      "https://www.instagram.com/gracechurchwroughton/?fbclid=IwAR2JXoDY-_cNSGzs0lhg9pIItK6ztyPCHE6mqg2lgA0Qin8WODKUvoRe2qM",
    emailLink: "mailto:gracechurchwroughton@gmail.com",
  };

  const Images = {
    src: praying,
    alt: "Praying in GraceChurch Wroughton",
  };

  return (
    <footer className={styles.footer}>
      {/*Mobile and Tablet*/}
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href={links.facebookLink} target="blank">
            <FaFacebookF />
          </Link>
        </li>
        <li className={styles.li}>
          <Link href={links.emailLink} target="blank">
            <MdEmail />
          </Link>
        </li>
        <li className={styles.li}>
          <Link href={links.instagramLink} target="blank">
            <AiFillInstagram />
          </Link>
        </li>
      </ul>
      {/*End of Mobile and Tablet*/}
      {/*Desktop Design*/}
      <div className={styles.divDesktop.mainDiv}>
        <div className={styles.divDesktop.contactBox.div}>
          <h3 className={styles.divDesktop.contactBox.h3}>Contact Us</h3>
          <div className={styles.divDesktop.contactBox.divIcon}>
            <Link href={links.emailLink} target="blank">
              <MdEmail />
            </Link>
          </div>
          <p className={styles.divDesktop.contactBox.p}>
            gracechurchwroughton@gmail.com
          </p>
        </div>
        <div className={styles.divDesktop.contactBox.div}>
          <h3 className={styles.divDesktop.contactBox.h3}>Get Social</h3>
          <div className={styles.divDesktop.getSocialBox.flexDiv}>
            <div className={styles.divDesktop.getSocialBox.divIconGetSocialBox}>
              <Link href={links.facebookLink} target="blank">
                <FaFacebookF />
              </Link>
            </div>
            <div className={styles.divDesktop.getSocialBox.divIconGetSocialBox}>
              <Link href={links.instagramLink} target="blank">
                <AiFillInstagram />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.divDesktop.contactBox.div}>
          <h3 className={styles.divDesktop.contactBox.h3}>Team</h3>
          <ul className={styles.names}>
            <li>Carl Porter</li>
            <li>Jay Mock</li>
            <li>Jason Shattuck</li>
          </ul>
        </div>
        <Image src={Images.src} alt={Images.alt} width={300} />
      </div>
      {/*End of Desktop Design*/}
    </footer>
  );
}
