import { useCallback, useState } from "react";
import { User, UserService } from "danielbonifacio-sdk";
import useAuth from "./useAuth";

export default function useUser() {
  /*
  const [user, setUser] = useState<User.Detailed>();

  const fetchUser = useCallback(async function () {
    UserService.getDetailedUser(6).then(setUser);
  }, []);

  return {
    user,
    fetchUser,
  };
  */
  // Implementado correcao da aula 17.42 - useUser passando id fixo
  const [detailedUser, setDetailedUser] = useState<User.Detailed>();
  const { user } = useAuth();

  const fetchDetailedUser = useCallback(
    async function () {
      UserService.getDetailedUser(Number(user?.id)).then(setDetailedUser);
    },
    [user?.id]
  );

  return {
    detailedUser,
    fetchDetailedUser,
  };
}
