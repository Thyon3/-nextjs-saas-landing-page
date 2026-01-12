import { Metadata } from "next";
import NotFound from "@/components/NotFound";

export const metadata: Metadata = {
  title: "404 Page | Next.js Template for Startup and SaaS",
  description: "This is 404 page",
};

const ErrorPage = () => {
  return <NotFound />;
};

export default ErrorPage;
