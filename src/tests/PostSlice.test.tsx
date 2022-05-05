import "@testing-library/react";
import { AppStore, createAppStore } from "../core/store";
import { fetchPosts } from "../core/store/Post.slice";

let store: AppStore;

// Agrupador de testes
describe("Post Slice", () => {
  // Funcao executada antes de cada teste do arquivo ou do grupo de testes beforeEach()
  beforeEach(() => {
    console.log("before each test - PostSlice");
    store = createAppStore(); // Inicia uma nova store
  });

  // Teste unitário
  it("starts with empty array on content", () => {
    const state = store.getState().post;

    expect(state.paginated?.content).toHaveLength(0);
  });

  // Teste de integracao
  it("updates state after fetchPosts dispatch", async () => {
    await store.dispatch(fetchPosts({}));
    const state = store.getState().post;

    expect(state.paginated?.content?.length).toBeGreaterThanOrEqual(1);
  });

  it("asadjsaj", () => {
    console.log(store.getState().post.paginated?.content);
  });
});
