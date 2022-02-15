import { useEffect, useState } from "react";
import styled from "styled-components";
import { Metric } from "../../sdk/@types";
import MetricService from "../../sdk/services/Metric.service";
import CircleChart from "../components/CircleChart";

export default function UserTopTags() {

  const [topTags, setTopTags] = useState<Metric.EditorTagRatio>([])

  // Faz a chamada Http de fato
  useEffect(() => {
    MetricService
      .getTop3Tags()    // Chama servico
      .then(setTopTags) // Quando for finalizado, passa o valor para topTags
  }, [])
 

  return <UserTopTagsWrapper>

    {
      // Para cada tag que tivermos, mapeamos 
      topTags.map((tag, i) => { // Recupera o elemento (tag) e o indice (i)
        return <CircleChart 
          progress= {tag.percentage}
          size={88}
          caption={tag.tagName}
          theme={i === 0 ? 'primary' : 'default'} // Se o indice for = 0 retora tema primary, do contrario retorna tema default
        />
      })
    }

  </UserTopTagsWrapper>

}

const UserTopTagsWrapper=styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`