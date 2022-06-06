import { useState } from "react";

export const useModal = () => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const handleOpenCreateModal = () => setOpenCreateModal(true);
  const handleCloseCreateModal = () => setOpenCreateModal(false);
  const handleOpenEditModal = () => setOpenEditModal(true);
  const handleCloseEditModal = () => setOpenEditModal(false);

  return {
    handleOpenCreateModal,
    handleCloseCreateModal,
    openCreateModal,
    handleOpenEditModal,
    handleCloseEditModal,
    openEditModal,
  };
};
