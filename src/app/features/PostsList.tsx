import { mdiOpenInNew } from "@mdi/js";
import Icon from "@mdi/react";
//import { Post, PostService } from "danielbonifacio-sdk";
import { Post } from "danielbonifacio-sdk";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import { useCallback, useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import Skeleton from "react-loading-skeleton";
import { Column, usePagination, useTable } from "react-table";
import AuthService from "../../auth/Authorization.service";
import usePosts from "../../core/hooks/usePosts";
import modal from "../../core/utils/modal";
import Loading from "../components/Loading";
import PostTitleAnchor from "../components/PostTitleAnchor";
import Table from "../components/Table/Table";
import PostPreview from "./PostPreview";

// Usando variavel de ambiente para determinar valores
const APP_BLOG_SERVER = process.env.REACT_APP_BLOG_SERVER_BASE_URL;

export default function PostList() {
  // const [posts, setPosts] = useState<Post.Paginated>();
  // const [error, setError] = useState<Error>();
  // const [loading, setLoading] = useState(false);
  const { loading, paginatedPosts, fetchPosts } = usePosts();

  const [page, setPage] = useState(0);

  /*
  useEffect(() => {
    setLoading(true);
    PostService.getAllPosts({
      page,
      size: 7,
      showAll: true,
      sort: ["createdAt", "desc"],
    })
      .then(setPosts)
      .catch((error) => setError(new Error(error.message)))
      .then(() => {
        setLoading(false);
      });

  }, [page]);
  */
  useEffect(() => {
    fetchPosts({
      page,
      size: 7,
      showAll: true,
      sort: ["createdAt", "desc"],
    });
  }, [fetchPosts, page]);

  //if (error) throw error;

  const openInNew = useCallback(async (post: Post.Summary) => {
    //let url = `http://localhost:3002/posts/${post.id}/${post.slug}`;
    let url = `${APP_BLOG_SERVER}/posts/${post.id}/${post.slug}`;

    if (!post.published) {
      const codeVerifier = AuthService.getCodeVerifier();
      const refreshToken = AuthService.getRefreshToken();

      if (codeVerifier && refreshToken) {
        const { access_token } = await AuthService.getNewToken({
          codeVerifier,
          refreshToken,
          scope: "post:read",
        });

        url += `?token=${access_token}`;
      }
    }

    const a = document.createElement("a");
    a.href = url;
    a.target = " _blank";
    a.rel = "noopener noreferrer";
    a.click();
  }, []);

  const columns = useMemo<Column<Post.Summary>[]>(
    () => [
      {
        Header: "",
        accessor: "id", // accessor is the "key" in the data
        //Cell: () => <Icon path={mdiOpenInNew} size={"14px"} color={"#09f"} />,
        Cell: ({ row }) => (
          <div style={{ paddingLeft: 8, width: "16px" }}>
            {/* <a
              target={"_blank"}
              href={`http://localhost:3002/posts/${row.original.id}/${row.original.slug}`}
              rel="noreferrer noopener"
            >
              <Icon path={mdiOpenInNew} size={"16px"} color={"#09f"} />
            </a>  */}
            {/* Substituido bloco acima por funcao a ser chamada no evendo onClick*/}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => openInNew(row.original)}
            >
              <Icon path={mdiOpenInNew} size={"16px"} color={"#09f"} />
            </span>
          </div>
        ),
      },
      {
        Header: () => <div style={{ textAlign: "left" }}>Título</div>,
        accessor: "title",
        //width: 320,
        Cell: (props) => (
          <div
            style={{
              textAlign: "left",
              display: "flex",
              gap: 8,
              alignItems: "center",
              //maxWidth: 270,
              maxWidth: 400,
            }}
          >
            <img
              width={24}
              height={24}
              src={props.row.original.editor.avatarUrls.small}
              alt={props.row.original.editor.name}
              title={props.row.original.editor.name}
            />
            <PostTitleAnchor
              title={props.value}
              href={`/posts/${props.row.original.id}`}
              onClick={(e) => {
                e.preventDefault();
                modal({
                  children: <PostPreview postId={props.row.original.id} />,
                });
              }}
            >
              {props.value}
            </PostTitleAnchor>
          </div>
        ),
      },
      {
        Header: () => <div style={{ textAlign: "right" }}>Criação</div>,
        accessor: "createdAt",
        Cell: (props) => (
          <div
            style={{
              textAlign: "right",
              fontFamily: '"Roboto mono", monospace',
            }}
          >
            {format(parseISO(props.value), "dd/MM/yyyy")}
          </div>
        ),
      },
      /*
      {
        Header: () => (
          <div style={{ textAlign: "right" }}>Última atualização</div>
        ),
        accessor: "updatedAt",
        Cell: (props) => (
          <div
            style={{
              textAlign: "right",
              fontFamily: '"Roboto mono", monospace',
            }}
          >
            {format(parseISO(props.value), "dd/MM/yyyy")}
          </div>
        ),
      },
      */
      {
        id: Math.random().toString(),
        accessor: "published",
        Header: () => <div style={{ textAlign: "right" }}>Status</div>,
        Cell: (props) => (
          <div style={{ textAlign: "right" }}>
            {props.value ? "Publicado" : "Privado"}
          </div>
        ),
      },
    ],
    []
  );

  /*
  const instance = useTable<Post.Summary>(
    {
      data: posts?.content || [],
      columns,
      manualPagination: true,
      initialState: { pageIndex: 0 },
      pageCount: posts?.totalPages,
    },
    usePagination
  );
  */
  const instance = useTable<Post.Summary>(
    {
      data: paginatedPosts?.content || [],
      columns,
      manualPagination: true,
      initialState: { pageIndex: 0 },
      pageCount: paginatedPosts?.totalPages,
    },
    usePagination
  );

  //if (!posts)
  if (!paginatedPosts)
    return (
      <div>
        <Skeleton height={32} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
      </div>
    );

  return (
    <>
      <Loading show={loading} />
      <Table instance={instance} onPaginate={setPage} />
    </>
  );
}
