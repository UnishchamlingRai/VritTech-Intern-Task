"use client";
import { useIsAuthenticated } from "@/app/hooks/useIsAuthenticated";

export default function DashboardContiner() {
  const { authenticated, userName } = useIsAuthenticated();

  if (!authenticated) {
    return <p>Loading...</p>;
  }
  return (
    <div className="container mx-auto p-4">
      <h1>Dashboard</h1>
      <p>
        <span className="font-bold">{userName.toLocaleUpperCase()}</span>{" "}
        Welcome to your protected dashboard!
      </p>
    </div>
  );
}
