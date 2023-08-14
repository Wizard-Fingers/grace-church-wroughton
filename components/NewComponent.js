// import Link from next/link
import Link from "next/link";
//import Image from next/image
import Image from "next/image";
// import Image file
import logo from "../public/logo.png";
// import icon from react-icons
import { FaFacebookF } from "react-icons/fa";
export default function NewComponent() {
  return (
    <div>
      <h1 className={styles.h1}>new component</h1>
      {/* link example */}
      <Link href="https://www.google.com/" target="blank">
        <p>google</p>
      </Link>
      {/* image example */}
      <Image src={logo} alt="logo" width={150} height={150} />
      {/* icon example  */}
      <Link href="https://www.google.com/" target="blank" className=" p-12">
        <FaFacebookF />
      </Link>
    </div>
  );
}
// place your styles here if you are working on a component
const styles = {
  h1: "text-red-500",
};
