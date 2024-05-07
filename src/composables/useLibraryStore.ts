import { ref, reactive, watch } from "vue";

interface LoanBook {
  name: string;
  id: string;
  book: string;
  typeContact: string;
  contact: string;
  deadline: string;
  state: boolean;
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
  };
};
