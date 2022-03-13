import { transparentize } from "polished";
//import { useEffect, useState } from "react";
import { useEffect } from "react";

// "You must use React >= 16.8 in order to use useParams()"
//import { useParams } from "react-router";
// Substituido import acima
//import { useParams } from "react-router-dom";
import { useParams } from "react-router";

import styled from "styled-components";

//import { User } from "../../sdk/@types";
//import UserService from "../../sdk/services/User.service";
//import getEditorDescription from "../../sdk/utils/getEditorDescription";
// Substituindo os imports dos services do sdk local pelo modulo alganews-sdk
//  criado fora do projeto como um pacote npm separado pois será usado em mais
//  partes do projeto alganews
//import { getEditorDescription, User, UserService } from "danielbonifacio-sdk";
import { getEditorDescription } from "danielbonifacio-sdk";

import FieldDescriptor from "../components/FieldDescriptor/FieldDescriptor";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";
import useSingleEditor from "../../core/Hooks/useSingleEditor";

interface EditorProfileProps {
  hidePersonalData?: boolean;
}

function EditorProfile(props: EditorProfileProps) {
  // Descomentar para forçar erro e teste do ErrorBoundary
  //throw new Error("Houve um erro ao renderizar o componente EditorProfile");

  const params = useParams<{ id: string }>();
  //const params = useParams();

  //const [editor, setEditor] = useState<User.EditorDetailed>();
  const { editor, fetchEditor } = useSingleEditor();

  // useEffect(() => {
  //   UserService.getExistingEditor(Number(params.id))
  //     //.then(editor => setEditor(editor))
  //     .then(setEditor); // Simplificacao da linha anterior
  // }, [params.id]);
  useEffect(() => {
    fetchEditor(Number(params.id));
  }, [fetchEditor, params.id]);

  // Verifica se existe editor e retorna null se nao existir
  // Necessario para evitar erro no editor do bloco EditorHeadline mais abaixo
  if (!editor) return null;

  return (
    <EditorProfileWrapper>
      <EditorHeadline>
        <Avatar src={editor.avatarUrls.small} />
        <Name>{editor.name}</Name>
        <Description>
          {getEditorDescription(new Date(editor.createdAt))}
        </Description>
      </EditorHeadline>

      <Divisor />

      <EditorFeatures>
        <PersonalInfo>
          <Biography>{editor.bio}</Biography>
          <Skills>
            {editor.skills?.map((skill) => {
              return (
                <ProgressBar
                  key={skill.name}
                  progress={skill.percentage}
                  title={skill.name}
                  theme={"primary"}
                />
              );
            })}
          </Skills>
        </PersonalInfo>

        <ContactInfo>
          <FieldDescriptor field={"Cidade"} value={editor.location.city} />
          <FieldDescriptor field={"Estado"} value={editor.location.state} />

          {!props.hidePersonalData && (
            <>
              <FieldDescriptor field={"Telefone"} value={"+55 27 99900-9999"} />
              <FieldDescriptor
                field={"Email"}
                value={"ana.castillo@redacao.algacontent.com"}
              />
              <FieldDescriptor
                field={"Nascimento"}
                value={"26 de Dezembro de 1997 (22 anos)"}
              />
            </>
          )}
        </ContactInfo>
      </EditorFeatures>

      {!props.hidePersonalData && (
        <EditorEarnings>
          <ValueDescriptor
            color={"default"}
            value={21452}
            description={"Palavras nesta semana"}
          />
          <ValueDescriptor
            color={"default"}
            value={123234}
            description={"Palavras no mês"}
          />
          <ValueDescriptor
            color={"default"}
            value={12312312}
            description={"Total de palavras"}
          />
          <ValueDescriptor
            color={"primary"}
            value={545623.23}
            description={"Ganhos na semana"}
            isCurrency
          />
          <ValueDescriptor
            color={"primary"}
            value={545623.23}
            description={"Ganhos no mês"}
            isCurrency
          />
          <ValueDescriptor
            color={"primary"}
            value={545623.23}
            description={"Ganhos no total"}
            isCurrency
          />
        </EditorEarnings>
      )}
    </EditorProfileWrapper>
  );
}

const EditorProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 24px;
  border: 1px solid ${transparentize(0.9, "#274060")};
`;

const EditorHeadline = styled.div`
  display: grid;
  align-items: center;
  gap: 8px 16px;
  grid-template-rows: 2;
  grid-template-columns: 48px auto;
  height: 48px;
`;

const Avatar = styled.img`
  grid-row-start: 1;
  grid-row-end: 3;
  object-fit: contain;
  width: 48px;
  height: 48px;
`;

const Name = styled.h1`
  font-size: 18px;
  font-weight: 400;
  grid-column-start: 2;
`;

const Description = styled.span`
  font-size: 12px;
  grid-column-start: 2;
`;

const Divisor = styled.div`
  border-bottom: 1px solid ${transparentize(0.9, "#274060")};
`;

const EditorFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2;
  gap: 24px;
`;

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Biography = styled.p`
  font-size: 12px;
  line-height: 20px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 0;

  > * {
    width: 100%;
  }

  & > :nth-child(1),
  & > :nth-child(2) {
    width: 50%;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const EditorEarnings = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 24px;
`;

export default EditorProfile;
