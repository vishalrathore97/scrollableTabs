import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { Draggable } from "react-beautiful-dnd";
import "./Tab.css";

function Tab({ data, len, onDelete, currentTab, index }) {
  const [showModal, setShowModal] = useState(false);
  const tabClass = currentTab === data.id ? `tab tab--active` : `tab`;
  const tabCloseClass = len === 1 ? `tab__close--none` : `tab__close`;
  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => {
        return (
          <div
            className={tabClass}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <span className="tab__title">{data.id}</span>
            <span className={tabCloseClass} onClick={() => setShowModal(true)}>
              x
            </span>
            {showModal && (
              <Modal
                onDelete={onDelete}
                id={data.id}
                onClose={() => setShowModal(false)}
              />
            )}
          </div>
        );
      }}
    </Draggable>
  );
}

export default Tab;
