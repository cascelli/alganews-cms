import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton"
import styled from "styled-components";

//import { User } from "../../sdk/@types";
//import UserService from "../../sdk/services/User.service";
// Substituindo os imports dos services do sdk local pelo modulo alganews-sdk
//  criado fora do projeto como um pacote npm separado pois será usado em mais
//  partes do projeto alganews
import { User, UserService } from "danielbonifacio-sdk";

import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";

export default function UserEarnings() {

  const [error,setError] = useState<Error>()
  
  const [user, setUser] = useState<User.Detailed>()

  useEffect(() => {
    UserService
      .getDetailedUser(7) // ToDo : Usando usuario fixo por enquanto até lidar com segurança
      .then(setUser)
      .catch(error => { // Captura erro, quando houver
        setError(new Error(error.message))
      })
  }, [])

  if(error) // Lanca o erro, quando houver
    throw error

  if (!user)
    //return null // garante que usuario nao será null na renderizacao
    return <UserEarningsWrapper style={{ height: 123 }}>
      <Skeleton height={40} width={150} />
      <Skeleton height={40} width={150} />
      <Skeleton height={40} width={150} />
      <Skeleton height={40} width={150} />
    </UserEarningsWrapper>
    

  return <UserEarningsWrapper>
    <ValueDescriptor color="primary" description="Ganhos no mês" value={user.metrics.monthlyEarnings} isCurrency />
    <ValueDescriptor color="primary" description="Ganhos na semana" value={user.metrics.weeklyEarnings} isCurrency />
    <ValueDescriptor color="primary" description="Ganhos de sempre" value={user.metrics.lifetimeEarnings} isCurrency />
    <ValueDescriptor color="primary" description="Total de palavras" value={user.metrics.lifetimeWords} />
  </UserEarningsWrapper>

}

const UserEarningsWrapper=styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`
