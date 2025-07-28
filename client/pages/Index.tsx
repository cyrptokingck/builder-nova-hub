import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to first onboarding screen
    navigate("/onboarding-walkthrough-1");
  }, [navigate]);

  return null;
}
