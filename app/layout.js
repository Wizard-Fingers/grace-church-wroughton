// this is where everything gets compiled into a single html file
import "./styles/globals.css";

export const metadata = {
  title: "Grace Church Wroughton",
  description: "We are a newly established church in Wroughton, uk",
  icon: "./favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
