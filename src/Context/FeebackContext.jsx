import React from "react";
import { createContext, useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  // preloader
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchfeedback();
  }, []);

  const fetchfeedback = async () => {
    // Feedback is a backend data proxy or http://localhost:5000/Feedback
    const response = await fetch(`/Feedback`);
    const datas = await response.json();
    setItemsfromfeedback(datas);
    // preorder
    setIsLoading(false);
  };

  const [itemsfromfeedback, setItemsfromfeedback] = useState([]);

  const [feedbackedit, setFeedbackedit] = useState({
    item: {},
    edit: false,
  });

  const editfeedback = (item) => {
    setFeedbackedit({
      item,
      edit: true,
    });
  };
  // edit feedback
  const updatefeedback = async (id, updateitems) => {
    const response = await fetch(`/Feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateitems),
    });
    const data = await response.json();
    setItemsfromfeedback(
      itemsfromfeedback.map((newitem) =>
        newitem.id === id ? { ...newitem, ...data } : newitem
      )
    );
  };

  // parameter radio from feedback datas
  const deleteFeedback = async (id) => {
    // delete a feedback
    if (window.confirm("Are you want to delete a reviews")) {
      // deletation
      await fetch(`/Feedback/${id}`, { method: "DELETE" });

      setItemsfromfeedback(itemsfromfeedback.filter((dlt) => dlt.id !== id));
    }
  };
  // user enter the feedback through input field
  const addFeedback = async (newFeedback) => {
    const response = await fetch("/Feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    newFeedback.id = uuidv4();
    const datas = await response.json();

    setItemsfromfeedback([datas, ...itemsfromfeedback]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        itemsfromfeedback,
        deleteFeedback,
        addFeedback,
        editfeedback,
        feedbackedit,
        updatefeedback,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
