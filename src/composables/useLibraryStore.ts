import { ref } from "vue";

const isShowModalCard = ref(false);
export const useLibraryStore = () => {
  const handleShowModalCard = (value: boolean) => {
    console.log(value);

    isShowModalCard.value = value;
  };

  return {
    isShowModalCard,
    handleShowModalCard,
  };
};
