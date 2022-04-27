import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCollection } from "../../src/hooks/useCollection";

//styles
import { Container, Box, Stack } from "@mui/material";

//components
import Header from "../../src/components/organisms/Header";
import CategoryFilter from "../../src/components/atoms/filters/CategoryFilter";
import StatusFilter from "../../src/components/atoms/filters/StatusFilter";
import CreateButton from "../../src/components/atoms/buttons/CreateButton";
import Searchbar from "../../src/components/atoms/Searchbar";
import DiscussionList from "../../src/components/organisms/DiscussionList";
import Sidebar from "../../src/components/organisms/Sidebar";
import { areArraysEqual } from "@mui/lab/node_modules/@mui/base";

function Main() {
  const router = useRouter();

  const [currentCategory, setCurrentCategory] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [currentSearch, setCurrentSearch] = useState("");
  const [discussions, setDiscussions] = useState([]);

  const { documents, error, isPending } = useCollection("discussions", [
    "createdAt",
    "desc",
  ]);

  const changeStatusFilter = (e) => {
    setCurrentStatus(e.target.value);
  };

  const changeCategoryFilter = (e) => {
    setCurrentCategory(e.target.value);
  };

  //category filtering
  const filterByCategory = (array) => {
    if (!array) {
      return;
    }
    const filteredArray = array.filter((item) => {
      switch (currentCategory) {
        case "All":
          return areArraysEqual;
        case "Announcement":
        case "Idea":
        case "Question":
          return item.category === currentCategory;
        default:
          return array;
      }
    });
    return filteredArray;
  };

  //status filtering
  const filterByStatus = (array) => {
    if (!array) {
      return;
    }
    const filteredArray = array.filter((item) => {
      switch (currentStatus) {
        case "All":
          return array;
        case "open":
        case "settled":
          return item.status === currentStatus;
        default:
          return array;
      }
    });
    return filteredArray;
  };

  //searchbar filtering
  const handleChangeSeachbar = (e) => {
    let formattedSearch = e.target.value.toLowerCase();
    setCurrentSearch(formattedSearch);
  };

  // //searchbar filtering
  const filterBySearch = (array) => {
    if (!array) {
      return;
    }
    const FilteredArray = array.filter((item) => {
      if (currentSearch === "") {
        return array;
      } else {
        return item.title.toLowerCase().includes(currentSearch);
      }
    });
    return FilteredArray;
  };

  useEffect(() => {
    if (!documents) {
      return;
    }
    const firstFilter = filterByCategory(documents);
    const secondFilter = filterByStatus(firstFilter);
    const thirdFilter = filterBySearch(secondFilter);
    setDiscussions(thirdFilter);
  }, [currentCategory, currentStatus, currentSearch, documents]);

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/discussion/new");
  };

  return (
    <>
      <Box>
        <Box>
          <Header />
        </Box>
        <Container
          maxWidth="lg"
          sx={{
            pt: 10,
            px: 8,
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Box>
            <Sidebar />
          </Box>
          <Stack spacing={1}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                aligns: "center",
                height: "10%",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <>
                  <Box sx={{ px: 1 }}>
                    <CategoryFilter
                      currentCategory={currentCategory}
                      changeCategoryFilter={changeCategoryFilter}
                    />
                  </Box>
                  <Box>
                    <StatusFilter
                      currentStatus={currentStatus}
                      changeStatusFilter={changeStatusFilter}
                    />
                  </Box>
                </>
              </Box>
              <Box>
                <CreateButton title="New Discussion" onClick={handleClick} />
              </Box>
            </Box>
            <Box sx={{ height: "10%" }}>
              <Searchbar
                onChange={handleChangeSeachbar}
                currentSearch={currentSearch}
              />
            </Box>
            <Box sx={{ height: "80%" }}>
              {discussions && (
                <DiscussionList
                  discussions={discussions}
                  error={error}
                  isPending={isPending}
                />
              )}
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default Main;
