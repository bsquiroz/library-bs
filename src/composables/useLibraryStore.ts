import { ref, reactive, watch } from "vue";

import { toast } from "vue-sonner";

interface LoanBook {
  name: string;
  id: string;
  book: string;
  typeContact: string;
  contact: string;
  deadline: string;
  state: boolean;
  history: boolean;
}

const isShowModalCard = ref(false);

const loanBooks = ref<LoanBook[]>(
  JSON.parse(localStorage.getItem("loanBooks")!) || []
);

const loanBook = reactive<LoanBook>({
  name: "",
  id: "",
  book: "",
  typeContact: "",
  contact: "",
  deadline: "",
  state: false,
  history: false,
});

const selectLoanBook = ref<LoanBook>();

export const useLibraryStore = () => {
  const handleShowModalCard = (value: boolean) => {
    isShowModalCard.value = value;
  };

  const handleSaveLoanBook = () => {
    loanBooks.value.push({ ...loanBook });

    loanBook.book = "";
    loanBook.contact = "";
    loanBook.deadline = "";
    loanBook.id = "";
    loanBook.name = "";
    loanBook.typeContact = "";
  };

  const handleSelectLoanBook = (id?: string) => {
    if (id) {
      selectLoanBook.value = loanBooks.value.find(
        (loanBook) => loanBook.id === id
      );
    } else {
      selectLoanBook.value = undefined;
    }
  };

  const handleChangeLoanBookHistory = (id?: string, changeState?: boolean) => {
    loanBooks.value = loanBooks.value.map((loanbook) =>
      loanbook.id === id
        ? ref({
            ...loanbook,
            history: true,
            state: changeState || loanbook.state,
          }).value
        : loanbook
    );

    isShowModalCard.value = false;

    toast.success(
      changeState
        ? "Se ha modificado a entregado y se ha movido a historial"
        : "Se ha movido a historial"
    );

    localStorage.setItem("loanBooks", JSON.stringify(loanBooks.value));
  };

  watch(loanBooks.value, () => {
    localStorage.setItem("loanBooks", JSON.stringify(loanBooks.value));
  });

  return {
    isShowModalCard,
    handleShowModalCard,
    loanBook,
    loanBooks,
    handleSaveLoanBook,
    handleSelectLoanBook,
    selectLoanBook,
    handleChangeLoanBookHistory,
  };
};
