import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  //Steps to authorize users to access application routes

  //1. Load the authenticated user
  const { user, isLoading } = useUser();

  //2.While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //3. If there is No authenticated user, redirect to /login

  //4. If there is authenticated user, render the app
  return children;
}

export default ProtectedRoute;
