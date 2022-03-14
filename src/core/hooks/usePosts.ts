import { Post } from "danielbonifacio-sdk";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import selectPaginatedPosts from "../selectors/selectPaginatedPosts";
import selectPostsFetching from "../selectors/selectPostsFetching";
import * as PostActions from "../store/Post.slice";

export default function usePosts() {
  // Cria um dispatch
  const dispatch = useDispatch();

  // Cria seletores
  // Seletor da propriedade fetching
  const loading = useSelector(selectPostsFetching);

  // Seletor da propriedade paginated
  const paginatedPosts = useSelector(selectPaginatedPosts);

  // Metodo para retornar os posts
  const fetchPosts = useCallback(
    async function (query: Post.Query) {
      dispatch(PostActions.fetchPosts(query));
    },
    [dispatch]
  );

  // retorna o loading e o paginatedPosts e o metodo para retornar os posts
  return {
    paginatedPosts,
    loading,
    fetchPosts,
  };
}
