import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { login as loginApi } from "../../services/apiAuth";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: ({ user }) => {
      //we are manually setting user data into the cache by specifying key "user", and passing in the corresponding value
      queryClient.setQueryData(["user"], user);
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log("Error:", err.message);
      toast.error("Provided email and password are incorrect.");
    },
  });

  return { login, isLoading };
}
