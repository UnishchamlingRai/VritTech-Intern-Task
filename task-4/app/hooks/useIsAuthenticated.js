import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
export function useIsAuthenticated() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const auth = Cookies.get("auth");
    if (!auth) {
      router.push("/login");
    } else {
      setAuthenticated(true);
      setUserName(JSON.parse(auth).username);
    }
  }, [router]);

  return { authenticated, userName };
}
