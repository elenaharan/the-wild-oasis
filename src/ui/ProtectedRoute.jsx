import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  //we are only allowed to call navigate function inside another function or useEffect, not at the top level
  const navigate = useNavigate();
  //Steps to authorize users to access application routes

  //1. Load the authenticated user
  const { isAuthenticated, isLoading } = useUser();

  //2. If there is No authenticated user, redirect to /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isLoading, navigate, isAuthenticated]
  );

  //3.While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4. If there is authenticated user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
