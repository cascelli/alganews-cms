import "@testing-library/react";
import store from "../core/store";
import { fetchPosts } from "../core/store/Post.slice";

// unitário
it("starts with empty array on content", () => {
  const state = store.getState().post;

  expect(state.paginated?.content).toHaveLength(0);
});

// integracao
it("updates state after fetchPosts dispatch", async () => {
  await store.dispatch(fetchPosts({}));
  const state = store.getState().post;

  expect(state.paginated?.content?.length).toBeGreaterThanOrEqual(1);
});
