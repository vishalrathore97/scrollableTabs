import React, { useReducer } from "react";
import TabContent from "../TabContent/TabContent";
import Tab from "../Tab/Tab";
import "./ScrollableTabs.css";

const initialState = {
  tabs: [
    { id: "Tab 1", content: "Tab 1 content" },
    { id: "Tab 2", content: "Tab 2 content" },
    { id: "Tab 3", content: "Tab 3 content" },
    { id: "Tab 4", content: "Tab 4 content" },
    { id: "Tab 5", content: "Tab 5 content" },
    { id: "Tab 6", content: "Tab 6 content" },
    { id: "Tab 7", content: "Tab 7 content" },
    { id: "Tab 8", content: "Tab 8 content" },
    { id: "Tab 9", content: "Tab 9 content" },
  ],
  createdTabs: 9,
  currentTab: "Tab 1",
  firstTab: "Tab 1",
  lastTab: "Tab 4",
  content: "Tab 1 content",
};
const reducer = (state, action) => {
  let index;
  switch (action.type) {
    case "TAB_CLICK":
      index = state.tabs.findIndex((d) => d.id === action.id);
      return {
        ...state,
        content: state.tabs[index].content,
        currentTab: action.id,
      };
    case "LEFT_CHEVRON":
      index = state.tabs.findIndex((d) => d.id === state.lastTab);
      if (index >= 4) {
        return {
          ...state,
          firstTab: state.tabs[index - 4].id,
          lastTab: state.tabs[index - 1].id,
        };
      }
      return state;
    case "RIGHT_CHEVRON":
      index = state.tabs.findIndex((d) => d.id === state.lastTab);
      if (index < state.tabs.length - 1 && index >= 0) {
        return {
          ...state,
          firstTab: state.tabs[index - 2].id,
          lastTab: state.tabs[index + 1].id,
        };
      }
      return state;
    case "ADD_TAB":
      const tabNo = state.createdTabs + 1;
      const newTab = { id: `Tab ${tabNo}`, content: `Tab ${tabNo} content` };
      const lastIndex = state.tabs.length - 1;
      const newFirstTab =
        state.tabs.length >= 4 ? state.tabs[lastIndex - 2].id : state.firstTab;
      return {
        ...state,
        tabs: [...state.tabs, newTab],
        firstTab: newFirstTab,
        lastTab: newTab.id,
        currentTab: newTab.id,
        content: newTab.content,
        createdTabs: tabNo,
      };
    case "DELETE_TAB":
      index = state.tabs.findIndex((d) => d.id === state.lastTab);
      return { ...state, lastTab: state.tabs[index] };
    default:
      return state;
  }
};
function ScrollableTabs() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const tabGroup = () => {
    const start = state.tabs.findIndex((d) => d.id === state.firstTab);
    const tabRange =
      start + 4 > state.tabs.length ? state.tabs.length - start : 4;
    return new Array(tabRange).fill().map((_, idx) => start + idx);
  };

  const handleClick = (e) => {
    const target = e.target;
    if (target.className === "tab") {
      const id = target.innerText;
      dispatch({ type: "TAB_CLICK", id });
    }
  };

  const handleLeftChevron = () => {
    dispatch({ type: "LEFT_CHEVRON" });
  };

  const handleRightChevron = () => {
    dispatch({ type: "RIGHT_CHEVRON" });
  };

  const handleAddTab = () => {
    dispatch({ type: "ADD_TAB" });
  };

  const handleDeleteTab = () => {
    dispatch({ type: "DELETE_TAB" });
  };

  return (
    <div className="scrollableTabs">
      {/* tab component */}
      <div onClick={handleLeftChevron}> &lt; </div>
      <div onClick={handleClick}>
        {tabGroup().map((idx) => (
          <Tab key={state.tabs[idx].id} data={state.tabs[idx]} />
        ))}
      </div>
      <div onClick={handleAddTab}> + </div>
      <div onClick={handleRightChevron}> &gt; </div>
      {/* content component */}
      <TabContent content={state.content} />
    </div>
  );
}

export default ScrollableTabs;
