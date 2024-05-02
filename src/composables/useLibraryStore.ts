import { ref, reactive } from "vue";

const isShowModalCard = ref(false);

const loanBook = reactive({
  name: "",
  id: 0,
  book: "",
  contact: "",
  deadline: "",
});

export const useLibraryStore = () => {
  const handleShowModalCard = (value: boolean) => {
    console.log(value);

    isShowModalCard.value = value;
  };

  return {
    isShowModalCard,
    handleShowModalCard,
    loanBook,
  };
};
