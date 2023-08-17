import Header from "@/components/Header";
import Verse1 from "@/components/Verse1";
import Pictures from "@/components/Pictures";
import Verse2 from "@/components/Verse2";
import SideFooter from "@/components/SideFooter";

export default function Home() {
  const styles = {
    main: "xl:container xl:mx-auto flex flex-col sm:flex-row h-screen bg-cover bg-gradient-to-b from-green-400 to-gray-200",
    divGeneralBox: "lg:flex lg:p-10",
    divMainBox: "p-4 lg:p-0 lg:ml-4 lg:flex-col lg:justify-between lg:max-w-sm",
    divBoxVerse1Pictures:
      "mb-4 flex flex-col-reverse justify-between max-w-lg mx-auto lg:flex-col",
  };

  return (
    <main className={styles.main}>
      <div className={styles.divGeneralBox}>
        <Header />
        <div className={styles.divMainBox}>
          <div className={styles.divBoxVerse1Pictures}>
            <Verse1 />
            <Pictures />
          </div>
          <Verse2 />
        </div>
      </div>

      <SideFooter />
    </main>
  );
}
