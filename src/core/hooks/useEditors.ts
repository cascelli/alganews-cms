import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import * as EditorActions from "../store/Editor.store";

export default function useEditors() {
  // Cria um dispatch
  const dispatch = useDispatch();

  // Cria seletores
  // Seletor da propriedade fetching
  const loading = useSelector((state: RootState) => state.editor.fetching);

  // Seletor da propriedade editorsList
  const editorsList = useSelector(
    (state: RootState) => state.editor.editorsList
  );

  // Metodo para retornar os editores
  const fetchAllEditors = useCallback(
    async function () {
      dispatch(EditorActions.fetchAllEditors());
    },
    [dispatch]
  );

  // Retorna o loading, o editorsList e o metodo para retornar os editores
  return {
    loading,
    editorsList,
    fetchAllEditors,
  };
}
