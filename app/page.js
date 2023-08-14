import NewComponent from "@/components/NewComponent";
export default function Home() {
  // I want you to place your styles in a const called styles here when your on a page load
  const styles = {
    h1: "text-xl text-red-500",
  };

  return (
    <main>
      <h1 className={styles.h1}>Arthur first client project!!! </h1>
      <NewComponent />
    </main>
  );
}
