import React, { useReducer } from "react";
import TabContent from "../TabContent/TabContent";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
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
  let index, newFirstTab, newLastTab, newCurrentTab, newContent;
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
      newFirstTab =
        state.tabs.length >= 4 ? state.tabs[lastIndex - 2].id : state.firstTab;
      if (state.tabs.length > 9) return state;
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
      const firstTabIndex = state.tabs.findIndex(
        (d) => d.id === state.firstTab
      );
      const lastTabIndex = state.tabs.findIndex((d) => d.id === state.lastTab);
      const currentTabIndex = state.tabs.findIndex(
        (d) => d.id === state.currentTab
      );
      const len = state.tabs.length;
      if (len <= 4) {
        newFirstTab =
          action.id === state.firstTab
            ? state.tabs[firstTabIndex + 1].id
            : state.firstTab;
        newLastTab =
          action.id === state.lastTab
            ? state.tabs[lastTabIndex - 1].id
            : state.lastTab;
      } else {
        if (action.id === state.firstTab && lastTabIndex < len - 1) {
          newFirstTab = state.tabs[firstTabIndex + 1].id;
          newLastTab = state.tabs[lastTabIndex + 1].id;
        } else if (action.id === state.firstTab) {
          newFirstTab = state.tabs[firstTabIndex - 1].id;
        }
        if (action.id === state.lastTab && lastTabIndex === len - 1) {
          newLastTab = state.tabs[lastTabIndex - 1].id;
          newFirstTab = state.tabs[firstTabIndex - 1].id;
        } else if (action.id === state.lastTab) {
          newLastTab = state.tabs[lastTabIndex + 1].id;
        }
        if (action.id !== state.lastTab && lastTabIndex === len - 1) {
          newLastTab = state.lastTab;
        } else if (action.id !== state.lastTab) {
          newLastTab = state.tabs[lastTabIndex + 1].id;
        }
        if (action.id !== state.firstTab && lastTabIndex === len - 1) {
          newFirstTab = state.tabs[firstTabIndex - 1].id;
        } else if (action.id !== state.firstTab) {
          newFirstTab = state.firstTab;
        }
      }
      if (action.id === state.currentTab && currentTabIndex === len - 1) {
        newCurrentTab = state.tabs[currentTabIndex - 1].id;
        newContent = state.tabs[currentTabIndex - 1].content;
      } else if (action.id === state.currentTab) {
        newCurrentTab = state.tabs[currentTabIndex + 1].id;
        newContent = state.tabs[currentTabIndex + 1].content;
      } else {
        newCurrentTab = state.currentTab;
        newContent = state.content;
      }
      index = state.tabs.findIndex((d) => d.id === action.id);
      return {
        ...state,
        tabs: [...state.tabs.slice(0, index), ...state.tabs.slice(index + 1)],
        content: newContent,
        lastTab: newLastTab,
        firstTab: newFirstTab,
        currentTab: newCurrentTab,
      };
    case "REORDER_LIST":
      const sourceTab = state.tabs.find((d) => d.id === action.id);
      const sIndex = state.tabs.findIndex((d) => d.id === action.id);
      let dIndex = sIndex + (action.dIdx - action.sIdx);
      if (action.sIdx < action.dIdx) {
        newFirstTab =
          state.firstTab === sourceTab.id
            ? state.tabs[sIndex + 1].id
            : state.firstTab;
        newLastTab =
          state.lastTab === state.tabs[dIndex].id
            ? sourceTab.id
            : state.lastTab;

        return {
          ...state,
          tabs: [
            ...state.tabs.slice(0, sIndex),
            ...state.tabs.slice(sIndex + 1, dIndex + 1),
            sourceTab,
            ...state.tabs.slice(dIndex + 1),
          ],
          firstTab: newFirstTab,
          lastTab: newLastTab,
        };
      }
      newLastTab =
        state.lastTab === sourceTab.id
          ? state.tabs[sIndex - 1].id
          : state.lastTab;
      newFirstTab =
        state.firstTab === state.tabs[dIndex].id
          ? sourceTab.id
          : state.firstTab;

      return {
        ...state,
        tabs: [
          ...state.tabs.slice(0, dIndex),
          sourceTab,
          ...state.tabs.slice(dIndex, sIndex ),
          ...state.tabs.slice(sIndex + 1),
        ],
        firstTab: newFirstTab,
        lastTab: newLastTab,
      };

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
    if (target.className === "tab__title") {
      const id = target.innerText;
      dispatch({ type: "TAB_CLICK", id });
    }
  };

  const handleDeleteTab = (id) => {
    if (state.tabs.length > 1) {
      dispatch({ type: "DELETE_TAB", id });
    }
  };
  console.log(state);
  const handleDragEnd = (result) => {
    console.log(result);
    const { draggableId, source, destination } = result;
    if (!destination) return;
    if (destination.index === source.index) return;
    dispatch({
      type: "REORDER_LIST",
      dIdx: destination.index,
      sIdx: source.index,
      id: draggableId,
    });
  };

  const len = state.tabs.length;

  return (
    <div className="scrollableTabs">
      <div className="scrollableTabs__row1">
        {state.firstTab !== state.tabs[0].id && (
          <div
            className="scrollableTabs__chevron scrollableTabs--left"
            onClick={() => dispatch({ type: "LEFT_CHEVRON" })}
          >
            {" "}
            &lt;{" "}
          </div>
        )}
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable
            droppableId="scrollableTabs__container"
            direction="horizontal"
          >
            {(provided) => (
              <div
                className="scrollableTabs__container"
                {...provided.droppableProps}
                ref={provided.innerRef}
                onClick={handleClick}
              >
                {tabGroup().map((idx, index) => {
                  return (
                    <Tab
                      key={state.tabs[idx].id}
                      len={len}
                      currentTab={state.currentTab}
                      onDelete={handleDeleteTab}
                      data={state.tabs[idx]}
                      index={index}
                    />
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        {len < 10 && (
          <div
            className="scrollableTabs__addBtn"
            onClick={() => dispatch({ type: "ADD_TAB" })}
          >
            {" "}
            +{" "}
          </div>
        )}
        {state.lastTab !== state.tabs[len - 1].id && (
          <div
            className="scrollableTabs__chevron scrollableTabs--right"
            onClick={() => dispatch({ type: "RIGHT_CHEVRON" })}
          >
            {" "}
            &gt;{" "}
          </div>
        )}
      </div>

      <TabContent content={state.content} />
    </div>
  );
}

export default ScrollableTabs;
