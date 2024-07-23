import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { login as loginApi } from "../../services/apiAuth";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: ({ user }) => {
      console.log(user);
      navigate("/dashboard");
    },
    onError: (err) => {
      console.log("Error:", err.message);
      toast.error("Provided email and password are incorrect.");
    },
  });

  return { login, isLoading };
}
