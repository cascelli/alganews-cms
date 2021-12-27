import DefaultLayout from "../layouts/Default/Default.layout";
import usePageTitle from "../../core/Hooks/usePageTitle";

export default function EditorsListView() {
  usePageTitle('Lista de editores')
  return <DefaultLayout>
    todo : Editors List view
  </DefaultLayout>
}