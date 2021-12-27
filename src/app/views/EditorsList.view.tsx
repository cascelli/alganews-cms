import DefaultLayout from "../layouts/Default/Default.layout";
import usePageTitle from "../../core/Hooks/usePageTitle";
import EditorsList from "../features/EditorsList";

export default function EditorsListView() {
  usePageTitle('Lista de editores')
  return <DefaultLayout>
    <EditorsList />
  </DefaultLayout>
}